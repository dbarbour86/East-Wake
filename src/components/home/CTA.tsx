import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  '7-Day Full Facility Access',
  'Private Training Consultation',
  'Custom Performance Baseline',
  'Elite Community Access'
];

export default function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[3rem] overflow-hidden bg-zinc-950 border border-white/5 p-8 md:p-16 lg:p-24 overflow-hidden">
          {/* Animated Background effects */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-neon/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-neon text-xs font-bold uppercase tracking-[0.4em] mb-4 block italic">
                Limited Availability
              </span>
              <h2 className="font-display text-5xl md:text-7xl font-black uppercase italic leading-[0.9] tracking-tighter mb-8 italic">
                Join the <br />
                <span className="text-neon neon-glow italic">Vanguard.</span>
              </h2>
              <p className="text-zinc-200 text-lg mb-10 max-w-md font-light leading-relaxed">
                Take the first step toward your new self. Secure your 7-day 
                complimentary trial and experience the East Wake standard.
              </p>
              
              <ul className="space-y-4 mb-12">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-4 text-sm font-medium uppercase tracking-widest text-zinc-100">
                    <div className="w-6 h-6 rounded-full bg-neon flex items-center justify-center text-black">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass p-10 md:p-12 rounded-3xl border-white/10 shadow-2xl">
              <h3 className="font-display text-2xl font-bold uppercase italic mb-8 text-center">
                Get Your Pass
              </h3>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-200 ml-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-neon transition-all text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-200 ml-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-neon transition-all text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-200 ml-2">Goal</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-neon transition-all appearance-none text-zinc-200">
                    <option>Weight Loss</option>
                    <option>Muscle Gain</option>
                    <option>Athletic Performance</option>
                    <option>General Fitness</option>
                  </select>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-neon text-black py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(204,255,0,0.2)] flex items-center justify-center gap-3"
                >
                  Claim My Free Trial <ArrowRight size={20} />
                </button>
                <p className="text-[10px] text-center text-zinc-600 uppercase tracking-widest mt-6">
                  No commitment required. We respect your privacy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
