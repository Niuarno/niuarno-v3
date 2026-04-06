'use client';
import React from 'react';
import { TextHoverEffect, FooterBackgroundGradient } from '@/components/ui/hover-footer';
import { Mail, Phone, Github, Linkedin, MessageCircle, Heart } from 'lucide-react';

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Projects', href: '#projects' },
      { label: 'Experience', href: '#experience' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Contact', href: '#contact', pulse: true },
      { label: 'GitHub', href: 'https://github.com/tayyab38201' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/muhammad-tayyab' },
      { label: 'WhatsApp', href: 'https://wa.me/923347555472' },
    ],
  },
];

const contactInfo = [
  {
    icon: <Mail size={18} className="text-cyan-400" />,
    text: 'standard38201@gmail.com',
    href: 'mailto:standard38201@gmail.com',
  },
  {
    icon: <Phone size={18} className="text-cyan-400" />,
    text: '+92 334 7555472',
    href: 'tel:+923347555472',
  },
];

const socialLinks = [
  { icon: <Github size={18} />, label: 'GitHub', href: 'https://github.com/tayyab38201' },
  { icon: <Linkedin size={18} />, label: 'LinkedIn', href: 'https://linkedin.com/in/muhammad-tayyab' },
  { icon: <MessageCircle size={18} />, label: 'WhatsApp', href: 'https://wa.me/923347555472' },
  { icon: <Mail size={18} />, label: 'Email', href: 'mailto:standard38201@gmail.com' },
];

export function PortfolioFooter() {
  return (
    <footer className="relative bg-[#0a0a0f] mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-8 pt-16 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-cyan-400 text-2xl font-extrabold">&lt;/&gt;</span>
              <span className="text-white text-2xl font-bold">Tayyab</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Full Stack Developer passionate about crafting exceptional web experiences 
              with modern technologies. Building digital solutions that make a difference.
            </p>
            <div className="flex gap-3 pt-2">
              {socialLinks.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/20 transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                    {'pulse' in link && (link as { pulse?: boolean }).pulse && (
                      <span className="absolute top-0 right-[-10px] w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {item.icon}
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-white/5 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          <p className="text-gray-500 flex items-center gap-1">
            © 2026 Tayyab. Made with <Heart size={14} className="text-red-400 fill-red-400" /> All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-500">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-cyan-400 transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[25rem] -mt-48 -mb-28 pointer-events-none">
        <TextHoverEffect text="Tayyab" className="z-50 w-full max-w-4xl mx-auto" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
