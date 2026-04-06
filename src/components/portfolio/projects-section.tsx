'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  year: string;
  gradient: string;
  github: string;
}

const projects: Project[] = [
  {
    title: 'Job Portal',
    description: 'A comprehensive job portal platform with job listings, applications, employer dashboards, and real-time notifications. Features advanced search and filtering.',
    tech: ['Next.js', 'React', 'MongoDB', 'Tailwind CSS', 'Node.js'],
    year: '2025',
    gradient: 'from-cyan-500/20 to-emerald-500/20',
    github: 'https://github.com/tayyab38201',
  },
  {
    title: 'E-commerce Platform',
    description: 'Full-featured e-commerce solution with product management, shopping cart, payment integration via Stripe, and order tracking. Containerized with Docker.',
    tech: ['Node.js', 'React', 'Stripe', 'Docker', 'MongoDB'],
    year: '2024',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    github: 'https://github.com/tayyab38201',
  },
  {
    title: 'Salon Management',
    description: 'A salon management system with booking appointments, customer management, service catalog, and billing. Built with PHP for reliability and performance.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'jQuery'],
    year: '2024',
    gradient: 'from-teal-500/20 to-cyan-500/20',
    github: 'https://github.com/tayyab38201',
  },
  {
    title: 'HBL Website',
    description: 'Corporate website for HBL featuring responsive design, dynamic content management, and optimized performance. Built with modern TypeScript tooling.',
    tech: ['TypeScript', 'Tailwind CSS', 'MongoDB', 'Express.js'],
    year: '2025',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    github: 'https://github.com/tayyab38201',
  },
];

function ProjectCard({ project, index, isVisible }: { project: Project; index: number; isVisible: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/20 transition-all duration-300 overflow-hidden hover:-translate-y-1"
    >
      {/* Project Image Placeholder */}
      <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-[#0a0a0f]/20" />
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 left-4 w-20 h-20 border border-white/20 rounded-lg rotate-12" />
          <div className="absolute bottom-4 right-4 w-16 h-16 border border-white/20 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-white/10 rounded-xl rotate-45" />
        </div>
        {/* Year badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full text-xs font-medium text-white">
          {project.year}
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-0.5 text-xs font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="sm"
              className="border-white/10 text-gray-300 hover:bg-white/5 hover:text-white text-xs"
            >
              <Github className="mr-1.5 size-3.5" />
              Source Code
            </Button>
          </a>
          <Button
            variant="outline"
            size="sm"
            className="border-white/10 text-gray-300 hover:bg-white/5 hover:text-white text-xs"
          >
            <ExternalLink className="mr-1.5 size-3.5" />
            Live Demo
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 md:py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
            My Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            A selection of projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
