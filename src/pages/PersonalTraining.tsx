import PageLayout from '../components/layout/PageLayout';
import { Target, TrendingUp, Sparkles, User, Dumbbell, ShieldAlert, CheckCircle } from 'lucide-react';

export default function PersonalTraining() {
  const steps = [
    {
      num: '01',
      title: 'Fitness Assessment',
      desc: 'We map out your background, review injury histories, and list clear personal physical performance parameters.'
    },
    {
      num: '02',
      title: 'Custom Programming',
      desc: 'No cookie-cutter routines. We design an efficient, custom-tailored strength and conditioning structure for you.'
    },
    {
      num: '03',
      title: '1-on-1 Execution',
      desc: '60 minutes of high-focus coaching, technique calibration, and heavy-intensity safety monitoring.'
    }
  ];

  return (
    <PageLayout
      title="Personal Training"
      subtitle="Refine, Outperform, and Rebuild"
      heroImage="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop"
    >
      {/* Introduction Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32" id="pt-intro">
        <div>
          <span className="text-neon text-xs font-bold uppercase tracking-[0.4em] mb-4 block italic">
            Elite Coaching
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-black uppercase italic leading-none mb-8">
            Burn Fat, Build Muscle, <br />
            <span className="text-neon">and Feel Great</span>
          </h2>
          <div className="space-y-6 text-zinc-400 font-light leading-relaxed mb-8">
            <p>
              Achieve your ultimate fitness and health milestones with our premium 1-on-1 Personal Training. At East Wake Fitness Center, we know that generic plans yield generic results. That's why we create programs custom-tailored around your unique biometric parameters, physical goals, and fitness experience.
            </p>
            <p>
              Our signature <span className="text-white font-medium">60-Minute Custom Personal Training Sessions</span> are designed to be efficient, motivating, and incredibly effective. Whether you are aiming to increase raw force power, enhance cardiovascular longevity, drop body fat, or recover from physical tension, our coaches stand directly by your side.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 bg-zinc-950 border border-white/5 p-6 rounded-2xl">
            <div>
              <span className="text-neon text-2xl font-black font-display uppercase block">60</span>
              <span className="text-zinc-500 text-xs uppercase tracking-wider font-mono">Minute Sessions</span>
            </div>
            <div>
              <span className="text-neon text-2xl font-black font-display uppercase block">100%</span>
              <span className="text-zinc-500 text-xs uppercase tracking-wider font-mono">Custom Tailored</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-neon/10 blur-3xl rounded-full opacity-35" />
          <img
            src="https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?q=80&w=2070&auto=format&fit=crop"
            alt="One-on-One personal training at East Wake Fitness Center"
            className="relative z-10 rounded-3xl border border-white/10 shadow-2xl"
          />
        </div>
      </div>

      {/* The Roadmap */}
      <div className="mb-32">
        <div className="text-center mb-20">
          <span className="text-neon text-xs font-bold uppercase tracking-[0.4em] mb-4 block italic">
            Our Method
          </span>
          <h3 className="font-display text-3xl md:text-5xl font-black uppercase italic">
            The Personal Training <span className="text-zinc-600">Roadmap</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.num} className="relative p-8 bg-zinc-950/40 border border-white/5 rounded-3xl flex flex-col justify-between">
              <span className="absolute top-6 right-8 font-display text-6xl font-black text-white/5">
                {step.num}
              </span>
              <div className="z-10 mt-6">
                <h4 className="font-display text-2xl font-bold uppercase italic text-neon mb-3">
                  {step.title}
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing / CTA Section */}
      <div className="p-12 md:p-20 bg-gradient-to-r from-zinc-950 to-black border border-white/10 rounded-3xl relative overflow-hidden text-center max-w-4xl mx-auto">
        <div className="absolute top-0 right-0 w-64 h-64 bg-neon/5 rounded-full blur-3xl" />
        <span className="text-neon text-xs font-bold uppercase tracking-[0.4em] mb-4 block italic">
          Start Your Transformation
        </span>
        <h3 className="font-display text-3xl md:text-5xl font-black uppercase italic mb-6">
          Ready to Train with are <br />
          <span className="text-white">Expert Coaches?</span>
        </h3>
        <p className="text-zinc-400 font-light text-base leading-relaxed mb-10 max-w-xl mx-auto">
          Schedule your free, zero-obligation fitness consult. Let u show you how we can unlock your ultimate capacity and fast-track your health milestones.
        </p>
        <a
          href="/contact"
          className="inline-block bg-neon text-black font-black uppercase tracking-wider text-xs px-10 py-5 rounded-full neon-border-glow hover:scale-105 transition-transform"
        >
          Book Your Consult
        </a>
      </div>
    </PageLayout>
  );
}
