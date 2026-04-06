'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ChevronLeftIcon,
  GithubIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function AuthPage() {
  return (
    <main className="relative md:h-screen md:overflow-hidden lg:grid lg:grid-cols-2">
      <div className="bg-muted/60 relative hidden h-full flex-col border-r p-10 lg:flex">
        <div className="from-background absolute inset-0 z-10 bg-gradient-to-t to-transparent" />
        <div className="z-10 flex items-center gap-2">
          <span className="text-cyan-400 text-2xl font-extrabold">&lt;/&gt;</span>
          <p className="text-xl font-semibold">Tayyab</p>
        </div>
        <div className="z-10 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-xl">
              &ldquo;Passionate developer crafting exceptional web experiences with modern technologies.&rdquo;
            </p>
            <footer className="font-mono text-sm font-semibold">
              ~ Tayyab
            </footer>
          </blockquote>
        </div>
        <div className="absolute inset-0">
          <FloatingPaths position={1} />
          <FloatingPaths position={-1} />
        </div>
      </div>
      <div className="relative flex min-h-screen flex-col justify-center p-4">
        <div className="absolute inset-0 isolate contain-strict -z-10 opacity-60">
          <div className="absolute top-0 right-0 h-80 w-80 -translate-y-32 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0,rgba(255,255,255,0.01)_50%,transparent_80%)]" />
        </div>
        <ChevronLeftIcon className="absolute top-7 left-5 size-6 text-muted-foreground" />
        <div className="mx-auto space-y-4 sm:max-w-sm">
          <div className="flex items-center gap-2 lg:hidden">
            <span className="text-cyan-400 text-2xl font-extrabold">&lt;/&gt;</span>
            <p className="text-xl font-semibold">Tayyab</p>
          </div>
          <div className="flex flex-col space-y-1">
            <h1 className="font-heading text-2xl font-bold tracking-wide">
              Welcome to My Portfolio
            </h1>
            <p className="text-muted-foreground text-base">
              Full Stack Developer specializing in React, Node.js, and scalable cloud solutions.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(34,211,238,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="pointer-events-none absolute inset-0">
      <svg
        className="h-full w-full text-cyan-500/20"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </svg>
    </div>
  );
}
