'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import dynamic from 'next/dynamic';

const BB8Switch = dynamic(() => import('@/components/ui/star-wars-toggle-switch'), { ssr: false });

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function PortfolioHeader() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 mx-auto w-full max-w-7xl transition-all duration-300',
        scrolled
          ? 'bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5 shadow-lg'
          : 'bg-transparent',
      )}
    >
      <nav className="flex h-16 w-full items-center justify-between px-4 md:px-8">
        <a
          href="#home"
          className="text-xl font-bold text-white hover:text-cyan-400 transition-colors"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
        >
          &lt;Tayyab /&gt;
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors rounded-md hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          <div className="ml-2">
            <BB8Switch />
          </div>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <MenuToggleIcon open={open} className="size-6" duration={300} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed top-16 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden md:hidden transition-all duration-300',
          open ? 'opacity-100 visible' : 'opacity-0 invisible',
        )}
        style={{ background: 'rgba(10, 10, 15, 0.95)', backdropFilter: 'blur(20px)' }}
      >
        <div
          className={cn(
            'flex h-full w-full flex-col justify-center gap-y-2 p-8',
            open ? 'animate-in zoom-in-95 duration-200' : 'animate-out zoom-out-95 duration-200',
          )}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-2xl font-semibold text-white hover:text-cyan-400 transition-colors py-3 border-b border-white/10"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-8 flex justify-center">
            <BB8Switch />
          </div>
        </div>
      </div>
    </header>
  );
}
