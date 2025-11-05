import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingEmbed from './components/BookingEmbed';
import MainSections from './components/MainSections';

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main>
        <Hero />
        <BookingEmbed />
        <MainSections />
      </main>
      <footer className="border-t border-black/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-black/60">© {new Date().getFullYear()} Velodent. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#faq" className="underline">FAQ</a>
            <a href="#contact" className="underline">Contact</a>
            <a href="https://cal.com/velodent-ogbkfv/20min" target="_blank" rel="noreferrer" className="underline">Book Now</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
