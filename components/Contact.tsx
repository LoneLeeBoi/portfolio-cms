import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading title="Get in touch" />
      <p className="text-lg text-muted">
        Want to work together or just say hi? Reach out anytime.
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <a
          href="mailto:leecasquejo21@gmail.com"
          className="rounded-full bg-emerald-500 px-6 py-3 font-medium text-white transition hover:bg-emerald-400"
        >
          Email me
        </a>
        <a
          href="https://github.com/your-username"
          className="rounded-full border border-line-strong px-6 py-3 font-medium transition hover:border-muted"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}