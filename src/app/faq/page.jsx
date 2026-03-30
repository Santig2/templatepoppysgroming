import Link from 'next/link';
import { FadeIn } from '@/components/FadeIn';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata = {
  title: 'FAQ — Mobile Dog Grooming Questions | Poppy Paws Austin TX',
  description: "Answers to the most common questions about Poppy Paws mobile dog grooming: pricing, service areas, booking, what's included. Austin & Georgetown TX.",
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "How does mobile dog grooming work?", "acceptedAnswer": {"@type": "Answer", "text": "We bring a fully-equipped Poppy Paws grooming van directly to your home or preferred location. Your dog gets a private, one-on-one appointment — no cages, no other dogs, no waiting. We handle everything; you just open the door."}},
    {"@type": "Question", "name": "How much does mobile grooming cost?", "acceptedAnswer": {"@type": "Answer", "text": "Prices start at $105 for a Bath & Mini Groom and from $125 for a Full Groom. Final price depends on your dog's size and coat type. We always provide a clear quote before starting — no hidden fees, ever."}},
    {"@type": "Question", "name": "What areas do you serve?", "acceptedAnswer": {"@type": "Answer", "text": "We serve Georgetown, Austin, Round Rock, Cedar Park, Pflugerville, Leander, Liberty Hill, Hutto, and surrounding Williamson & Travis County communities."}},
    {"@type": "Question", "name": "What is the anesthesia-free dental cleaning?", "acceptedAnswer": {"@type": "Answer", "text": "It's a gentle cosmetic teeth cleaning performed while your dog is awake and comfortable. We remove surface plaque and tartar without any sedation."}}
  ]
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

      {/* ── HERO INTERNO ── */}
      <section className="bg-pp-cream pt-32 pb-16 px-6 relative overflow-hidden">
        {/* Decorativo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pp-red-light rounded-full mix-blend-multiply opacity-60 filter blur-3xl pointer-events-none z-0"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04] pointer-events-none bg-no-repeat bg-right-top bg-contain" style={{ backgroundImage: "url('/1.png')" }}></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 w-full mb-12">
           <FadeIn>
            <p className="text-xs text-pp-muted font-dm-sans mb-4 uppercase tracking-widest">
              <Link href="/" className="hover:text-pp-red transition-colors">Home</Link> / FAQ
            </p>
            <h1 className="text-[clamp(32px,6vw,56px)] font-playfair font-bold text-pp-dark leading-[1.1] mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-pp-muted text-lg max-w-lg mx-auto font-dm-sans">
              Everything you need to know about Poppy Paws mobile grooming.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── BACKGROUND FIXED CONTAINER ── */}
      <section className="bg-pp-cream relative overflow-hidden pt-16 pb-24 px-6">
        {/* WATERMARK FIXED BACKGROUND (7.png) */}
        <div className="absolute inset-0 pointer-events-none bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: "url('/7.png')" }}></div>

        <div className="relative z-10 w-full flex flex-col items-center">
          {/* ── ACORDEÓN / BUSCADOR ── */}
          <div className="w-full min-h-[60vh] mb-16">
            <FAQAccordion />
          </div>

          {/* ── CTA FINAL ── */}
          <div className="w-full max-w-5xl mx-auto">
             <FadeIn delay={200}>
               <div className="bg-pp-dark rounded-[32px] p-12 text-center text-white shadow-[0_12px_40px_rgba(0,0,0,0.15)] border border-pp-dark/80">
                 <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-4">Still have questions?</h2>
                 <p className="font-dm-sans text-white/80 text-lg mb-10 max-w-md mx-auto">
                   We're happy to help. Give us a call or send us a message and we'll get right back to you.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4 items-center justify-center font-dm-sans">
                     <a href="tel:5126770703" className="w-full sm:w-auto bg-pp-red text-white py-4 px-8 rounded-full text-sm font-bold shadow-[var(--clay-btn-primary)] hover:bg-pp-red-dark hover:-translate-y-1 transition-all inline-flex items-center justify-center">
                        Call (512) 677-0703
                     </a>
                     <Link href="/book" className="w-full sm:w-auto border-2 border-white/40 text-white hover:text-pp-dark hover:border-white py-4 px-8 rounded-full text-sm font-bold shadow-lg hover:bg-white hover:-translate-y-1 transition-all inline-flex items-center justify-center">
                        Book an Appointment
                     </Link>
                 </div>
               </div>
             </FadeIn>
          </div>
        </div>
      </section>

    </>
  );
}
