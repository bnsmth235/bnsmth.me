# bnsmth.me

Personal portfolio site built with React, TypeScript, and Vite.

## Project layout

- Root config files live at the repository root.
- App source files live in `bnsmth.me/src`.
- Static assets served by Vite live in `bnsmth.me/public`.

## Requirements

- Node.js 18 or newer
- npm

## Install dependencies

```bash
npm install
```

## Run locally

Start the Vite dev server from the repository root:

```bash
npm run dev
```

Vite will print the local URL, usually `http://localhost:5173`.

## Build for production

```bash
npm run build
```

The production build output is written to `dist`.

## Preview the production build

```bash
npm run preview
```

## Available scripts

- `npm run dev` starts the local development server.
- `npm run build` type-checks the app and creates a production build.
- `npm run preview` serves the production build locally.
- `npm run lint` runs ESLint.
