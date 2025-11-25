import React, { useState } from "react";

export default function App() {
  const resumeUrl = "/mnt/data/VISWESWARAIAH-RESUME.pdf"; // local path (will be transformed by deploy)
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Medical Report Generator (Capstone)",
      date: "Jul 2023",
      tech: "Python, Deep Learning, OpenCV",
      summary:
        "AI-driven encoder–decoder model that generates medical reports from X-ray images, reducing manual report time and demonstrating clinical viability.",
      highlights: [
        "Built an encoder–decoder pipeline for image→text report generation.",
        "Evaluated using image-text matching metrics for validation.",
      ],
    },
    {
      id: 2,
      title: "Secure Messaging System",
      date: "Aug 2024",
      tech: "React, Node.js, AES/RSA, JWT, WebSockets, MongoDB",
      summary:
        "End-to-end secure chat platform with AES+RSA encryption, JWT authentication and real-time WebSocket group messaging.",
      highlights: [
        "Implemented AES and RSA hybrid encryption for messages.",
        "Built React UI and WebSocket-based real-time messaging with session management.",
      ],
    },
    {
      id: 3,
      title: "Social Distancing Monitor",
      date: "Jul 2022",
      tech: "Python, OpenCV, YOLOv3",
      summary:
        "Real-time monitoring system using YOLOv3 to detect pedestrian proximity and produce visual alerts for violations.",
      highlights: [
        "Pixel-to-distance estimation to identify unsafe proximity.",
        "Realtime detection and visual alerting for crowd analytics.",
      ],
    },
  ];

  const skills = [
    "React", "Node.js", "Python", "C/C++", "JavaScript", "HTML & CSS", "MongoDB", "MySQL",
  ];

  const experience = [
    {
      company: "Florida International University",
      role: "Teaching Assistant — Artificial Intelligence & Operating Systems",
      date: "Aug 2024 - Present",
      bullets: [
        "Assisted labs & teaching for 100+ students in AI & OS courses.",
        "Mentored students on model implementation & optimization.",
        "Collaborated with faculty to improve lab materials.",
      ],
    },
    {
      company: "Aptean India",
      role: "Associate Software Developer",
      date: "Mar 2023 - Jul 2024",
      bullets: [
        "Fixed software bugs and developed 4 features in an Agile codebase.",
        "Worked across frontend, API and backend systems.",
        "Improved sprint delivery speed by ~10% through tighter requirement collaboration.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <header className="bg-white shadow-sm sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-sky-700">Srushti Visweswaraiah</h1>
            <p className="text-sm text-gray-600">MS Computer Science — AI & Software Development</p>
          </div>
          <nav className="hidden sm:flex gap-4 items-center">
            <a href="#projects" className="text-sm hover:text-sky-700">Projects</a>
            <a href="#experience" className="text-sm hover:text-sky-700">Experience</a>
            <a href="#skills" className="text-sm hover:text-sky-700">Skills</a>
            <a href="#contact" className="text-sm hover:text-sky-700">Contact</a>
            <a
              href={resumeUrl}
              download
              className="ml-3 inline-block bg-sky-600 text-white text-sm px-3 py-2 rounded-md shadow-sm hover:bg-sky-700"
            >
              Download CV
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10">
        {/* HERO */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
          <div className="sm:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Frontend & AI-focused Software Developer</h2>
            <p className="mt-3 text-gray-700 text-lg">
              I build reliable, maintainable software and AI systems. Experienced across full-stack development, machine learning,
              and teaching labs for university-level AI courses. Looking for roles that combine engineering rigor with applied AI.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href={resumeUrl}
                download
                className="inline-flex items-center px-4 py-2 bg-sky-600 text-white rounded-md shadow-sm hover:bg-sky-700"
              >
                Download Resume
              </a>
              <a
                href="mailto:svisw003@fiu.edu"
                className="inline-flex items-center px-4 py-2 border border-sky-600 text-sky-600 rounded-md hover:bg-sky-50"
              >
                Email: svisw003@fiu.edu
              </a>
            </div>

            <div className="mt-6 text-sm text-gray-600">
              <strong>Location:</strong> Miami, FL • <strong>LinkedIn:</strong>{" "}
              <a
                href="http://www.linkedin.com/in/srushti-v-9430291a2"
                className="text-sky-600 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/srushti-v-9430291a2
              </a>
            </div>
          </div>

          <div className="order-first sm:order-last flex items-center justify-center">
            {/* Placeholder headshot card */}
            <div className="w-40 h-40 bg-white rounded-xl shadow-md flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto" />
                <p className="mt-3 text-sm text-gray-700">Professional Photo</p>
                <p className="text-xs text-gray-400">(optional)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-900">Skills</h3>
          <p className="mt-2 text-gray-600">Technologies & tools I use regularly</p>

          <div className="mt-4 flex flex-wrap gap-3">
            {skills.map((s) => (
              <span
                key={s}
                className="inline-flex items-center px-3 py-1 rounded-full bg-white border text-sm text-gray-700 shadow-sm"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-900">Experience</h3>
          <div className="mt-4 space-y-6">
            {experience.map((exp) => (
              <div key={exp.company} className="p-4 bg-white rounded-lg shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">{exp.role}</h4>
                    <div className="text-sm text-gray-600">{exp.company} • {exp.date}</div>
                  </div>
                </div>
                <ul className="mt-3 list-disc list-inside text-gray-700">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-900">Selected Projects</h3>
          <p className="mt-2 text-gray-600">A few projects that demonstrate applied AI and full-stack skills.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects.map((p) => (
              <article
                key={p.id}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setActiveProject(p)}
              >
                <div className="text-sm text-gray-500">{p.date}</div>
                <h4 className="mt-1 font-semibold text-gray-900">{p.title}</h4>
                <p className="mt-2 text-gray-700 text-sm">{p.summary}</p>
                <div className="mt-3 text-xs text-gray-500">Tech: {p.tech}</div>
              </article>
            ))}
          </div>

          {/* Project modal */}
          {activeProject && (
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={() => setActiveProject(null)}>
              <div className="bg-white rounded-lg max-w-2xl w-full p-6" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-start">
                  <h4 className="text-lg font-semibold">{activeProject.title}</h4>
                  <button onClick={() => setActiveProject(null)} className="text-gray-500">Close</button>
                </div>
                <div className="mt-3 text-gray-700">
                  <p>{activeProject.summary}</p>
                  <ul className="mt-3 list-disc list-inside">
                    {activeProject.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                  <div className="mt-4 text-sm text-gray-500">Tech stack: {activeProject.tech}</div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Resume embed + Contact */}
        <section id="contact" className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold">Resume</h3>
            <p className="mt-2 text-sm text-gray-600">Embedded preview — click download to save the PDF.</p>
            <div className="mt-3">
              <iframe
                src={resumeUrl}
                title="Resume"
                className="w-full h-64 border rounded-md"
              />
            </div>
            <a
              href={resumeUrl}
              download
              className="mt-3 inline-block bg-sky-600 text-white px-3 py-2 rounded-md hover:bg-sky-700"
            >
              Download Resume
            </a>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="mt-2 text-sm text-gray-600">I'm open to full-time roles in software development and applied AI.</p>

            <div className="mt-4 space-y-3">
              <div>
                <div className="text-xs text-gray-500">Email</div>
                <div className="flex items-center gap-2">
                  <a href="mailto:svisw003@fiu.edu" className="text-gray-800 font-medium">svisw003@fiu.edu</a>
                  <button
                    onClick={() => navigator.clipboard?.writeText("svisw003@fiu.edu")}
                    className="ml-2 text-xs px-2 py-1 border rounded text-sky-600 hover:bg-sky-50"
                  >
                    Copy
                  </button>
                </div>
              </div>

              <div>
                <div className="text-xs text-gray-500">LinkedIn</div>
                <a href="http://www.linkedin.com/in/srushti-v-9430291a2" target="_blank" rel="noreferrer" className="text-sky-600 hover:underline">View profile</a>
              </div>

              <div>
                <div className="text-xs text-gray-500">Phone</div>
                <div className="text-gray-800">+1 786-678-3505</div>
              </div>

            </div>
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Srushti Visweswaraiah — Built with React & Tailwind
        </footer>
      </main>

      <a
        href="mailto:svisw003@fiu.edu"
        className="fixed bottom-6 right-6 bg-sky-600 text-white px-4 py-2 rounded-full shadow-lg hidden sm:inline-flex"
      >
        Email
      </a>
    </div>
  );
}