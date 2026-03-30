'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';

const FAQ_DATA = [
  {
    category: 'Booking',
    questions: [
      {
        q: "How do I book an appointment?",
        a: "You can book online at poppypawsgrooming.com/book, call us at (512) 677-0703, or send us a message on Instagram @poppypawsgrooming. New clients always welcome!"
      },
      {
        q: "Do I need to be home during the appointment?",
        a: "Someone should be available at the start and end of the appointment to hand over your dog and receive them, but you don't need to stay outside the whole time. We'll let you know when we're finishing up."
      },
      {
        q: "How far in advance should I book?",
        a: "We recommend booking 1–2 weeks in advance, especially for first appointments and weekend slots. For urgent grooming needs, give us a call — we'll do our best to accommodate you."
      },
      {
        q: "What is your cancellation policy?",
        a: "We ask for at least 24 hours notice for cancellations or rescheduling. We understand things come up — just please give us a call so we can adjust our route."
      }
    ]
  },
  {
    category: 'Pricing',
    questions: [
      {
        q: "How much does mobile grooming cost?",
        a: "Prices start at $105 for a Bath & Mini Groom and from $125 for a Full Groom. Final price depends on your dog's size and coat type. We always provide a clear quote before starting — no hidden fees, ever."
      },
      {
        q: "Why does grooming cost more for doodles and double-coat breeds?",
        a: "Doodles and double-coat breeds (Huskies, Aussies, Goldens) require specialized techniques, significantly more time, and specific products to groom properly and safely. The additional cost reflects the extra care your dog's coat deserves."
      },
      {
        q: "Is there a travel fee?",
        a: "There are no travel fees within our standard service area (Williamson & Travis County). Contact us if you're outside the area to discuss any possible options or travel rates."
      }
    ]
  },
  {
    category: 'Services',
    questions: [
      {
        q: "How does mobile dog grooming work?",
        a: "We bring a fully-equipped Poppy Paws grooming van directly to your home or preferred location. Your dog gets a private, one-on-one appointment — no cages, no other dogs, no waiting. We handle everything; you just open the door."
      },
      {
        q: "How long does a grooming appointment take?",
        a: "Most appointments run 1.5–3 hours depending on your dog's size, coat type, and the requested service. We never rush — your dog gets all the time they need."
      },
      {
        q: "My dog gets really anxious. Is mobile grooming better?",
        a: "Yes — for most anxious dogs, mobile grooming is significantly less stressful. There are no other dogs, no kennel smells, and no loud salon environment. Your dog gets our full, calm attention in a familiar setting."
      },
      {
        q: "What products do you use?",
        a: "We use premium, pet-safe, hypoallergenic products. If your dog has known allergies or skin sensitivities, please let us know when booking and we'll accommodate accordingly."
      },
      {
        q: "Do you groom cats or other pets?",
        a: "Currently, we specialize exclusively in dog grooming to ensure the highest quality experience and a stress-free environment for every canine client."
      },
      {
        q: "What is the anesthesia-free dental cleaning?",
        a: "It's a gentle cosmetic teeth cleaning performed while your dog is awake and comfortable. We remove surface plaque and tartar without any sedation. This service does not replace veterinary dental care, but is a great way to maintain your dog's oral hygiene."
      }
    ]
  },
  {
    category: 'Areas',
    questions: [
      {
        q: "What areas do you serve?",
        a: "We serve Georgetown, Austin, Round Rock, Cedar Park, Pflugerville, Leander, Liberty Hill, Hutto, and surrounding Williamson & Travis County communities. Not sure if we cover you? Call us at (512) 677-0703."
      },
      {
        q: "Do you come to apartments or condos?",
        a: "Absolutely! Our van is fully self-contained and doesn't require water or electricity from your home. We can service any residential location with adequate parking for our van."
      }
    ]
  }
];

const CATEGORIES = ['All', 'Booking', 'Pricing', 'Services', 'Areas'];

export function FAQAccordion() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Filter logic
  let filteredData = FAQ_DATA;

  if (activeTab !== 'All') {
    filteredData = filteredData.filter(group => group.category === activeTab);
  }

  if (searchQuery.trim() !== '') {
    const lowerQuery = searchQuery.toLowerCase();
    filteredData = filteredData.map(group => {
      const matchedQuestions = group.questions.filter(
        q => q.q.toLowerCase().includes(lowerQuery) || q.a.toLowerCase().includes(lowerQuery)
      );
      return { ...group, questions: matchedQuestions };
    }).filter(group => group.questions.length > 0);
  }

  return (
    <div className="max-w-5xl mx-auto w-full bg-[#fdfaf6] rounded-[40px] shadow-2xl p-6 sm:p-10 md:p-14 border border-[#e5e0d8] relative z-10">
      {/* SEARCH BAR */}
      <div className="relative mb-12 animate-fade-up">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-white/50">
          <Search size={20} />
        </div>
        <input
          type="text"
          placeholder="Search questions..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full h-14 pl-12 pr-4 rounded-xl border border-white/10 focus:border-pp-red focus:ring-2 focus:ring-pp-red/20 outline-none text-white font-dm-sans text-base transition bg-pp-dark shadow-[0_4px_20px_rgba(0,0,0,0.15)] placeholder:text-white/40"
        />
      </div>

      {/* TABS */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 animate-fade-up" style={{ animationDelay: '100ms' }}>
        {CATEGORIES.map(category => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-6 py-2 rounded-full font-bold text-sm transition-all font-dm-sans ${
              activeTab === category
                ? 'bg-pp-red text-white shadow-md hover:bg-pp-red-dark'
                : 'bg-pp-dark/80 text-white/70 hover:text-white hover:bg-pp-dark border border-white/10'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* ACCORDIONS */}
      <div className="space-y-8 min-h-[400px]">
        {filteredData.length === 0 ? (
          <div className="text-center text-white/50 py-12 font-dm-sans border border-dashed border-white/20 rounded-2xl bg-pp-dark/50 backdrop-blur-sm">
            No questions found matching "{searchQuery}"
          </div>
        ) : (
          filteredData.map((group, groupIndex) => (
            <div key={group.category} className="animate-fade-up" style={{ animationDelay: `${200 + (groupIndex * 100)}ms` }}>
              {(activeTab === 'All' && searchQuery === '') && (
                <h3 className="text-lg font-bold text-pp-dark mb-4 pl-2 font-dm-sans border-l-4 border-pp-red">
                  {group.category}
                </h3>
              )}
              <div className="space-y-3">
                {group.questions.map((item, itemIndex) => {
                  const id = `${group.category}-${itemIndex}`;
                  const isOpen = !!openItems[id];
                  
                  return (
                    <div 
                      key={id} 
                      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-pp-red/30 bg-pp-dark shadow-[0_4px_20px_rgba(0,0,0,0.15)]' : 'border-white/10 bg-pp-dark hover:border-white/30 shadow-lg'}`}
                    >
                      <button
                        onClick={() => toggleItem(id)}
                        className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
                        aria-expanded={isOpen}
                      >
                        <span className={`text-base font-bold font-dm-sans pr-8 ${isOpen ? 'text-pp-red' : 'text-white'}`}>
                          {item.q}
                        </span>
                        <span className={`text-pp-red text-xl transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                          +
                        </span>
                      </button>
                      
                      <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                      >
                        <p className="px-6 pb-6 text-white/80 text-sm leading-relaxed font-dm-sans">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
