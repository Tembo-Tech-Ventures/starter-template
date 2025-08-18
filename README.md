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
A database must be reachable for this command to succeed.

## Scripts

- `npm run dev` – run development server and database migrations
- `npm run build` – create production build and deploy migrations
- `npm run start` – start the built application
- `npm run lint` – run ESLint

## Checklist

See [CHECKLIST.md](./CHECKLIST.md) for the detailed update progress.
