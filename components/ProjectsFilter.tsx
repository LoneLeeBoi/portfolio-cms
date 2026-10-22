"use client";

import { useState } from "react";
import type { Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";

type Props = {
  projects: Project[];
};

export default function ProjectsFilter({ projects }: Props) {
  const [activeTag, setActiveTag] = useState("All");

  const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

  const visibleProjects =
    activeTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            aria-pressed={activeTag === tag}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              activeTag === tag
                ? "border-emerald-500 bg-emerald-500 text-white"
                : "border-line-strong text-muted hover:border-muted hover:text-fg"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}