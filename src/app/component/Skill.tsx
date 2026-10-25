'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Skill = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      gsap.fromTo(
        section.querySelectorAll('.skill-animate'),
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
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

  const skills = [
    { name: 'HTML', icon: '🌐', type: 'Markup' },
    { name: 'CSS', icon: '🎨', type: 'Styling' },
    { name: 'JavaScript', icon: '⚡', type: 'Programming' },
    { name: 'TypeScript', icon: '🔷', type: 'Typed JavaScript' },
    { name: 'React', icon: '⚛️', type: 'UI Library' },
    { name: 'Next.js', icon: '▲', type: 'React Framework' },
    { name: 'Node.js', icon: '🟢', type: 'Backend' },
    { name: 'MongoDB', icon: '🍃', type: 'Database' },
  ];

  return (
    <section id="skills" ref={sectionRef} className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="skill-animate mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            What I work with
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            My <span className="text-blue-400">Skills</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Technologies I'm learning and using to build modern web
            applications.
          </p>
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {skills.map(skill => (
            <div
              key={skill.name}
              className="skill-animate group rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:bg-slate-900 md:p-6"
            >
              <span className="text-3xl">{skill.icon}</span>

              <h3 className="mt-4 font-bold text-white transition group-hover:text-blue-400">
                {skill.name}
              </h3>

              <p className="mt-2 text-sm text-slate-400">{skill.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
