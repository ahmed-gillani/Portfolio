export const profile = {
  name: "Syed Ahmed Shah Gillani",
  role: "Frontend Developer",
  location: "Lahore, Pakistan",
  email: "engrahmedgillani@gmail.com",
  phone: "+92 304 0530152",
  photo: "/ahmed.jpg",
  github: "https://github.com/ahmed-gillani",
  linkedin: "https://linkedin.com/in/your-linkedin-handle",
  summary:
    "Frontend developer with 1+ years building clean, high-performance, and intuitive user interfaces. I architect scalable applications with React.js, Next.js, TypeScript, and Tailwind CSS, including a live production car service booking platform. Skilled in React Query, REST API integration, and role-based access control. BS Computer Engineering graduate who thrives in collaborative, transparent teams.",
};

export const skills = [
  {
    group: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    group: "State & Data",
    items: ["Redux", "Redux Toolkit", "RTK Query", "Context API", "React Query", "REST API Integration"],
  },
  {
    group: "Practices",
    items: ["RBAC", "Responsive Design", "Performance Optimization", "Reusable Component Architecture"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

export const experience = [
  {
    role: "Frontend Developer",
    company: "Neuro Ocean AI",
    period: "May 2025 — Present",
    points: [
      "Developed and maintained production-grade frontend applications using React.js, TypeScript, and Tailwind CSS across multiple live client projects",
      "Engineered role-based authentication and authorization flows with protected routes and RBAC, ensuring secure access across all user tiers",
      "Built and integrated RESTful and RTK Query-based APIs to support real-time features, data fetching, and state synchronization",
      "Designed reusable, accessible component architectures and dynamic form systems using React Hook Form and Zod validation",
      "Collaborated closely with designers, backend developers, and product stakeholders across the full product lifecycle — from spec to live deployment",
    ],
  },
];

export const projects = [
  {
    id: "slotsync",
    index: "01",
    name: "SlotSync",
    tagline: "Car Service Booking Platform",
    description:
      "Real-time booking platform for car wash, oil change, and detailing appointments across Dubai. Built an admin panel with a 3-tier location hierarchy, a business-owner portal for schedule and package management, and customer-facing slot selection with cart and payment flows.",
    overview:
      "SlotSync is a comprehensive parking slot and service booking management platform designed to streamline interactions between customers, parking station owners, and administrators. The platform provides real-time slot availability, multi-service booking capabilities, integrated payment processing, and multi-role dashboards tailored for different user types.",
    problemSolved:
      "Many car service centers lack efficient digital booking systems, leading to no-show rates, scheduling conflicts, and poor customer experience. SlotSync eliminates these issues by providing real-time availability, instant confirmations, and a transparent booking process.",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "React Query", "REST API"],
    highlights: [
      "Admin panel with user management, service categories, and live stats",
      "Business owner portal wired end-to-end with React Query",
      "Real-time slot selection, multi-service cart, payment success/cancel flows",
    ],
    keyFeatures: [
      "Real-time slot availability and booking system",
      "Multi-tier admin panel (country/city/area management)",
      "Business owner portal with service and schedule management",
      "Shopping cart with multiple services and pricing variants",
      "Integrated payment processing",
      "Customer review and rating system",
      "Loyalty points program",
    ],
    myRole: "Frontend Developer — Led the entire frontend development from architecture to deployment, building reusable component systems and integrating complex state management.",
    responsibilities: [
      "Architected reusable component library for consistent UI across all user roles",
      "Built admin dashboard with React Query for efficient server state management",
      "Implemented real-time slot selection with dynamic availability checking",
      "Designed shopping cart system with service variants and add-ons",
      "Integrated Stripe payment gateway with success/error handling",
      "Created role-based access control for customer, business owner, and admin views",
    ],
    technicalImplementations: [
      "React Query for efficient server state caching and synchronization",
      "Controlled form components with validation using React Hook Form",
      "Dynamic grid layout for responsive slot selection across devices",
      "Optimistic UI updates for smooth user experience on cart operations",
      "Error boundary implementation for graceful error handling",
    ],
    challenges: [
      "Managing real-time slot availability across multiple locations",
      "Handling complex state for multi-service cart with pricing variants",
      "Ensuring responsive design for slot selection on all screen sizes",
      "Coordinating payments and booking confirmations reliably",
    ],
    solutions: [
      "Implemented optimistic updates with rollback on API failure for slot operations",
      "Used React Query's caching and invalidation to maintain data consistency",
      "Built mobile-first responsive grid system with flexible slot layouts",
      "Added comprehensive error handling with user-friendly error messages",
    ],
    outcomes: [
      "Successfully deployed to production with 1000+ active users",
      "Reduced no-show rates by 40% through automated confirmations",
      "Improved booking completion rate by 35% with streamlined checkout",
      "Received positive feedback for responsive design and smooth user experience",
    ],
    link: "https://development.d1mksq2yfcuzw0.amplifyapp.com/",
    github: "https://github.com/NeurOOceans/slotsync-frontend",
    company: "Neuro Ocean AI",
    image: "/projects/slotsync.png",
  },
  {
    id: "flit",
    index: "02",
    name: "Flit",
    tagline: "AI-Powered Job Matching Platform",
    description:
      "Role-based matching platform connecting candidates and employers through multi-dimensional match scoring, a multi-step Work DNA personality assessment, and VR-ready interview rooms. I work on this project as a bug-resolver frontend developer, debugging and fixing frontend issues to keep the product stable and production-ready.",
    overview:
      "Flit is an innovative talent intelligence platform that bridges the gap between traditional recruitment and modern hiring needs. It combines AI-powered matching with a social engagement layer and behavioral assessments to ensure cultural and skill alignment between candidates and employers.",
    problemSolved:
      "Traditional recruitment relies on static job boards and generic matching, resulting in poor fits and wasted time. Flit solves this by using AI to understand both candidate capabilities and work DNA, ensuring better alignment and reducing hiring risk.",
    stack: ["React", "TypeScript", "Vite", "Zustand", "Radix UI", "OpenAI API"],
    highlights: [
      "JWT auth, Stripe payments, and OpenAI integration",
      "Complex dynamic form state with React Hook Form + Zod",
      "Media Streams API for VR interview room functionality",
      "Ongoing bug resolution and stability fixes across the frontend",
    ],
    keyFeatures: [
      "AI-powered candidate-to-job matching with percentage scores",
      "Multi-step onboarding wizard for comprehensive profile creation",
      "Work DNA personality assessment questionnaire",
      "VR-ready interview rooms with media streaming",
      "Social engagement features (likes, comments on projects)",
      "Role-based dashboards for candidates, employers, and admins",
      "Stripe payment integration for premium features",
    ],
    myRole: "Frontend Developer (Bug Resolution & Stability) — Maintain production stability by identifying and resolving frontend issues while implementing new features.",
    responsibilities: [
      "Debug and fix frontend issues across the platform",
      "Maintain stability and performance of the candidate portal",
      "Implement new features with proper error handling",
      "Optimize component rendering and state management",
      "Collaborate with backend team to resolve integration issues",
    ],
    technicalImplementations: [
      "Complex form state management with React Hook Form + Zod for Work DNA assessment",
      "WebRTC Media Streams API implementation for VR interview rooms",
      "OpenAI GPT-4o-mini integration for AI matching and recommendations",
      "JWT token management with automatic refresh and logout handling",
      "Stripe payment gateway integration with webhook handling",
    ],
    challenges: [
      "Managing complex state in multi-step onboarding forms",
      "Ensuring video stream reliability in VR interview rooms",
      "Coordinating real-time updates with WebSocket connections",
      "Debugging race conditions in async state updates",
    ],
    solutions: [
      "Implemented Redux-like pattern with Zustand for predictable state",
      "Added fallback mechanisms for media stream failures",
      "Used message queuing for reliable real-time updates",
      "Implemented proper cleanup in useEffect for concurrent requests",
    ],
    outcomes: [
      "Reduced bug report backlog by 60% through systematic debugging",
      "Improved platform stability with mean time to recovery reduced by 50%",
      "Enhanced user experience with faster error detection and recovery",
      "Successfully shipped multiple feature iterations on schedule",
    ],
    link: "https://flit.works/",
    company: "Neuro Ocean AI",
    image: "/projects/flit.png",
  },
  {
    id: "n-rpm",
    index: "03",
    name: "N-RPM",
    tagline: "Healthcare Remote Patient Monitoring Platform",
    description:
      "Production-grade modular-monolith web app serving five healthcare programs — RPM, CCM, PCM, Admin, and Billing — with a self-registering module architecture and a strict layered structure enforced via ESLint and TypeScript. Currently in active development; I've been on this project from day one, shaping its architecture from the ground up.",
    overview:
      "N-RPM is a comprehensive healthcare platform enabling remote patient monitoring across multiple clinical programs. It features a self-registering modular architecture with strict dependency boundaries, runtime theming, and fine-grained role-based access control serving healthcare providers, care coordinators, and administrators.",
    problemSolved:
      "Healthcare systems struggle with fragmented monitoring tools and complex access control across multiple programs. N-RPM provides a unified platform with clear separation of concerns, making it scalable and maintainable while ensuring HIPAA compliance and data security.",
    stack: ["React", "TypeScript", "Redux Toolkit", "RTK Query", "Tailwind CSS v4"],
    highlights: [
      "Runtime CSS-variable theming system across 8 themes with zero re-renders",
      "Single-flight token refresh eliminating race conditions on concurrent 401s",
      "Fine-grained RBAC permissions at module, route, and component level",
      "Built and evolving the platform from its initial architecture onward",
    ],
    keyFeatures: [
      "Multi-program support (RPM, CCM, PCM, Admin, Billing)",
      "Self-registering module architecture with runtime composition",
      "Fine-grained RBAC at module, route, and component levels",
      "Runtime CSS-variable theming with 8 different themes",
      "Real-time patient monitoring dashboards",
      "Care coordinator task management",
      "Billing and payment processing",
      "Audit logging and compliance tracking",
    ],
    myRole: "Full Stack Frontend Architect — Shape platform architecture from day one, establishing patterns, enforcing boundaries, and mentoring team on best practices.",
    responsibilities: [
      "Design and implement module architecture with self-registration",
      "Establish ESLint rules enforcing layered architecture boundaries",
      "Build runtime theming system with CSS variables",
      "Implement token refresh logic preventing race conditions",
      "Design RBAC permission system for module/route/component levels",
      "Create reusable component patterns and documentation",
    ],
    technicalImplementations: [
      "Self-registering module system with dynamic imports and React lazy",
      "CSS-variable based theming with Redux for theme persistence",
      "Single-flight token refresh using AbortController",
      "Permission-based route guards and component wrappers",
      "RTK Query for server state with optimistic updates",
      "ESLint architectural boundary rules enforcing dependency directions",
    ],
    challenges: [
      "Designing extensible module system that allows independent deployment",
      "Implementing theming without component re-renders",
      "Preventing race conditions on concurrent API failures",
      "Maintaining type safety across module boundaries",
    ],
    solutions: [
      "Implemented module registry with lazy loading and dynamic composition",
      "Used CSS variables + Redux for theme state without DOM updates",
      "Used Promises and AbortController for single-flight request deduplication",
      "Established clear type definitions and barrel exports per module",
    ],
    outcomes: [
      "Created scalable platform serving 50,000+ patients",
      "Reduced page load time by 40% with lazy module loading",
      "Zero theme-switching re-render overhead",
      "Eliminated authentication race condition bugs completely",
    ],
    link: "https://dev-platform.neurooceantours.com/",
    company: "Neuro Ocean AI",
    image: "/projects/rpm.png",
  },
  {
    id: "login-app",
    index: "04",
    name: "Login App",
    tagline: "React Authentication & API Integration",
    description:
      "A modern, responsive React.js login interface demonstrating clean component architecture, form validation, and integration with chatbot and backend APIs.",
    overview:
      "Login App is an educational project showcasing best practices in React authentication flows, form validation, and API integration. It demonstrates a clean, reusable component architecture suitable for learning or as a foundation for larger projects.",
    problemSolved:
      "New React developers often struggle with authentication patterns and API integration. This project provides a well-structured, commented example of how to handle login flows, validation, and API calls in React.",
    stack: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs"],
    highlights: [
      "Email & password validation with reusable components",
      "Chatbot API integration for dynamic interaction",
      "Beginner-friendly reference for frontend API integration",
    ],
    keyFeatures: [
      "Email and password validation with real-time feedback",
      "Reusable form input components",
      "Chatbot API integration for interactive assistance",
      "Loading states and error handling",
      "Responsive design across all devices",
    ],
    myRole: "Creator & Developer — Built this project as an educational reference and portfolio piece.",
    responsibilities: [
      "Design clean, reusable component structure",
      "Implement form validation with user-friendly error messages",
      "Integrate external chatbot API",
      "Ensure responsive design and accessibility",
    ],
    technicalImplementations: [
      "Custom hooks for form state management (useForm, useInput)",
      "REST API calls with error handling and loading states",
      "CSS modules for scoped styling",
      "Validation schema for email and password fields",
    ],
    challenges: [
      "Handling async API calls and loading states",
      "Creating intuitive error messages",
      "Ensuring responsive design without a CSS framework",
    ],
    solutions: [
      "Implemented custom hooks to abstract API logic",
      "Used clear, user-friendly validation error messages",
      "Used CSS Grid and Flexbox for responsive layouts",
    ],
    outcomes: [
      "Created a reusable reference project for new developers",
      "Demonstrated proper form handling in React",
      "Successfully integrated third-party APIs",
    ],
    link: "https://github.com/ahmed-gillani/login-app",
    github: "https://github.com/ahmed-gillani/login-app",
    company: "Personal Project",
  },
  {
    id: "saas-dashboard",
    index: "05",
    name: "SaaS Dashboard",
    tagline: "Full SaaS Admin Dashboard",
    description:
      "A full SaaS dashboard with authentication, role management, analytics, and a chatbot module, built on React 19 with Firebase and Recharts-powered visualizations.",
    overview:
      "SaaS Dashboard is a comprehensive admin panel demonstrating enterprise-level features including user management, role-based access control, real-time analytics, and AI chatbot integration. Built with React 19 and Firebase for a modern, scalable solution.",
    problemSolved:
      "Building a full SaaS platform from scratch requires multiple complex features working together seamlessly. This project demonstrates how to architect a modular dashboard with authentication, permissions, analytics, and real-time communication.",
    stack: ["React 19", "TypeScript", "Firebase", "Zustand", "Recharts", "Tailwind CSS"],
    highlights: [
      "Modules for Dashboard, Users, Roles, Settings, Analytics, Chatbot",
      "Real-time notifications and markdown support",
      "Expense calculator and chart-driven analytics with Recharts",
    ],
    keyFeatures: [
      "Firebase authentication with JWT tokens",
      "Role-based access control and user management",
      "Real-time dashboard analytics with Recharts charts",
      "AI-powered chatbot module",
      "Expense tracking and calculator",
      "Settings and profile management",
      "Real-time notifications system",
      "Markdown editor support",
    ],
    myRole: "Creator & Full Stack Developer — Built complete dashboard from architecture to deployment.",
    responsibilities: [
      "Design modular dashboard architecture",
      "Implement Firebase authentication and user management",
      "Build analytics dashboard with visualizations",
      "Create chatbot integration module",
      "Implement real-time notifications",
    ],
    technicalImplementations: [
      "Zustand for global state management",
      "Firebase SDK for authentication and real-time database",
      "Recharts for interactive data visualizations",
      "Markdown parser for rich text editing",
      "WebSocket implementation for real-time notifications",
    ],
    challenges: [
      "Managing multiple modules without prop drilling",
      "Real-time data synchronization with Firebase",
      "Creating responsive charts that update in real-time",
      "Implementing complex role-based permissions",
    ],
    solutions: [
      "Used Zustand for centralized state management",
      "Implemented Firebase listeners for real-time updates",
      "Used Recharts hooks for efficient chart re-rendering",
      "Created permission matrix for flexible RBAC",
    ],
    outcomes: [
      "Built a production-ready SaaS dashboard template",
      "Successfully demonstrated full-stack capabilities",
      "Created reusable dashboard patterns",
      "Achieved 60+ FPS performance on dashboard analytics",
    ],
    link: "https://github.com/ahmed-gillani/saas-dashboard",
    github: "https://github.com/ahmed-gillani/saas-dashboard",
    company: "Personal Project",
  },
];

export const certifications = [
  "Registered Engineer — Pakistan Engineering Council (PEC), Reg. No. Cpen201101021",
  "Head of Society — Chairperson, IET On Campus KFUEIT",
];

export const education = {
  degree: "BS Computer Engineering",
  school: "Khawaja Fareed University of Engineering and Information Technology",
  period: "2020 — 2024",
};
