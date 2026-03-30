import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';

export const metadata = {
  title: 'Mobile Dog Grooming Service Area | Williamson & Travis County TX',
  description: 'Poppy Paws serves Georgetown, Austin, Round Rock, Cedar Park, Pflugerville, Leander, Liberty Hill & Hutto TX. Check if we come to your area.',
};

export default function ServiceAreaPage() {
  const cities = [
    { name: 'Georgetown, TX', isHome: true, desc: 'Our home base. Full coverage.' },
    { name: 'Austin, TX', isHome: false, desc: 'North & Central Austin coverage.' },
    { name: 'Round Rock, TX', isHome: false, desc: 'Full coverage.' },
    { name: 'Cedar Park, TX', isHome: false, desc: 'Full coverage.' },
    { name: 'Pflugerville, TX', isHome: false, desc: 'Full coverage.' },
    { name: 'Leander, TX', isHome: false, desc: 'Full coverage.' },
    { name: 'Liberty Hill, TX', isHome: false, desc: 'Selected neighborhoods.' },
    { name: 'Hutto, TX', isHome: false, desc: 'Selected neighborhoods.' },
  ];

  return (
    <>
      {/* ── HERO INTERNO ── */}
      <section className="bg-pp-cream pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Decorativo y Background */}
        <div className="absolute inset-0   pointer-events-none   " style={{ backgroundImage: "url('/4.png')", backgroundSize: "cover" }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/40 rounded-full blur-3xl pointer-events-none z-0"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 w-full mb-12">
          <FadeIn>
            <p className="text-sm md:text-base font-bold text-pp-muted font-dm-sans mb-6 uppercase tracking-widest">
              <Link href="/" className="hover:text-pp-red transition-colors">Home</Link> / Service Area
            </p>
            <h1 className="text-[clamp(48px,8vw,80px)] font-playfair font-bold text-pp-dark leading-[1.1] mb-8">
              We Come to You
            </h1>
            <p className="text-pp-dark/80 text-xl md:text-2xl max-w-2xl mx-auto font-dm-sans leading-relaxed">
              Serving dog families across Williamson & Travis County, Texas.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── MAPA + CIUDADES (GRID 60/40) ── */}
      <section className="bg-white py-16 px-6 relative z-10 w-full min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

            {/* Lado Izquierdo: Mapa */}
            <FadeIn className="w-full lg:w-[60%] order-2 lg:order-1">
              <div className="rounded-[32px] overflow-hidden shadow-[var(--clay-image)] border-4 border-white relative h-[500px] bg-pp-cream">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109865.17646536349!2d-97.77095454179686!3d30.6335133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644d5cbfd6fa33d%3A0xe62e219fb0a9ea07!2sGeorgetown%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Poppy Paws Service Area Map"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </FadeIn>

            {/* Lado Derecho: Ciudades */}
            <FadeIn delay={200} className="w-full lg:w-[40%] order-1 lg:order-2 flex flex-col justify-center">
              <h2 className="text-xs font-bold uppercase tracking-widest text-pp-red mb-3 font-dm-sans">
                WHERE WE OPERATE
              </h2>
              <h3 className="text-3xl md:text-4xl font-playfair font-bold text-pp-dark leading-[1.2] mb-8">
                Cities We Serve
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cities.map((city, idx) => (
                  <div key={idx} className="bg-pp-cream text-pp-dark border border-pp-border rounded-xl p-4 shadow-sm hover:border-pp-red/50 hover:shadow-md transition-all font-dm-sans group relative overflow-hidden">
                    {city.isHome && (
                      <span className="absolute top-0 right-0 bg-pp-red text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-bl-lg">
                        Home Base
                      </span>
                    )}
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin size={16} className={`${city.isHome ? 'text-pp-red' : 'text-pp-muted group-hover:text-pp-red transition-colors'}`} />
                      <span className="font-bold text-sm">{city.name}</span>
                    </div>
                    <p className="text-xs text-pp-muted pl-6">{city.desc}</p>
                  </div>
                ))}
              </div>

              {/* Fuera del área */}
              <div className="mt-10 bg-pp-red-light/50 border border-pp-red/20 rounded-2xl p-6">
                <h4 className="font-bold text-pp-dark text-sm mb-2 font-dm-sans">Don't see your city?</h4>
                <p className="text-sm text-pp-body leading-relaxed font-dm-sans mb-4">
                  We occasionally travel outside our primary area for a small travel fee. Give us a call to check our availability.
                </p>
                <a href="tel:5126770703" className="inline-flex items-center gap-2 text-pp-red font-bold text-sm hover:underline font-dm-sans">
                  <Phone size={16} /> (512) 677-0703
                </a>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="bg-pp-dark py-24 px-6 relative overflow-hidden">
        {/* WATERMARK */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.05] pointer-events-none bg-no-repeat bg-center bg-cover mix-blend-screen z-0" style={{ backgroundImage: "url('/6.png')" }}></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-pp-red mb-4 font-dm-sans">GET STARTED TODAY</p>
            <h2 className="text-[clamp(32px,6vw,54px)] font-playfair font-bold leading-[1.1] text-white">
              Ready to Treat Your Dog to <br className="hidden md:block" />
              the Poppy Paws Experience?
            </h2>
            <p className="font-dm-sans text-white/60 text-[18px] mt-6 max-w-lg mx-auto">
              Limited spots available. New clients welcome in Austin, Georgetown & surrounding areas.
            </p>
          </FadeIn>

          <FadeIn delay={200} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/book" className="w-full sm:w-auto bg-pp-red text-white flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold shadow-[var(--clay-btn-primary)] hover:bg-pp-red-dark hover:-translate-y-[2px] transition-all font-dm-sans">
              Book My Dog's Appointment →
            </Link>
            <a href="tel:5126770703" className="w-full sm:w-auto border-2 border-white/40 text-white flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold hover:bg-white hover:text-pp-dark hover:border-white transition-all font-dm-sans">
              Call (512) 677-0703
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
