import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import { skillsData } from "@/data/skills";
import { projectsData } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090B] text-white selection:bg-indigo-500 selection:text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 border-t border-zinc-800/80 bg-zinc-950/50">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
            <div className="w-12 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 space-y-4 text-zinc-300 leading-relaxed shadow-xl backdrop-blur-sm">
            <p>
              * Aspiring web developer passionate about building modern, responsive, and user-friendly web applications.
            </p>
            <p>
              * Enjoy turning ideas into interactive digital experiences through clean code, thoughtful UI, and practical solutions.
            </p>
            <p>
              * Bring a data-driven and analytical mindset to development, combining logical problem-solving with creativity.
            </p>
            <p>
              * Continuously learning, experimenting with modern technologies, and strengthening my skills through hands-on projects.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 border-t border-zinc-800/80">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold tracking-tight">Tech Stack & Tools</h2>
            <div className="w-12 h-1 bg-indigo-500 mx-auto rounded-full"></div>
            <p className="text-zinc-400">Technologies and tools I use to bring ideas to life.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-xl hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/10 group"
              >
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  {skill.category}
                </span>
                <h3 className="text-lg font-bold mt-4 text-white group-hover:text-indigo-400 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 border-t border-zinc-800/80 bg-zinc-950/50">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            <div className="w-12 h-1 bg-indigo-500 mx-auto rounded-full"></div>
            <p className="text-zinc-400">Some of my recent works and applications.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="bg-zinc-900/60 border border-zinc-800 rounded-xl overflow-hidden flex flex-col hover:border-indigo-500/50 transition-all group"
              >
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 border border-zinc-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        Live Demo →
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 border-t border-zinc-800/80">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
            <div className="w-12 h-1 bg-indigo-500 mx-auto rounded-full"></div>
            <p className="text-zinc-400 max-w-lg mx-auto">
              Feel free to reach out for collaborations, questions, or just to say hi!
            </p>
          </div>

          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 inline-block shadow-xl space-y-4 text-left w-full max-w-md mx-auto">
            <div className="flex items-center gap-3 text-zinc-300">
              <span className="font-semibold text-white">Email:</span>
              <a href="mailto:jannatjr648@gmail.com" className="text-indigo-400 hover:underline">
                jannatjr648@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-zinc-300">
              <span className="font-semibold text-white">GitHub:</span>
              <a href="https://github.com/jannat056" target="_blank" className="text-indigo-400 hover:underline">
                jannat056
              </a>
            </div>
            <div className="flex items-center gap-3 text-zinc-300">
              <span className="font-semibold text-white">Telegram:</span>
              <a href="https://t.me/jannat_744" target="_blank" className="text-indigo-400 hover:underline">
                @jannat_744
              </a>
            </div>
            <div className="flex items-center gap-3 text-zinc-300">
              <span className="font-semibold text-white">WhatsApp:</span>
              <a href="https://wa.me/8801516537025" target="_blank" className="text-indigo-400 hover:underline">
                +8801516537025
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-800/80 text-center text-sm text-zinc-500 bg-zinc-950">
        <p>© {new Date().getFullYear()} Shohefa Jannat Jemi. All rights reserved.</p>
      </footer>
    </main>
  );
}