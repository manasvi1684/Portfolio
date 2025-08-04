'use client';
import { BackgroundGradient } from './BackgroundGradient';
import { useEffect, useRef } from 'react';
import { useScrollAnimation } from '../lib/utils';

const workItems = [
  {
    title: "Backend Developer",
    company: "PearlThoughts",
    period: "June 2025 – Present",
    desc: "Developed scalable backend systems for Doctor-Patient Booking System using NestJS, PostgreSQL, and TypeORM. Implemented secure authentication with email/password and Google OAuth. Designed REST APIs for patient/doctor profiles, appointment booking, and real-time availability checks. Deployed to Render.com with CI/CD pipelines."
  },
  {
    title: "Frontend + Auth Developer",
    company: "TWWIOs (Startup)",
    period: "June 2025 – August 2025",
    desc: "Built deals aggregator platform 'Last Minute Deals (LMD)' using Node.js, Express.js, HTML/CSS, JavaScript. Implemented auth flows: register, login, logout, password reset. Worked on API integration for categories, subcategories, and product listings. Debugged 100+ bugs across backend and frontend."
  },
  {
    title: "Frontend + Automation Intern",
    company: "Adverayze (Digital Marketing Startup)",
    period: "May – June 2025",
    desc: "Developed automatic caption generator tool integrated with chatbot models. Built company website authentication using Firebase. Integrated Formspree for client inquiry routing. Contributed to frontend workflows for client onboarding."
  }
];

export default function WorkExperience() {
  const workRef = useRef<HTMLElement>(null);
  const observer = useScrollAnimation();

  useEffect(() => {
    if (observer && workRef.current) {
      observer.observe(workRef.current);
    }
  }, [observer]);

  return (
    <section ref={workRef} className="w-full my-12 fade-in" id="work">
      <h3 className="text-lg sm:text-xl font-semibold mb-6 text-center">Work Experience</h3>
      <div className="grid grid-cols-1 gap-6 max-w-6xl mx-auto px-4">
        {workItems.map((item, idx) => (
          <BackgroundGradient key={idx}>
            <div
              className="bg-[#1a003a] rounded-3xl p-6 shadow-lg border border-[#a78bfa]/20 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-[#a78bfa]/40 transform animate-fade-in-up relative overflow-hidden"
              style={{
                animationDelay: `${idx * 200}ms`,
                animationFillMode: 'both'
              }}
            >
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#a78bfa]/30 rounded-full blur-2xl z-0" />
              <div className="relative z-10">
                <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                <p className="text-sm text-[#a78bfa] mb-1">{item.company}</p>
                <p className="text-xs text-gray-400 mb-3">{item.period}</p>
                <p className="text-sm text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </BackgroundGradient>
        ))}
      </div>
    </section>
  );
} 