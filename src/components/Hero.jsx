import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-widest text-xs text-black/60 mb-3">AI FOR DENTAL CLINICS</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
            Premium AI Automation for Dental Clinics
          </h1>
          <p className="text-black/70 leading-relaxed">
            • AI receptionist and full front desk automation • 2X ROI guarantee • Automated follow-ups and reminders
          </p>
          <div className="mt-6">
            <a
              href="https://cal.com/velodent-ogbkfv/20min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-black bg-black text-white px-6 py-3 text-sm hover:shadow-lg hover:-translate-y-0.5 transition"
            >
              Book Now
            </a>
          </div>
        </div>

        <div className="mt-10 md:mt-14 rounded-2xl border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden bg-white">
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Nw478YoO3og?si=0Pcoc1145T6JDndl"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
