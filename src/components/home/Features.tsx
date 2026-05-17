import { motion } from 'motion/react';
import { Shield, Zap, Target, Users, Clock, Award } from 'lucide-react';

const features = [
  {
    title: 'Precision Equipment',
    desc: 'Train on world-class machines from Cybex, ProMaxima, Precor, True, and Lifetime Fitness.',
    icon: Shield,
    color: 'from-blue-500/20 to-neon/20'
  },
  {
    title: 'Heavy Irons',
    desc: 'Our expansive free weight area features high-quality dumbbells ranging from 1lb to 125lb.',
    icon: Zap,
    color: 'from-purple-500/20 to-neon/20'
  },
  {
    title: 'Complete Circuit',
    desc: 'A full array of strength, circuit training, and cardiovascular equipment for every level.',
    icon: Users,
    color: 'from-orange-500/20 to-neon/20'
  },
  {
    title: 'Goal Oriented',
    desc: 'Whether you are maintaining a healthy lifestyle or getting in shape, we have the tools for you.',
    icon: Target,
    color: 'from-red-500/20 to-neon/20'
  },
  {
    title: 'East Wake Standard',
    desc: 'The premier destination for fitness in Zebulon and the surrounding East Wake community.',
    icon: Clock,
    color: 'from-green-500/20 to-neon/20'
  },
  {
    title: 'Expert Support',
    desc: 'Our staff and trainers are dedicated to helping you reach your specific fitness goals.',
    icon: Award,
    color: 'from-indigo-500/20 to-neon/20'
  }
];

export default function Features() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-neon/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="text-neon text-xs font-bold uppercase tracking-[0.4em] mb-4 block italic">
              Unrivaled Environment
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase italic leading-none mb-6">
              Why East Wake <br />
              <span className="text-zinc-600">is the standard</span>
            </h2>
          </div>
          <p className="text-zinc-400 max-w-sm mb-4 leading-relaxed font-light">
            We didn't just build a gym. We built an ecosystem for transformation where 
            high-end luxury meets raw athletic performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
              <div className="glass p-10 rounded-3xl relative h-full flex flex-col items-start border-white/5 group-hover:border-neon/20 transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-neon group-hover:text-black transition-colors">
                  <feature.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-bold uppercase italic mb-4">
                  {feature.title}
                </h3>
                <p className="text-zinc-200 text-sm leading-relaxed font-light">
                  {feature.desc}
                </p>
                <div className="mt-8 w-12 h-1 bg-white/10 group-hover:w-full group-hover:bg-neon transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
