import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Hi, I'm <span className="text-indigo-500">Jannat</span>
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 max-w-xl">
              Frontend Developer & Data Analysis Enthusiast building modern, scalable web applications and extracting insights from data.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <Link
                href="#projects"
                className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors"
              >
                View Projects
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 rounded-lg border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-indigo-500/30 shadow-2xl">
            <Image
              src="/images/profile/1789817680724.jpg"
              alt="Jannat Profile Picture"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}