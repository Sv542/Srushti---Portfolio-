SRUSHTI VISWESWARAIAH — Portfolio (Vite + React + Tailwind)

This project is a ready-to-deploy Vite React portfolio built around the resume provided.

Quick start:

1) Install dependencies
   npm install

2) Start dev server
   npm run dev
   Open http://localhost:5173

3) Build for production
   npm run build

4) Preview build
   npm run preview

Deploying:
- Push this repo to GitHub.
- Import the repository at https://vercel.com/new and deploy (Vercel detects Vite automatically).

Notes on resume path:
- The app currently references the resume at the local path:
/mnt/data/VISWESWARAIAH-RESUME.pdf
- In the hosted environment you'll need to host the PDF at a public URL (e.g., put the PDF in the `public/` folder before deploying),
  OR configure Vercel to serve the file. If you'd like, I can move the PDF into the project's public/ folder in this ZIP so it's available after deploy.

Note: Resume copied into public/VISWESWARAIAH-RESUME.pdf for immediate deploy.
