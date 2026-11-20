# Manoj Sriram — React Portfolio

A personal portfolio built with **React** and **Vite** to showcase my background, technical skills, projects, education, and contact information.

## Design and typography

- **Body text and UI:** Inter
- **Headings and display text:** Manrope
- **Background:** Solid medium beige (`#D2B48C`)
- **Text:** Dark brown (`#29231E`) for readability
- **Cards and sections:** Opaque medium beige surfaces with subtle borders; no gradient backgrounds
- **Header:** Opaque and layered above page content so scrolling content does not show through
- **Contact icons:** Original icon colors are preserved

Google Fonts are loaded online. Local fallback fonts are included in the CSS font stacks.

## Run locally

Make sure Node.js and npm are installed, then run:

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal to view the portfolio.

## Production build

To create a production build, run:

```bash
npm run build
```

The generated production files are placed in the `dist/` directory.

To preview the production build locally, run:

```bash
npm run preview
```

## Project structure

```text
manoj-portfolio/
├── public/
├── src/
│   ├── assets/
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── README.md
```

*The exact structure may vary depending on how the project is organized.*

## Deployment

The project can be deployed using [Vercel](https://vercel.com/). Connect the GitHub repository to Vercel and use the following build settings:

- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`
