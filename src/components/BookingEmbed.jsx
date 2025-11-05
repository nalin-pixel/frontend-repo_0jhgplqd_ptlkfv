import React, { useEffect } from 'react';

const BookingEmbed = () => {
  useEffect(() => {
    const scriptId = 'cal-embed';
    if (!document.getElementById(scriptId)) {
      const s = document.createElement('script');
      s.src = 'https://app.cal.com/embed/embed.js';
      s.async = true;
      s.id = scriptId;
      document.head.appendChild(s);
      s.onload = () => {
        if (window.Cal) initCal();
      };
    } else {
      if (window.Cal) initCal();
    }

    function initCal() {
      const C = window;
      const d = document;
      const p = function (a, ar) { a.q.push(ar); };
      C.Cal = C.Cal || function () {
        const cal = C.Cal; const ar = arguments; if (!cal.loaded) {
          cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement('script')).src = 'https://app.cal.com/embed/embed.js'; cal.loaded = true;
        }
        if (ar[0] === 'init') { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === 'string') { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ['initNamespace', namespace]); } else p(cal, ar); return; }
        p(cal, ar);
      };

      C.Cal('init', '20min', { origin: 'https://app.cal.com' });
      C.Cal.ns['20min']('inline', {
        elementOrSelector: '#my-cal-inline-20min',
        config: { layout: 'month_view' },
        calLink: 'velodent-ogbkfv/20min',
      });
      C.Cal.ns['20min']('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    }
  }, []);

  return (
    <section className="relative" id="booking">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur p-4 md:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-4">Book a 20-minute Demo</h2>
          <div id="my-cal-inline-20min" style={{ width: '100%', height: '100%', overflow: 'scroll' }} />
        </div>
      </div>
    </section>
  );
};

export default BookingEmbed;
