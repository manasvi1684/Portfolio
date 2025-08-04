'use client';
import { BackgroundGradient } from './BackgroundGradient';
import { useEffect, useRef } from 'react';
import { useScrollAnimation } from '../lib/utils';

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Sikkim Manipal Institute of Technology, Sikkim",
    period: "2022 – 2026",
    details: "CGPA: 8.6/10"
  },
  {
    degree: "Class XII (CBSE)",
    institution: "Narayana Co-Kaveri Bhavan, Bengaluru, Karnataka",
    period: "2022",
    details: "Percentage: 85%"
  }
];

const certifications = [
  {
    title: "Introduction to DevOps",
    provider: "IBM (Coursera)"
  },
  {
    title: "Infosys Springboard (2025)",
    provider: "Multiple AI/ML courses including Deep Learning, Data Science, NLP, Computer Vision, and RPA"
  }
];

export default function Education() {
  const eduRef = useRef<HTMLElement>(null);
  const observer = useScrollAnimation();

  useEffect(() => {
    if (observer && eduRef.current) {
      observer.observe(eduRef.current);
    }
  }, [observer]);

  return (
    <section ref={eduRef} className="w-full my-12 fade-in" id="education">
      <h3 className="text-lg sm:text-xl font-semibold mb-6 text-center">Education & Certifications</h3>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {education.map((edu, idx) => (
            <BackgroundGradient key={idx}>
              <div
                className="bg-[#1a003a] rounded-3xl p-6 shadow-lg border border-[#a78bfa]/20 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-[#a78bfa]/40 transform animate-fade-in-up relative overflow-hidden"
                style={{
                  animationDelay: `${idx * 150}ms`,
                  animationFillMode: 'both'
                }}
              >
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#a78bfa]/30 rounded-full blur-2xl z-0" />
                <div className="relative z-10">
                  <h4 className="text-lg font-bold mb-1">{edu.degree}</h4>
                  <p className="text-sm text-[#a78bfa] mb-1">{edu.institution}</p>
                  <p className="text-xs text-gray-400 mb-2">{edu.period}</p>
                  <p className="text-sm text-gray-300">{edu.details}</p>
                </div>
              </div>
            </BackgroundGradient>
          ))}
        </div>
        <BackgroundGradient>
          <div className="bg-[#1a003a] rounded-3xl p-6 shadow-lg border border-[#a78bfa]/20 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-[#a78bfa]/40 transform animate-fade-in-up"
            style={{
              animationDelay: '300ms',
              animationFillMode: 'both'
            }}
          >
            <h4 className="text-lg font-bold mb-4 text-center text-[#a78bfa]">Certifications</h4>
            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-[#a78bfa]/5 rounded-lg hover:bg-[#a78bfa]/10 transition-colors duration-300">
                  <div>
                    <h5 className="font-semibold text-sm">{cert.title}</h5>
                    <p className="text-xs text-gray-400">{cert.provider}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BackgroundGradient>
      </div>
    </section>
  );
} 