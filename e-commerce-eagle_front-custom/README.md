This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Requirements

- Node 18+
- npm 8+
- TypeScript 4.5.x

## Hints

> We are using the templating engine Plopjs for creating standardized folder & file structure, use it to your advantage to bootstrap the workflow and ease the maintainability

## Getting Started

- Copy the `.env.sample` to `.env.local` and update the values

- Install npm dependencies

```bash
npm ci
```

- Run the NextJS development server:

```bash
npm run dev
```

or

- Run the NextJS development server and storybook in parallel:

```bash
npm run dev
```

- Creating a Factory

```bash
npx plop factory
```

- Creating a Service

```bash
npx plop service
```

- Creating ONLY a Model

```bash
npx plop model
```

- Creating a React component

```bash
npx plop component
```

- Check lint

```bash
npm run lint
```

- Check formatting

```bash
npm run format:check
```

- Fix formatting

```bash
npm run format:fix
```

- Run all unit tests

```bash
npm run test
```

or

- Run all unit tests in watch mode it requires [watchman](https://facebook.github.io/watchman/docs/install.html) to be installed

```bash
npm run test:watch
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
