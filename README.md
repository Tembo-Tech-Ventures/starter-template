# Starter Template

This project provides a minimal Next.js + Prisma starter with credential-based authentication and Docker support.

## Development

1. Ensure Docker is installed.
2. Start the stack with hot reloading:
   ```bash
   docker compose -f compose.local.yaml up --build
   ```
3. The app will be available at `http://localhost:3000`.

## Production

Build and run using the production compose file:

```bash
docker compose -f compose.yaml up --build -d
```

## Authentication

Users register and sign in with an email and password. Passwords are stored as bcrypt hashes in the database. The legacy email code flow has been removed so no SMTP server is required.

## Database Migrations

Prisma migrations are stored in the `prisma/migrations` folder. After changing the schema run:

```bash
npx prisma migrate dev --name <description>
```

For production deployments apply migrations with:

```bash
npx prisma migrate deploy
```

A database must be reachable for these commands to succeed.

## Scripts

- `npm run dev` – run development server and database migrations
- `npm run build` – create production build
- `npm run start` – start the built application
- `npm run lint` – run ESLint

## Continuous Integration

The repository uses a [GitHub Actions workflow](.github/workflows/ci.yml) that
installs dependencies, runs ESLint, and builds the application on every push
and pull request. The job provisions a temporary PostgreSQL service so the
build step can interact with a database just like in production.

## Checklist

See [CHECKLIST.md](./CHECKLIST.md) for the detailed update progress.
