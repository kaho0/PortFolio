export function Skills() {
  const skillCategories = [
    {
      name: "💻 Frontend",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "TailwindCSS",
        "Redux",
        "CSS3",
        "HTML5",
        "Chart.js",
        "MUI (Material UI)",
        "Bootstrap",
      ],
    },
    {
      name: "🔙 Backend",
      skills: ["Node.js", "Express.js", "FastAPI", "Python", "JWT (JSON Web Tokens)"],
    },
    {
      name: "🗃️ Database",
      skills: ["MongoDB", "PostgreSQL", "Prisma", "MySQL", "Firebase"],
    },
    {
      name: "📊 Data Science",
      skills: ["Pandas", "NumPy", "Scikit-Learn", "Matplotlib"],
    },
    {
      name: "⚙️ DevOps & Tools",
      skills: ["Git", "GitHub", "Vercel", "Heroku", "Render", "Vite", "Figma", "Canva"],
    },
  ]

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold font-heading mb-6 text-primary">Tech Stack</h2>

      <div className="space-y-8">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-secondary/50 p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-all hover:shadow-md"
          >
            <h3 className="text-xl font-bold mb-4 text-primary">{category.name}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-2 bg-secondary rounded-md text-sm border border-primary/20 hover:border-primary/50 transition-colors hover:bg-secondary/80 hover:translate-y-[-2px]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
