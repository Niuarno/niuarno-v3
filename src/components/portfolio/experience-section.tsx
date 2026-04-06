'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface ExperienceEntry {
  period: string;
  title: string;
  company: string;
  description: string;
  type: 'work' | 'education';
}

const experiences: ExperienceEntry[] = [
  {
    period: '2025 - Present',
    title: 'Web Developer',
    company: 'CapregSoft',
    description: 'Building scalable web applications using modern technologies. Working on full-stack development projects with React, Node.js, and cloud infrastructure.',
    type: 'work',
  },
  {
    period: '2025',
    title: 'Telecommunications Engineer',
    company: 'Turnotech',
    description: 'Worked on telecommunications systems and network infrastructure. Applied software engineering skills to optimize communication systems.',
    type: 'work',
  },
  {
    period: '2024',
    title: 'WordPress Developer',
    company: 'ITExtreme',
    description: 'Developed custom WordPress themes and plugins. Built responsive websites for various clients with a focus on performance and SEO optimization.',
    type: 'work',
  },
  {
    period: '2024',
    title: 'BS Software Engineering',
    company: 'Riphah University',
    description: 'Graduated with a degree in Software Engineering. Gained comprehensive knowledge of software development methodologies, data structures, and algorithms.',
    type: 'education',
  },
];

function TimelineItem({ entry, index, isVisible }: { entry: ExperienceEntry; index: number; isVisible: boolean }) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`relative flex items-center mb-12 last:mb-0 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-row`}
    >
      {/* Content */}
      <div className={`w-full md:w-5/12 ${isLeft ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} pl-12 md:pl-0`}>
        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/20 transition-all duration-300 group hover:bg-white/[0.05]">
          <span className="text-cyan-400 text-sm font-semibold">{entry.period}</span>
          <h3 className="text-xl font-semibold text-white mt-2">{entry.title}</h3>
          <p className="text-cyan-400/70 text-sm mt-1">{entry.company}</p>
          <p className="text-gray-400 text-sm mt-3 leading-relaxed">{entry.description}</p>
        </div>
      </div>

      {/* Center dot - only visible on md+ */}
      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-10">
        <div className="w-10 h-10 rounded-full bg-[#0a0a0f] border-2 border-cyan-500/30 flex items-center justify-center">
          {entry.type === 'work' ? (
            <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
            </svg>
          )}
        </div>
      </div>

      {/* Spacer for the other side */}
      <div className="hidden md:block w-5/12" />
    </motion.div>
  );
}

export function ExperienceSection() {
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
    <section id="experience" className="py-24 md:py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
            My Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Work <span className="text-cyan-400">Experience</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            A timeline of my professional journey and career milestones
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent hidden md:block" />
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent md:hidden" />

          {experiences.map((entry, index) => (
            <TimelineItem key={index} entry={entry} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
