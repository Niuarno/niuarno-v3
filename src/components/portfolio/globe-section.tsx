'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const Globe = dynamic(() => import('@/components/ui/cobe-globe'), { ssr: false });

const markers = [
  { id: 'pakistan', location: [30.3753, 69.3451] as [number, number], label: 'Pakistan' },
  { id: 'usa', location: [37.0902, -95.7129] as [number, number], label: 'USA' },
  { id: 'uk', location: [51.5074, -0.1278] as [number, number], label: 'UK' },
  { id: 'uae', location: [23.4241, 53.8478] as [number, number], label: 'UAE' },
  { id: 'germany', location: [51.1657, 10.4515] as [number, number], label: 'Germany' },
  { id: 'saudi', location: [23.8859, 45.0792] as [number, number], label: 'Saudi Arabia' },
  { id: 'australia', location: [-25.2744, 133.7751] as [number, number], label: 'Australia' },
  { id: 'canada', location: [56.1304, -106.3468] as [number, number], label: 'Canada' },
  { id: 'turkey', location: [38.9637, 35.2433] as [number, number], label: 'Turkey' },
];

const arcs = [
  {
    id: 'pak-usa',
    from: [30.3753, 69.3451] as [number, number],
    to: [37.0902, -95.7129] as [number, number],
  },
  {
    id: 'pak-uk',
    from: [30.3753, 69.3451] as [number, number],
    to: [51.5074, -0.1278] as [number, number],
  },
  {
    id: 'pak-uae',
    from: [30.3753, 69.3451] as [number, number],
    to: [23.4241, 53.8478] as [number, number],
  },
  {
    id: 'pak-saudi',
    from: [30.3753, 69.3451] as [number, number],
    to: [23.8859, 45.0792] as [number, number],
  },
  {
    id: 'pak-germany',
    from: [30.3753, 69.3451] as [number, number],
    to: [51.1657, 10.4515] as [number, number],
  },
];

export function GlobeSection() {
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
    <section id="globe" className="py-24 md:py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
            Global Reach
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Clients From All Over <span className="text-cyan-400">The Globe</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Serving clients across multiple continents with quality software solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16"
        >
          <div className="w-full max-w-md lg:max-w-lg">
            <Globe
              markers={markers}
              arcs={arcs}
              markerColor={[0.13, 0.83, 0.93]}
              baseColor={[0.12, 0.12, 0.18]}
              arcColor={[0.13, 0.83, 0.93]}
              glowColor={[0.13, 0.83, 0.93]}
              dark={1}
              mapBrightness={3}
              markerSize={0.035}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-sm">
            {markers.map((marker) => (
              <div
                key={marker.id}
                className="flex items-center gap-2 text-sm text-gray-300"
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                {marker.label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
