import React from 'react';

const Navbar = () => {
  const centerLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#case-studies', label: 'Case Studies' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
        {/* Brand */}
        <a
          href="#home"
          className="group relative font-semibold tracking-tight text-2xl text-black transition"
        >
          Velodent
          {/* Elegant underline on hover */}
          <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-0 bg-black/80 transition-all duration-300 group-hover:w-full" />
        </a>

        {/* Center navigation */}
        <div className="hidden md:flex items-center gap-6">
          {centerLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm text-black/80 transition-all duration-200 hover:text-black hover:-translate-y-0.5"
            >
              {l.label}
              <span className="pointer-events-none absolute left-0 -bottom-1 h-px w-0 bg-black/80 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right actions: Dashboard + Book Now */}
        <div className="flex items-center gap-3">
          <a
            href="#dashboard"
            className="inline-flex items-center rounded-full border border-black/80 bg-white text-black px-4 py-2 text-sm transition hover:-translate-y-0.5 hover:bg-black hover:text-white"
          >
            Dashboard
          </a>
          <a
            href="https://cal.com/velodent-ogbkfv/20min"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-black bg-black text-white px-4 py-2 text-sm transition hover:shadow-lg hover:-translate-y-0.5"
          >
            Book Now
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
