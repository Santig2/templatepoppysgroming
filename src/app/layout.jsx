import { Fredoka, Quicksand } from 'next/font/google';
import '@/styles/globals.css';

const fredoka = Fredoka({
  subsets: ['latin'],
  variable: '--font-fredoka',
  display: 'swap',
});

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
  display: 'swap',
});
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Navbar } from '@/components/Navbar';
import { MobileBookingBar } from '@/components/MobileBookingBar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { DisclaimerModal } from '@/components/DisclaimerModal';

export const metadata = {
  title: 'Poppy Paws Mobile Dog Grooming | Austin & Georgetown TX',
  description: 'Premium cage-free mobile dog grooming serving Austin, Georgetown, Round Rock & Cedar Park TX. Book your doorstep spa appointment today. (512) 677-0703',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fredoka.variable} ${quicksand.variable}`}>
      <body className=" text-pp-dark antialiased selection:bg-pp-red/20 font-dm-sans">
        {/* <AnnouncementBar /> */}
        <DisclaimerModal />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <WhatsAppButton />
        <MobileBookingBar />
        <Footer />
      </body>
    </html>
  );
}
