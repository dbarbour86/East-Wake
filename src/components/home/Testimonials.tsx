import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Robert Miller',
    role: 'Member since 2015',
    content: 'The best gym equipment in the area. Most gyms are too crowded or don\'t have the right variety. This is the real deal for anyone serious about their goals.',
    rating: 5
  },
  {
    name: 'Melissa P.',
    role: 'Zebulon Resident',
    content: 'Excellent gym with a very friendly staff. The weight selection is unmatched and the facility is always kept clean and professional.',
    rating: 5
  },
  {
    name: 'David S.',
    role: 'Local Athlete',
    content: 'Love the environment. It\'s not just a gym, it\'s a local staple that has everything you need. Highly recommended for both beginners and veterans.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-neon text-xs font-bold uppercase tracking-[0.4em] mb-4 block italic">
            Success Stories
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-black uppercase italic leading-none">
            The Community <br />
            <span className="text-zinc-600">Speaks</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-12 rounded-[2rem] relative flex flex-col justify-between border-white/5 border-t-neon/20 border-t-2"
            >
              <div className="absolute top-8 right-8 text-neon/20">
                <Quote size={64} fill="currentColor" />
              </div>
              
              <div>
                <div className="flex gap-1 mb-8">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-neon" fill="currentColor" />
                  ))}
                </div>
                <p className="text-xl text-zinc-200 leading-relaxed font-light mb-12 italic">
                  "{t.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-white/10 pt-8">
                <div className="w-12 h-12 rounded-full bg-neon/10 flex items-center justify-center text-neon font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-display font-bold uppercase italic text-white">{t.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
