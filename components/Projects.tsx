import SectionHeading from "./SectionHeading";
import ProjectsFilter from "./ProjectsFilter";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading title="Projects" />
      <ProjectsFilter projects={projects} />
    </section>
  );
}