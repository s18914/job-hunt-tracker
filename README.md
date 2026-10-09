# Job Hunt Tracker

An app for keeping track of job applications, from first submission to offer. Built with Next.js.

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router, Server Actions)
- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Drizzle ORM](https://orm.drizzle.team/) + [PostgreSQL](https://www.postgresql.org/) ([Neon](https://neon.tech/))
- JWT-based authentication ([jose](https://github.com/panva/jose), bcrypt)
- [Zod](https://zod.dev/) for validation

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file based on `.env.example` and fill in `DATABASE_URL` and `JWT_SECRET`.

3. Push the database schema:

   ```bash
   npm run db:push
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   The app runs at [http://localhost:3000](http://localhost:3000).

## Scripts

| Command             | Description                        |
| ------------------- | ---------------------------------- |
| `npm run dev`       | Start the development server       |
| `npm run build`     | Build for production               |
| `npm run start`     | Run the production build           |
| `npm run lint`      | Run ESLint                         |
| `npm run seed`      | Seed the database with demo data   |
| `npm run db:push`   | Push the Drizzle schema to the DB  |
| `npm run db:studio` | Open Drizzle Studio                |

## License

[MIT](LICENSE)
