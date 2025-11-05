import React, { useState } from 'react';
import { Phone, Calendar, Bell, CreditCard, FileText, Bot, BarChart3, MessageSquare } from 'lucide-react';

const Section = ({ id, title, children }) => (
  <section id={id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">{title}</h2>
    {children}
  </section>
);

const Services = () => {
  const items = [
    { icon: Bot, title: 'AI Receptionist', desc: '24/7 virtual front desk that answers, triages, and books.' },
    { icon: Phone, title: 'Follow-ups & Reminders', desc: 'Automated SMS/voice/email to reduce no-shows.' },
    { icon: Calendar, title: 'Smart Scheduling', desc: 'Booking, rescheduling, and cancellations handled end-to-end.' },
    { icon: FileText, title: 'Insurance Verification', desc: 'Eligibility checks and document collection.' },
    { icon: CreditCard, title: 'Payments & Invoices', desc: 'Co-pays, deposits, and balances collected automatically.' },
    { icon: BarChart3, title: 'Analytics & ROI', desc: 'Real-time KPIs with 2X ROI guarantee.' },
    { icon: MessageSquare, title: 'Lead Generation', desc: 'Capture from ads and auto follow-ups for conversions.' },
    { icon: Bell, title: 'Care Reminders', desc: '1 day/hour before visit; 6-month cleaning & braces tightening.' },
  ];
  return (
    <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((it) => (
        <div key={it.title} className="group rounded-xl border border-black/10 bg-white p-5 shadow-sm hover:shadow-md transition transform hover:-translate-y-0.5">
          <div className="flex items-center gap-3 mb-2">
            <it.icon className="w-5 h-5" />
            <h3 className="font-medium">{it.title}</h3>
          </div>
          <p className="text-sm text-black/70">{it.desc}</p>
        </div>
      ))}
    </div>
  );
};

const CaseStudies = () => (
  <div className="grid gap-6 md:grid-cols-2">
    {[{
      id: 'case1', client: 'BrightSmile Dental',
      problem: 'High no-shows and overwhelmed front desk.',
      solution: 'AI receptionist + automated reminders + smart rescheduling.',
      results: 'No-shows down 42%, booked 38% more hygiene visits.'
    }, {
      id: 'case2', client: 'Downtown Ortho',
      problem: 'Manual insurance checks slowed intake.',
      solution: 'Automated eligibility + patient pre-intake forms.',
      results: 'Reduced intake time by 55%, collections up 21%.'
    }].map(cs => (
      <a key={cs.id} href={`#${cs.id}`} className="block rounded-xl border border-black/10 bg-white p-6 hover:shadow-md transition">
        <h3 className="text-lg font-medium">{cs.client}</h3>
        <p className="text-sm text-black/70 mt-1">Problem: {cs.problem}</p>
        <p className="text-sm text-black/70">Solution: {cs.solution}</p>
        <p className="text-sm text-black/80 mt-2">Results: {cs.results}</p>
        <span className="inline-block mt-3 text-sm underline">Read full case</span>
      </a>
    ))}

    {/* Dedicated sections */}
    <div id="case1" className="md:col-span-2 rounded-xl border border-black/10 bg-white p-6">
      <h3 className="text-xl font-semibold">BrightSmile Dental — Full Case</h3>
      <ul className="list-disc pl-5 text-sm text-black/80 mt-2 space-y-1">
        <li>Overview: 3-chair clinic, urban area.</li>
        <li>Challenge: Frequent phone traffic, missed confirmations.</li>
        <li>Workflow: AI picks up inbound, confirms via SMS, auto-reschedules conflicts.</li>
        <li>Metrics: -42% no-shows, +38% hygiene visits, +19% production.</li>
      </ul>
    </div>
    <div id="case2" className="md:col-span-2 rounded-xl border border-black/10 bg-white p-6">
      <h3 className="text-xl font-semibold">Downtown Ortho — Full Case</h3>
      <ul className="list-disc pl-5 text-sm text-black/80 mt-2 space-y-1">
        <li>Overview: Orthodontic practice, 2 locations.</li>
        <li>Challenge: Insurance verification delays, manual intake.</li>
        <li>Workflow: Automatic eligibility checks and digital forms with reminders.</li>
        <li>Metrics: -55% intake time, +21% collections, +14% starts.</li>
      </ul>
    </div>
  </div>
);

const Testimonials = () => (
  <div className="grid gap-6 md:grid-cols-3">
    {[
      { name: 'Dr. Patel', quote: 'Our front desk load dropped instantly and patients love the reminders.' },
      { name: 'Dr. Nguyen', quote: 'Velodent made our schedule run smooth—no more empty gaps.' },
      { name: 'Dr. Garcia', quote: 'Insurance and payments used to be a bottleneck; now it just happens.' },
    ].map((t) => (
      <div key={t.name} className="rounded-xl border border-black/10 bg-white p-6 hover:shadow-md transition">
        <p className="text-sm text-black/80">“{t.quote}”</p>
        <p className="mt-3 text-sm font-medium">— {t.name}</p>
      </div>
    ))}
  </div>
);

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-black/10">
      <button onClick={() => setOpen(!open)} className="w-full text-left py-3 flex items-center justify-between">
        <span className="font-medium">{q}</span>
        <span className="text-xl leading-none">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="pb-4 text-sm text-black/70">{a}</p>}
    </div>
  );
};

const DashboardPreview = () => (
  <div className="grid gap-6 md:grid-cols-3">
    <div className="rounded-xl border border-black/10 bg-white p-6">
      <p className="text-sm text-black/60 mb-1">Monthly Production</p>
      <h3 className="text-2xl font-semibold">$128,400</h3>
    </div>
    <div className="rounded-xl border border-black/10 bg-white p-6">
      <p className="text-sm text-black/60 mb-1">No-show Rate</p>
      <h3 className="text-2xl font-semibold">2.3%</h3>
    </div>
    <div className="rounded-xl border border-black/10 bg-white p-6">
      <p className="text-sm text-black/60 mb-1">New Patients</p>
      <h3 className="text-2xl font-semibold">84</h3>
    </div>
    <div className="md:col-span-3 rounded-xl border border-black/10 bg-white p-6">
      <p className="text-sm text-black/60 mb-3">Last 7 days</p>
      <div className="flex items-end gap-2 h-32">
        {[30, 55, 42, 70, 60, 80, 65].map((v, i) => (
          <div key={i} className="flex-1 bg-black/10 rounded-t" style={{ height: `${v}%` }} />
        ))}
      </div>
    </div>
  </div>
);

const MainSections = () => {
  return (
    <div>
      <Section id="about" title="About Velodent">
        <p className="text-black/80 max-w-3xl">We automate the front desk for high-performing dental clinics. From AI call handling to reminders, insurance, payments, and analytics, Velodent unlocks measurable growth with a 2X ROI guarantee.</p>
      </Section>

      <Section id="services" title="Services">
        <Services />
      </Section>

      <Section id="dashboard" title="Dashboard Preview">
        <DashboardPreview />
        <p className="text-sm text-black/60 mt-3">Sign-in portal coming soon.</p>
      </Section>

      <Section id="case-studies" title="Case Studies">
        <CaseStudies />
      </Section>

      <Section id="testimonials" title="Testimonials">
        <Testimonials />
      </Section>

      <Section id="faq" title="FAQ">
        <div className="rounded-xl border border-black/10 bg-white p-4 md:p-6">
          {[
            {
              q: 'How does the 2X ROI guarantee work?',
              a: 'If Velodent does not generate at least 2X your subscription in measurable value, we make it right.'
            },
            {
              q: 'Will Velodent integrate with our existing system?',
              a: 'Yes. We connect with popular PMS tools and can adapt to your workflow.'
            },
            {
              q: 'Can it reduce no-shows?',
              a: 'Clinics typically see 30–50% fewer no-shows via multi-channel reminders and auto-rescheduling.'
            },
            {
              q: 'Is the AI receptionist secure?',
              a: 'Yes. We follow strict security practices and protect PHI with appropriate safeguards.'
            },
          ].map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact / Book Now">
        <div className="flex items-center gap-4">
          <a
            href="https://cal.com/velodent-ogbkfv/20min"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-black bg-black text-white px-6 py-3 text-sm hover:shadow-lg hover:-translate-y-0.5 transition"
          >
            Book Now
          </a>
          <a href="mailto:hello@velodent.ai" className="underline">hello@velodent.ai</a>
        </div>
      </Section>
    </div>
  );
};

export default MainSections;
