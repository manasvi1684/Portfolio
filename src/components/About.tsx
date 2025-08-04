'use client';
import { useEffect, useRef } from 'react';
import { useScrollAnimation } from '../lib/utils';

export default function About() {
  const aboutRef = useRef<HTMLElement>(null);
  const observer = useScrollAnimation();

  useEffect(() => {
    if (observer && aboutRef.current) {
      observer.observe(aboutRef.current);
    }
  }, [observer]);

  return (
    <section ref={aboutRef} className="w-full flex flex-col items-center my-8 fade-in" id="about">
      <h2 className="text-xl sm:text-2xl font-semibold mb-2">Full Stack Developer & AI Enthusiast</h2>
      <p className="text-sm text-gray-300 mb-2">
        Currently pursuing B.Tech in Computer Science & Engineering at <span className="text-[#60a5fa]">Sikkim Manipal Institute of Technology</span> (CGPA: 8.6/10)
      </p>
      <p className="text-center max-w-xl text-gray-400 text-sm">
        Passionate about building scalable web applications and intelligent systems. Experienced in full-stack development with expertise in Node.js, React.js, NestJS, and AI/ML technologies. Currently working as a Backend Developer at PearlThoughts and contributing to innovative projects in healthcare and e-commerce domains.
      </p>
    </section>
  );
} 