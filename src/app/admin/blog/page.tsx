"use client";

/**
 * Admin blog index page.
 *
 * Presents a minimal listing of all blog posts so editors can
 * quickly verify existing content. The component retrieves posts
 * from the API on mount and renders basic metadata for each entry.
 */
import { Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface BlogPost {
  id: string;
  title: string;
  updatedAt: string;
}

export default function AdminBlogIndexPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  // Load posts once the component mounts.
  useEffect(() => {
    async function loadPosts() {
      const response = await fetch("/api/blog");
      const allPosts = await response.json();
      setPosts(allPosts);
    }
    loadPosts();
  }, []);

  return (
    <Container>
      <Stack spacing={2}>
        <Typography variant="h3">Blog Posts</Typography>
        {posts.map((post) => (
          <Typography key={post.id}>
            {post.title} - updated at {post.updatedAt}
            <br />
            <small>{post.id}</small>
          </Typography>
        ))}
      </Stack>
    </Container>
  );
}
