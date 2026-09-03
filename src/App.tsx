import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[var(--color-paper)] text-[var(--color-ink)] font-sans">
      <Nav />
      <main className="lg:pl-64">
        <div className="px-6 sm:px-10 lg:px-16 max-w-4xl">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}
