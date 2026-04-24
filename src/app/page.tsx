"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Palette, ExternalLink, Code2, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "vidlatte",
    name: "vidlatte.ink",
    description: "Plex-like platform for AI. Self-hosted image generation with ComfyUI and LLM chat.",
    url: "https://vidlatte.ink",
    repo: "https://gitlab.com/HttpAnimations/vidlatte",
    icon: Sparkles,
    accent: "#8b5cf6",
  },
  {
    id: "animations",
    name: "animations.ink",
    description: "Project showcase and landing page. Built with Next.js, Tailwind, and Framer Motion.",
    url: "https://animations.ink",
    repo: "https://gitlab.com/HttpAnimations/animations.ink",
    icon: Palette,
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
      <section className="relative px-4 pb-20 pt-16">
        <motion.div
          className="mx-auto max-w-4xl"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  variants={fadeInUp}
                  custom={index}
                >
                  <div className="group rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.04]">

                    <div className="relative">
                      {/* Icon & Name */}
                      <div className="mb-4 flex items-center gap-3">
                        <div
                          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors duration-300 group-hover:border-white/20"
                          style={{ color: project.accent }}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-medium text-white">
                          {project.name}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="mb-6 leading-relaxed text-slate-400">
                        {project.description}
                      </p>

                      {/* Links */}
                      <div className="flex items-center gap-2">
                        <Link
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-slate-300 transition-colors hover:text-white"
                        >
                          Live site →
                        </Link>
                        <span className="text-slate-600">·</span>
                        <Link
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-slate-500 transition-colors hover:text-slate-300"
                        >
                          Source
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
            <Code2 className="h-4 w-4" />
            View all projects on GitLab
          </Link>
        </motion.div>
      </footer>
    </main>
  );
}
