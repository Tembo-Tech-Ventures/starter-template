"use client";

/**
 * Task demo page showing basic CRUD with client-side fetches.
 * Users can create tasks and view existing ones.
 */
import { Container, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface Task {
  id: string;
  name: string;
  updatedAt: string;
}

export default function TasksPage() {
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    (async function () {
      const response = await fetch("/api/tasks");
      const allTasks = await response.json();
      setTasks(allTasks);
    })();
  }, []);

  return (
    <Container>
      <Stack spacing={4}>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const response = await fetch("/api/tasks", {
              method: "POST",
              body: JSON.stringify({
                name: name,
              }),
            });
            const newTask: Task = await response.json();
            setTasks((prev) => [...prev, newTask]);
          }}
        >
          <Stack spacing={2}>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="Task Name"
            />
          </Stack>
        </form>
        <Typography variant="h3">All Tasks</Typography>
        <Stack spacing={2}>
          {tasks.map((task) => (
            <Typography key={task.id}>
              {task.name} - updated at {task.updatedAt}
              <br />
              <small>{task.id}</small>
            </Typography>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
