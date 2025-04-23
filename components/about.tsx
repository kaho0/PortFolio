export function About() {
  return (
    <div className="space-y-8">
      <div className="bg-secondary/50 p-8 rounded-lg border border-primary/20">
        <h2 className="text-3xl font-bold font-heading mb-6 text-primary">About Me:</h2>
        <div className="space-y-4 text-lg">
          <h3 className="text-2xl font-semibold mb-2">Hi, I'm Kahon</h3>

          <p>
            I'm a full-stack developer who enjoys building clean, functional web apps—front to back. I like writing code
            that not only works but makes sense, and I care just as much about the user experience as I do about the
            logic behind it. Whether it's an intuitive interface or solid backend logic, I aim for clarity and
            maintainability.
          </p>

          <p>
            Right now, I'm learning machine learning and deep learning. I've picked up data filtering and processing,
            and I'm currently diving into how different models work—how they learn, generalize, and where they can be
            applied. My goal is to start integrating those models into real projects to build smarter, adaptive systems.
          </p>

          <p>
            I'm looking for opportunities where I can keep growing, tackle real-world problems, and build things that
            actually make a difference.
          </p>
        </div>
      </div>

      <div className="bg-secondary/50 p-8 rounded-lg border border-primary/20">
        <h3 className="text-2xl font-bold font-heading mb-6 text-primary">Education</h3>
        <div className="flex flex-col md:flex-row justify-between items-start mb-4">
          <div>
            <h4 className="text-xl font-semibold">Bachelor of Computer Science & Telecommunication Engineering</h4>
            <p className="text-primary">Noakhali Science And Technology University</p>
          </div>
          <p className="text-muted-foreground mt-1 md:mt-0">09/2023 - 05/2027</p>
        </div>
      </div>
    </div>
  )
}
