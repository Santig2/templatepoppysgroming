import Link from 'next/link';
import { FadeIn } from '@/components/FadeIn';
import { BookingForm } from '@/components/BookingForm';

export const metadata = {
  title: 'Book an Appointment | Poppy Paws Mobile Grooming',
  description: 'Schedule your doorstep dog grooming appointment in Austin or Georgetown today. New clients welcome!',
};

export default function BookPage() {
  return (
    <>
      {/* ── HERO & CLIENT TYPE SELECTION ── */}
      <section className="bg-pp-cream min-h-[500px] flex flex-col items-center justify-center pt-24 pb-16 px-6 relative overflow-hidden">
        {/* Decorativos */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-pp-red-light rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pp-gold/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
          <FadeIn>
            <p className="text-xs text-pp-muted font-dm-sans mb-4 uppercase tracking-widest">
              <Link href="/" className="hover:text-pp-red transition-colors">Home</Link> / Book
            </p>
            <h1 className="text-[clamp(32px,6vw,56px)] font-playfair font-bold text-pp-dark leading-[1.1] mb-6">
              Let's get your pup <br className="hidden md:block"/> on the calendar.
            </h1>
            <p className="text-pp-muted text-lg max-w-lg mx-auto font-dm-sans mb-12">
              Are you joining the Poppy Paws family for the first time, or are we already best friends?
            </p>
          </FadeIn>

          <FadeIn delay={200} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            
            {/* NEW CLIENT CARD */}
            <a href="#new-client-form" className="bg-white rounded-[24px] p-8 shadow-[var(--clay-card)] border-2 border-transparent hover:border-pp-red hover:-translate-y-2 transition-all flex flex-col items-center text-center group cursor-pointer">
              <div className="w-16 h-16 bg-pp-red-light rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">👋</span>
              </div>
              <h2 className="text-2xl font-playfair font-bold text-pp-dark mb-2">New Client</h2>
              <p className="text-sm text-pp-body leading-relaxed font-dm-sans mb-4">
                I'm ready to book my dog's first Poppy Paws spa day.
              </p>
              <div className="mt-auto text-sm font-bold text-pp-red group-hover:underline font-dm-sans inline-flex items-center gap-2">
                Start Request <span>↓</span>
              </div>
            </a>

            {/* RETURNING CLIENT CARD (MOEGO) */}
            <a href="https://booking.moego.pet/ol/landing?name=PoppyPawsLLC" target="_blank" rel="noreferrer" className="bg-white rounded-[24px] p-8 shadow-[var(--clay-card)] border-2 border-transparent hover:border-pp-dark hover:-translate-y-2 transition-all flex flex-col items-center text-center group cursor-pointer">
              <div className="w-16 h-16 bg-pp-cream-dark rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🤝</span>
              </div>
              <h2 className="text-2xl font-playfair font-bold text-pp-dark mb-2">Returning Client</h2>
              <p className="text-sm text-pp-body leading-relaxed font-dm-sans mb-4">
                Welcome back! Log in to manage your upcoming grooms.
              </p>
               <div className="mt-auto text-sm font-bold text-pp-dark group-hover:underline font-dm-sans inline-flex items-center gap-2">
                Open Client Portal <span>↗</span>
              </div>
            </a>

          </FadeIn>
        </div>
      </section>

      {/* ── NEW CLIENT NATIVE FORM ── */}
      <section id="new-client-form" className="bg-white py-24 px-6 relative scroll-mt-0 min-h-screen">
        <div className="absolute inset-0 bg-pp-dark/95 z-0" style={{ backgroundImage: "url('/perritobanadose.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay', opacity: 0.1 }}></div>
        
        <div className="relative z-10 w-full">
           <FadeIn className="text-center mb-8">
            <h2 className="text-[clamp(32px,5vw,48px)] font-playfair font-bold text-pp-dark md:text-white leading-[1.2] drop-shadow-sm">
              New Client Booking Request
            </h2>
            <p className="md:text-white/80 text-pp-muted font-dm-sans text-base mt-3 drop-shadow-sm">
              Fill out this quick form and we'll be in touch within 24 hours to secure your spot.
            </p>
          </FadeIn>

           {/* Client Component */}
          <BookingForm />

        </div>
      </section>

      {/* ── SUPPORT BAR ── */}
      <section className="bg-pp-dark py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-pp-red/20 rounded-full flex items-center justify-center text-xl shrink-0">
              💬
            </div>
            <div>
              <h3 className="text-white font-bold font-dm-sans text-lg">Having trouble booking?</h3>
              <p className="text-white/60 text-sm font-dm-sans">Our team is ready to help you schedule by phone.</p>
            </div>
          </div>
          <a href="tel:5126770703" className="border border-white/20 text-white rounded-full px-6 py-3 font-bold text-sm hover:bg-white hover:text-pp-dark transition-all font-dm-sans shadow-[var(--clay-btn-secondary)]">
            Call (512) 677-0703
          </a>
        </div>
      </section>

    </>
  );
}
