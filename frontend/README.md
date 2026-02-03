# React Frontend - Quick Start Guide

## Setup Steps

1. **Install dependencies:**
   ```bash
   cd frontend
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

Visit: http://localhost:3000

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
frontend/
├── src/
│   ├── App.jsx          # Main App component
│   ├── App.css          # App styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies
└── vite.config.js       # Vite configuration
```

## Features

- ✅ React 18
- ✅ Vite for fast builds
- ✅ React Router for navigation
- ✅ Axios for API calls
- ✅ RTL support for Arabic
- ✅ Proxy to Django backend

## API Integration

The app is configured to communicate with the Django backend at `http://localhost:8000`.

See `src/App.jsx` for example API calls using axios.

## Customization

- Update colors and theme in `src/index.css`
- Add new routes in `src/App.jsx`
- Create new components in `src/components/`

## Building for Production

```bash
npm run build
```

The production build will be in `dist/` directory.
