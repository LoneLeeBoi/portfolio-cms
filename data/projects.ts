export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "weather-app",
    title: "Weather App",
    description:
      "A clean weather dashboard that shows current conditions and a 5-day forecast for any city.",
    tags: ["React", "API", "Tailwind"],
    link: "https://example.com",
    github: "https://github.com/LoneLeeBoi/weather-app",
  },
  {
    id: 2,
    slug: "task-manager",
    title: "Task Manager",
    description:
      "A simple to-do app with categories, due dates, and drag-and-drop ordering.",
    tags: ["Next.js", "TypeScript"],
    link: "https://example.com",
    github: "https://github.com/LoneLeeBoi/task-manager",
  },
  {
    id: 3,
    slug: "recipe-finder",
    title: "Recipe Finder",
    description:
      "Search recipes by ingredient and save your favorites to a personal cookbook.",
    tags: ["React", "API"],
    link: "https://example.com",
    github: "https://github.com/LoneLeeBoi/recipe-finder",
  },
  {
    id: 4,
    slug: "expense-tracker",
    title: "Expense Tracker",
    description:
      "Track spending by category and see monthly summaries in simple charts.",
    tags: ["Next.js", "Postgres"],
    link: "https://example.com",
    github: "https://github.com/LoneLeeBoi/expense-tracker",
  },
  {
    id: 5,
    slug: "link-shortener",
    title: "Link Shortener",
    description:
      "Paste a long URL and get a short one, with click counts for each link.",
    tags: ["Node.js", "Postgres"],
    link: "https://example.com",
    github: "https://github.com/LoneLeeBoi/link-shortener",
  },
  {
    id: 6,
    slug: "chat-app",
    title: "Chat App",
    description:
      "A real-time chat room where people can join with a nickname and talk live.",
    tags: ["WebSockets", "React"],
    link: "https://example.com",
    github: "https://github.com/LoneLeeBoi/chat-app",
  },
];