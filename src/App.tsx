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
      <main className="w-full lg:pl-64">
        <div className="w-full flex flex-col min-h-screen">
          <div className="flex-1 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 lg:py-16 w-full">
            <div className="mx-auto w-full max-w-6xl">
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Contact />
            </div>
          </div>
          <footer className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 border-t border-[var(--color-line)] bg-[var(--color-paper)]">
            <div className="mx-auto w-full max-w-6xl">
              <Footer />
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
