import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "My Vid",
      description: "A simple YouTube clone with features like search, category-wise videos, and video playback.",
      imageUrl: "https://i.ibb.co.com/RkDfPRc3/image.png",
      technologies: ["React.js", "DaisyUI", "Node.js", "Express.js", "MongoDB"],
      githubUrl: "https://github.com/kaho0/My-Vid",
      demoUrl: "https://you-vid-xi.vercel.app/",
    },
    {
      title: "Voyage Vista",
      description: "A travel booking platform for users to explore destinations and book seamlessly.",
      imageUrl: "https://i.ibb.co.com/H12ph08/image.png",
      technologies: ["React.js", "DaisyUI", "Node.js", "Express.js", "MongoDB"],
      githubUrl: "https://github.com/kaho0/Voyage-vista",
      demoUrl: "https://vista-omega.vercel.app/",
    },
    {
      title: "Gradiaaa",
      description: "A full-stack web application that enhances interaction between students and teachers.",
      imageUrl: "https://i.ibb.co.com/9k37Cqjc/image.png",
      technologies: ["React.js", "DaisyUI", "Node.js", "Express.js", "MongoDB", "JWT"],
      githubUrl: "https://github.com/kaho0/Gradiaaa",
      demoUrl: "https://gradiaaa.vercel.app/",
    },
    {
      title: "Skylaa",
      description: "A real-time chatting app built with the MERN stack and Socket.io.",
      imageUrl: "https://i.ibb.co.com/bgzBhqKJ/image.png",
      technologies: ["React.js", "TailwindCSS", "DaisyUI", "Node.js", "Express.js", "Socket.io", "Zustand", "JWT"],
      githubUrl: "https://github.com/kaho0/Skylaa",
      demoUrl: "https://skyla-7t80.onrender.com/",
    },
    {
      title: "Flow",
      description: "A modern web application with sleek UI and responsive design.",
      imageUrl: "https://i.ibb.co.com/5XwxFh1s/image.png",
      technologies: ["React.js", "TailwindCSS"],
      githubUrl: "https://github.com/kaho0/Aura",
      demoUrl: "https://aura-nu.vercel.app/",
    },
    {
      title: "Meloo",
      description: "A music streaming platform with a clean interface.",
      imageUrl: "https://i.ibb.co.com/gMksX2g6/image.png",
      technologies: ["React.js", "TailwindCSS", "Gemini API"],
      githubUrl: "https://github.com/kaho0/Meloo",
      demoUrl: "https://melobo.vercel.app/",
    },
  ]

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold font-heading mb-6 text-primary">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-secondary rounded-lg overflow-hidden border border-primary/20 hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative h-48 w-full">
              <Image src={project.imageUrl || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-background rounded-md text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary hover:underline"
                >
                  <Github size={16} />
                  Code
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary hover:underline"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
