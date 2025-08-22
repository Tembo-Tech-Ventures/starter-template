# Blogging Feature

This project ships with a lightweight blogging system built on Prisma and Next.js.

- **Model**: `BlogPost` holds a title and markdown content along with timestamps.
- **API**: `/api/blog` provides JSON endpoints to list and create posts.
- **Admin Pages**:
  - `/admin/blog` lists existing entries.
  - `/admin/blog/new` presents a form to author new posts.

After updating the schema, remember to run Prisma migrations so the database
includes the `BlogPost` table:

```
npx prisma migrate dev
```
