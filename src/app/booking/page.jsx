import { Button } from '@/components/Button';
import { Facebook } from 'lucide-react';
import { Home } from 'lucide-react';
import { Input } from '@/components/Input';
import { Instagram } from 'lucide-react';
import { Link } from '@/components/Link';
import { Menu } from 'lucide-react';
import { PawPrint } from 'lucide-react';
import { Scissors } from 'lucide-react';
import { Select } from '@/components/Select';
import { Stethoscope } from 'lucide-react';
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
                <Link contentKey="cta_12" className="hidden md:block px-6 py-3 bg-[#F29727] text-white rounded-2xl font-bold shadow-[8px_8px_16px_rgba(242,151,39,0.2),inset_4px_4px_8px_rgba(255,255,255,0.3)] hover:scale-105 transition-all" href="booking.html"> Book Appointment </Link>
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
          {/* Book A Visit */}
          <section id="book_a_visit">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-5xl font-display text-sage mb-6">
                   Book a 
                  <Text className="text-orange"> Visit. </Text>
                </h1>
                <p className="text-xl text-sage/60 font-medium">
                   Choose a service and find a time that works for you and your pet. 
                </p>
              </div>
              <div className="clay-card p-8 md:p-12">
                <form className="space-y-10">
                  {/* Service Selection */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-display text-sage"> 1. Select Service </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <label className="relative cursor-pointer group">
                        <Input className="peer sr-only" type="radio" name="service" />
                        <div className="p-6 clay-card text-center peer-checked:bg-orange peer-checked:text-white transition-all group-hover:scale-105">
                          <Scissors className="w-8 h-8 mx-auto mb-2" />
                          <Text variant="bold" className="font-bold block"> Grooming </Text>
                        </div>
                      </label>
                      <label className="relative cursor-pointer group">
                        <Input className="peer sr-only" type="radio" name="service" />
                        <div className="p-6 clay-card text-center peer-checked:bg-sage peer-checked:text-white transition-all group-hover:scale-105">
                          <Stethoscope className="w-8 h-8 mx-auto mb-2" />
                          <Text variant="bold" className="font-bold block"> Veterinary </Text>
                        </div>
                      </label>
                      <label className="relative cursor-pointer group">
                        <Input className="peer sr-only" type="radio" name="service" />
                        <div className="p-6 clay-card text-center peer-checked:bg-coral peer-checked:text-white transition-all group-hover:scale-105">
                          <Home className="w-8 h-8 mx-auto mb-2" />
                          <Text variant="bold" className="font-bold block"> Daycare </Text>
                        </div>
                      </label>
                    </div>
                  </div>
                  {/* Pet Info */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-display text-sage"> 2. Pet Information </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-sage/40 uppercase ml-2"> Pet's Name </label>
                        <Input className="w-full px-6 py-4 bg-cream rounded-2xl border-none outline-none clay-inset focus:ring-2 focus:ring-sage" type="text" placeholder="e.g. Buddy" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-sage/40 uppercase ml-2"> Pet Type </label>
                        <Select className="w-full px-6 py-4 bg-cream rounded-2xl border-none outline-none clay-inset focus:ring-2 focus:ring-sage appearance-none"><option> Dog </option>
                        <option> Cat </option>
                        <option> Other </option></Select>
                      </div>
                    </div>
                  </div>
                  {/* Date & Time */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-display text-sage"> 3. Date & Time </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-sage/40 uppercase ml-2"> Preferred Date </label>
                        <Input className="w-full px-6 py-4 bg-cream rounded-2xl border-none outline-none clay-inset focus:ring-2 focus:ring-sage" type="date" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-sage/40 uppercase ml-2"> Preferred Time </label>
                        <Select className="w-full px-6 py-4 bg-cream rounded-2xl border-none outline-none clay-inset focus:ring-2 focus:ring-sage appearance-none"><option> Morning (8am - 12pm) </option>
                        <option> Afternoon (12pm - 4pm) </option>
                        <option> Evening (4pm - 7pm) </option></Select>
                      </div>
                    </div>
                  </div>
                  <Button contentKey="cta_13" className="w-full py-6 bg-orange text-white rounded-[30px] font-bold text-xl shadow-xl hover:scale-[1.02] transition-all" type="submit"> Confirm Booking Request </Button>
                </form>
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
                  <Input className="w-full px-4 py-3 bg-[#F7F1E5] border-none rounded-2xl focus:ring-2 focus:ring-[#7C9D96] outline-none shadow-[inset_4px_4px_8px_rgba(0,0,0,0.05)]" type="email" placeholder="Your email" />
                  <Button contentKey="cta_14" className="w-full py-3 bg-[#7C9D96] text-white rounded-2xl font-bold shadow-[8px_8px_16px_rgba(124,157,150,0.2)] hover:scale-105 transition-all"> Subscribe </Button>
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
