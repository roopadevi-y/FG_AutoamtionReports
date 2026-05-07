# FG Report Website

A modern, responsive website built with React, Vite, and Tailwind CSS. Features a beautiful glassmorphism design, dark/light mode toggle, and smooth animations.

## Features

✨ **Modern UI**
- Glassmorphism design with soft shadows
- Gradient backgrounds
- Smooth animations
- Responsive layout

🌙 **Dark Mode**
- Toggle between light and dark themes
- Automatic system preference detection
- Persistent user preference in localStorage

📱 **Responsive Design**
- Mobile-first approach
- Works perfectly on all screen sizes
- Adaptive navigation with mobile menu

🚀 **Performance**
- Built with Vite for fast development
- Optimized for production
- Lightweight and fast load times

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Card.tsx
│   └── Button.tsx
├── pages/              # Page components
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ReportsPage.tsx
│   ├── ContactPage.tsx
│   └── NotFoundPage.tsx
├── layouts/            # Layout components
│   └── Layout.tsx
├── context/            # React Context
│   └── ThemeContext.tsx
├── hooks/              # Custom hooks (expandable)
├── styles/             # Global styles
│   └── globals.css
├── assets/             # Images and static files
├── App.tsx             # Main app component
└── main.tsx            # Entry point
```

## Available Scripts

### Development
```bash
npm run dev
```
Starts the development server on http://localhost:5173

### Build
```bash
npm run build
```
Creates an optimized production build

### Preview
```bash
npm run preview
```
Previews the production build locally

### Lint
```bash
npm run lint
```
Runs ESLint to check code quality

## Pages

- **Home** (`/`) - Landing page with hero section and features
- **About** (`/about`) - Company information and values
- **Reports** (`/reports`) - Reports and analytics dashboard
- **Contact** (`/contact`) - Contact form and information
- **404** - Not found page for invalid routes

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```js
theme: {
  extend: {
    colors: {
      primary: { /* ... */ },
      dark: { /* ... */ },
    },
  },
}
```

### Components
All components are located in `src/components/` and can be easily modified or extended.

### Pages
Create new pages in `src/pages/` and add routes in `App.tsx`.

## Dark Mode

The theme context automatically:
1. Checks user's system preference
2. Reads saved preference from localStorage
3. Allows manual toggle via the navbar button

## Deployment

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Push to GitHub and connect to Netlify, or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Deploy to Vercel

1. Build the project:
```bash
npm run build
```

2. Deploy with Vercel CLI:
```bash
npm install -g vercel
vercel --prod
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Metrics

- ⚡ Fast initial load with Vite
- 🎯 Optimized bundle size with tree-shaking
- 📦 Minimal dependencies
- 🎨 Smooth 60fps animations

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For questions or support, please open an issue on GitHub or contact through the contact page.

---

**Made with ❤️ by FG Testing Team**

import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
