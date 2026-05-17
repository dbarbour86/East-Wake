import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    k: 'What are your hours of operation?',
    v: 'We are open 24/7 for all active members. Our staffed hours for consultations and guest passes are Monday–Friday (9:00 AM – 7:00 PM) and Saturday (10:00 AM – 4:00 PM).'
  },
  {
    k: 'Do you offer personal training for beginners?',
    v: 'Absolutely. Over 40% of our new members are beginners. Our personal training programs are customized to your starting point, ensuring safety and effective progression from Day 1.'
  },
  {
    k: 'Where is East Wake Fitness located in Wendell?',
    v: 'We are centrally located in the heart of Wendell, NC, near the town square. Our facility is easily accessible for residents of Wendell, Zebulon, Knightdale, and surrounding East Wake areas.'
  },
  {
    k: 'What kind of equipment do you have?',
    v: 'We feature a curated selection of premium equipment including Rogue power racks, Eleiko plates, Hammer Strength machines, and a dedicated functional turf area for athletic movement.'
  },
  {
    k: 'Are group classes included in the membership?',
    v: 'Yes, most of our base membership plans include unlimited access to our HIIT, Yoga, and Core classes. Premium specialized clinics may require separate registration.'
  }
];

function FAQItem({ q, a, index }: { q: string, a: string, index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 last:border-0 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between text-left group transition-colors"
      >
        <span className="font-display text-lg md:text-xl font-bold uppercase italic tracking-tight group-hover:text-neon transition-colors pr-8">
          {q}
        </span>
        <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all ${isOpen ? 'bg-neon border-neon text-black rotate-180' : 'text-white'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <p className="pb-8 text-zinc-200 font-light leading-relaxed max-w-3xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-32 bg-black/50 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-neon text-xs font-bold uppercase tracking-[0.4em] mb-4 block italic">
            Common Inquiries
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-black uppercase italic leading-none">
            Frequently Asked <br />
            <span className="text-zinc-600">Questions</span>
          </h2>
        </div>

        <div className="glass rounded-[2rem] p-4 md:p-10 border-white/5">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} q={faq.k} a={faq.v} index={idx} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <p className="text-zinc-500 text-sm italic">
                Still have questions? <a href="/contact" className="text-neon hover:underline">Contact our concierge team</a> for immediate assistance.
            </p>
        </div>
      </div>
    </section>
  );
}
