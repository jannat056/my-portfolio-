import { skillsData } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-zinc-900/50 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Skills & Expertise
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Technologies and tools I use to build web applications and perform statistical data analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              className="p-6 rounded-xl bg-zinc-950 border border-zinc-800/80 hover:border-indigo-500/50 transition-colors shadow-lg"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  {skill.category}
                </span>
              </div>
              <p className="text-sm text-zinc-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}