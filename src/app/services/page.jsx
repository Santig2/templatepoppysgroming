import Link from 'next/link';
import { FadeIn } from '@/components/FadeIn';

export const metadata = {
  title: 'Mobile Dog Grooming Services & Prices | Poppy Paws Austin TX',
  description: 'Full groom, bath & trim, anesthesia-free dental cleaning & add-ons. Transparent pricing for all sizes. Mobile grooming serving Austin & Georgetown TX.',
};

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO INTERNO ── */}
      <section className="bg-pp-dark min-h-[320px] flex flex-col items-center justify-center pt-24 pb-16 px-6 relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-10 right-10 w-96 h-96 bg-white/40 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 bg-no-repeat bg-right-top bg-contain" style={{ backgroundImage: "url('/4.png')" }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
          <FadeIn>
            <p className="text-xs text-pp-muted font-dm-sans mb-4 uppercase tracking-widest">
              <Link href="/" className="hover:text-pp-red text-white transition-colors">Home</Link> / <Link href="/services" className="hover:text-pp-red text-white transition-colors">Services</Link>
            </p>
            <h1 className="text-[clamp(32px,6vw,56px)] font-playfair font-bold text-pp-light text-white leading-[1.1] mb-6">
              Every Dog. Every Coat. Every Size.
            </h1>
            <p className="text-pp-light text-lg max-w-lg mx-auto text-white font-dm-sans">
              Transparent pricing, no hidden fees. Premium mobile grooming at your doorstep.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── SERVICIOS CONTAINER ── */}
      <section className="bg-pp-cream py-24 px-6 relative overflow-hidden">
        {/* WATERMARK BACKGROUND (7.png) */}
        <div className="absolute inset-0 pointer-events-none bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: "url('/7.png')" }}></div>

        <div className="max-w-6xl mx-auto space-y-16 lg:space-y-24 relative z-10">

          {/* ── SERVICIO 1: FULL GROOM REGULAR ── */}
          <div id="full-groom" className="bg-pp-dark rounded-[40px] shadow-[0_12px_40px_rgba(0,0,0,0.15)] p-8 md:p-12 lg:p-16 border border-pp-dark/80 relative overflow-hidden scroll-mt-24">
            <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start relative z-10">

              {/* IZQUIERDA: Info */}
              <FadeIn className="flex-1 w-full md:w-[60%]">
                <p className="text-xs font-bold uppercase tracking-widest text-pp-red mb-3 font-dm-sans">FULL GROOM</p>
                <h2 className="text-3xl md:text-[40px] font-playfair font-bold text-white leading-[1.2] mb-5">
                  Full Groom — Regular Coat
                </h2>
                <p className="text-white/80 leading-[1.75] font-dm-sans text-base mb-8">
                  The complete Poppy Paws spa experience. Includes full body haircut, double bath, blow-dry, brush-out, nail trim, ear cleaning & finishing fragrance.
                </p>

                <p className="font-bold text-white text-sm uppercase mb-4 font-dm-sans">What's included:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {['Double wash bath', 'Blow-dry & brush-out', 'Full body haircut', 'Nail trim', 'Ear cleaning', 'Anal gland expression (on request)', 'Finishing fragrance'].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-white/80 font-dm-sans">
                      <span className="text-pp-success font-bold mt-0.5">✓</span> {item}
                    </li>
                  ))}
                </ul>

                <div className="bg-white/5 border border-white/10 p-6 rounded-[24px]">
                  <p className="font-bold text-pp-red text-sm mb-3 font-dm-sans uppercase">Best for:</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Short-coat', 'Smooth-coat', 'Manageable long-hair breeds'].map(breed => (
                      <span key={breed} className="inline-block bg-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/20 font-dm-sans">
                        {breed}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-white/50 italic font-dm-sans leading-relaxed">
                    *Excludes curly-coated or double-coated breeds
                  </p>
                </div>
              </FadeIn>

              {/* DERECHA: Preecio */}
              <FadeIn delay={200} className="w-full md:w-[40%]">
                <div className="bg-white/5 backdrop-blur-md rounded-[32px] overflow-hidden border border-white/10">
                  <div className="bg-pp-red px-6 py-5 flex justify-between items-center text-white font-bold text-sm font-dm-sans rounded-t-[32px]">
                    <span>Size</span>
                    <span>Price</span>
                  </div>
                  <div className="flex flex-col p-2 space-y-1">
                    {[
                      { size: 'Small', price: '$125' },
                      { size: 'Medium', price: '$140' },
                      { size: 'Large', price: '$160' },
                      { size: 'XL', price: '$180' },
                      { size: 'XXL', price: '$200' },
                    ].map((row, idx) => (
                      <div key={idx} className={`px-6 py-4 flex justify-between items-center ${idx % 2 === 0 ? 'bg-white/10' : 'bg-transparent'} text-sm font-dm-sans rounded-2xl`}>
                        <span className="text-white/90 font-medium">{row.size}</span>
                        <span className="font-bold text-pp-red text-lg">{row.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-6 pt-2 bg-transparent text-center">
                    <Link href="/book" className="inline-block w-full text-center bg-pp-red text-white py-3.5 rounded-full text-sm font-bold shadow-[var(--clay-btn-primary)] hover:bg-pp-red-dark hover:-translate-y-[2px] transition-all font-dm-sans mt-4">
                      Book Full Groom →
                    </Link>
                  </div>
                </div>
              </FadeIn>

            </div>
          </div>

          {/* ── SERVICIO 2: FULL GROOM DOODLE ── */}
          <div className="bg-pp-dark rounded-[40px] shadow-[0_12px_40px_rgba(0,0,0,0.15)] p-8 md:p-12 lg:p-16 border border-pp-dark/80 relative overflow-hidden">
            <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start relative z-10">

              {/* IZQUIERDA: Precio (Espejado) */}
              <FadeIn className="w-full md:w-[40%] order-2 md:order-1">
                <div className="bg-white/5 backdrop-blur-md rounded-[32px] overflow-hidden border border-white/10">
                  <div className="bg-pp-red px-6 py-5 flex justify-between items-center text-white font-bold text-sm font-dm-sans rounded-t-[32px]">
                    <span>Size</span>
                    <span>Price</span>
                  </div>
                  <div className="flex flex-col p-2 space-y-1">
                    {[
                      { size: 'Small', price: '$140' },
                      { size: 'Medium', price: '$160' },
                      { size: 'Large', price: '$180' },
                      { size: 'XL', price: '$205' },
                      { size: 'XXL', price: '$230' },
                    ].map((row, idx) => (
                      <div key={idx} className={`px-6 py-4 flex justify-between items-center ${idx % 2 === 0 ? 'bg-white/10' : 'bg-transparent'} text-sm font-dm-sans rounded-2xl`}>
                        <span className="text-white/90 font-medium">{row.size}</span>
                        <span className="font-bold text-pp-red text-lg">{row.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-6 pt-2 bg-transparent text-center">
                    <Link href="/book" className="inline-block w-full text-center bg-pp-red text-white py-3.5 rounded-full text-sm font-bold shadow-[var(--clay-btn-primary)] hover:bg-pp-red-dark hover:-translate-y-[2px] transition-all font-dm-sans mt-4">
                      Book Doodle Groom →
                    </Link>
                  </div>
                </div>
              </FadeIn>

              {/* DERECHA: Info */}
              <FadeIn delay={200} className="flex-1 w-full md:w-[60%] order-1 md:order-2">
                <p className="text-xs font-bold uppercase tracking-widest text-pp-red mb-3 font-dm-sans">FULL GROOM</p>
                <h2 className="text-3xl md:text-[40px] font-playfair font-bold text-white leading-[1.2] mb-5">
                  Full Groom — Doodle & Double Coat
                </h2>
                <p className="text-white/80 leading-[1.75] font-dm-sans text-base mb-8">
                  Designed specifically for the unique and demanding coat textures of Doodles, Poodles, and thick double-coated breeds. Includes specialized brushing techniques, deshedding (if applicable), hand-scissoring, double wash, blow-dry, nail trim, ear cleaning & fragrance.
                </p>

                <div className="bg-white/5 border border-white/10 p-6 rounded-[24px]">
                  <p className="font-bold text-pp-red text-sm mb-3 font-dm-sans uppercase">Best for:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Goldendoodles', 'Labradoodles', 'Poodles', 'Aussies', 'Huskies', 'Golden Retrievers', 'Thick Coated Breeds'].map(breed => (
                      <span key={breed} className="inline-block bg-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-full font-dm-sans border border-white/20">
                        {breed}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>

            </div>
          </div>

          {/* ── SERVICIO 3: BATH & MINI GROOM ── */}
          <div id="bath-mini-groom" className="bg-pp-dark rounded-[40px] shadow-[0_12px_40px_rgba(0,0,0,0.15)] p-8 md:p-12 lg:p-16 border border-pp-dark/80 relative overflow-hidden">
            <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start relative z-10">

              {/* IZQUIERDA: Info */}
              <FadeIn className="flex-1 w-full md:w-[60%]">
                <p className="text-xs font-bold uppercase tracking-widest text-pp-red mb-3 font-dm-sans">MAINTENANCE</p>
                <h2 className="text-3xl md:text-[40px] font-playfair font-bold text-white leading-[1.2] mb-5">
                  Bath & Mini Groom
                </h2>
                <p className="text-white/80 leading-[1.75] font-dm-sans text-base mb-8">
                  A fresh refresh without the full cut. Ideal for short-coat breeds that only need a bath, or for long-haired pups between full grooms.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 mb-8">
                  <div className="flex-1">
                    <p className="font-bold text-white text-sm uppercase mb-3 font-dm-sans">Included:</p>
                    <ul className="space-y-2">
                      {['Double wash', 'Blow-dry', 'Brush-out', 'Nail trim', 'Ear cleaning', 'Light trim (face, paws, sanitary)'].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-white/80 font-dm-sans">
                          <span className="text-pp-success font-bold mt-0.5">✓</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-pp-red text-sm uppercase mb-3 font-dm-sans">Not Included:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-white/50 font-dm-sans">
                        <span className="font-bold mt-0.5">✕</span> Full body haircut
                      </li>
                    </ul>
                  </div>
                </div>
              </FadeIn>

              {/* DERECHA: Preecio */}
              <FadeIn delay={200} className="w-full md:w-[40%]">
                <div className="bg-white/5 backdrop-blur-md rounded-[32px] overflow-hidden border border-white/10">
                  <div className="bg-pp-red px-6 py-5 flex justify-between items-center text-white font-bold text-sm font-dm-sans rounded-t-[32px]">
                    <span>Size</span>
                    <span>Price</span>
                  </div>
                  <div className="flex flex-col p-2 space-y-1">
                    {[
                      { size: 'Small', price: '$105' },
                      { size: 'Medium', price: '$120' },
                      { size: 'Large', price: '$140' },
                      { size: 'XL', price: '$160' },
                      { size: 'XXL', price: '$180' },
                    ].map((row, idx) => (
                      <div key={idx} className={`px-6 py-4 flex justify-between items-center ${idx % 2 === 0 ? 'bg-white/10' : 'bg-transparent'} text-sm font-dm-sans rounded-2xl`}>
                        <span className="text-white/90 font-medium">{row.size}</span>
                        <span className="font-bold text-pp-red text-lg">{row.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-6 text-center bg-transparent">
                    <Link href="/book" className="inline-block w-full text-center bg-pp-red text-white py-3.5 rounded-full text-sm font-bold shadow-[var(--clay-btn-primary)] hover:bg-pp-red-dark hover:-translate-y-[2px] transition-all font-dm-sans">
                      Book Bath & Mini Groom →
                    </Link>
                  </div>
                </div>
              </FadeIn>

            </div>
          </div>

          {/* ── SERVICIO 4: DENTAL CLEANING (Premium) ── */}
          <div id="dental" className="bg-pp-dark rounded-[40px] shadow-[0_12px_40px_rgba(0,0,0,0.15)] p-8 md:p-12 lg:p-16 border border-pp-gold/30 relative overflow-hidden scroll-mt-20">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pp-gold rounded-full opacity-[0.03] blur-[100px] pointer-events-none"></div>

            <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start relative z-10">

              {/* IZQUIERDA: Info (Fondo Oscuro) */}
              <FadeIn className="flex-1 w-full md:w-[60%]">
                <span className="inline-block bg-pp-gold/20 text-pp-gold rounded-full px-4 py-1.5 text-xs font-bold mb-6 tracking-wide uppercase font-dm-sans border border-pp-gold/30">
                  ✨ PREMIUM SERVICE
                </span>
                <h2 className="text-3xl md:text-[40px] font-playfair font-bold text-white leading-[1.2] mb-5">
                  Anesthesia-Free Dental Cleaning
                </h2>
                <p className="text-white/70 leading-[1.75] font-dm-sans text-lg mb-8">
                  A gentle cosmetic teeth cleaning performed while your dog is awake and comfortable. No sedation, no anesthesia, no scary vet setting.
                </p>

                <ul className="flex flex-col gap-4 mb-8">
                  {['Surface plaque removal', 'Tartar removal', 'Fresh breath treatment'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-base text-white/90 font-dm-sans bg-white/5 px-4 py-3 rounded-xl border border-white/10">
                      <span className="text-pp-gold font-bold text-lg leading-none">✓</span> {item}
                    </li>
                  ))}
                </ul>

                <div className="bg-pp-red/10 border border-pp-red/20 p-5 rounded-2xl">
                  <p className="italic text-white/50 text-xs font-dm-sans leading-relaxed">
                    Disclaimer: This service does not replace veterinary dental care and does not include extractions, X-rays, or probing below the gum line. For cooperative, calm dogs only.
                  </p>
                </div>
              </FadeIn>

              {/* DERECHA: Precio */}
              <FadeIn delay={200} className="w-full md:w-[40%]">
                <div className="bg-white/5 backdrop-blur-md rounded-[32px] border border-white/10 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>

                  <div className="relative z-10">
                    <div className="bg-pp-gold/80 backdrop-blur-md px-6 py-4 flex justify-between items-center text-pp-dark font-bold text-sm font-dm-sans rounded-t-[32px]">
                      <span>Size</span>
                      <span>Starting Price</span>
                    </div>
                    <div className="flex flex-col text-white p-2 space-y-1">
                      {[
                        { size: 'Small', price: '$200' },
                        { size: 'Medium', price: '$250' },
                        { size: 'Large', price: '$300' },
                        { size: 'XL', price: '$350' },
                      ].map((row, idx) => (
                        <div key={idx} className={`px-6 py-4 flex justify-between items-center ${idx % 2 === 0 ? 'bg-white/10' : 'bg-transparent'} text-sm font-dm-sans rounded-2xl`}>
                          <span className="text-white/80 font-medium">{row.size}</span>
                          <span className="font-bold text-pp-gold text-lg">{row.price}</span>
                        </div>
                      ))}
                    </div>
                    <div className="p-6">
                      <Link href="/book" className="inline-block w-full text-center bg-pp-gold text-pp-dark py-3.5 rounded-full text-sm font-bold shadow-lg hover:bg-white hover:-translate-y-[2px] transition-all font-dm-sans">
                        Request Dental Cleaning →
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>

            </div>
          </div>

          {/* ── SERVICIO 5: ADD ONS ── */}
          <div id="add-ons" className="pt-12">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-[40px] font-playfair font-bold text-pp-dark mb-4">
                Optional Add-Ons
              </h2>
              <p className="text-pp-body text-base font-dm-sans">Additional services to complete your pet's spa day.</p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FadeIn delay={100}>
                <div className="bg-pp-dark p-8 rounded-[24px] shadow-[var(--clay-card)] hover:-translate-y-1 transition-transform h-full flex flex-col">
                  <h3 className="text-xl font-bold  text-white mb-2 font-dm-sans">Matting Fee</h3>
                  <p className="text-2xl font-bold text-pp-red mb-4 font-dm-sans">$35 <span className="text-sm text-pp-muted font-normal">/hour</span></p>
                  <div className="w-full h-px bg-pp-border/50 mb-4"></div>
                  <p className="text-sm text-pp-muted text-white leading-relaxed font-dm-sans">
                    For moderate to severe matting. Extra time, care & equipment required. We will always inform you before proceeding.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="bg-pp-dark p-8 rounded-[24px] shadow-[var(--clay-card)] hover:-translate-y-1 transition-transform h-full flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2 font-dm-sans">Anal Gland Expression</h3>
                  <p className="text-2xl font-bold text-pp-success mb-4 font-dm-sans">Included <span className="text-sm text-pp-muted font-normal">on request</span></p>
                  <div className="w-full h-px bg-pp-border/50 mb-4"></div>
                  <p className="text-sm text-pp-muted text-white leading-relaxed font-dm-sans">
                    Available at no extra charge with all Full Groom and Bath & Mini Groom services. Just let us know.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={300}>
                <div className="bg-pp-dark p-8 rounded-[24px] shadow-[var(--clay-card)] hover:-translate-y-1 transition-transform h-full flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2 font-dm-sans">Flea & Tick Treatment</h3>
                  <p className="text-2xl font-bold text-pp-red mb-4 font-dm-sans">+$25</p>
                  <div className="w-full h-px bg-pp-border/50 mb-4"></div>
                  <p className="text-sm text-pp-muted text-white leading-relaxed font-dm-sans">
                    A specialized, gentle bath treatment designed to kill fleas and ticks on contact, leaving your dog's coat clean and pest-free.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>

        </div>
      </section>

      {/* ── FINAL CTA (Mismo de la Homepage) ── */}
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
