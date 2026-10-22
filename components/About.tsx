import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading title="About me" />
      <p className="text-lg leading-relaxed text-muted">
        Write a short paragraph about yourself here: who you are, what you
        build, and what you&apos;re learning right now.
      </p>
    </section>
  );
}