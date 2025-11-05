import React from 'react';

const Navbar = () => {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#dashboard', label: 'Dashboard' },
    { href: '#case-studies', label: 'Case Studies' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <a href="#home" className="font-semibold tracking-tight text-xl">Velodent</a>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group text-sm text-black/80 hover:text-black transition-colors relative"
            >
              {l.label}
              <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-px bg-black/80 transition-all" />
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://cal.com/velodent-ogbkfv/20min"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-black bg-black text-white px-4 py-2 text-sm hover:shadow-lg hover:-translate-y-0.5 transition"
          >
            Book Now
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
