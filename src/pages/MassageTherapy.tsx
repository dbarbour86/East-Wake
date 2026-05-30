import PageLayout from '../components/layout/PageLayout';
import { ShieldCheck, Heart, Sparkles, Smile, Footprints, CalendarDays, CheckCircle } from 'lucide-react';

export default function MassageTherapy() {
  const therapyBenefits = [
    'Relief from general Anxiety and mental stress',
    'Soothing relief for Digestive and metabolic disorders',
    'Significant tension decrease for Fibromyalgia patients',
    'Alleviation of recurring structural Headaches',
    'Deep reduction of Stress-Related Insomnia to enhance sleep',
    'Accelerated rehabilitation for complex Sports Injuries',
    'Overall cellular wellness, tissue mobility, and peace of mind'
  ];

  const modalities = [
    {
      name: 'Relaxation Massage',
      desc: 'Gentle, gliding strokes designed to calm the nervous system, increase circulation, and establish total muscle peace.'
    },
    {
      name: 'Therapeutic Massage',
      desc: 'Focused release of target muscle groups to correct posture issues, release heavy joint fatigue, and reduce myofascial tension.'
    },
    {
      name: 'Deep Tissue Massage',
      desc: 'Heavier, deliberate pressure aimed at the deepest layers of muscle tissue, fascia, and chronic pain knots.'
    }
  ];

  return (
    <PageLayout
      title="Massage Therapy"
      subtitle="Restore, Decongest, and Recover"
      heroImage="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop"
    >
      {/* Introduction Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32" id="massage-intro">
        <div>
          <span className="text-neon text-xs font-bold uppercase tracking-[0.4em] mb-4 block italic">
            Physical Restoration
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-black uppercase italic leading-none mb-8">
            The Power of <br />
            <span className="text-neon">Myofascial Alignment</span>
          </h2>
          <div className="space-y-6 text-zinc-400 font-light leading-relaxed mb-8">
            <p className="text-md">
              <span className="text-white font-medium">The benefits of professional massage therapy are truly incredible.</span> Physical recovery does not end at stretching; cellular alignment, tissue decompression, and nervous system restoration play a key role in metabolic repair.
            </p>
            <p>
              At East Wake Fitness Center, our fully licensed massage therapists are dedicated to providing customized therapies designed specifically for your physical and mental demands. Whether you need deep muscular restoration after a heavy squat protocol or gentle relaxation to ease everyday stresses, we provide a peaceful, dedicated sanctuary.
            </p>
          </div>
          <div className="p-6 bg-zinc-950 border border-white/5 rounded-2xl">
            <h4 className="font-display font-medium text-white uppercase text-sm tracking-widest mb-3 flex items-center gap-2">
              <Smile size={18} className="text-neon" /> Modalities Offered
            </h4>
            <p className="text-zinc-400 text-sm font-light">
              We specialize in deep, premium therapeutic restorations including <span className="text-neon font-bold">Relaxing, Custom Therapeutic, or Sports Deep-Tissue massages</span>.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-neon/10 blur-3xl rounded-full opacity-35" />
          <img
            src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop"
            alt="Relaxing corporate and sports massage session"
            className="relative z-10 rounded-3xl border border-white/10 shadow-2xl"
          />
        </div>
      </div>

      {/* Benefits Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
        <div className="bg-zinc-950/50 border border-white/5 p-12 rounded-3xl">
          <span className="text-neon text-xs font-bold uppercase tracking-[0.4em] mb-4 block italic">
            Clinical Wellness
          </span>
          <h3 className="font-display text-3xl font-black uppercase italic text-white mb-6">
            Proven <span className="text-neon">Therapeutic Outcomes</span>
          </h3>
          <p className="text-zinc-400 font-light text-sm mb-8 leading-relaxed">
            Massage therapy goes far beyond relaxation. Medical research shows that strategic deep-tissue work is a highly effective treatment for managing tension, accelerating blood flow, and improving athletic longevity.
          </p>
          <ul className="space-y-4">
            {therapyBenefits.map((benefit, idx) => (
              <li key={idx} className="flex items-center gap-3 text-xs text-zinc-300 font-mono">
                <CheckCircle size={14} className="text-neon flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="text-neon text-xs font-bold uppercase tracking-[0.4em] mb-4 block italic">
            Aesthetic Customizations
          </span>
          <h3 className="font-display text-3xl font-black uppercase italic leading-none mb-10">
            Our Recovery <br />
            <span className="text-zinc-600">Specializations</span>
          </h3>

          <div className="space-y-8">
            {modalities.map((modal, mIdx) => (
              <div key={modal.name} className="flex gap-6 items-start">
                <span className="font-mono text-neon text-xs font-black bg-neon/5 border border-neon/20 px-3 py-1.5 rounded-lg flex-shrink-0">
                  0{mIdx + 1}
                </span>
                <div>
                  <h4 className="font-display text-lg font-bold uppercase italic text-white mb-2">{modal.name}</h4>
                  <p className="text-zinc-400 text-sm font-light leading-relaxed">{modal.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-t from-zinc-950 to-black border border-white/5 p-12 md:p-20 rounded-3xl text-center max-w-3xl mx-auto">
        <h3 className="font-display text-3xl md:text-4xl font-black uppercase italic mb-6">
          Schedule Your <span className="text-neon">Recovery Session</span>
        </h3>
        <p className="text-zinc-400 font-light text-sm mb-8 leading-relaxed">
          Massage sessions are available for both gym members and the general public. Restore your flexibility, eliminate chronic tension, and bring alignment back to your physical training.
        </p>
        <a 
          href="/contact" 
          className="inline-flex items-center gap-2 bg-neon text-black text-xs font-black uppercase tracking-wider px-8 py-4 rounded-full hover:scale-105 transition-transform"
        >
          Check Massage Availability <CalendarDays size={16} />
        </a>
      </div>
    </PageLayout>
  );
}
