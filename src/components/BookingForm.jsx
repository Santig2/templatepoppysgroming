'use client';

import { useState } from 'react';

const SIZES = [
  { id: 'small', icon: '🐕', label: 'Small', desc: 'Under 25 lbs' },
  { id: 'medium', icon: '🐕', label: 'Medium', desc: '25–50 lbs' },
  { id: 'large', icon: '🐕', label: 'Large', desc: '50–80 lbs' },
  { id: 'xl', icon: '🐕', label: 'XL/XXL', desc: '80+ lbs' },
];

const COATS = [
  { id: 'regular', icon: '✂️', label: 'Regular Coat', desc: 'Short, smooth or manageable long' },
  { id: 'doodle', icon: '🌀', label: 'Doodle/Curly', desc: 'Doodles, Poodles, Bichons' },
  { id: 'double', icon: '🌿', label: 'Double Coat', desc: 'Husky, Aussie, Golden, Corgi' },
];

const POPULAR_BREEDS = [
  'Goldendoodle', 'Labradoodle', 'Bernedoodle', 'Poodle', 'Corgi', 'German Shepherd',
  'Golden Retriever', 'Australian Shepherd', 'Husky', 'Maltipoo', 'Shih Tzu',
  'Yorkshire Terrier', 'Chihuahua', 'French Bulldog', 'Bulldog', 'Beagle', 'Dachshund',
  'Border Collie', 'Boxer', 'Schnauzer'
];

export function BookingForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    dogName: '', breed: '', size: '', coatType: '', specialNotes: '',
    serviceId: '', mattingAddon: false,
    ownerName: '', phone: '', email: '', street: '', zip: '',
    prefDate: '', prefTime: '', source: '', privacy: false,
  });

  const updateForm = (key, value) => setFormData(prev => ({ ...prev, [key]: value }));

  const step1Valid = formData.dogName.trim() && formData.breed.trim() && formData.size && formData.coatType;
  const step2Valid = formData.serviceId !== '';
  const step3Valid = formData.ownerName.trim() && formData.phone.trim() && formData.email.trim() && 
                     formData.street.trim() && formData.zip.trim().length === 5 && formData.prefDate && 
                     formData.prefTime && formData.privacy;

  // Pricing calculation
  const getPricing = (service) => {
    const isDoodleOrDouble = ['doodle', 'double'].includes(formData.coatType);
    if (service === 'full') {
      if (isDoodleOrDouble) {
        if (formData.size === 'small') return 140;
        if (formData.size === 'medium') return 160;
        if (formData.size === 'large') return 180;
        if (formData.size === 'xl') return 205; // assuming 205 for XL/XXL starting point
      } else {
        if (formData.size === 'small') return 125;
        if (formData.size === 'medium') return 140;
        if (formData.size === 'large') return 160;
        if (formData.size === 'xl') return 180;
      }
    } else if (service === 'bath') {
      if (formData.size === 'small') return 105;
      if (formData.size === 'medium') return 120;
      if (formData.size === 'large') return 140;
      if (formData.size === 'xl') return 160;
    } else if (service === 'dental') {
      if (formData.size === 'small') return 200;
      if (formData.size === 'medium') return 250;
      if (formData.size === 'large') return 300;
      if (formData.size === 'xl') return 350;
    }
    return null; // default fallback if unmapped
  };

  const handleNext = () => {
    if (step === 1 && step1Valid) setStep(2);
    else if (step === 2 && step2Valid) setStep(3);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!step3Valid) return;
    setIsSubmitting(true);
    setErrorMsg('');

    // Formatear ZIP
    if (formData.zip.length !== 5) {
      setErrorMsg("Please enter a valid 5 digit zip code.");
      setIsSubmitting(false);
      return;
    }

    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto mt-16 bg-white rounded-[24px] p-10 shadow-[var(--clay-card)] text-center animate-fade-up">
        <div className="text-6xl text-pp-success mb-6">✅</div>
        <h2 className="text-3xl font-playfair font-bold text-pp-dark mb-4">
          You're all set, {formData.ownerName.split(' ')[0]}! 🐾
        </h2>
        <p className="text-base text-pp-body leading-relaxed font-dm-sans mb-8">
          We've received your request for {formData.dogName}. We'll contact you at <strong className="text-pp-dark">{formData.phone}</strong> within 24 hours to confirm your appointment.
        </p>

        <div className="bg-pp-cream rounded-2xl p-6 text-left mb-8 border border-pp-border">
          <p className="text-sm text-pp-muted font-dm-sans mb-1">If you need to reach us sooner:</p>
          <a href="tel:5126770703" className="text-xl font-bold text-pp-red hover:underline block mb-4 font-dm-sans">(512) 677-0703</a>
          
          <p className="text-sm text-pp-muted font-dm-sans mb-1">Follow us for tips & before/afters:</p>
          <a href="https://instagram.com/poppypawsgrooming" className="text-pp-red font-bold hover:underline font-dm-sans">@poppypawsgrooming</a>
        </div>

        <button onClick={() => window.location.href = '/'} className="px-8 py-3 rounded-full border-2 border-pp-border font-bold text-pp-dark hover:border-pp-red hover:text-pp-red transition-all font-dm-sans">
          Back to Home →
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-16 bg-white rounded-[32px] p-6 sm:p-10 shadow-[var(--clay-card)] relative z-10">
      
      {/* PROGRESS BAR */}
      <div className="flex items-center justify-between mb-12 relative px-2">
        <div className="absolute top-4 left-6 right-6 h-[2px] bg-pp-border z-0"></div>
        {[
          { num: 1, label: 'Your Dog' },
          { num: 2, label: 'Service' },
          { num: 3, label: 'Your Info' }
        ].map((s) => (
          <div key={s.num} className="relative z-10 flex flex-col items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold font-dm-sans transition-colors duration-300 ${
              step > s.num ? 'bg-pp-success text-white' : 
              step === s.num ? 'bg-pp-red text-white shadow-[var(--clay-btn-primary)]' : 
              'bg-white border-2 border-pp-border text-pp-muted'
            }`}>
              {step > s.num ? '✓' : s.num}
            </div>
            <span className={`text-xs font-medium font-dm-sans absolute -bottom-5 w-max text-center ${step === s.num ? 'text-pp-red' : 'text-pp-muted'}`}>
              {s.num} {s.label}
            </span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mt-8 font-dm-sans">
        {/* STEP 1 */}
        {step === 1 && (
          <div className="animate-fade-up space-y-8">
            <div className="text-center mb-6">
              <h3 className="font-playfair text-2xl font-bold text-pp-dark mb-2">Tell us about your dog</h3>
              <p className="text-pp-muted text-sm font-dm-sans">This helps us give you the most accurate recommendation.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-pp-dark mb-2">Dog's Name *</label>
              <input 
                type="text" required autoComplete="off" placeholder="e.g. Buddy, Luna, Bella"
                value={formData.dogName} onChange={(e) => updateForm('dogName', e.target.value)}
                className="w-full h-14 px-4 rounded-xl border border-pp-border focus:border-pp-red focus:ring-2 focus:ring-pp-red/20 text-base outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-pp-dark mb-2">Breed *</label>
              <input 
                type="text" required list="breeds" placeholder="Start typing breed..."
                value={formData.breed} onChange={(e) => updateForm('breed', e.target.value)}
                className="w-full h-14 px-4 rounded-xl border border-pp-border focus:border-pp-red focus:ring-2 focus:ring-pp-red/20 text-base outline-none transition"
              />
              <datalist id="breeds">
                {POPULAR_BREEDS.map(b => <option key={b} value={b} />)}
              </datalist>
            </div>

            <div>
              <label className="block text-sm font-medium text-pp-dark mb-3">Size *</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {SIZES.map(s => (
                  <div 
                    key={s.id} 
                    onClick={() => updateForm('size', s.id)}
                    className={`border rounded-2xl p-4 cursor-pointer text-center transition-all ${
                      formData.size === s.id ? 'border-2 border-pp-red bg-pp-red-light text-pp-red' : 'border-pp-border bg-white text-pp-dark hover:border-pp-red/50'
                    }`}
                  >
                    <div className="text-2xl mb-1">{s.icon}</div>
                    <div className="font-bold text-sm mb-0.5">{s.label}</div>
                    <div className="text-[10px] opacity-80">{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-pp-dark mb-3">Coat Type *</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {COATS.map(c => (
                  <div 
                    key={c.id} 
                    onClick={() => updateForm('coatType', c.id)}
                    className={`border rounded-2xl p-4 cursor-pointer flex flex-col items-center text-center transition-all ${
                      formData.coatType === c.id ? 'border-2 border-pp-red bg-pp-red-light text-pp-red' : 'border-pp-border bg-white text-pp-dark hover:border-pp-red/50'
                    }`}
                  >
                    <div className="text-xl mb-1">{c.icon}</div>
                    <div className="font-bold text-sm mb-0.5">{c.label}</div>
                    <div className="text-xs opacity-80 mt-auto">{c.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-pp-dark mb-2">Special Notes (optional)</label>
              <textarea 
                rows={3} placeholder="Anxious? Injuries? Allergies? Any sensitivities? Let us know..."
                value={formData.specialNotes} onChange={(e) => updateForm('specialNotes', e.target.value)}
                className="w-full p-4 rounded-xl border border-pp-border focus:border-pp-red focus:ring-2 focus:ring-pp-red/20 text-base outline-none transition resize-none"
              ></textarea>
            </div>

            <button 
              type="button" onClick={handleNext} disabled={!step1Valid}
              className={`w-full h-14 rounded-full font-bold text-base transition-all ${
                step1Valid ? 'bg-pp-red text-white shadow-[var(--clay-btn-primary)] hover:bg-pp-red-dark hover:-translate-y-[2px]' : 
                'bg-pp-border/50 text-pp-muted cursor-not-allowed opacity-50'
              }`}
            >
              Continue to Services →
            </button>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="animate-fade-up space-y-6">
            <div className="text-center mb-8">
              <h3 className="font-playfair text-2xl font-bold text-pp-dark mb-2">Choose your service</h3>
              <p className="text-pp-muted text-sm font-dm-sans">Prices shown are starting rates and update based on your dog's info.</p>
            </div>

            <div className="space-y-4">
              {[
                { id: 'full', icon: '🛁', name: 'Full Groom', desc: 'Bath, blowout, full haircut, nails, ears' },
                { id: 'bath', icon: '🚿', name: 'Bath & Mini Groom', desc: 'Bath, blowout, brush, nails, light trim' },
                { id: 'dental', icon: '🦷', name: 'Dental Cleaning', desc: 'Anesthesia-free cosmetic cleaning' }
              ].map(srv => {
                const estPrice = getPricing(srv.id);
                return (
                  <div 
                    key={srv.id} onClick={() => updateForm('serviceId', srv.id)}
                    className={`cursor-pointer transition-all flex items-center p-5 ${
                      formData.serviceId === srv.id ? 'border-2 border-pp-red bg-pp-red-light rounded-2xl' : 'border border-pp-border bg-white rounded-2xl hover:border-pp-red/50'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-pp-cream flex items-center justify-center text-xl shrink-0 mr-4">
                      {srv.icon}
                    </div>
                    <div className="flex-1 min-w-0 pr-4">
                      <div className="font-bold text-pp-dark text-base truncate">{srv.name}</div>
                      <div className="text-sm text-pp-muted truncate">{srv.desc}</div>
                      {estPrice && (
                        <div className="text-xs text-pp-muted mt-1 italic">Est. for {formData.dogName || 'dog'}: <strong className="text-pp-dark">${estPrice}</strong></div>
                      )}
                    </div>
                    <div className="shrink-0 flex items-center justify-end w-20">
                      {formData.serviceId === srv.id ? (
                        <div className="text-pp-red font-bold text-xl">✓</div>
                      ) : estPrice ? (
                        <div className="font-bold text-pp-red text-lg">${estPrice}+</div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>

            {!formData.specialNotes && (
              <div className="mt-8 border-t border-pp-border pt-6 animate-fade-up">
                <p className="text-xs uppercase font-bold text-pp-muted mb-4 tracking-wider">Optional add-ons</p>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-5 h-5 rounded flex items-center justify-center border transition-all ${formData.mattingAddon ? 'bg-pp-red border-pp-red text-white' : 'border-pp-border bg-white group-hover:border-pp-red'}`}>
                    {formData.mattingAddon && '✓'}
                  </div>
                  <input type="checkbox" className="hidden" checked={formData.mattingAddon} onChange={(e) => updateForm('mattingAddon', e.target.checked)} />
                  <span className="text-sm text-pp-dark font-medium">Matting treatment (+$35)</span>
                </label>
              </div>
            )}

            <div className="flex gap-4 mt-8">
              <button 
                type="button" onClick={() => setStep(1)}
                className="h-14 px-6 rounded-full font-bold text-sm bg-pp-cream-dark text-pp-dark hover:bg-pp-border transition-colors"
              >
                ← Back
              </button>
              <button 
                type="button" onClick={handleNext} disabled={!step2Valid}
                className={`flex-1 h-14 rounded-full font-bold text-base transition-all ${
                  step2Valid ? 'bg-pp-red text-white shadow-[var(--clay-btn-primary)] hover:bg-pp-red-dark hover:-translate-y-[2px]' : 
                  'bg-pp-border/50 text-pp-muted cursor-not-allowed opacity-50'
                }`}
              >
                Continue →
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="animate-fade-up space-y-6">
            <div className="text-center mb-8">
              <h3 className="font-playfair text-2xl font-bold text-pp-dark mb-2">Almost there!</h3>
              <p className="text-pp-muted text-sm font-dm-sans">We'll contact you within 24 hours to confirm your appointment.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-pp-dark mb-2">Your Name *</label>
                <input 
                  type="text" required autoComplete="name" placeholder="First and last name"
                  value={formData.ownerName} onChange={(e) => updateForm('ownerName', e.target.value)}
                  className="w-full h-14 px-4 rounded-xl border border-pp-border focus:border-pp-red focus:ring-2 focus:ring-pp-red/20 text-base outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-pp-dark mb-2">Phone Number *</label>
                <input 
                  type="tel" inputMode="tel" required placeholder="(512) 000-0000"
                  value={formData.phone} 
                  onChange={(e) => {
                    let val = e.target.value.replace(/\D/g, '').substring(0,10);
                    if(val.length > 6) val = `(${val.substring(0,3)}) ${val.substring(3,6)}-${val.substring(6,10)}`;
                    else if(val.length > 3) val = `(${val.substring(0,3)}) ${val.substring(3,6)}`;
                    else if(val.length > 0) val = `(${val}`;
                    updateForm('phone', val);
                  }}
                  className="w-full h-14 px-4 rounded-xl border border-pp-border focus:border-pp-red focus:ring-2 focus:ring-pp-red/20 text-base outline-none transition"
                />
              </div>

              <div>
                 <label className="block text-sm font-medium text-pp-dark mb-2">Email Address *</label>
                <input 
                  type="email" required autoComplete="email" placeholder="you@example.com"
                  value={formData.email} onChange={(e) => updateForm('email', e.target.value)}
                  className="w-full h-14 px-4 rounded-xl border border-pp-border focus:border-pp-red focus:ring-2 focus:ring-pp-red/20 text-base outline-none transition"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-pp-dark mb-1">Street Address *</label>
                <p className="text-xs text-pp-muted mb-2">We come to you — needed to confirm service area</p>
                <input 
                  type="text" required autoComplete="street-address" placeholder="123 Puppy Lane"
                  value={formData.street} onChange={(e) => updateForm('street', e.target.value)}
                  className="w-full h-14 px-4 rounded-xl border border-pp-border focus:border-pp-red focus:ring-2 focus:ring-pp-red/20 text-base outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-pp-dark mb-2">ZIP Code *</label>
                <input 
                  type="text" inputMode="numeric" maxLength="5" required placeholder="78626"
                  value={formData.zip} onChange={(e) => updateForm('zip', e.target.value.replace(/\D/g, ''))}
                  className="w-full h-14 px-4 rounded-xl border border-pp-border focus:border-pp-red focus:ring-2 focus:ring-pp-red/20 text-base outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-pp-dark mb-2">Preferred Date *</label>
                <input 
                  type="date" required min={new Date(Date.now() + 86400000).toISOString().split('T')[0]}
                  value={formData.prefDate} onChange={(e) => updateForm('prefDate', e.target.value)}
                  className="w-full h-14 px-4 rounded-xl border border-pp-border focus:border-pp-red focus:ring-2 focus:ring-pp-red/20 text-base outline-none transition"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-pp-dark mb-3">Preferred Time *</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { id: 'morning', icon: '🌅', label: 'Morning', sub: '8am–11am' },
                  { id: 'afternoon', icon: '☀️', label: 'Afternoon', sub: '11am–3pm' },
                  { id: 'late', icon: '🌤️', label: 'Late Afternoon', sub: '3pm–5pm' }
                ].map(t => (
                  <div 
                    key={t.id} onClick={() => updateForm('prefTime', t.id)}
                    className={`border rounded-2xl p-4 cursor-pointer text-center transition-all ${
                      formData.prefTime === t.id ? 'border-2 border-pp-red bg-pp-red-light text-pp-red' : 'border-pp-border bg-white text-pp-dark hover:border-pp-red/50'
                    }`}
                  >
                    <div className="text-xl mb-1">{t.icon}</div>
                    <div className="font-bold text-sm mb-0.5">{t.label}</div>
                    <div className="text-xs opacity-80">{t.sub}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-pp-muted mt-2">We'll confirm exact time when we reach out.</p>
            </div>

            <div className="mt-4">
               <label className="block text-sm font-medium text-pp-dark mb-2">How did you hear about us?</label>
               <select 
                  value={formData.source} onChange={(e) => updateForm('source', e.target.value)}
                  className="w-full h-14 px-4 rounded-xl border border-pp-border focus:border-pp-red focus:ring-2 focus:ring-pp-red/20 text-base outline-none transition bg-white"
                >
                  <option value="">Select an option (optional)</option>
                  <option value="google">Google</option>
                  <option value="instagram">Instagram</option>
                  <option value="nextdoor">Nextdoor</option>
                  <option value="referral">Referral from friend</option>
                  <option value="yelp">Yelp</option>
                  <option value="other">Other</option>
               </select>
            </div>

            <div className="mt-6 pt-6 border-t border-pp-border">
              <label className="flex items-start gap-3 cursor-pointer group">
                  <div className={`mt-0.5 shrink-0 w-5 h-5 rounded flex items-center justify-center border transition-all ${formData.privacy ? 'bg-pp-red border-pp-red text-white' : 'border-pp-border bg-white group-hover:border-pp-red'}`}>
                    {formData.privacy && '✓'}
                  </div>
                  <input type="checkbox" className="hidden" checked={formData.privacy} onChange={(e) => updateForm('privacy', e.target.checked)} />
                  <span className="text-sm text-pp-dark leading-relaxed">
                    I agree to Poppy Paws' <a href="/privacy" className="text-pp-red hover:underline" target="_blank" rel="noreferrer">Privacy Policy</a> and <a href="/terms" className="text-pp-red hover:underline" target="_blank" rel="noreferrer">Terms of Service</a>. *
                  </span>
                </label>
            </div>

            {errorMsg && (
              <p className="text-pp-red text-sm mt-4 font-bold">{errorMsg}</p>
            )}

            <div className="flex gap-4 mt-8 pt-4">
              <button 
                type="button" onClick={() => setStep(2)}
                className="h-14 px-6 rounded-full font-bold text-sm bg-pp-cream-dark text-pp-dark hover:bg-pp-border transition-colors hidden md:block"
              >
                ← Back
              </button>
              <button 
                type="submit" disabled={!step3Valid || isSubmitting}
                className={`flex-1 h-14 flex items-center justify-center rounded-full font-bold text-base transition-all ${
                  step3Valid && !isSubmitting ? 'bg-pp-red text-white shadow-[var(--clay-btn-primary)] hover:bg-pp-red-dark hover:-translate-y-[2px]' : 
                  'bg-pp-border/50 text-pp-muted cursor-not-allowed opacity-50'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Sending...
                  </span>
                ) : 'Request My Appointment →'}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
