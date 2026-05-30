import PageLayout from '../components/layout/PageLayout';
import { Apple, CheckCircle, ChevronRight, Compass, Shield, Users } from 'lucide-react';

export default function Nutrition() {
  const offerings = [
    {
      title: 'Customized Nutrition Plans',
      desc: 'No crash diets. We calculate your custom macronutrient needs based on physical loading, metabolic history, and athletic expectations.',
      details: ['Accurate calorie/macro thresholds', 'Flexible dietary choices', 'Weekly adjustments based on biofeedback']
    },
    {
      title: 'Individualized Workout Plans',
      desc: 'Get highly specified gym routines mapped directly to your physical capacity, schedule, and strength progression goals.',
      details: ['Targeted progressive overload', 'Cybex & Precor specific movements', 'Optimal recovery parameters']
    },
    {
      title: 'One-on-One Integration',
      desc: 'Combine premium nutritional engineering with our 1-on-1 personal training for the ultimate health transformation acceleration.',
      details: ['Direct form corrections', 'Personal coaching focus', 'Immediate accountability metrics']
    },
    {
      title: 'Online Coaching & Support',
      desc: 'Keep in constant touch. Our virtual tools maintain perfect tracking and feedback loops wherever you travel.',
      details: ['Interactive daily tracking', 'Remote technique checking', 'Consistent feedback reports']
    }
  ];

  return (
    <PageLayout
      title="Nutrition Coaching"
      subtitle="Fuel Your Peak Outputs"
      heroImage="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2070&auto=format&fit=crop"
    >
      {/* Introduction Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32" id="nutrition-intro">
        <div>
          <span className="text-neon text-xs font-bold uppercase tracking-[0.4em] mb-4 block italic">
            Metabolic Performance
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-black uppercase italic leading-none mb-8">
            Fuel Your <br />
            <span className="text-neon">Metabolic Potential</span>
          </h2>
          <div className="space-y-6 text-zinc-400 font-light leading-relaxed mb-8">
            <p className="text-md">
              <span className="text-white font-medium">LET US HELP YOU REACH YOUR NUTRITION AND FITNESS GOALS!</span> We offer online and in-person nutrition coaching, customized meal plans, and customized workout structures engineered to feed your performance.
            </p>
            <p>
              Many athletes spend hours pushing weights on the platform, yet completely stall on their goals due to metabolic roadblocks. Our coaching cuts clean through the nutritional noise, providing a realistic, sustainable approach to nutrient density, bioenergetics, and athletic fuel.
            </p>
          </div>
          <div className="p-6 bg-zinc-950 border border-white/5 rounded-2xl">
            <h4 className="font-display font-medium text-white uppercase text-sm tracking-widest mb-3 flex items-center gap-2">
              <Apple size={18} className="text-neon" /> Included Coaching Packages
            </h4>
            <p className="text-zinc-400 text-sm font-light">
              We offer <span className="text-neon font-bold">1-Hour Deep Nutrition Coaching packages</span>, customized meal plans, individualized training regimens, and remote progress support structure.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-neon/10 blur-3xl rounded-full opacity-35" />
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2070&auto=format&fit=crop"
            alt="Healthy meal preparation and fresh nutrition ingredients"
            className="relative z-10 rounded-3xl border border-white/10 shadow-2xl"
          />
        </div>
      </div>

      {/* Offerings Grid */}
      <div className="mb-32">
        <div className="text-center mb-20">
          <span className="text-neon text-xs font-bold uppercase tracking-[0.4em] mb-4 block italic">
            Our Methods
          </span>
          <h3 className="font-display text-3xl md:text-5xl font-black uppercase italic">
            Complete Performance <span className="text-zinc-600">Integrations</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offerings.map((offering) => (
            <div key={offering.title} className="p-8 bg-zinc-950/50 border border-white/5 rounded-3xl flex flex-col justify-between">
              <div>
                <h4 className="font-display text-2xl font-bold uppercase italic text-neon mb-4">
                  {offering.title}
                </h4>
                <p className="text-zinc-400 text-sm font-light leading-relaxed mb-6">
                  {offering.desc}
                </p>
              </div>
              <ul className="space-y-3 pt-6 border-t border-white/5">
                {offering.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-center gap-3 text-xs text-zinc-300 font-mono">
                    <CheckCircle size={14} className="text-neon flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-t from-zinc-950 to-black border border-white/5 p-12 md:p-20 rounded-3xl text-center max-w-3xl mx-auto">
        <h3 className="font-display text-3xl md:text-4xl font-black uppercase italic mb-6">
          Optimize Your <span className="text-neon">Metabolism</span>
        </h3>
        <p className="text-zinc-400 font-light text-sm mb-8 leading-relaxed">
          Book your 1-Hour nutrition assessment to map out calorie targets, correct vitamin bottlenecks, and formulate a realistic schedule pattern that keeps you operating with pure momentum.
        </p>
        <a 
          href="/contact" 
          className="inline-flex items-center gap-2 bg-neon text-black text-xs font-black uppercase tracking-wider px-8 py-4 rounded-full hover:scale-105 transition-transform"
        >
          Schedule Meal Blueprint <ChevronRight size={16} />
        </a>
      </div>
    </PageLayout>
  );
}
