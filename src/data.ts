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
    index: "01",
    name: "SlotSync",
    tagline: "Car Service Booking Platform",
    description:
      "Real-time booking platform for car wash, oil change, and detailing appointments across Dubai. Built an admin panel with a 3-tier location hierarchy, a business-owner portal for schedule and package management, and customer-facing slot selection with cart and payment flows.",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "React Query"],
    highlights: [
      "Admin panel with user management, service categories, and live stats",
      "Business owner portal wired end-to-end with React Query",
      "Real-time slot selection, multi-service cart, payment success/cancel flows",
    ],
    link: "https://development.d1mksq2yfcuzw0.amplifyapp.com/",
    company: "Neuro Ocean AI",
    image: "/projects/slotsync.png",
  },
  {
    index: "02",
    name: "Flit",
    tagline: "AI-Powered Job Matching Platform",
    description:
      "Role-based matching platform connecting candidates and employers through multi-dimensional match scoring, a multi-step Work DNA personality assessment, and VR-ready interview rooms. I work on this project as a bug-resolver frontend developer, debugging and fixing frontend issues to keep the product stable and production-ready.",
    stack: ["React", "TypeScript", "Vite", "Zustand", "Radix UI"],
    highlights: [
      "JWT auth, Stripe payments, and OpenAI integration",
      "Complex dynamic form state with React Hook Form + Zod",
      "Media Streams API for VR interview room functionality",
      "Ongoing bug resolution and stability fixes across the frontend",
    ],
    link: "https://flit.works/",
    company: "Neuro Ocean AI",
    image: "/projects/flit.png",
  },
  {
    index: "03",
    name: "N-RPM",
    tagline: "Healthcare Remote Patient Monitoring Platform",
    description:
      "Production-grade modular-monolith web app serving five healthcare programs — RPM, CCM, PCM, Admin, and Billing — with a self-registering module architecture and a strict layered structure enforced via ESLint and TypeScript. Currently in active development; I've been on this project from day one, shaping its architecture from the ground up.",
    stack: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS v4"],
    highlights: [
      "Runtime CSS-variable theming system across 8 themes with zero re-renders",
      "Single-flight token refresh eliminating race conditions on concurrent 401s",
      "Fine-grained RBAC permissions at module, route, and component level",
      "Built and evolving the platform from its initial architecture onward",
    ],
    link: "https://dev-platform.neurooceantours.com/",
    company: "Neuro Ocean AI",
    image: "/projects/rpm.png",
  },
  {
    index: "04",
    name: "Login App",
    tagline: "React Authentication & API Integration",
    description:
      "A modern, responsive React.js login interface demonstrating clean component architecture, form validation, and integration with chatbot and backend APIs.",
    stack: ["React.js", "Tailwind CSS", "REST APIs"],
    highlights: [
      "Email & password validation with reusable components",
      "Chatbot API integration for dynamic interaction",
      "Beginner-friendly reference for frontend API integration",
    ],
    link: "https://github.com/ahmed-gillani/login-app",
    company: "Personal Project",
  },
  {
    index: "05",
    name: "SaaS Dashboard",
    tagline: "Full SaaS Admin Dashboard",
    description:
      "A full SaaS dashboard with authentication, role management, analytics, and a chatbot module, built on React 19 with Firebase and Recharts-powered visualizations.",
    stack: ["React 19", "TypeScript", "Firebase", "Zustand"],
    highlights: [
      "Modules for Dashboard, Users, Roles, Settings, Analytics, Chatbot",
      "Real-time notifications and markdown support",
      "Expense calculator and chart-driven analytics with Recharts",
    ],
    link: "https://github.com/ahmed-gillani/saas-dashboard",
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
