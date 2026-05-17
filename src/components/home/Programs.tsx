import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const programs = [
  {
    title: 'Strength Training',
    desc: 'Utilize our full line of Cybex and ProMaxima machines or hit the free weights with dumbbells up to 125lb.',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
    tag: 'Strength'
  },
  {
    title: 'Cardio Circuit',
    desc: 'Boost your heart health with our array of cardiovascular equipment including Precor and True Fitness.',
    img: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=2070&auto=format&fit=crop',
    tag: 'Endurance'
  },
  {
    title: 'Personal Training',
    desc: 'Let our experts show you how the Center can help you reach your specific fitness and health goals.',
    img: 'https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?q=80&w=2070&auto=format&fit=crop',
    tag: 'One-on-One'
  },
  {
    title: 'Group Fitness',
    desc: 'Stay motivated and maintain a healthy lifestyle with our community focused group training sessions.',
    img: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2070&auto=format&fit=crop',
    tag: 'Community'
  }
];

export default function Programs() {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-neon text-xs font-bold uppercase tracking-[0.4em] mb-4 block italic">
              Our Disciplines
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase italic leading-none">
              Specialized <br />
              <span className="text-zinc-600">Training Labs</span>
            </h2>
          </div>
          <Link 
            to="/classes" 
            className="flex items-center gap-3 text-white hover:text-neon transition-colors group"
          >
            <span className="uppercase text-xs font-bold tracking-[0.2em]">View All Programs</span>
            <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:border-neon transition-colors">
              <ArrowUpRight size={20} />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, idx) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative aspect-[16/10] overflow-hidden rounded-3xl group cursor-pointer"
            >
              <img 
                src={program.img} 
                alt={program.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute top-6 left-6">
                <span className="px-3 py-1 bg-neon/80 text-black text-[10px] font-black uppercase tracking-widest rounded-md">
                  {program.tag}
                </span>
              </div>

              <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                <div className="max-w-[70%]">
                  <h3 className="font-display text-3xl font-black uppercase italic mb-2">
                    {program.title}
                  </h3>
                  <p className="text-zinc-300 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {program.desc}
                  </p>
                </div>
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-neon group-hover:text-black transition-all duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={28} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
