import NextImage from 'next/image';
import NextLink from 'next/link';
import { Button } from '@/components/Button';
import { Check } from 'lucide-react';
import { Droplets } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Link } from '@/components/Link';
import { Menu } from 'lucide-react';
import { PawPrint } from 'lucide-react';
import { Text } from '@/components/Text';
import { Twitter } from 'lucide-react';
import { Wind } from 'lucide-react';
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
                <Link contentKey="cta_13" className="hidden md:block px-6 py-3 bg-[#F29727] text-white rounded-2xl font-bold shadow-[8px_8px_16px_rgba(242,151,39,0.2),inset_4px_4px_8px_rgba(255,255,255,0.3)] hover:scale-105 transition-all" href="booking.html"> Book Appointment </Link>
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
        <main className="pt-32">
          {/* The Ultimate Spa Day */}
          <section id="the_ultimate_spa_day" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
                <div className="flex-1 space-y-8">
                  <h1 className="text-5xl font-display text-sage">
                     The Ultimate 
                    <Text className="text-orange"> Spa Day. </Text>
                  </h1>
                  <p className="text-xl text-sage/70 font-medium leading-relaxed">
                     Our grooming salon is designed to be a sanctuary. We use only organic, hypoallergenic products and take our time with every pet to ensure they feel safe and pampered. 
                  </p>
                  <div className="flex gap-4">
                    <div className="clay-card p-4 flex items-center gap-3">
                      <Wind className="text-orange w-6 h-6" />
                      <Text variant="bold" className="font-bold"> Stress-Free Drying </Text>
                    </div>
                    <div className="clay-card p-4 flex items-center gap-3">
                      <Droplets className="text-orange w-6 h-6" />
                      <Text variant="bold" className="font-bold"> Organic Shampoos </Text>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="clay-card p-4 rotate-2">
                    <NextImage src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800" alt="Grooming Spa" fill sizes="100vw" className="rounded-[30px] w-full aspect-video object-cover" />
                  </div>
                </div>
              </div>
              <h2 className="text-4xl font-display text-sage text-center mb-16"> Grooming Packages </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Basic */}
                <div className="clay-card p-10 flex flex-col">
                  <h3 className="text-2xl font-display text-sage mb-2"> The Quick Refresh </h3>
                  <p className="text-orange font-bold text-3xl mb-6"> $45+ </p>
                  <ul className="space-y-4 mb-10 flex-1">
                    <li className="flex items-center gap-3 font-medium text-sage/60">
                      <Check className="text-orange w-5 h-5" />
                       Warm Water Bath 
                    </li>
                    <li className="flex items-center gap-3 font-medium text-sage/60">
                      <Check className="text-orange w-5 h-5" />
                       Blow Dry 
                    </li>
                    <li className="flex items-center gap-3 font-medium text-sage/60">
                      <Check className="text-orange w-5 h-5" />
                       Brush Out 
                    </li>
                    <li className="flex items-center gap-3 font-medium text-sage/60">
                      <Check className="text-orange w-5 h-5" />
                       Scented Spritz 
                    </li>
                  </ul>
                  <Button contentKey="cta_14" className="w-full py-4 bg-cream text-sage rounded-2xl font-bold text-center clay-btn hover:scale-105 transition-all" href="booking.html"> Book Now </Button>
                </div>
                {/* Standard */}
                <div className="clay-card p-10 flex flex-col border-2 border-orange/20 relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest"> Most Popular </div>
                  <h3 className="text-2xl font-display text-sage mb-2"> The Full Pawsitive </h3>
                  <p className="text-orange font-bold text-3xl mb-6"> $75+ </p>
                  <ul className="space-y-4 mb-10 flex-1">
                    <li className="flex items-center gap-3 font-medium text-sage/60">
                      <Check className="text-orange w-5 h-5" />
                       Everything in Refresh 
                    </li>
                    <li className="flex items-center gap-3 font-medium text-sage/60">
                      <Check className="text-orange w-5 h-5" />
                       Breed-Specific Cut 
                    </li>
                    <li className="flex items-center gap-3 font-medium text-sage/60">
                      <Check className="text-orange w-5 h-5" />
                       Nail Trimming 
                    </li>
                    <li className="flex items-center gap-3 font-medium text-sage/60">
                      <Check className="text-orange w-5 h-5" />
                       Ear Cleaning 
                    </li>
                  </ul>
                  <NextLink href="/booking" className="w-full py-4 bg-orange text-white rounded-2xl font-bold text-center shadow-lg hover:scale-105 transition-all"> Book Now </NextLink>
                </div>
                {/* Premium */}
                <div className="clay-card p-10 flex flex-col">
                  <h3 className="text-2xl font-display text-sage mb-2"> The Royal Treatment </h3>
                  <p className="text-orange font-bold text-3xl mb-6"> $110+ </p>
                  <ul className="space-y-4 mb-10 flex-1">
                    <li className="flex items-center gap-3 font-medium text-sage/60">
                      <Check className="text-orange w-5 h-5" />
                       Everything in Full 
                    </li>
                    <li className="flex items-center gap-3 font-medium text-sage/60">
                      <Check className="text-orange w-5 h-5" />
                       Teeth Brushing 
                    </li>
                    <li className="flex items-center gap-3 font-medium text-sage/60">
                      <Check className="text-orange w-5 h-5" />
                       Paw Pad Balm 
                    </li>
                    <li className="flex items-center gap-3 font-medium text-sage/60">
                      <Check className="text-orange w-5 h-5" />
                       Blueberry Facial 
                    </li>
                  </ul>
                  <Button contentKey="cta_16" className="w-full py-4 bg-cream text-sage rounded-2xl font-bold text-center clay-btn hover:scale-105 transition-all" href="booking.html"> Book Now </Button>
                </div>
              </div>
            </div>
          </section>
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
                  <Button contentKey="cta_17" className="w-full py-3 bg-[#7C9D96] text-white rounded-2xl font-bold shadow-[8px_8px_16px_rgba(124,157,150,0.2)] hover:scale-105 transition-all"> Subscribe </Button>
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
