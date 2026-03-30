import { Button } from '@/components/Button';
import { Facebook } from 'lucide-react';
import { Image } from '@/components/Image';
import { Instagram } from 'lucide-react';
import { Link } from '@/components/Link';
import { Menu } from 'lucide-react';
import { PawPrint } from 'lucide-react';
import { Text } from '@/components/Text';
import { Twitter } from 'lucide-react';
import { X } from 'lucide-react';

export const metadata = {
  title: 'Pawsitive Pet - Free Tailwind Template',
  description:  'Download this free Tailwind CSS Pet Services website template for Pawsitive Pet. Features a claymorphism design, fully responsive layout, and includes 15 pre-built pages like grooming.html, blog.html, index.html.',
};

export default function Page() {
  return (
    <div className="bg-cream text-sage font-sans antialiased">
      <>
        <header>
          <nav className="fixed w-full z-50 px-6 py-4">
            <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-md rounded-[30px] px-8 py-4 flex justify-between items-center shadow-[20px_20px_60px_rgba(0,0,0,0.05),-20px_-20px_60px_rgba(255,255,255,0.8)] border border-white/20">
              <Link className="flex items-center gap-2 group" href="index.html"><div className="w-10 h-10 bg-[#7C9D96] rounded-2xl flex items-center justify-center shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform"><PawPrint className="text-white w-6 h-6" /></div>
              <Text className="text-2xl font-['Fredoka_One'] text-[#7C9D96] tracking-wide"> Pawsitive </Text></Link>
              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center gap-8">
                <Link className="text-sm font-bold text-[#7C9D96]/70 hover:text-[#7C9D96] transition-colors" href="index.html"> Home </Link>
                <Link className="text-sm font-bold text-[#7C9D96]/70 hover:text-[#7C9D96] transition-colors" href="services.html"> Services </Link>
                <Link className="text-sm font-bold text-[#7C9D96]/70 hover:text-[#7C9D96] transition-colors" href="booking.html"> Book Now </Link>
                <Link className="text-sm font-bold text-[#7C9D96]/70 hover:text-[#7C9D96] transition-colors" href="shop.html"> Shop </Link>
                <Link className="text-sm font-bold text-[#7C9D96]/70 hover:text-[#7C9D96] transition-colors" href="blog.html"> Blog </Link>
                <Link className="text-sm font-bold text-[#7C9D96]/70 hover:text-[#7C9D96] transition-colors" href="about.html"> About </Link>
              </div>
              <div className="flex items-center gap-4">
                <Link contentKey="cta_15" className="hidden md:block px-6 py-3 bg-[#F29727] text-white rounded-2xl font-bold shadow-[8px_8px_16px_rgba(242,151,39,0.2),inset_4px_4px_8px_rgba(255,255,255,0.3)] hover:scale-105 transition-all" href="booking.html"> Book Appointment </Link>
                {/* Mobile Toggle */}
                <Button className="lg:hidden text-[#7C9D96]" id="menu-toggle"><Menu className="w-6 h-6" /></Button>
              </div>
            </div>
            {/* Mobile Menu */}
            <div id="mobile-menu" className="hidden lg:hidden fixed inset-0 bg-[#F7F1E5] z-[60] p-8 flex flex-col gap-8">
              <div className="flex justify-between items-center">
                <Text className="text-2xl font-['Fredoka_One'] text-[#7C9D96]"> Pawsitive </Text>
                <Button className="text-[#7C9D96]" id="menu-close"><X className="w-8 h-8" /></Button>
              </div>
              <div className="flex flex-col gap-6 text-xl font-bold text-[#7C9D96]">
                <Link href="index.html"> Home </Link>
                <Link href="services.html"> Services </Link>
                <Link href="booking.html"> Book Now </Link>
                <Link href="shop.html"> Shop </Link>
                <Link href="blog.html"> Blog </Link>
                <Link href="about.html"> About </Link>
                <Link href="contact.html"> Contact </Link>
              </div>
            </div>
          </nav>
        </header>
        <main className="pt-32 pb-32 px-6">
          <article className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center gap-4 mb-6">
                <Text variant="bold" className="px-4 py-1 bg-orange/10 text-orange text-sm font-bold rounded-full uppercase"> Grooming </Text>
                <Text variant="bold" className="text-sage/40 text-sm font-bold"> Oct 12, 2023 </Text>
              </div>
              <h1 className="text-5xl font-display text-sage mb-8"> 5 Tips for Stress-Free Home Grooming </h1>
              <div className="flex items-center justify-center gap-4">
                <Image className="w-12 h-12 rounded-full border-2 border-white shadow-md" src="https://i.pravatar.cc/100?u=vet" />
                <div className="text-left">
                  <p className="font-bold text-sage"> Dr. Sarah Jenkins </p>
                  <p className="text-xs text-sage/40 font-bold uppercase"> Lead Veterinarian </p>
                </div>
              </div>
            </div>
            <div className="clay-card p-4 mb-12">
              <Image variant="cover" className="rounded-[30px] w-full aspect-video object-cover" src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=1200" alt="Grooming" />
            </div>
            <div className="prose prose-sage max-w-none space-y-8 text-lg font-medium text-sage/70 leading-relaxed">
              <p>
                 Grooming is an essential part of pet care, but for many animals, it can be a source of anxiety. Whether it's the sound of clippers or the sensation of water, many pets need a little extra patience and care during their spa sessions. 
              </p>
              <h2 className="text-3xl font-display text-sage pt-4"> 1. Start Early and Go Slow </h2>
              <p>
                 The best way to ensure a lifetime of easy grooming is to start when your pet is young. Introduce them to the tools—brushes, combs, and even the bathtub—without actually using them at first. Let them sniff and explore, and reward them with treats. 
              </p>
              <h2 className="text-3xl font-display text-sage pt-4"> 2. Use Positive Reinforcement </h2>
              <p>
                 Treats are your best friend during grooming. Reward your pet for staying calm, even if it's just for a few seconds. Over time, they will associate grooming with positive experiences. 
              </p>
              <blockquote className="clay-card p-8 border-l-8 border-orange italic text-xl text-sage">
                 "Patience is the most important tool in your grooming kit. If you're stressed, your pet will be too." 
              </blockquote>
              <h2 className="text-3xl font-display text-sage pt-4"> 3. Keep Sessions Short </h2>
              <p>
                 Don't try to do everything at once. If your pet is getting restless, stop and try again later. A five-minute brushing session that ends on a positive note is better than a twenty-minute session that ends in a struggle. 
              </p>
            </div>
          </article>
        </main>
        <footer className="bg-white pt-24 pb-12 px-6 rounded-t-[60px] shadow-[0_-20px_60px_rgba(0,0,0,0.03)]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              <div className="space-y-6">
                <Link className="flex items-center gap-2" href="index.html"><div className="w-10 h-10 bg-[#7C9D96] rounded-2xl flex items-center justify-center shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1)]"><PawPrint className="text-white w-6 h-6" /></div>
                <Text className="text-2xl font-['Fredoka_One'] text-[#7C9D96]"> Pawsitive </Text></Link>
                <p className="text-[#7C9D96]/60 font-medium">
                   Providing gentle, loving care for your furry family members since 2015. Your pet's happiness is our priority. 
                </p>
                <div className="flex gap-4">
                  <Link className="w-10 h-10 bg-[#F7F1E5] rounded-xl flex items-center justify-center text-[#7C9D96] hover:bg-[#7C9D96] hover:text-white transition-all shadow-[4px_4px_8px_rgba(0,0,0,0.05)]" href="#"><Instagram className="w-5 h-5" /></Link>
                  <Link className="w-10 h-10 bg-[#F7F1E5] rounded-xl flex items-center justify-center text-[#7C9D96] hover:bg-[#7C9D96] hover:text-white transition-all shadow-[4px_4px_8px_rgba(0,0,0,0.05)]" href="#"><Facebook className="w-5 h-5" /></Link>
                  <Link className="w-10 h-10 bg-[#F7F1E5] rounded-xl flex items-center justify-center text-[#7C9D96] hover:bg-[#7C9D96] hover:text-white transition-all shadow-[4px_4px_8px_rgba(0,0,0,0.05)]" href="#"><Twitter className="w-5 h-5" /></Link>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#7C9D96] mb-6"> Quick Links </h4>
                <ul className="space-y-4">
                  <li>
                    <Link className="text-[#7C9D96]/60 hover:text-[#7C9D96] font-medium transition-colors" href="services.html"> Our Services </Link>
                  </li>
                  <li>
                    <Link className="text-[#7C9D96]/60 hover:text-[#7C9D96] font-medium transition-colors" href="booking.html"> Book Appointment </Link>
                  </li>
                  <li>
                    <Link className="text-[#7C9D96]/60 hover:text-[#7C9D96] font-medium transition-colors" href="shop.html"> Pet Shop </Link>
                  </li>
                  <li>
                    <Link className="text-[#7C9D96]/60 hover:text-[#7C9D96] font-medium transition-colors" href="blog.html"> Pet Care Blog </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#7C9D96] mb-6"> Support </h4>
                <ul className="space-y-4">
                  <li>
                    <Link className="text-[#7C9D96]/60 hover:text-[#7C9D96] font-medium transition-colors" href="faq.html"> FAQs </Link>
                  </li>
                  <li>
                    <Link className="text-[#7C9D96]/60 hover:text-[#7C9D96] font-medium transition-colors" href="contact.html"> Contact Us </Link>
                  </li>
                  <li>
                    <Link className="text-[#7C9D96]/60 hover:text-[#7C9D96] font-medium transition-colors" href="privacy.html"> Privacy Policy </Link>
                  </li>
                  <li>
                    <Link className="text-[#7C9D96]/60 hover:text-[#7C9D96] font-medium transition-colors" href="terms.html"> Terms of Service </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#7C9D96] mb-6"> Newsletter </h4>
                <p className="text-sm text-[#7C9D96]/60 mb-4 font-medium"> Get pet care tips and special offers! </p>
                <form className="space-y-3">
                  <input placeholder="Your email" type="email" className="w-full px-4 py-3 bg-[#F7F1E5] border-none rounded-2xl focus:ring-2 focus:ring-[#7C9D96] outline-none shadow-[inset_4px_4px_8px_rgba(0,0,0,0.05)]" />
                  <Button contentKey="cta_16" className="w-full py-3 bg-[#7C9D96] text-white rounded-2xl font-bold shadow-[8px_8px_16px_rgba(124,157,150,0.2)] hover:scale-105 transition-all"> Subscribe </Button>
                </form>
              </div>
            </div>
            <div className="pt-8 border-t border-[#7C9D96]/10 text-center">
              <p className="text-[#7C9D96]/40 text-sm font-medium">
                 © 2024 Pawsitive Care. All rights reserved. Made with love for pets. 
              </p>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
}
