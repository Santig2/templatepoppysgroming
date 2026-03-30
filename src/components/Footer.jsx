import Link from 'next/link';
import { Instagram, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-pp-footer pt-16 pb-20 md:pb-8 px-6 md:px-20 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1 — Marca */}
          <div>
            <img
              src="/logoconnombre.png"
              alt="Poppy Paws Mobile Grooming"
              className="h-10 w-auto object-contain mb-3 filter brightness-0 invert"
            />
            <p className="font-playfair italic text-base text-white/40 mb-6 font-display">
              "A Touch of Bloom in Every Groom."
            </p>
            <div className="flex flex-col gap-2 mb-6">
              <a href="tel:5126770703" className="text-pp-red font-bold text-lg hover:text-white transition-colors">📞 (512) 677-0703</a>
              <a href="https://instagram.com/poppypawsgrooming" className="text-pp-red text-sm hover:text-white transition-colors">📸 @poppypawsgrooming</a>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <a href="https://instagram.com/poppypawsgrooming" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-pp-red transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://booking.moego.pet/ol/landing?name=PoppyPawsLLC" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-pp-red transition-colors">
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 font-dm-sans">Services</h4>
            <div className="flex flex-col gap-3 font-dm-sans">
              <Link href="/services#full-groom" className="text-sm text-white/60 leading-loose hover:text-white transition-colors">Full Groom</Link>
              <Link href="/services#bath-mini-groom" className="text-sm text-white/60 leading-loose hover:text-white transition-colors">Bath & Mini Groom</Link>
              <Link href="/services#dental-cleaning" className="text-sm text-white/60 leading-loose hover:text-white transition-colors">Dental Cleaning</Link>
              <Link href="/services#add-ons" className="text-sm text-white/60 leading-loose hover:text-white transition-colors">Add-Ons</Link>
            </div>
          </div>

          {/* Col 3 — Company */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 font-dm-sans">Company</h4>
            <div className="flex flex-col gap-3 font-dm-sans">
              <Link href="/about" className="text-sm text-white/60 leading-loose hover:text-white transition-colors">About</Link>
              <Link href="/gallery" className="text-sm text-white/60 leading-loose hover:text-white transition-colors">Gallery</Link>
              <Link href="/faq" className="text-sm text-white/60 leading-loose hover:text-white transition-colors">FAQ</Link>
              <Link href="/service-area" className="text-sm text-white/60 leading-loose hover:text-white transition-colors">Service Area</Link>
              <Link href="/blog" className="text-sm text-white/60 leading-loose hover:text-white transition-colors">Blog</Link>
            </div>
          </div>

          {/* Col 4 — Hours & Book */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 font-dm-sans">Hours</h4>
            <div className="flex flex-col gap-1 mb-6 font-dm-sans">
              <p className="text-sm text-white/60 leading-loose flex justify-between max-w-[200px]"><span className="font-medium">Mon–Fri:</span> <span>8:00 am – 5:00 pm</span></p>
              <p className="text-sm text-white/60 leading-loose flex justify-between max-w-[200px]"><span className="font-medium">Saturday:</span> <span>8:00 am – 1:00 pm</span></p>
              <p className="text-sm text-white/60 leading-loose flex justify-between max-w-[200px]"><span className="font-medium">Sunday:</span> <span>Closed</span></p>
            </div>
            <Link href="/book" className="inline-block w-full text-center bg-pp-red text-white py-3 rounded-full text-sm font-bold shadow-[var(--clay-btn-primary)] hover:bg-pp-red-dark hover:-translate-y-[2px] transition-all font-dm-sans">
              Book Now →
            </Link>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-6 mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 text-center md:text-left font-dm-sans">
            © 2026 Poppy Paws LLC. All rights reserved.
          </p>
          <p className="text-xs text-white/30 text-center md:text-left font-dm-sans">
            © build by <a href="https://addstrategic.com" target="_blank" rel="noopener noreferrer">ADDSTRATEGIC LLC</a>.
          </p>
          <div className="flex gap-4 font-dm-sans">
            <Link href="/privacy" className="text-xs text-white/30 hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-white/30">·</span>
            <Link href="/terms" className="text-xs text-white/30 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
