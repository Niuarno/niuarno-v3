'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowDown, Send, Github } from 'lucide-react';

const techPills = [
  'React.js', 'Node.js', 'Docker', 'CI/CD', 'PHP', 'Python', 'Java', 'JavaScript', 'MongoDB', 'MySQL',
];

const SplineScene = dynamic(
  () => import('@splinetool/react-spline').then((mod) => {
    const Spline = mod.default || mod.Spline;
    return { default: Spline };
  }),
  {
    ssr: false,
    loading: () => <div className="w-full h-full bg-gradient-to-br from-[#0a0a0f] via-[#0d1117] to-[#0a0a0f]" />,
  }
);

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Spline Background */}
      <div className="absolute inset-0 z-0">
        <SplineScene scene="https://prod.spline.design/dJqTIQ-tE3ULUPMi/scene.splinecode" />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/90 via-[#0a0a0f]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-[#0a0a0f]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/70 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-cyan-500/10 text-cyan-400 border-cyan-500/20 hover:bg-cyan-500/20 px-4 py-1.5 text-sm">
              Full Stack Developer
            </Badge>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Tayyab
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-cyan-400 font-medium mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Building Digital Solutions
          </motion.p>

          <motion.p
            className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Passionate developer crafting exceptional web experiences with modern technologies. 
            Specializing in React, Node.js, and scalable cloud solutions.
          </motion.p>

          {/* Tech pills */}
          <motion.div
            className="flex flex-wrap gap-2 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {techPills.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-6 py-3 rounded-lg"
            >
              View Projects
              <ArrowDown className="ml-2 size-4" />
            </Button>
            <Button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 px-6 py-3 rounded-lg"
            >
              Get In Touch
              <Send className="ml-2 size-4" />
            </Button>
            <a
              href="https://github.com/tayyab38201"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-white/10 text-gray-300 hover:bg-white/5 px-6 py-3 rounded-lg"
              >
                <Github className="mr-2 size-4" />
                GitHub
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="size-5 text-cyan-400/50" />
      </motion.div>
    </section>
  );
}
