# Insightly

Insightly is a small React dashboard that shows daily activity and mood insights. The app lets a user log today's mood, see a computed mood score, read a simple dynamic mood analysis message, and visualize mood trends on a chart.

## Tech stack

- React
- TypeScript
- Vite
- Context API with `useReducer`
- CSS Modules
- Recharts
- Vitest + React Testing Library
- ESLint + Prettier

## Why these choices?

### Vite

Vite gives a fast, modern React setup without the weight of older tooling.

### Context API + reducer

The requirements ask for Context API. I used a reducer for mood state because it keeps state transitions explicit and easier to scale than scattered `useState` calls.

### Recharts

Recharts works naturally with React components and is simple to customize for this kind of dashboard.

### CSS Modules

The assessment requires CSS Modules. They keep styles local to each component while still avoiding additional styling libraries.

### Pure utility functions

Mood score calculation, chart data transformation, and mood trend analysis are extracted into utility functions. This keeps components focused on UI and makes the logic easy to test.

## Features

- Daily summary cards for tasks completed and mood score
- Mood tracker with accessible mood buttons
- Dynamic mood analysis message
- Mood trend chart
- Daily, weekly, and monthly chart toggle
- Light/dark theme using Context API
- LocalStorage persistence for mood entries and theme
- Responsive layout for desktop and mobile
- Lazy-loaded chart component
- Unit tests for mood analysis logic and a simple UI component

## Assumptions

- One mood entry is stored per day.
- If the user logs another mood on the same day, today's entry is updated.
- Mood scores are mapped as:
  - Happy = 3
  - Neutral = 2
  - Sad = 1
- The daily chart uses the latest 7 mood entries. Six of those entries are hardcoded in a way that there are two scores of each mood, so that clicking on one of the moods in the app will cause the insight message to change.
- Weekly and monthly views use dummy data, as allowed by the requirements.
- Tasks completed is randomly generated once per app load, not on every render.

## Getting started

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Run tests

```bash
npm run test
```

For coverage:

```bash
npm run test:coverage
```

## Build

```bash
npm run build
```
