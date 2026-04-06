'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Marquee } from '@/components/ui/3d-testimonials';

const testimonials = [
  {
    name: 'Sarah Johnson',
    username: '@sarahj',
    body: 'Tayyab delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail is remarkable!',
    img: 'https://randomuser.me/api/portraits/women/32.jpg',
    country: '🇺🇸 USA',
  },
  {
    name: 'Ahmed Khan',
    username: '@ahmedk',
    body: 'Working with Tayyab was a great experience. He understood our requirements perfectly and delivered on time.',
    img: 'https://randomuser.me/api/portraits/men/51.jpg',
    country: '🇵🇰 Pakistan',
  },
  {
    name: 'Emma Wilson',
    username: '@emmaw',
    body: 'The salon management system Tayyab built has completely transformed our business operations. Highly recommended!',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    country: '🇬🇧 UK',
  },
  {
    name: 'Omar Al-Rashid',
    username: '@omarr',
    body: 'Professional, skilled, and easy to communicate with. Tayyab is our go-to developer for all web projects.',
    img: 'https://randomuser.me/api/portraits/men/33.jpg',
    country: '🇦🇪 UAE',
  },
  {
    name: 'Lisa Chen',
    username: '@lisac',
    body: 'Tayyab\'s React and Node.js expertise helped us build a scalable application that handles thousands of users daily.',
    img: 'https://randomuser.me/api/portraits/women/45.jpg',
    country: '🇨🇦 Canada',
  },
  {
    name: 'Michael Brown',
    username: '@michaelb',
    body: 'Incredible problem-solving skills and clean code. Tayyab is truly a full-stack expert who delivers quality work.',
    img: 'https://randomuser.me/api/portraits/men/22.jpg',
    country: '🇦🇺 Australia',
  },
  {
    name: 'Fatima Malik',
    username: '@fatimam',
    body: 'Tayyab redesigned our entire website and the results were outstanding. Traffic increased by 200% within months!',
    img: 'https://randomuser.me/api/portraits/women/53.jpg',
    country: '🇸🇦 Saudi Arabia',
  },
  {
    name: 'David Mueller',
    username: '@davidm',
    body: 'The WordPress site Tayyab developed is fast, SEO-friendly, and beautifully designed. Exactly what we needed.',
    img: 'https://randomuser.me/api/portraits/men/85.jpg',
    country: '🇩🇪 Germany',
  },
  {
    name: 'Priya Sharma',
    username: '@priyas',
    body: 'Tayyab helped us migrate our legacy system to a modern stack. His technical knowledge is impressive and deep.',
    img: 'https://randomuser.me/api/portraits/women/75.jpg',
    country: '🇮🇳 India',
  },
];

function TestimonialCard({ img, name, username, body, country }: (typeof testimonials)[number]) {
  return (
    <div className="w-[280px] shrink-0 rounded-xl bg-white/[0.04] border border-white/5 p-5 backdrop-blur-sm">
      <div className="flex items-center gap-2.5 mb-3">
        <Avatar className="size-9">
          <AvatarImage src={img} alt={name} />
          <AvatarFallback className="bg-cyan-500/20 text-cyan-400 text-xs">
            {name[0]}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white flex items-center gap-1.5">
            {name} <span className="text-xs">{country}</span>
          </figcaption>
          <p className="text-xs text-gray-500">{username}</p>
        </div>
      </div>
      <blockquote className="text-sm text-gray-400 leading-relaxed">{body}</blockquote>
    </div>
  );
}

export function TestimonialsSection() {
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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            What Clients <span className="text-cyan-400">Say</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Feedback from clients I&apos;ve had the pleasure of working with
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative h-[500px] md:h-[450px] overflow-hidden"
        style={{ perspective: '300px' }}
      >
        <div
          className="flex items-center gap-4 mx-auto px-4"
          style={{
            transform: 'translateX(-80px) translateY(0px) translateZ(-80px) rotateX(15deg) rotateY(-8deg) rotateZ(15deg)',
          }}
        >
          <Marquee vertical pauseOnHover repeat={3} className="[--duration:45s]">
            {testimonials.map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:45s]">
            {testimonials.map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee vertical pauseOnHover repeat={3} className="[--duration:50s]">
            {testimonials.map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:50s]">
            {testimonials.map((review) => (
              <TestimonialCard key={review.username} {...review} />
            ))}
          </Marquee>
        </div>

        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0a0a0f] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0f] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10" />
      </motion.div>
    </section>
  );
}
