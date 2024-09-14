"use client";
import {
  Box,
  Button,
  List,
  ListItemButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  isBanned: boolean;
  country: string;
};

export default function AdminPage() {
  const [adminDisplay, setAdminDisplay] = useState(false);
  const [defaultDisplay, setDefaultDisplay] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const session = useSession();
  const router = useRouter();
  const checkRole = async () => {
    const request = await fetch("/api/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
  };
  const handleBan = async (userId: number) => {
    const response = await fetch("/api/admin/users/ban-user", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ userId }),
    });
    if (response.ok) {
      alert("User banned successfully");
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === userId ? { ...user, isBanned: true } : user,
        ),
      );
    } else {
      alert("Failed to ban user");
    }
  };
  const handleUnban = async (userId: number) => {
    const response = await fetch("/api/admin/users/unban-user", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ userId }),
    });
    if (response.ok) {
      alert("User unbanned successfully");
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === userId ? { ...user, isBanned: true } : user,
        ),
      );
    } else {
      alert("Failed to ban user");
    }
  };
  const tableStyles: React.CSSProperties = {
    fontFamily: "'Caveat', system-ui",
    fontWeight: 300,
    fontStyle: "normal",
  };
  const headStyles: React.CSSProperties = {
    fontFamily: "'Nerko One', system-ui",
    fontWeight: 400,
    fontStyle: "normal",
  };
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("/api/admin/users");
      const data: User[] = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);
  useEffect(() => {
    if (session.status === "authenticated") {
      checkRole();
    }
  }, [session.status]);
  const verifyAdmin = () => {
    if (session.data?.user.role !== "admin") {
      setDefaultDisplay(false);
      router.push("/unauthorized");
    } else {
      setAdminDisplay(true);
      setDefaultDisplay(false);
    }
  };
  return (
    <Box>
      {defaultDisplay && (
        <Stack>
          <Typography variant="h3">
            Hey{" "}
            {session.data?.user.name ||
              session.data?.user.email?.substring(0, 4)}
          </Typography>
          <List sx={{ width: "40%" }}>
            <ListItemButton
              sx={{
                display: "flex",
                position: "relative",
                alignItems: "center",
                justifyContent: "center",
                transition: "0.3s ease-in-out",
                border: "1px solid transparent",
                borderRadius: 3,
                ":hover": {
                  transform: "translateY(-2px) scale(1.1)",
                  border: `1px solid dodgerblue`,
                },
              }}
              onClick={verifyAdmin}
            >
              Click here to continue
            </ListItemButton>
          </List>
        </Stack>
      )}
      {adminDisplay && (
        <Stack>
          <Typography variant="h3">Hi {session.data?.user.role}</Typography>
          <br />
          <Typography>Users</Typography>
          <Table sx={{ minWidth: 500 }}>
            <TableHead>
              <TableRow>
                <TableCell width={130} sx={headStyles}>
                  Name
                </TableCell>
                <TableCell width={150} sx={headStyles}>
                  ID
                </TableCell>
                <TableCell width={150} sx={headStyles}>
                  Email
                </TableCell>
                <TableCell width={100} sx={headStyles}>
                  Country
                </TableCell>
                <TableCell width={80} sx={headStyles}>
                  Plan
                </TableCell>
                <TableCell width={80} sx={headStyles}>
                  Role
                </TableCell>
                <TableCell width={80} sx={headStyles}>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow
                  key={user.id}
                  component={"th"}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell width={130} sx={tableStyles}>
                    {user.name || "No name yet"}
                  </TableCell>
                  <TableCell width={100} sx={tableStyles}>
                    {user.id}
                  </TableCell>
                  <TableCell width={150} sx={tableStyles}>
                    {user.email}
                  </TableCell>
                  <TableCell width={100} sx={tableStyles}>
                    {user.country}
                  </TableCell>
                  <TableCell width={80} sx={tableStyles}>
                    Free
                  </TableCell>
                  <TableCell width={80} sx={tableStyles}>
                    {user.role}
                  </TableCell>
                  <TableCell width={80} sx={tableStyles}>
                    {user.isBanned ? "Banned" : "Active"}
                  </TableCell>
                  <TableCell width={80} sx={tableStyles}>
                    <Button
                      onClick={() =>
                        user.isBanned
                          ? handleUnban(user.id)
                          : handleBan(user.id)
                      }
                    >
                      {user.isBanned ? "Unban" : "Ban"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Stack>
      )}
    </Box>
  );
}
