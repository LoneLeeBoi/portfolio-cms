import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

// The page itself no longer reads params, so its shell can show instantly
export default function ProjectPage({ params }: Props) {
  return (
    <main className="min-h-screen bg-page text-fg">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link
          href="/#projects"
          className="text-sm text-muted transition hover:text-fg"
        >
          ← Back to projects
        </Link>

        <Suspense fallback={<ProjectSkeleton />}>
          <ProjectDetails params={params} />
        </Suspense>
      </div>
    </main>
  );
}

// This part reads params, so it lives inside the Suspense boundary
async function ProjectDetails({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <>
      <div className="mt-8 flex h-56 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-500/20 to-chip text-6xl font-bold text-accent/60">
        {project.title.charAt(0)}
      </div>

      <h1 className="mt-8 text-4xl font-bold sm:text-5xl">{project.title}</h1>

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

      <p className="mt-6 text-lg leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-emerald-500 px-6 py-3 font-medium text-white transition hover:bg-emerald-400"
        >
          Live demo →
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-line-strong px-6 py-3 font-medium transition hover:border-muted"
        >
          View code
        </a>
      </div>
    </>
  );
}

// Gray placeholder shown for a split second while details load
function ProjectSkeleton() {
  return (
    <div className="mt-8 animate-pulse">
      <div className="h-56 rounded-2xl bg-chip" />
      <div className="mt-8 h-10 w-2/3 rounded bg-chip" />
      <div className="mt-4 h-6 w-1/3 rounded bg-chip" />
      <div className="mt-6 h-20 rounded bg-chip" />
    </div>
  );
}