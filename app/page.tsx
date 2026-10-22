import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-page text-fg">
      <Navbar />
      <Hero />
      <About />
      <section id="projects" className="mx-auto max-w-3xl px-6 py-24">
        <p className="text-subtle">Projects coming in Step 5...</p>
      </section>
      <Contact />
      <Footer />
    </main>
  );
}