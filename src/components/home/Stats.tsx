import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { label: 'Elite Members', value: 1200, suffix: '+' },
  { label: 'Expert Trainers', value: 25, suffix: '' },
  { label: 'Weekly Classes', value: 60, suffix: '+' },
  { label: 'Facility Size', value: 15, suffix: 'k SqFt' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const durationMs = 2000;
      const incrementMs = 20;
      const totalSteps = durationMs / incrementMs;
      const stepValue = end / totalSteps;

      const timer = setInterval(() => {
        start += stepValue;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, incrementMs);

      return () => clearInterval(timer);
    }
  }, [value, isInView]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-24 bg-black relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
          {stats.map((stat, idx) => (
            <div 
              key={stat.label} 
              className={`flex flex-col items-center text-center px-8 ${
                idx !== stats.length - 1 ? 'lg:border-r lg:border-white/10' : ''
              }`}
            >
              <div className="font-display text-4xl md:text-6xl font-black mb-2 text-white italic">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-neon opacity-70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
