import React, { useState } from "react";
import { motion } from "framer-motion";

const resumeUrl = "/VISWESWARAIAH-RESUME.pdf";

const projects = [
  {
    id: 1,
    title: "Medical Report Generator (Capstone)",
    date: "Jul 2023",
    tech: "Python, Deep Learning, OpenCV",
    summary:
      "Built an AI-driven encoder–decoder model to generate automated medical reports from X-ray images, reducing manual report generation time.",
    highlights: [
      "Encoder–decoder pipeline for image→text report generation",
      "Evaluated model performance with image-text matching metrics",
    ],
  },
  {
    id: 2,
    title: "Secure Messaging System",
    date: "Aug 2024",
    tech: "React, Node.js, AES/RSA, JWT, WebSockets, MongoDB",
    summary:
      "Engineered a secure chat platform implementing AES and RSA hybrid encryption with JWT authentication and WebSocket-based real-time group messaging.",
    highlights: [
      "Hybrid AES+RSA encryption for message confidentiality",
      "React front-end with WebSocket real-time messaging and session management",
    ],
  },
  {
    id: 3,
    title: "Social Distancing Monitor",
    date: "Jul 2022",
    tech: "Python, OpenCV, YOLOv3",
    summary:
      "Real-time monitoring system using YOLOv3 to detect and measure pedestrian proximity from live camera feeds, producing alerts for unsafe distances.",
    highlights: [
      "YOLOv3-based detection with pixel-to-distance estimation",
      "Realtime alerts and visual overlays for crowd analytics",
    ],
  },
];

const skills = [
  "C",
  "C++",
  "Python",
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Node.js",
  "MySQL",
  "MongoDB",
];

const experience = [
  {
    company: "Florida International University",
    role: "Teaching Assistant — Artificial Intelligence & Operating Systems",
    date: "Aug 2024 - Present",
    bullets: [
      "Assisted teaching and labs for Artificial Intelligence and Operating Systems courses with 100+ students.",
      "Mentored students on AI model implementation and optimization.",
      "Collaborated with faculty to enhance lab materials emphasizing applied AI concepts.",
    ],
  },
  {
    company: "Aptean India",
    role: "Associate Software Developer",
    date: "Mar 2023 - Jul 2024",
    bullets: [
      "Identified and fixed software bugs to ensure system reliability.",
      "Developed 4 new features based on business requirements within an Agile framework.",
      "Worked across frontend, API, and backend systems; improved sprint delivery speed by ~10% through closer collaboration with product managers.",
    ],
  },
];

export default function App() {
  const [active, setActive] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold text-sky-700">
              Srushti Visweswaraiah
            </h1>
            <p className="text-xs text-slate-600">
              MS Computer Science — AI & Software Development
            </p>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#projects" className="hover:text-sky-700">
              Projects
            </a>
            <a href="#skills" className="hover:text-sky-700">
              Skills
            </a>
            <a href="#experience" className="hover:text-sky-700">
              Experience
            </a>
            <a href="#contact" className="hover:text-sky-700">
              Contact
            </a>
            <a
              href={resumeUrl}
              download
              className="px-3 py-2 bg-gradient-to-r from-sky-600 to-violet-600 text-white rounded-lg shadow"
            >
              Resume
            </a>
          </nav>

          <div className="md:hidden">
            <a
              href={resumeUrl}
              download
              className="px-3 py-2 bg-sky-600 text-white rounded-md"
            >
              CV
            </a>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h2
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold leading-tight"
            >
              Hi, I'm{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-violet-600">
                Srushti
              </span>{" "}
              👋
            </motion.h2>

            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-4 text-lg text-slate-700"
            >
              I build reliable, maintainable software and AI systems. Experienced across
              full-stack development, machine learning, and teaching labs—focused on
              delivering practical, production-ready solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="mt-6 flex items-center gap-4"
            >
              <a
                href="#projects"
                className="px-5 py-3 bg-gradient-to-r from-sky-600 to-violet-600 text-white rounded-lg shadow-lg hover:scale-[1.03]"
              >
                View Projects
              </a>

              <a
                href={resumeUrl}
                download
                className="px-5 py-3 border border-slate-200 rounded-lg hover:bg-slate-50"
              >
                Download Resume
              </a>
            </motion.div>

            <div className="mt-6 text-sm text-slate-600">
              <div>
                <strong>Email:</strong>{" "}
                <a className="text-sky-600" href="mailto:svisw003@fiu.edu">
                  svisw003@fiu.edu
                </a>
              </div>
              <div className="mt-1">
                <strong>LinkedIn:</strong>{" "}
                <a
                  className="text-sky-600"
                  href="http://www.linkedin.com/in/srushti-v-9430291a2"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/srushti-v-9430291a2
                </a>
              </div>
              <div className="mt-1">
                <strong>Phone:</strong> +1 786-678-3505
              </div>
            </div>
          </div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -right-10 -top-10 w-56 h-56 bg-sky-300/30 rounded-full filter blur-3xl mix-blend-multiply"></div>
            <div className="absolute -left-8 top-24 w-48 h-48 bg-violet-300/30 rounded-full filter blur-3xl mix-blend-multiply"></div>

            <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-slate-100">
              <div className="w-36 h-36 bg-gray-100 rounded-full mx-auto" />
              <h3 className="text-center mt-4 font-semibold">Professional Photo</h3>
              <p className="text-center text-xs text-slate-500">(optional)</p>
            </div>
          </motion.div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-20">
          <h3 className="text-2xl font-bold text-slate-800">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            {skills.map((s) => (
              <motion.div
                key={s}
                whileHover={{ scale: 1.03 }}
                className="p-3 bg-white rounded-xl shadow border border-slate-100 text-center"
              >
                {s}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-20">
          <h3 className="text-2xl font-bold text-slate-800">Selected Projects</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {projects.map((p) => (
              <motion.article
                key={p.id}
                whileHover={{ y: -6 }}
                className="p-5 bg-white border border-slate-200 shadow-md rounded-xl"
              >
                <div className="text-sm text-slate-500">{p.date}</div>
                <h4 className="mt-2 font-semibold text-sky-700">{p.title}</h4>
                <p className="mt-2 text-slate-700 text-sm">{p.summary}</p>
                <div className="mt-3 text-xs text-slate-500">Tech: {p.tech}</div>
                <div className="mt-3">
                  <button
                    onClick={() => setActive(p)}
                    className="text-sky-600 text-sm"
                  >
                    Details
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Modal */}
          {active && (
            <div
              className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
              onClick={() => setActive(null)}
            >
              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.18 }}
                className="bg-white rounded-lg max-w-2xl w-full p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between">
                  <h4 className="text-lg font-semibold">{active.title}</h4>
                  <button onClick={() => setActive(null)} className="text-slate-500">
                    Close
                  </button>
                </div>
                <p className="mt-3 text-slate-700">{active.summary}</p>
                <ul className="mt-3 list-disc list-inside text-slate-700">
                  {active.highlights?.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
                <div className="mt-4 text-sm text-slate-500">Tech: {active.tech}</div>
              </motion.div>
            </div>
          )}
        </section>

        {/* Experience */}
        <section id="experience" className="mt-20">
          <h3 className="text-2xl font-bold text-slate-800">Experience</h3>
          <div className="mt-6 space-y-6">
            {experience.map((e, i) => (
              <div key={i} className="p-5 bg-white border border-slate-200 rounded-xl shadow">
                <h4 className="text-xl font-semibold text-sky-700">{e.role}</h4>
                <div className="text-sm text-slate-500">{e.company} • {e.date}</div>
                <ul className="mt-3 list-disc list-inside text-slate-700">
                  {e.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Resume + Contact */}
        <section id="contact" className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <div className="bg-white p-5 rounded-xl shadow border border-slate-200">
            <h3 className="text-lg font-semibold">Resume</h3>
            <p className="mt-1 text-slate-600">Preview or download the PDF.</p>
            <div className="mt-4 flex gap-4 items-start">
              <div className="w-28 h-36 bg-gray-100 rounded-md" />
              <div>
                <div className="text-sm text-slate-700">VISWESWARAIAH-RESUME.pdf</div>
                <a
                  href={resumeUrl}
                  download
                  className="mt-3 inline-flex items-center px-4 py-2 bg-gradient-to-r from-sky-600 to-violet-600 text-white rounded-lg"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow border border-slate-200">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="mt-1 text-slate-600">Open to full-time roles in software development and applied AI.</p>
            <div className="mt-4">
              <div className="text-xs text-slate-500">Email</div>
              <div className="text-slate-800 font-medium">svisw003@fiu.edu</div>
              <div className="mt-3 text-xs text-slate-500">LinkedIn</div>
              <a href="http://www.linkedin.com/in/srushti-v-9430291a2" className="text-sky-600">View profile</a>
              <div className="mt-3 text-xs text-slate-500">Phone</div>
              <div className="text-slate-800">+1 786-678-3505</div>
            </div>
          </div>
        </section>

        <footer className="text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Srushti Visweswaraiah — Built with React & Tailwind
        </footer>
      </main>
    </div>
  );
}
