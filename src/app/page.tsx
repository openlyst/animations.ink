"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Palette, ExternalLink, Code2, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "vidlatte",
    name: "vidlatte.ink",
    description: "A Plex-like platform for AI tools. Self-hosted AI image generation with ComfyUI, LLM chat, and community sharing - all outside your home network.",
    url: "https://vidlatte.ink",
    repo: "https://gitlab.com/HttpAnimations/vidlatte",
    icon: Sparkles,
    gradient: "from-violet-500/20 to-fuchsia-500/20",
    accent: "#8b5cf6",
  },
  {
    id: "animations",
    name: "animations.ink",
    description: "This landing page - a curated showcase of HttpAnimations projects. Clean design, subtle animations, and open source.",
    url: "https://animations.ink",
    repo: "https://gitlab.com/HttpAnimations/animations.ink",
    icon: Palette,
    gradient: "from-indigo-500/20 to-cyan-500/20",
    accent: "#6366f1",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0f]">
      {/* Background gradient orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-[20%] -top-[10%] h-[600px] w-[600px] rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[20%] h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[100px]" />
      </div>

      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] flex-col items-center justify-center px-4 pt-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-sm text-slate-400">Open Source Projects</span>
          </motion.div>

          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-7xl">
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              animations
            </span>
            <span className="text-violet-500">.ink</span>
          </h1>

          <motion.p
            className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            A curated collection of projects by{" "}
            <span className="text-white">HttpAnimations</span>. Building tools
            that make AI accessible, self-hosted, and beautiful.
          </motion.p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="relative px-4 pb-20 pt-10">
        <motion.div
          className="mx-auto max-w-5xl"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="mb-12 text-center text-2xl font-semibold text-slate-300"
            variants={fadeInUp}
          >
            Featured Projects
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  variants={fadeInUp}
                  custom={index}
                >
                  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-violet-500/10">
                    {/* Gradient background on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    />

                    <div className="relative">
                      {/* Icon & Name */}
                      <div className="mb-4 flex items-center gap-3">
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-colors duration-300 group-hover:border-white/20"
                          style={{ color: project.accent }}
                        >
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">
                            {project.name}
                          </h3>
                          <p className="text-sm text-slate-500">Open Source</p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mb-6 leading-relaxed text-slate-400">
                        {project.description}
                      </p>

                      {/* Links */}
                      <div className="flex items-center gap-3">
                        <Link
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/20"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Visit Site
                          <ArrowUpRight className="h-3 w-3 opacity-50" />
                        </Link>
                        <Link
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-slate-400 transition-all duration-300 hover:border-white/20 hover:text-white"
                        >
                          <Code2 className="h-4 w-4" />
                          GitLab
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 px-4 py-8">
        <motion.div
          className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} HttpAnimations. All projects are open source.
          </p>
          <Link
            href="https://gitlab.com/HttpAnimations"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-white"
          >
            <Github className="h-4 w-4" />
            View all projects on GitLab
          </Link>
        </motion.div>
      </footer>
    </main>
  );
}
