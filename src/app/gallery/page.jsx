import Link from 'next/link';
import { FadeIn } from '@/components/FadeIn';
import { GalleryGrid } from '@/components/GalleryGrid';
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider';

export const metadata = {
  title: 'Grooming Gallery | Poppy Paws Mobile Grooming Austin',
  description: 'See the Poppy Paws Difference. View our gallery of happy, freshly-groomed dogs across Austin and Georgetown TX.',
};

export default function GalleryPage() {
  return (
    <>
      {/* ── HERO INTERNO ── */}
      <section className="bg-pp-cream pt-32 pb-16 px-6 relative overflow-hidden">
        {/* Decorativo Abstracto */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/40 rounded-full blur-3xl rounded-bl-full pointer-events-none z-0"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none bg-no-repeat bg-right-top bg-contain" style={{ backgroundImage: "url('/2.png')" }}></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 w-full mb-12">
          <FadeIn>
            <p className="text-xs text-pp-muted font-dm-sans mb-4 uppercase tracking-widest">
              <Link href="/" className="hover:text-pp-red transition-colors">Home</Link> / Gallery
            </p>
            <h1 className="text-[clamp(32px,6vw,56px)] font-playfair font-bold text-pp-dark leading-[1.1] mb-6">
              Happy Tails Gallery
            </h1>
            <p className="text-pp-muted text-lg max-w-lg mx-auto font-dm-sans">
              A collection of our favorite makeovers, fresh styles, and wagging tails across Central Texas.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── MASONRY GALLERY & FILTERS ── */}
      <section className="bg-white py-16 px-6 border-t border-pp-border relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/3 h-full opacity-[0.02] pointer-events-none bg-no-repeat bg-left-bottom bg-contain" style={{ backgroundImage: "url('/5.png')" }}></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <GalleryGrid />
        </div>
      </section>

      {/* ── BEFORE / AFTER SHOWCASE ── */}
      <section className="bg-pp-dark py-24 px-6 relative overflow-hidden">
        {/* Abstract Dark Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pp-red rounded-full opacity-5 blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.05] pointer-events-none bg-no-repeat bg-center bg-cover mix-blend-screen" style={{ backgroundImage: "url('/1.png')" }}></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <FadeIn className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-pp-red mb-4 font-dm-sans">THE TRANSFORMATION</p>
            <h2 className="text-[clamp(26px,5vw,48px)] font-playfair font-bold leading-[1.2] text-white">
              See the Poppy Paws Difference
            </h2>
            <p className="font-dm-sans text-white/60 text-[18px] max-w-xl mx-auto mt-4">
              Slide to see how a premium, one-on-one grooming session brings out the best in every dog.
            </p>
          </FadeIn>

          <FadeIn delay={200} className="w-full max-w-4xl mx-auto">
            {/* Fallback image passing if true local images aren't present yet */}
            <BeforeAfterSlider
              beforeImage="/antes-despues1.png"
              afterImage="/antes-despues2.png"
              // Add a generic dog URL for the demo in case local images do not exist
              beforeLabel="Overgrown & Matted"
              afterLabel="Fresh, Fluffy & Clean"
            />
          </FadeIn>

          <FadeIn delay={400} className="mt-16 text-center">
            <Link href="/book" className="inline-block bg-pp-red text-white py-4 px-8 rounded-full text-sm font-bold shadow-[var(--clay-btn-primary)] hover:bg-pp-red-dark hover:-translate-y-[2px] transition-all font-dm-sans">
              Book Your Dog's Makeover →
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
