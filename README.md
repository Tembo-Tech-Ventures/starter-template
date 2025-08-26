# Starter Template

This project is a minimal Next.js starter that provides username/password
authentication backed by Prisma.  The default development experience uses
SQLite while production deployments can target Postgres.

## Development

```bash
npm install
npm run dev
```

The `dev` script runs Prisma migrations against a local SQLite database at
`./dev.db` and starts the Next.js development server.  Use `npm run dev:postgres`
if you need to develop against a Postgres database instead.

## Production

For production builds targeting Postgres, set the `POSTGRES_PRISMA_URL`
environment variable and run:

```bash
npm run build:postgres
```

This executes migrations using the Postgres schema defined in
`prisma/schema.postgres.prisma` before building the Next.js application.

## Authentication

Authentication uses the NextAuth credentials provider.  Register via the
`/auth/register` page and log in at `/auth/login`.  Passwords are hashed with
SHA-256 before being stored in the database.
