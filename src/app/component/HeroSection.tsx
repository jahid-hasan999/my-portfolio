'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const HeroSection = () => {
  const cursorText = useRef<HTMLSpanElement>(null);
  const cursor = useRef<HTMLSpanElement>(null);

  useGSAP(() => {

gsap.from('.hero-animate', {
  y: 35,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: 'power3.out',
});

    const textElement = cursorText.current;
    const cursorElement = cursor.current;

    if (!textElement || !cursorElement) return;

    const words = [
      'Hi, I am Jahid Hasan',
      'I am a Full-Stack Developer',
      'I love building websites',
    ];

    const state = { count: 0 };
    const timeline = gsap.timeline({ repeat: -1 });

    words.forEach(word => {
      timeline.to(state, {
        count: word.length,
        duration: word.length * 0.07,
        ease: 'none',
        onUpdate: () => {
          textElement.textContent = word.slice(0, Math.round(state.count));
        },
      });

      timeline.to({}, { duration: 1.2 });

      timeline.to(state, {
        count: 0,
        duration: word.length * 0.035,
        ease: 'none',
        onUpdate: () => {
          textElement.textContent = word.slice(0, Math.round(state.count));
        },
      });
    });

    gsap.to(cursorElement, {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });
  }, []);

  return (
    <section className="px-8 py-24">
      <p className="hero-animate mb-4 text-blue-400">
        <span ref={cursorText}>Hi, I am Jahid Hasan</span>
        <span ref={cursor} className="ml-1 inline-block text-blue-400">
          |
        </span>
      </p>

      <h2 className="hero-animate max-w-3xl text-4xl font-bold md:text-6xl">
        Aspiring Full-Stack Developer
      </h2>

      <p className="hero-animate mt-6 max-w-xl text-slate-300">
        I build modern web applications using React, Next.js, TypeScript and
        Node.js. I love learning and solving problems through code.
      </p>

      <div className="hero-animate mt-8 flex gap-4">
        <a
          href="#projects"
          className="rounded-lg bg-blue-500 px-6 py-3 font-semibold hover:bg-blue-600"
        >
          View My Work
        </a>

        <a
          href="#contact"
          className="rounded-lg border border-slate-500 px-6 py-3 hover:bg-slate-800"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
