'use client';
import { useEffect, useRef } from 'react';
import { useScrollAnimation } from '../lib/utils';
import { BackgroundGradient } from './BackgroundGradient';

const projects = [
  {
    title: "RoboDoc – LLM-Based Diagnosis Assistant",
    technologies: "Python, Llama2, Word2Vec, RAG, BeautifulSoup, Scrapy",
    desc: "Scraped and cleaned homeopathy data from Kent's Repertory using BeautifulSoup and Scrapy. Built embeddings using Word2Vec and trained LLM on a RAG pipeline with Llama2. Developed a basic web frontend and tested responses for medical relevance. Explored Reinforcement Learning methods to iteratively improve output accuracy."
  },
  {
    title: "MindEase – LLM Chatbot for Mental Health",
    technologies: "Python, Faiss, Ollama, NLP, FastAPI",
    desc: "Processed PDF books and Kaggle datasets to build a mental health corpus. Used Word2Vec for embeddings and Faiss for vector-based retrieval. Deployed LLM using Ollama for empathetic, context-aware responses. Built a functional prototype interface for safe and guided conversation flows. Integrated LLM with retrieval and dialogue pipeline using FastAPI."
  },
  {
    title: "Ecommerce Backend APIs",
    technologies: "Express.js, MySQL, Postman",
    desc: "Designed normalized database schemas for products, users, orders, and cart logic. Built RESTful APIs using Express.js and tested them via Postman. Focused on implementing secure, efficient routes for user signup/login, order placement, and cart handling."
  }
];

export default function Projects() {
  const projectsRef = useRef<HTMLElement>(null);
  const observer = useScrollAnimation();

  useEffect(() => {
    if (observer && projectsRef.current) {
      observer.observe(projectsRef.current);
    }
  }, [observer]);

  return (
    <section ref={projectsRef} className="w-full my-12 fade-in" id="projects">
      <h3 className="text-lg sm:text-xl font-semibold mb-6 text-center">Featured Projects</h3>
      <div className="flex flex-col gap-8 max-w-6xl mx-auto px-4">
        {projects.map((project, idx) => (
          <BackgroundGradient key={idx}>
            <div
              className="bg-[#1a003a] rounded-3xl p-6 shadow-lg border border-[#a78bfa]/20 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-[#a78bfa]/40 transform animate-fade-in-up"
              style={{
                animationDelay: `${idx * 200}ms`,
                animationFillMode: 'both'
              }}
            >
              <h4 className="text-lg font-bold mb-2">{project.title}</h4>
              <p className="text-xs text-[#a78bfa] mb-3 font-mono">{project.technologies}</p>
              <p className="text-sm text-gray-300 leading-relaxed">{project.desc}</p>
            </div>
          </BackgroundGradient>
        ))}
      </div>
    </section>
  );
} 