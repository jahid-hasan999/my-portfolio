

import ProjectPage from './component/Project';
import HeroSection from './component/HeroSection';
import AboutSection from './component/AboutSection';
import Skill from './component/Skill';


export default function Home() {
 
  return (
    <div className="bg-slate-950">
      <main className="container mx-auto  bg-slate-950 text-white">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-8 py-6">
          <h1 className="text-2xl font-bold text-blue-400">Jahid.dev</h1>

          <div className="flex gap-6 text-sm">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <Skill />

        {/* Projects Section */}
        <ProjectPage />

        {/* Contact Section */}
        <section id="contact" className="px-8 py-16 text-center">
          <h2 className="text-3xl font-bold">Contact Me</h2>
          <p className="mt-4 text-slate-300">
            Let's connect and build something great.
          </p>
          <a
            href="mailto:jahid0179813@gmail.com"
            className="mt-6 inline-block text-blue-400 underline"
          >
            Send Me an Email
          </a>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/jahid-hasan999"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-600 px-5 py-3 hover:border-blue-400 hover:text-blue-400"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/jahid-hasan-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-600 px-5 py-3 hover:border-blue-400 hover:text-blue-400"
            >
              LinkedIn ↗
            </a>
          </div>
        </section>

        <footer className="border-t border-slate-800 px-6 py-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Jahid Hasan. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
