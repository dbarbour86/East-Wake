import PageLayout from '../components/layout/PageLayout';
import { motion } from 'motion/react';
import { Target, Users, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <PageLayout 
      title="The Standard" 
      subtitle="Setting the bar for fitness in Wendell"
      heroImage="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
        <div>
          <h2 className="font-display text-4xl font-black uppercase italic mb-8">
            More than just a <span className="text-neon">Gym</span>
          </h2>
          <div className="space-y-6 text-zinc-400 leading-relaxed font-light">
            <p>
              Founded in 1999, East Wake Fitness Center has been the cornerstone of strength 
              and health in Zebulon for over two decades. We've weathered the trends, 
              staying true to what works: high-quality equipment, a focused atmosphere, 
              and a commitment to our members' results.
            </p>
            <p>
              Our facility is designed to bridge the gap between heavy-duty strength 
              training and maintaining a modern, healthy lifestyle. With an array of 
              cardiovascular, circuit, and strength machines from brands like Cybex 
              and Precor, we ensure our members have the tools to redefine their potential.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-neon/20 blur-3xl rounded-full opacity-30" />
          <img 
            src="https://images.unsplash.com/photo-1574680077505-ef74a569a735?q=80&w=2070&auto=format&fit=crop" 
            alt="Gym Atmosphere" 
            className="relative z-10 rounded-3xl border border-white/10 shadow-2xl"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col items-center text-center p-8 glass rounded-3xl border-white/5">
          <div className="w-16 h-16 bg-neon rounded-2xl flex items-center justify-center text-black mb-8 rotate-3">
            <Target size={32} />
          </div>
          <h3 className="font-display text-2xl font-bold uppercase italic mb-4">Our Mission</h3>
          <p className="text-zinc-500 text-sm leading-relaxed">
            To provide the environment, tools, and expertise necessary for every 
            member to reach their peak physical and mental performance.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-8 glass rounded-3xl border-white/5">
          <div className="w-16 h-16 bg-neon rounded-2xl flex items-center justify-center text-black mb-8 -rotate-3">
            <Users size={32} />
          </div>
          <h3 className="font-display text-2xl font-bold uppercase italic mb-4">Our Community</h3>
          <p className="text-zinc-500 text-sm leading-relaxed">
            A diverse collective of high-performers, from professionals and parents 
            to amateur athletes and powerlifting veterans.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-8 glass rounded-3xl border-white/5">
          <div className="w-16 h-16 bg-neon rounded-2xl flex items-center justify-center text-black mb-8 rotate-6">
            <Sparkles size={32} />
          </div>
          <h3 className="font-display text-2xl font-bold uppercase italic mb-4">Our Standard</h3>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Excellence in everything. From the cleanliness of our facility to the 
            precision of our coaching, we never settle for mediocre.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
