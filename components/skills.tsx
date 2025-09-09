export function Skills() {
  const skillCategories = [
    {
      name: "Frontend",
      icon: "code",
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
      name: "Backend",
      icon: "server",
      skills: [
        "Node.js",
        "Express.js",
        "FastAPI",
        "Python",
        "JWT (JSON Web Tokens)",
      ],
    },
    {
      name: "Database",
      icon: "database",
      skills: ["MongoDB", "PostgreSQL", "Prisma", "MySQL", "Firebase"],
    },
    {
      name: "DevOps & Tools",
      icon: "wrench",
      skills: [
        "Git",
        "GitHub",
        "Vercel",
        "Heroku",
        "Render",
        "Vite",
        "Figma",
        "Canva",
      ],
    },
  ];

  const Icon = ({ type }: { type: string }) => {
    // Lazy inline icon map to avoid multiple imports elsewhere
    // Using lucide-react icons which are likely already present with shadcn UI
    // Fallback to a simple dot if icon type is unknown
    switch (type) {
      case "code":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-code"
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        );
      case "server":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-server"
          >
            <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
            <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
            <line x1="6" x2="6" y1="6" y2="6"></line>
            <line x1="6" x2="6" y1="18" y2="18"></line>
          </svg>
        );
      case "database":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-database"
          >
            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
            <path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"></path>
            <path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"></path>
          </svg>
        );
      case "wrench":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-wrench"
          >
            <path d="M21.7 13.35a4.3 4.3 0 0 1-5.9 5.9L7 10.45a4 4 0 1 1 5.65-5.65l.35.35"></path>
            <path d="M7 10.5 2 15.5"></path>
          </svg>
        );
      default:
        return (
          <span className="inline-block w-2 h-2 rounded-full bg-primary" />
        );
    }
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold font-heading mb-6 text-primary">
        Tech Stack
      </h2>

      <div className="space-y-8">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-secondary/50 p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-all hover:shadow-md"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary border border-primary/20">
                <Icon type={category.icon} />
              </span>
              <h3 className="text-xl font-bold text-primary">
                {category.name}
              </h3>
            </div>
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
  );
}
