import Link from 'next/link';
import { Shield, Sparkles, Clock, Heart } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';

export const metadata = {
  title: 'About Us | Poppy Paws Mobile Grooming Austin',
  description: 'Learn about William and Cris, the founders of Poppy Paws Mobile Dog Grooming. 20+ years of experience bringing stress-free pet care to Central Texas.',
};

export default function AboutPage() {
  return (
    <>
      {/* ── OUR STORY ── */}
      <section className="bg-pp-cream pt-32 pb-24 px-6 relative overflow-hidden">
        {/* WATERMARK */}
        <div className="absolute bottom-0 left-0 w-1/1 h-full pointer-events-none bg-no-repeat bg-left-bottom bg-contain" style={{ backgroundImage: "url('/5.png')" }}></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn className="text-center mb-16">
            <p className="text-xs text-pp-muted font-dm-sans mb-4 uppercase tracking-widest">
              <Link href="/" className="hover:text-pp-red transition-colors">Home</Link> / About Us
            </p>
            <h1 className="text-[clamp(32px,6vw,56px)] font-playfair font-bold text-pp-dark leading-[1.1] mb-6">
              A Touch of Bloom <br className="hidden md:block" /> in Every Groom.
            </h1>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-20">
            {/* IZQUIERDA: Fotos */}
            <FadeIn className="relative h-[500px] w-full max-w-md mx-auto md:mx-0">
              <div className="absolute top-0 left-0 w-[80%] h-[80%] rounded-3xl overflow-hidden shadow-[var(--clay-image)] z-10 border-4 border-white">
                <img
                  src="/william%20ceo.png"
                  alt="William grooming a dog"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-[60%] h-[60%] rounded-3xl overflow-hidden shadow-[var(--clay-image)] z-20 border-4 border-white">
                <img
                  src="/valentina%20ceo.png"
                  alt="Cris posing with a dog"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Stamp */}
              <div className="absolute top-10 -right-6 w-24 h-24 bg-pp-gold text-white rounded-full flex flex-col items-center justify-center font-bold font-dm-sans rotate-[15deg] shadow-lg z-30">
                <span className="text-xl leading-none">20+</span>
                <span className="text-[10px] uppercase tracking-wider">Years</span>
              </div>
            </FadeIn>

            {/* DERECHA: Texto Historia */}
            <FadeIn delay={200}>
              <p className="text-xs font-bold uppercase tracking-widest text-pp-red mb-3 font-dm-sans">OUR STORY</p>
              <h2 className="text-3xl md:text-[40px] font-playfair font-bold text-pp-dark leading-[1.2] mb-6">
                Meet William and valentina
              </h2>
              <div className="space-y-4 text-base text-pp-body leading-[1.8] font-dm-sans">
                <p>
                  Poppy Paws wasn't started in a boardroom. It was born from a simple realization after two decades in the pet care industry: <strong>dogs hate salons.</strong>
                </p>
                <p>
                  For years, William worked as a master groomer, honing his skills on every breed and coat type imaginable. While he loved the grooming process, he saw the stress that traditional salons put on dogs—cages, loud dryers, barking, and long wait times.
                </p>
                <p>
                  Together with Valentina, they decided there had to be a better way. They envisioned a service that was as convenient for the owners as it was calming for the dogs. A service where the groomer comes to you, and your dog receives uninterrupted, one-on-one attention from start to finish.
                </p>
                <p>
                  Today, Poppy Paws serves hundreds of happy families across Austin and Georgetown. We bring our fully-equipped, climate-controlled van right to your driveway. No cages, no stress, just a premium spa day for your best friend.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── OUR VALUES (GRID 2x2) ── */}
      <section className="bg-white py-24 px-6 relative overflow-hidden">
        {/* WATERMARK */}
        <div className="absolute bottom-0 left-0 w-1/3 h-full opacity-[0.03] pointer-events-none bg-no-repeat bg-left-bottom bg-contain" style={{ backgroundImage: "url('/5.png')" }}></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-pp-red mb-4 font-dm-sans">OUR VALUES</p>
            <h2 className="text-[clamp(26px,5vw,48px)] font-playfair font-bold leading-[1.2] text-pp-dark">
              What Drives Us Every Day
            </h2>
            <p className="font-dm-sans text-[18px] text-pp-muted max-w-xl mx-auto mt-4">
              We built Poppy Paws on four core principles that we never compromise on.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <FadeIn delay={100}>
              <div className="bg-pp-cream-dark/30 p-10 rounded-[24px] border border-pp-border hover:border-pp-red/30 hover:bg-white hover:shadow-[var(--clay-card-hover)] transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-pp-border text-pp-red">
                  <Shield size={28} />
                </div>
                <h3 className="text-xl font-bold text-pp-dark mb-3 font-dm-sans">Unwavering Trust</h3>
                <p className="text-sm text-pp-body leading-relaxed font-dm-sans">
                  You are welcoming us into your driveway and entrusting us with a member of your family. We are fully insured, highly trained, and completely transparent about our process.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="bg-pp-cream-dark/30 p-10 rounded-[24px] border border-pp-border hover:border-pp-red/30 hover:bg-white hover:shadow-[var(--clay-card-hover)] transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-pp-border text-pp-red">
                  <Sparkles size={28} />
                </div>
                <h3 className="text-xl font-bold text-pp-dark mb-3 font-dm-sans">Premium Quality</h3>
                <p className="text-sm text-pp-body leading-relaxed font-dm-sans">
                  We don't cut corners. From our high-end shampoos tailored to coat types, to our top-of-the-line grooming equipment, every product we use is the best available.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="bg-pp-cream-dark/30 p-10 rounded-[24px] border border-pp-border hover:border-pp-red/30 hover:bg-white hover:shadow-[var(--clay-card-hover)] transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-pp-border text-pp-red">
                  <Clock size={28} />
                </div>
                <h3 className="text-xl font-bold text-pp-dark mb-3 font-dm-sans">Ultimate Convenience</h3>
                <p className="text-sm text-pp-body leading-relaxed font-dm-sans">
                  Your time is valuable. By coming directly to your home or office, we save you hours of driving, dropping off, and picking up. We work around your schedule.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="bg-pp-cream-dark/30 p-10 rounded-[24px] border border-pp-border hover:border-pp-red/30 hover:bg-white hover:shadow-[var(--clay-card-hover)] transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-pp-border text-pp-red">
                  <Heart size={28} />
                </div>
                <h3 className="text-xl font-bold text-pp-dark mb-3 font-dm-sans">Compassionate Care</h3>
                <p className="text-sm text-pp-body leading-relaxed font-dm-sans">
                  Every dog is different. We take the time to understand their anxieties, physical limitations, and personality. We never rush, ensuring a calm, cage-free environment.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── INSIDE THE VAN ── */}
      <section className="bg-pp-dark py-24 px-6 relative overflow-hidden">
        {/* WATERMARK */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.05] pointer-events-none bg-no-repeat bg-center bg-cover mix-blend-screen z-0" style={{ backgroundImage: "url('/6.png')" }}></div>


        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          {/* IZQUIERDA: Texto */}
          <FadeIn className="w-full lg:w-1/2">
            <p className="text-xs font-bold uppercase tracking-widest text-pp-red mb-3 font-dm-sans">OUR EQUIPMENT</p>
            <h2 className="text-3xl md:text-[40px] font-playfair font-bold text-white leading-[1.2] mb-6">
              Inside the Poppy Paws Van
            </h2>
            <p className="text-white/70 leading-[1.75] font-dm-sans text-base mb-8">
              Our state-of-the-art mobile grooming van is a fully self-contained salon on wheels. We bring our own power, fresh water, and climate control directly to your driveway.
            </p>

            <ul className="space-y-4 font-dm-sans">
              {[
                'Heated water for comfortable baths year-round',
                'A/C and heat for a perfect climate inside',
                'Electric grooming table that lowers for large/senior dogs',
                'High-velocity dryers to remove loose undercoat',
                'Premium hypoallergenic & specialty shampoos'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-pp-red/20 text-pp-red flex items-center justify-center text-xs shrink-0 mt-0.5">✓</div>
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Link href="/book" className="inline-block bg-pp-red text-white py-4 px-8 rounded-full text-sm font-bold shadow-[var(--clay-btn-primary)] hover:bg-pp-red-dark hover:-translate-y-[2px] transition-all font-dm-sans">
                Book a Driveway Spa Day →
              </Link>
            </div>
          </FadeIn>

          {/* DERECHA: Imagen Van */}
          <FadeIn delay={200} className="w-full lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <div className="absolute inset-0 bg-pp-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img
                src="/perritoconlogodeempresa.png"
                alt="Poppy Paws Mobile Grooming Van Interior"
                className="w-full h-auto object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
