import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  heroImage?: string;
}

export default function PageLayout({ title, subtitle, children, heroImage }: PageLayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Page Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage || "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"} 
            alt={title} 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="font-display text-5xl md:text-8xl font-black uppercase italic italic tracking-tighter mb-6 bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent">
              {title}
            </h1>
            {subtitle && (
              <p className="text-neon text-xs font-bold uppercase tracking-[0.4em] italic">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </section>
    </motion.div>
  );
}
