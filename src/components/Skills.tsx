const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "C/C++", "JavaScript", "TypeScript"]
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "React.js", "Node.js", "Express.js", "NestJS", "Tailwind CSS"]
  },
  {
    title: "Databases & Tools",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "TypeORM", "GitHub", "Postman"]
  },
  {
    title: "AI/ML Technologies",
    skills: ["Llama2", "Word2Vec", "RAG", "Faiss", "Ollama", "FastAPI"]
  }
];

export default function Skills() {
  return (
    <section className="w-full flex flex-col items-center my-12" id="skills">
      <h3 className="text-lg sm:text-xl font-semibold mb-6 text-center">Technical Skills</h3>
      <div className="w-full max-w-6xl px-4">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#a78bfa]/20 rounded-full blur-3xl z-0" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-[#1a003a] rounded-xl p-6 shadow-lg border border-[#a78bfa]/20 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-[#a78bfa]/40 transform animate-fade-in-up"
              style={{
                animationDelay: `${idx * 150}ms`,
                animationFillMode: 'both'
              }}
            >
              <h4 className="text-base font-bold mb-3 text-[#a78bfa]">{category.title}</h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1 bg-[#a78bfa]/10 text-sm rounded-full border border-[#a78bfa]/30 text-gray-300 hover:bg-[#a78bfa]/20 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 