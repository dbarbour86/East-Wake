import PageLayout from '../components/layout/PageLayout';
import { ShieldCheck, Calendar, DollarSign, Award, Music, Users } from 'lucide-react';

export default function GroupClasses() {
  const benefits = [
    {
      icon: Users,
      title: 'Motivating Group Energy',
      desc: 'Work out side-by-side with fellow community members, sharing the drive to reach personal peaks.'
    },
    {
      icon: DollarSign,
      title: 'Affordable Rates',
      desc: 'Only $8.00 per class for EWFC members and $11.00 for non-members. Drop in and experience high-energy workouts.'
    },
    {
      icon: ShieldCheck,
      title: 'Experienced Instructors',
      desc: 'Our certified fitness coaches lead interactive classes designed to challenge and progress all fitness levels.'
    }
  ];

  const classOfferings = [
    {
      name: 'HIIT & Circuit Fusion',
      duration: '45-60 min',
      timing: 'Morning & Evening Sessions',
      intensity: 'High',
      desc: 'A full-body metabolic conditioning program combining high-intensity intervals, functional bodyweight movements, and light resistance training.'
    },
    {
      name: 'Strength & Core',
      duration: '50 min',
      timing: 'Mid-Day & Afternoons',
      intensity: 'Medium-High',
      desc: 'Build functional strength, improve posture, and bulletproof your core using dumbbells, kettlebells, and bodyweight exercises.'
    },
    {
      name: 'Active Longevity Class',
      duration: '45 min',
      timing: 'Mornings',
      intensity: 'Low-Medium',
      desc: 'Specialized functional strength and mobility sessions ideal for seniors and fitness veterans aiming to keep joints resilient and supple.'
    }
  ];

  return (
    <PageLayout
      title="Group Classes"
      subtitle="Interact, Sweat, and Outperform Together"
      heroImage="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop"
    >
      {/* Intro Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32" id="classes-intro">
        <div>
          <span className="text-neon text-xs font-bold uppercase tracking-[0.4em] mb-4 block italic">
            EWFC Group Fitness
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-black uppercase italic leading-none mb-8">
            High Performance <br />
            <span className="text-neon">Private Group Sessions</span>
          </h2>
          <p className="text-zinc-400 font-light leading-relaxed mb-6">
            Private Group Fitness Classes are offered to groups of individuals looking to exercise in a fun, motivating environment. We offer many customized fitness classes aimed at accelerating your fitness output, boosting endurance, and cultivating dynamic core strength.
          </p>
          <div className="p-6 bg-zinc-950 border border-white/5 rounded-2xl flex items-center gap-6">
            <div className="w-14 h-14 bg-neon/10 rounded-xl flex items-center justify-center text-neon flex-shrink-0">
              <DollarSign size={28} />
            </div>
            <div>
              <h4 className="font-bold text-white uppercase text-sm tracking-widest mb-1">EWFC Class Pricing</h4>
              <p className="text-zinc-400 text-sm font-light">
                <span className="text-neon font-bold">$8.00</span> for members / <span className="text-zinc-300 font-medium">$11.00</span> for non-members
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-neon/10 blur-3xl rounded-full opacity-35" />
          <img
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2070&auto=format&fit=crop"
            alt="Group Fitness Class working out at EWFC"
            className="relative z-10 rounded-3xl border border-white/10 shadow-2xl"
          />
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-32">
        <div className="text-center mb-20">
          <span className="text-neon text-xs font-bold uppercase tracking-[0.4em] mb-4 block italic">
            Why Class Training?
          </span>
          <h3 className="font-display text-3xl md:text-5xl font-black uppercase italic">
            The EWFC Group <span className="text-zinc-600">Difference</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={benefit.title} 
                className="p-8 bg-zinc-950/50 backdrop-blur border border-white/5 rounded-3xl hover:border-white/15 transition-all text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-neon/5 rounded-2xl flex items-center justify-center text-neon mb-6 border border-neon/20">
                  <Icon size={28} />
                </div>
                <h4 className="font-display text-xl font-bold uppercase italic mb-3 text-white">{benefit.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">{benefit.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Offerings Section */}
      <div className="mb-12">
        <div className="text-center mb-20">
          <span className="text-neon text-xs font-bold uppercase tracking-[0.4em] mb-4 block italic">
            Our Class Offerings
          </span>
          <h3 className="font-display text-3xl md:text-5xl font-black uppercase italic">
            Choose Your <span className="text-neon">Discipline</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {classOfferings.map((c) => (
            <div key={c.name} className="p-8 bg-gradient-to-b from-zinc-950 to-black border border-white/5 rounded-3xl flex flex-col justify-between h-full hover:border-neon/35 transition-colors">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-white/5 border border-white/10 px-3 py-1 rounded">
                    {c.duration}
                  </span>
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded ${
                    c.intensity === 'High' ? 'bg-red-500/10 text-red-500 border border-red-500/25' :
                    c.intensity === 'Medium-High' ? 'bg-orange-500/10 text-orange-500 border border-orange-500/25' :
                    'bg-green-500/10 text-green-500 border border-green-500/25'
                  }`}>
                    {c.intensity} Intensity
                  </span>
                </div>
                <h4 className="font-display text-2xl font-black uppercase italic text-white mb-3">{c.name}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed font-light mb-6">{c.desc}</p>
              </div>
              <div className="pt-6 border-t border-white/5 text-zinc-500 text-xs font-mono uppercase tracking-widest flex justify-between">
                <span>When</span>
                <span className="text-white font-sans font-medium text-sm">{c.timing}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
