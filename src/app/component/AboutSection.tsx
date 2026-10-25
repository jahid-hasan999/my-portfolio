'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      gsap.fromTo(
        section.querySelectorAll('.about-animate'),
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            once: true,
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section id="about" ref={sectionRef} className="px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="about-animate mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Get to know me
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            About <span className="text-blue-400">Me</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-blue-500" />
        </div>

        {/* About Content */}
        <div className="grid items-center gap-8 md:grid-cols-[1.3fr_0.7fr]">
          {/* Left Card */}
          <div className="about-animate rounded-2xl border border-slate-800 bg-slate-900/70 p-7 md:p-9">
            <h3 className="text-2xl font-bold">Hi, I'm Jahid Hasan 👋</h3>

            <p className="mt-5 leading-8 text-slate-300">
              I'm an aspiring Full-Stack Developer passionate about building
              modern and user-friendly web applications.
            </p>

            <p className="mt-4 leading-8 text-slate-400">
              I work with JavaScript, TypeScript, React, Next.js, Node.js and
              MongoDB. I enjoy solving problems and learning by building
              real-world projects like Bazar Dor.
            </p>

            <p className="mt-4 leading-8 text-slate-400">
              My goal is to grow as a developer, contribute to meaningful
              projects, and start my professional career in web development.
            </p>

            <a
              href="#projects"
              className="mt-7 inline-flex rounded-lg bg-blue-500 px-6 py-3 font-semibold transition hover:bg-blue-600"
            >
              Explore My Projects →
            </a>
          </div>

          {/* Right Card */}
          <div className="about-animate rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/15 to-slate-900 p-8 text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-blue-400 bg-slate-950 text-3xl font-bold text-blue-400 shadow-lg shadow-blue-500/20">
              JH
            </div>

            <h3 className="mt-5 text-2xl font-bold">Jahid Hasan</h3>

            <p className="mt-2 text-blue-400">Aspiring Full-Stack Developer</p>

            <div className="mt-7 border-t border-slate-700 pt-5">
              <p className="text-sm text-slate-400">Currently learning</p>

              <p className="mt-2 font-medium text-white">
                Next.js · TypeScript · Backend
              </p>
            </div>

            <div className="mt-5 rounded-xl bg-slate-950/70 px-4 py-3">
              <p className="text-sm text-slate-400">My mindset</p>

              <p className="mt-1 font-medium text-white">
                Learn · Build · Improve 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
