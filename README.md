# Calendar Challenge

A small React + Vite single-page app that renders a monthly calendar grid with selectable days and persistent notes.

**Quick links**

- Live locally: `npm run dev`
- Source: [src](src)

## Features

- Interactive calendar grid with day selection
- Add and persist notes per day using localStorage (see [src/hooks/useLocalStorage.js](src/hooks/useLocalStorage.js))
- Modular components: header, grid, day cell, and notes panel
- Built with Vite for fast dev feedback

## Tech Stack

- React 19
- Vite
- Tailwind CSS (postcss)
- ESLint

## Project Structure

- [src/main.jsx](src/main.jsx) — app entry
- [src/App.jsx](src/App.jsx) — root component
- [src/components/CalendarHeader.jsx](src/components/CalendarHeader.jsx) — month navigation and title
- [src/components/CalendarGrid.jsx](src/components/CalendarGrid.jsx) — main calendar layout
- [src/components/DayCell.jsx](src/components/DayCell.jsx) — individual day cell
- [src/components/NotesPanel.jsx](src/components/NotesPanel.jsx) — add/view notes for selected day
- [src/constants/calendarData.js](src/constants/calendarData.js) — calendar helper data
- [src/hooks/useLocalStorage.js](src/hooks/useLocalStorage.js) — simple persistence hook

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Run the development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview a production build locally

```bash
npm run preview
```

5. Lint the project

```bash
npm run lint
```

## Notes

- The app persists notes per day in the browser using the `useLocalStorage` hook. Clear site data to reset.
- Tailwind is listed in `devDependencies`; if you add custom Tailwind config, ensure PostCSS is configured.

## Contributing

Contributions and improvements welcome—open a PR or an issue describing the change.

## License

This project is provided as-is. Add a license file if you intend to share or publish.

---

If you'd like, I can also add a short screenshot, a demo GIF, or publish instructions for GitHub Pages/Vercel.
