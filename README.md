# Syed Ahmed Shah Gillani — Portfolio

A modern, professional portfolio website showcasing frontend development work, projects, skills, and experience. Built with React 19, TypeScript, and Tailwind CSS v4 with a focus on clean design, responsive layout, and smooth navigation.

**Live:** https://ahmed-gillani.vercel.app/

## Overview

This portfolio features:
- **Professional Design** — Minimalist, clean interface with custom color theming
- **Project Showcase** — Dedicated detail pages for each project with comprehensive information
- **Responsive Layout** — Mobile-first design that works beautifully on all devices
- **Smooth Navigation** — React Router-powered SPA with intelligent back navigation
- **About Section** — Professional summary and skills breakdown
- **Experience Timeline** — Work history and accomplishments
- **Contact Information** — Direct links to social profiles and email

## Features

### 📱 Project Details Pages

Each project has a dedicated detail page accessible via:
- **"Learn More"** button on project cards
- URL pattern: `/projects/{project-id}`
- Comprehensive sections:
  - Project overview and tagline
  - Problem solved and solution approach
  - Key features and technical details
  - Your role and responsibilities
  - Technical implementations
  - Challenges faced and solutions
  - Outcomes and impact metrics
  - Technology stack
  - External links (Live project, GitHub repo)

### 🧭 Smart Navigation

- **Scroll to Top** — Project details pages always load at the top
- **Context Preservation** — Back button returns to the exact project you came from
- **Visual Feedback** — Returned projects briefly highlight for clear context
- **Browser Back Button** — Full support for browser navigation
- **Mobile Optimized** — Seamless navigation on all screen sizes

### 🎨 Design System

- **Custom Color Tokens** — Tailwind CSS v4 theme with semantic colors
- **Responsive Grid** — Adapts from mobile (1 column) to desktop (multi-column)
- **Typography Hierarchy** — Space Grotesk (display), IBM Plex Mono (code), Inter (body)
- **Subtle Interactions** — Smooth transitions and hover states

## Projects Included

1. **SlotSync** — Real-time car service booking platform with admin panel and payment integration
2. **Flit** — AI-powered job matching platform with VR interview rooms
3. **N-RPM** — Healthcare remote patient monitoring platform with modular architecture
4. **Login App** — React authentication demo with API integration
5. **SaaS Dashboard** — Full admin dashboard with Firebase, analytics, and chatbot

## Tech Stack

### Frontend
- **React 19.2.8** — UI library with hooks
- **TypeScript 6.0** — Type-safe development
- **Vite 8.2.2** — Lightning-fast build tool
- **React Router 6.23** — Client-side routing with state management

### Styling
- **Tailwind CSS v4.3.3** — Utility-first CSS with custom theme
- **Lucide React 1.40.0** — Beautiful icon library
- **Custom CSS** — Smooth scroll behavior and animations

### Development
- **ESLint (oxlint)** — Code quality linting
- **TypeScript Compiler** — Type checking
- **PostCSS** — CSS processing and autoprefixing

## Getting Started

### Prerequisites
- Node.js 16+ and npm 8+

### Installation

```bash
# Clone the repository
git clone https://github.com/ahmed-gillani/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start development server (runs on http://localhost:5173)
npm run dev
```

The dev server includes:
- Hot module replacement (HMR)
- Fast refresh on changes
- TypeScript type checking

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

Build output:
- TypeScript compilation with strict mode
- Vite bundling and minification
- CSS and JavaScript optimization
- ~260KB JavaScript (79KB gzipped)

### Linting

```bash
# Run ESLint checks
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── Nav.tsx              — Navigation with smart back detection
│   ├── Hero.tsx             — Landing hero section
│   ├── About.tsx            — Skills and summary
│   ├── Experience.tsx       — Work history
│   ├── Projects.tsx         — Project showcase with cards
│   ├── ProjectDetails.tsx   — Dedicated project detail page
│   ├── Contact.tsx          — Contact information
│   ├── Footer.tsx           — Footer section
│   └── icons.tsx            — Custom SVG icons
├── App.tsx                  — Main app with routing
├── main.tsx                 — React entry point
├── data.ts                  — Project and profile data
└── index.css                — Global styles and theme

public/
├── ahmed.jpg                — Profile photo
└── projects/                — Project screenshots

dist/                         — Production build output
```

## Routing

The application uses React Router for client-side routing:

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | HomePage | Main portfolio page with all sections |
| `/projects/:projectId` | ProjectDetails | Individual project detail page |

## Data Structure

Projects are stored in `data.ts` with:
```typescript
{
  id: string;                    // Unique identifier for routing
  index: string;                 // Display number (01, 02, etc)
  name: string;                  // Project name
  tagline: string;               // Short description
  description: string;           // Overview
  overview: string;              // Detailed overview
  problemSolved: string;         // Problem description
  keyFeatures: string[];         // Feature list
  myRole: string;                // Your role description
  responsibilities: string[];    // Detailed responsibilities
  technicalImplementations: string[];  // Technical details
  challenges: string[];          // Challenges faced
  solutions: string[];           // How challenges were solved
  outcomes: string[];            // Results and impact
  stack: string[];               // Technology stack
  highlights: string[];          // Quick highlights
  link: string;                  // Live project URL
  github?: string;               // GitHub repository URL
  company: string;               // Company/context
  image: string;                 // Project screenshot
}
```

## Deployment

### Vercel (Recommended)

The project is configured for easy deployment on Vercel:

1. **Connect Repository**
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Vercel auto-detects Vite configuration

2. **Environment Variables** (if needed)
   - No required env variables for this project
   - Add `VITE_*` prefixed variables if extending

3. **Build & Deploy**
   - Automatic on every push to `main`
   - Build command: `npm run build`
   - Output directory: `dist`

4. **Custom Domain**
   - Add custom domain in Vercel project settings
   - Currently: https://ahmed-gillani.vercel.app/

### Manual Build & Deploy

```bash
# Build the project
npm run build

# The 'dist' folder contains production-ready files
# Deploy dist/ to your hosting platform
```

## Performance

- **Bundle Size** — ~260KB total JavaScript (79KB gzipped)
- **Lighthouse Scores** — High performance, accessibility, and SEO
- **Optimizations** — Image lazy loading, CSS minification, code splitting
- **Smooth Scrolling** — Native smooth scroll behavior
- **Fast Navigation** — Instant client-side routing with no page reloads

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Updating Profile Data
Edit `src/data.ts`:
```typescript
export const profile = {
  name: "Your Name",
  role: "Your Role",
  email: "your.email@example.com",
  // ... other fields
};
```

### Adding New Projects
Add to the `projects` array in `src/data.ts`:
```typescript
{
  id: "project-slug",
  name: "Project Name",
  // ... other required fields
}
```

### Changing Colors
Update the CSS theme in `src/index.css`:
```css
@theme {
  --color-paper: #F4F5F1;
  --color-ink: #14171C;
  --color-signal: #2A4CFF;
  /* ... other colors */
}
```

## Development Workflow

1. **Local Development** — `npm run dev` for hot reload
2. **Type Checking** — TypeScript catches errors
3. **Linting** — ESLint enforces code quality
4. **Build** — `npm run build` creates optimized bundle
5. **Deployment** — Push to GitHub, Vercel auto-deploys

## Best Practices

- ✅ All components are functional with hooks
- ✅ Strict TypeScript mode enabled
- ✅ Responsive design mobile-first
- ✅ Semantic HTML structure
- ✅ Smooth animations and transitions
- ✅ Accessible color contrasts
- ✅ Lazy loading for images

## Contributing

This is a personal portfolio. For suggestions or improvements:
1. Open an issue with your feedback
2. Include screenshots or descriptions
3. Fork and submit pull requests if desired

## License

This portfolio is open source. Feel free to use it as a template for your own portfolio.

## Contact

- **Email** — engrahmedgillani@gmail.com
- **GitHub** — https://github.com/ahmed-gillani
- **LinkedIn** — https://linkedin.com/in/your-linkedin-handle

---

**Last Updated:** September 2026  
**Deployed on:** Vercel (https://ahmed-gillani.vercel.app/)
