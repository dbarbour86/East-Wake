import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with cinematic overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Premium Gym Atmosphere" 
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center lg:text-left w-full pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-neon/10 border border-neon/20 text-neon text-xs font-bold uppercase tracking-[0.3em] mb-6 animate-pulse">
                Evolution Starts Here
              </span>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase italic leading-[0.9] tracking-tighter mb-8 bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent">
                Reach Your <br />
                <span className="text-neon neon-glow">Fitness Goals</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-200 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light">
                Whether you're maintaining a healthy lifestyle or just starting your evolution, 
                let us show you how East Wake Fitness Center can help you <span className="text-white font-semibold">redefine your potential</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <Link 
                  to="/free-trial" 
                  className="w-full sm:w-auto bg-neon text-black px-10 py-5 rounded-full font-black uppercase text-sm tracking-widest hover:scale-105 transition-all active:scale-95 flex items-center justify-center gap-2 neon-border-glow shadow-[0_0_30px_rgba(204,255,0,0.3)]"
                >
                  Join the Elite <ArrowRight size={20} />
                </Link>
                <button className="w-full sm:w-auto flex items-center justify-center gap-4 text-white hover:text-neon transition-colors group">
                  <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-neon group-hover:bg-neon/10 transition-all">
                    <Play size={20} fill="currentColor" />
                  </div>
                  <span className="uppercase text-xs font-bold tracking-[0.2em]">Watch Atmosphere</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Floating UI Element (Abstract 3D-ish card) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="hidden lg:block relative"
          >
            <div className="w-80 h-96 relative perspective-1000">
              <div className="absolute inset-0 bg-neon rounded-3xl blur-2xl opacity-20 animate-pulse" />
              <div className="relative glass p-8 rounded-3xl h-full flex flex-col justify-between transform hover:rotate-2 hover:scale-105 transition-transform duration-500">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 bg-neon rounded-xl flex items-center justify-center">
                    <Dumbbell className="text-black" />
                  </div>
                  <div className="text-right">
                    <div className="text-neon font-bold text-2xl">98%</div>
                    <div className="text-[10px] uppercase text-zinc-300">Success Rate</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-sm uppercase font-bold tracking-widest mb-2 text-white">Member Strength</div>
                  <div className="space-y-3">
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '85%' }}
                        transition={{ delay: 1, duration: 1.5 }}
                        className="h-full bg-neon shadow-[0_0_10px_#ccff00]" 
                      />
                    </div>
                    <div className="flex justify-between text-[10px] text-zinc-300 uppercase tracking-tighter">
                      <span>Conditioning</span>
                      <span>Strength</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-xs text-zinc-200 italic font-light leading-relaxed">
                    "This place redefined what a gym means to me. The energy here is unmatched."
                  </p>
                  <div className="mt-2 text-[10px] font-bold text-white uppercase tracking-widest">— Alex M., Athlete</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 hidden md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">Explore Evolution</span>
        <div className="w-px h-16 bg-gradient-to-b from-neon to-transparent" />
      </motion.div>
    </section>
  );
}

function Dumbbell({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M6.5 6.5h11" />
      <path d="M6.5 17.5h11" />
      <path d="M7 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z" />
    </svg>
  );
}
