import Link from 'next/link';
import { Heart, Home as HomeIcon, Clock, Truck, MapPin, CheckCircle2, MousePointerClick, Bath, Smile } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';
import { TestimonialSlider } from '@/components/TestimonialSlider';
import { ProcessScroll } from '@/components/ProcessScroll';
import { HeroScroll } from '@/components/HeroScroll';

export const metadata = {
  title: 'Poppy Paws Mobile Dog Grooming | Austin & Georgetown TX',
  description: 'Premium cage-free mobile dog grooming serving Austin, Georgetown, Round Rock & Cedar Park TX. 20+ years experience. Book your doorstep spa appointment today. (512) 677-0703',
  keywords: 'mobile dog grooming Austin TX, mobile pet grooming Georgetown TX, cage-free dog grooming, dog groomer near me Austin',
  alternates: {
    canonical: 'https://poppypawsgrooming.com/',
  },
  openGraph: {
    title: 'Poppy Paws Mobile Dog Grooming | Austin & Georgetown TX',
    description: 'Premium cage-free mobile dog grooming. 20+ years experience. We come to you.',
    images: ['/logoconnombre.png'],
  }
};

export default function Home() {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Poppy Paws Mobile Dog Grooming",
    "telephone": "(512) 677-0703",
    "address": { "@type": "PostalAddress", "addressLocality": "Georgetown", "addressRegion": "TX" },
    "areaServed": ["Georgetown TX", "Austin TX", "Round Rock TX", "Cedar Park TX", "Pflugerville TX", "Leander TX"],
    "openingHours": ["Mo-Fr 08:00-17:00", "Sa 08:00-13:00"],
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "27" }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />

      {/* ── SECCIÓN: HERO ── */}
      <section className="relative w-full">
        <HeroScroll>
          <div className="pointer-events-none pt-[13vh] px-4 md:px-10 lg:px-16 h-full flex flex-col justify-start items-start">
            <div className="text-left max-w-[90vw] md:max-w-none">
              <FadeIn>
                <h1 className="text-[clamp(22px,4vw,52px)] font-playfair font-bold leading-[1.15] text-pp-dark mb-6 md:mb-8 drop-shadow-2xl bg-white/75 px-5 py-5 md:p-8 rounded-[24px] md:rounded-[32px] backdrop-blur-xl border border-white/80 w-fit">
                  M<span className="text-pp-red">o</span>bile D<span className="text-pp-red">o</span>g Gr<span className="text-pp-red">o</span><span className="text-pp-red">o</span>ming <br />
                  <span className="text-[0.5em] font-dm-sans uppercase tracking-[0.3em] block my-2 md:my-3 text-pp-red font-bold italic">in</span>
                  Austin <span className="text-pp-red">&</span> Georgetown
                </h1>
                
                <div className="pointer-events-auto">
                  <Link href="/book" className="bg-pp-red text-white flex items-center justify-center rounded-full px-7 py-4 md:px-10 md:py-5 text-base md:text-lg font-bold shadow-[var(--clay-btn-primary)] hover:bg-pp-red-dark hover:-translate-y-[2px] transition-all font-dm-sans w-fit">
                    Book Your Spa Day →
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </HeroScroll>
      </section>



      {/* ── SECCIÓN: WHY POPPY PAWS ── */}
      <section className="py-24 px-6 relative overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: "url('/5.png')" }}>
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[6px] pointer-events-none z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-pp-red mb-4 font-dm-sans">WHY CHOOSE US</p>
            <h2 className="text-[clamp(26px,5vw,48px)] font-playfair font-bold leading-[1.2] text-pp-dark">Why Families in Austin Choose Poppy Paws</h2>
            <p className="font-dm-sans text-[18px] text-pp-muted max-w-xl mx-auto mt-4">Because your dog is family — and they deserve the best.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={100}>
              <div className="bg-white rounded-[24px] p-10 shadow-[var(--clay-card)] border-t-4 border-pp-red hover:shadow-[var(--clay-card-hover)] hover:-translate-y-2 transition-all duration-300">
                <div className="bg-pp-red-light rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-pp-red" />
                </div>
                <h3 className="text-xl font-dm-sans font-bold text-pp-dark mb-4">For Your Dog</h3>
                <p className="text-base font-dm-sans leading-[1.75] text-pp-body">No cages. No crowded salons. No waiting. Your pup gets 100% one-on-one attention from the same trusted groomer, every single visit.</p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="bg-white rounded-[24px] p-10 shadow-[var(--clay-card)] border-t-4 border-pp-red hover:shadow-[var(--clay-card-hover)] hover:-translate-y-2 transition-all duration-300">
                <div className="bg-pp-red-light rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <HomeIcon className="w-8 h-8 text-pp-red" />
                </div>
                <h3 className="text-xl font-dm-sans font-bold text-pp-dark mb-4">For Your Home</h3>
                <p className="text-base font-dm-sans leading-[1.75] text-pp-body">All the mess stays in our van — not your bathtub, towels, or floors. We bring everything. You just open the door.</p>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="bg-white rounded-[24px] p-10 shadow-[var(--clay-card)] border-t-4 border-pp-red hover:shadow-[var(--clay-card-hover)] hover:-translate-y-2 transition-all duration-300">
                <div className="bg-pp-red-light rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-pp-red" />
                </div>
                <h3 className="text-xl font-dm-sans font-bold text-pp-dark mb-4">For Your Time</h3>
                <p className="text-base font-dm-sans leading-[1.75] text-pp-body">No driving. No waiting rooms. No picking up. We come to you and work around your schedule — mornings, afternoons, even Saturdays.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: HOW IT WORKS (SCROLL SEQUENCE) ── */}
      <section className="relative w-full bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: "url('/5.png')" }}>
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[6px] pointer-events-none z-0"></div>
        <ProcessScroll />
      </section>

      {/* ── SECCIÓN: OUR SERVICES ── */}
      <section className="bg-pp-white py-24 px-6 relative overflow-hidden">
        {/* WATERMARK */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] md:w-full h-full  pointer-events-none bg-no-repeat bg-center bg-cover " style={{ backgroundImage: "url('/4.png')" }}></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn className="text-center mb-16 shadow-">
            <p className="text-xs font-bold uppercase tracking-widest text-pp-red mb-4 font-dm-sans">OUR SERVICES</p>
            <h2 className="text-[clamp(26px,5vw,48px)] font-playfair font-bold leading-[1.2] text-black ">Choose the Perfect Groom for Your Dog</h2>
            <p className="font-dm-sans text-black/60 text-base max-w-lg mx-auto mt-4 text-center">Every service includes double wash, blow-dry, nail trim & ear cleaning.</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <FadeIn delay={100}>
              <div className="bg-[#262626] rounded-3xl p-8 border border-white/10 hover:border-pp-red hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col h-full group">
                <p className="text-3xl font-bold text-pp-red font-dm-sans">From $125</p>
                <div className="w-full h-px bg-white/10 my-4 group-hover:bg-pp-red/50 transition-colors"></div>
                <h3 className="text-xl font-bold text-white mb-3 font-dm-sans">Full Groom</h3>
                <p className="text-white/60 text-sm leading-relaxed font-dm-sans flex-1">
                  The complete spa experience: double wash, blow-dry, full haircut, nail trim, ear cleaning & fragrance.
                </p>
                <div className="mt-4 mb-6">
                  <p className="text-xs font-bold text-pp-red uppercase font-dm-sans mb-1">Best for:</p>
                  <p className="text-white/50 text-xs font-dm-sans">Regular, Doodle & Double-Coat breeds</p>
                </div>
                <Link href="/book" className="text-pp-red font-bold text-sm w-fit inline-flex items-center group-hover:gap-2 transition-all font-dm-sans">
                  <span>Book Full Groom </span> <span>→</span>
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="bg-[#262626] rounded-3xl p-8 border border-white/10 hover:border-pp-red hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col h-full group">
                <p className="text-3xl font-bold text-pp-red font-dm-sans">From $105</p>
                <div className="w-full h-px bg-white/10 my-4 group-hover:bg-pp-red/50 transition-colors"></div>
                <h3 className="text-xl font-bold text-white mb-3 font-dm-sans">Bath & Mini Groom</h3>
                <p className="text-white/60 text-sm leading-relaxed font-dm-sans flex-1">
                  A fresh refresh without the full cut. Double wash, blow-dry, brush-out, nail trim, ear cleaning & light trimming.
                </p>
                <div className="mt-4 mb-6">
                  <p className="text-xs font-bold text-pp-red uppercase font-dm-sans mb-1">Best for:</p>
                  <p className="text-white/50 text-xs font-dm-sans">Short-coat breeds or pups between grooms</p>
                </div>
                <Link href="/book" className="text-pp-red font-bold text-sm w-fit inline-flex items-center group-hover:gap-2 transition-all font-dm-sans">
                  <span>Book Bath & Mini Groom </span> <span>→</span>
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="bg-[#262626] rounded-3xl p-8 border border-white/10 hover:border-pp-gold hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col h-full group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-pp-gold/5 rounded-bl-full pointer-events-none"></div>
                <span className="inline-block bg-pp-gold/20 text-pp-gold rounded-full px-3 py-1 text-[10px] font-bold mb-4 w-max font-dm-sans tracking-wide uppercase">
                  ✨ Premium Add-on
                </span>
                <p className="text-3xl font-bold text-pp-red font-dm-sans">From $200</p>
                <div className="w-full h-px bg-white/10 my-4 group-hover:bg-pp-gold/50 transition-colors"></div>
                <h3 className="text-xl font-bold text-white mb-3 font-dm-sans">Anesthesia-Free Dental Cleaning</h3>
                <p className="text-white/60 text-sm leading-relaxed font-dm-sans flex-1">
                  Gentle cosmetic teeth cleaning while your dog is awake. No sedation needed. Surface plaque & tartar removal.
                </p>
                <Link href="/services#dental" className="text-pp-gold font-bold text-sm w-fit inline-flex items-center group-hover:gap-2 transition-all font-dm-sans mt-6">
                  <span>Learn More </span> <span>→</span>
                </Link>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={400} className="w-full text-center mt-12">
            <Link href="/services" className="text-white underline text-sm inline-block hover:text-pp-red transition-colors font-dm-sans">
              View All Services & Pricing →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── SECCIÓN: REVIEWS ── */}
      <section className="py-24 px-6 relative overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: "url('/5.png')" }}>
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[6px] pointer-events-none z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-pp-red mb-4 font-dm-sans">CLIENT REVIEWS</p>
            <h2 className="text-[clamp(26px,5vw,48px)] font-playfair font-bold leading-[1.2] text-pp-dark">What Our Clients Are Saying</h2>

            <div className="flex items-baseline gap-3 justify-center mt-6">
              <span className="text-6xl font-bold text-pp-dark font-dm-sans tracking-tighter">4.9</span>
              <div className="flex flex-col items-start justify-end gap-1 pb-1">
                <span className="text-pp-gold text-xl tracking-[0.2em]">⭐⭐⭐⭐⭐</span>
                <span className="text-sm text-pp-muted font-dm-sans">(27 Google reviews)</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200} className="mt-16 w-[100vw] relative left-1/2 -translate-x-1/2 overflow-hidden px-6 lg:px-[max(1.5rem,calc((100vw-80rem)/2))]">
            <TestimonialSlider />
          </FadeIn>

          <FadeIn delay={400} className="text-center mt-12 w-full">
            <a href="https://booking.moego.pet/ol/landing?name=PoppyPawsLLC" target="_blank" rel="noreferrer" className="text-pp-red font-bold text-sm inline-block hover:underline font-dm-sans">
              Read All 27 Reviews on Google →
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ── SECCIÓN: MEET THE TEAM ── */}
      <section className="bg-pp-white py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-20">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-pp-red mb-4 font-dm-sans">OUR EXPERTISE</p>
            <h2 className="text-[clamp(32px,5vw,54px)] font-playfair font-bold leading-[1.1] text-pp-dark">
              Meet the Hands Behind <br className="hidden md:block" /> the Transformation
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {/* Team William */}
            <FadeIn delay={100} className="flex flex-col lg:flex-row gap-8 items-start group">
              <div className="relative w-full lg:w-48 xl:w-56 shrink-0 z-10 transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="absolute inset-0 bg-pp-gold-light rounded-[32px] translate-x-3 translate-y-3 z-[-1] opacity-50"></div>
                <img
                  src="/william%20ceo.png"
                  alt="William - Founder & Master Groomer"
                  className="rounded-[32px] w-full aspect-[4/5] object-cover shadow-[var(--clay-image)] border border-white/50"
                />
              </div>
              <div className="flex-1 mt-4 lg:mt-0 xl:pl-4">
                <h3 className="text-3xl font-playfair font-bold text-pp-dark mb-1">William</h3>
                <p className="text-xs uppercase tracking-widest text-pp-gold font-bold font-dm-sans">Founder & Master Groomer</p>
                <div className="w-12 h-[2px] bg-pp-gold my-5"></div>
                <p className="text-base text-pp-body leading-[1.8] font-dm-sans opacity-80">
                  With over 20 years of professional grooming experience, William has seen every coat type and personality. His calm, patient approach is why dogs that used to dread grooming now wag their tails when he pulls up.
                </p>
                <p className="font-playfair italic text-lg text-pp-muted mt-6 relative pl-6 border-l-2 border-pp-gold/30">
                  <span className="absolute -left-2 -top-1 font-playfair text-4xl text-pp-gold/20 leading-none">"</span>
                  I got into grooming because I love animals. After 20 years, I still feel the exact same way.
                </p>
              </div>
            </FadeIn>

            {/* Team Valentina */}
            <FadeIn delay={300} className="flex flex-col lg:flex-row gap-8 items-start group">
              <div className="relative w-full lg:w-48 xl:w-56 shrink-0 z-10 transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="absolute inset-0 bg-pp-red-light rounded-[32px] translate-x-3 translate-y-3 z-[-1] opacity-50"></div>
                <img
                  src="/valentina%20ceo.png"
                  alt="Valentina - Co-Founder"
                  className="rounded-[32px] w-full aspect-[4/5] object-cover shadow-[var(--clay-image)] border border-white/50"
                />
              </div>
              <div className="flex-1 mt-4 lg:mt-0 xl:pl-4">
                <h3 className="text-3xl font-playfair font-bold text-pp-dark mb-1">Valentina</h3>
                <p className="text-xs uppercase tracking-widest text-pp-red font-bold font-dm-sans">Co-Founder & Manager</p>
                <div className="w-12 h-[2px] bg-pp-red my-5"></div>
                <p className="text-base text-pp-body leading-[1.8] font-dm-sans opacity-80">
                  Valentina brings heart and precision to every part of Poppy Paws. As co-founder, she's built a service around what dog owners actually need: reliability, transparency, and genuine love.
                </p>
                <p className="font-playfair italic text-lg text-pp-muted mt-6 relative pl-6 border-l-2 border-pp-red/30">
                  <span className="absolute -left-2 -top-1 font-playfair text-4xl text-pp-red/20 leading-none">"</span>
                  The best part of my day is handing back a dog that went in nervous and comes out happy.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: SERVICE AREA ── */}
      <section className="bg-pp-cream py-32 px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* IZQUIERDA — Mapa */}
            <FadeIn className="order-2 md:order-1 w-full relative group">
              <div className="absolute -inset-4 bg-pp-red/5 rounded-[40px] blur-2xl z-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100"></div>
              <div className="w-full h-[400px] md:h-[500px] rounded-[40px] overflow-hidden shadow-[var(--clay-image)] border border-white z-10 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109865.17646536349!2d-97.77095454179686!3d30.6335133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644d5cbfd6fa33d%3A0xe62e219fb0a9ea07!2sGeorgetown%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Poppy Paws Service Area"
                ></iframe>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pp-red/10 rounded-full blur-3xl -z-10"></div>
            </FadeIn>

            {/* DERECHA — Contenido */}
            <FadeIn delay={200} className="order-1 md:order-2">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-pp-red mb-4 font-dm-sans">SERVICE AREA</p>
              <h2 className="text-[clamp(32px,5vw,54px)] font-playfair font-bold leading-[1.1] text-pp-dark mb-6">At Your Doorstep</h2>
              <p className="text-pp-body text-xl font-dm-sans leading-relaxed opacity-80">
                Poppy Paws is a fully mobile grooming studio. We bring the full spa experience directly to your home in Williamson & Travis County.
              </p>

              <div className="grid grid-cols-2 gap-3 mt-12">
                {['Georgetown', 'Austin', 'Round Rock', 'Cedar Park', 'Pflugerville', 'Leander', 'Liberty Hill', 'Hutto'].map(city => (
                  <div key={city} className="bg-white border border-pp-border/50 rounded-2xl px-3 py-3 md:px-5 md:py-4 text-xs md:text-sm font-bold text-pp-dark shadow-sm hover:border-pp-red hover:shadow-md hover:-translate-y-1 transition-all flex items-center font-dm-sans group">
                    <span className="text-pp-red mr-2 text-base transition-transform group-hover:scale-125">📍</span> {city}
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-pp-red/5 rounded-3xl border border-pp-red/10">
                <p className="text-sm text-pp-muted font-dm-sans font-medium uppercase tracking-widest mb-2">Call to confirm</p>
                <a href="tel:5126770703" className="text-2xl font-black text-pp-red hover:text-pp-red-dark transition-colors font-dm-sans">
                  (512) 677-0703
                </a>
              </div>

              <Link href="/service-area" className="mt-10 inline-flex items-center justify-center bg-pp-dark text-white py-4 px-10 rounded-full text-sm font-bold shadow-[var(--clay-btn-primary)] hover:bg-pp-red hover:-translate-y-[2px] transition-all font-dm-sans tracking-widest">
                VIEW DETAILED MAP →
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN: FINAL CTA ── */}
      <section className="bg-pp-dark py-24 px-6 relative overflow-hidden">
        {/* WATERMARK */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.05] pointer-events-none bg-no-repeat bg-center bg-cover mix-blend-screen" style={{ backgroundImage: "url('/6.png')" }}></div>
        {/* Decorativo pétalos (abstracto) */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-pp-red rounded-full opacity-10 blur-[100px] pointer-events-none z-0"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pp-red rounded-full opacity-10 blur-[100px] pointer-events-none"></div>

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

          <FadeIn delay={400} className="mt-16 text-center">
            <p className="font-playfair italic text-xl text-white/30">
              "A Touch of Bloom in Every Groom."
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
