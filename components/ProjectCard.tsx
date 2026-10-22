import Link from "next/link";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition hover:-translate-y-1 hover:border-emerald-500/50">
      <div className="flex h-40 items-center justify-center bg-linear-to-br from-emerald-500/20 to-chip text-4xl font-bold text-accent/60">
        {project.title.charAt(0)}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-semibold">
          <Link
            href={`/projects/${project.slug}`}
            className="after:absolute after:inset-0"
          >
            {project.title}
          </Link>
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-chip px-3 py-1 text-xs text-accent"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex gap-4 text-sm font-medium">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 text-accent transition hover:text-fg"
          >
            Live demo →
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 text-muted transition hover:text-fg"
          >
            Code
          </a>
        </div>
      </div>
    </article>
  );
}