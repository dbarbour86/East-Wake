import PageLayout from '../components/layout/PageLayout';
import { Award, ShieldCheck, HeartPulse, UserCheck, Phone, CheckCircle, ChevronRight } from 'lucide-react';

export default function SilverSneakers() {
  const pillars = [
    {
      icon: HeartPulse,
      title: 'Active Longevity',
      desc: 'Maintain joint mobility, build safe core capacity, and improve cardiovascular support for healthy everyday living.'
    },
    {
      icon: UserCheck,
      title: 'Full Facility Access',
      desc: 'Eligible adults get full access to our array of cardiovascular machines, Cybex selectorized circuits, and dedicated senior resources.'
    },
    {
      icon: ShieldCheck,
      title: 'Certified Support First',
      desc: 'Our caring staff is always on the floor, ready to instruct technique, adjust weights, and maintain a 100% supportive atmosphere.'
    }
  ];

  return (
    <PageLayout
      title="Silver Sneakers"
      subtitle="Vitality, Health, and Longevity"
      heroImage="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
    >
      {/* Introduction Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32" id="silver-sneakers-intro">
        <div>
          <span className="text-neon text-xs font-bold uppercase tracking-[0.4em] mb-4 block italic">
            Healthy Aging
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-black uppercase italic leading-none mb-8">
            Stay Fit, Stay Strong, <br />
            <span className="text-neon">and Move Pain-Free</span>
          </h2>
          <div className="space-y-6 text-zinc-400 font-light leading-relaxed mb-8">
            <p>
              <span className="text-white font-medium">Silver Sneakers</span> is a specialized program encouraging older adults (from 65 years old and up) to participate in deliberate physical activities that will help them maintain a healthier, happier lifestyle.
            </p>
            <p>
              The program provides eligible members with full access to our strength and cardiovascular equipment, customized fitness classes, and a welcoming community of peers. Whether you are aiming to increase flexibility, restore joint stability, build dense bone structure, or enjoy cardiorespiratory fitness, East Wake Fitness Center provides the ultimate base.
            </p>
          </div>
          <div className="p-6 bg-zinc-950 border border-white/5 rounded-2xl flex items-center gap-6">
            <div className="w-14 h-14 bg-neon/10 rounded-xl flex items-center justify-center text-neon flex-shrink-0">
              <Award size={28} />
            </div>
            <div>
              <h4 className="font-bold text-white uppercase text-sm tracking-widest mb-1">Medicare Insurance Coverage</h4>
              <p className="text-zinc-400 text-xs font-light leading-relaxed">
                Many Medicare plans cover 100% of your gym membership via the SilverSneakers or AARP Medicare Complete program. Drop by today, and we will happily verify your eligibility!
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-neon/10 blur-3xl rounded-full opacity-35" />
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop"
            alt="Healthy and active seniors exercising and staying fit"
            className="relative z-10 rounded-3xl border border-white/10 shadow-2xl"
          />
        </div>
      </div>

      {/* Program Pillars */}
      <div className="mb-32">
        <div className="text-center mb-20">
          <span className="text-neon text-xs font-bold uppercase tracking-[0.4em] mb-4 block italic">
            Active Benefits
          </span>
          <h3 className="font-display text-3xl md:text-5xl font-black uppercase italic">
            Engineered For <span className="text-zinc-600">Vitality</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="p-8 bg-zinc-950/40 border border-white/5 rounded-3xl hover:border-white/15 transition-all text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-neon/5 border border-neon/20 rounded-2xl flex items-center justify-center text-neon mb-6">
                  <Icon size={28} />
                </div>
                <h4 className="font-display text-xl font-bold uppercase italic mb-3 text-white">{pillar.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Verification Steps / Call-To-Action */}
      <div className="max-w-4xl mx-auto p-12 md:p-20 bg-gradient-to-r from-zinc-950 to-black border border-white/10 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-neon/5 rounded-full blur-3xl" />
        <div className="max-w-xl mx-auto text-center">
          <span className="text-neon text-xs font-bold uppercase tracking-[0.4em] mb-4 block italic">
            Quick Eligibility Verification
          </span>
          <h3 className="font-display text-3xl md:text-4xl font-black uppercase italic mb-6">
            Get Started <span className="text-neon">At No Cost</span>
          </h3>
          <p className="text-zinc-400 font-light text-sm leading-relaxed mb-8">
            Verifying your SilverSneakers or AARP eligibility is incredibly simple. All you need is your eligibility card or basic health plan info.
          </p>
          <ul className="space-y-3 mb-10 text-left max-w-sm mx-auto">
            <li className="flex items-center gap-3 text-xs text-zinc-300 font-mono">
              <CheckCircle size={14} className="text-neon" />
              <span>Step 1: Bring your health insurance card</span>
            </li>
            <li className="flex items-center gap-3 text-xs text-zinc-300 font-mono">
              <CheckCircle size={14} className="text-neon" />
              <span>Step 2: Let our desk verify physical eligibility</span>
            </li>
            <li className="flex items-center gap-3 text-xs text-zinc-300 font-mono">
              <CheckCircle size={14} className="text-neon" />
              <span>Step 3: Get 100% covered standard access</span>
            </li>
          </ul>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-neon text-black font-black uppercase tracking-wider text-xs px-8 py-4 rounded-full hover:scale-105 transition-transform"
          >
            Ask Our Eligibility Team <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
