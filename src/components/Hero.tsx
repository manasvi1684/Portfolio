'use client';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Hello! I am Manasvi Gupta';
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <div className="relative z-10 flex flex-col items-center">
      <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#a78bfa] to-[#7c3aed] flex items-center justify-center shadow-2xl mb-4 animate-pulse">
        <span className="text-5xl">👩‍💻</span>
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2">
        <span className="text-[#a78bfa]">{displayText}</span>
        <span className="animate-pulse">|</span>
      </h1>
      <p className="text-lg sm:text-xl text-center mb-1">
        Full Stack Developer & <span className="text-[#a78bfa] underline">AI Enthusiast</span>
      </p>
      <p className="text-xs text-center text-gray-400 mb-2">
        Building scalable web applications and intelligent systems
      </p>
      <div className="flex gap-4 justify-center mt-2">
        <a
          href="mailto:manasvi.gupta1684@gmail.com"
          className="inline-flex items-center gap-1 text-[#60a5fa] hover:underline text-sm"
        >
          <span>Email</span>
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.708 2.825L15 11.105V5.383zm-.034 6.876l-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.105l4.708-2.897L1 5.383v5.722z"/></svg>
        </a>
        <a
          href="tel:+918250677476"
          className="inline-flex items-center gap-1 text-[#60a5fa] hover:underline text-sm"
        >
          <span>Phone</span>
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg>
        </a>
      </div>
    </div>
  );
} 