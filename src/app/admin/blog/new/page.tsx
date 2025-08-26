"use client";

/**
 * Admin interface for authoring a new blog post.
 *
 * The component provides a minimal form for entering a title and
 * markdown content. Submission persists the post through the blog
 * API and then redirects back to the index view.
 */
import { Button, Container, Stack, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewBlogPostPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Send the form data to the API and navigate away on success.
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await fetch("/api/blog", {
      method: "POST",
      body: JSON.stringify({ title, content }),
    });
    router.push("/admin/blog");
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="Content"
            multiline
            minRows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button type="submit" variant="contained">
            Save
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
