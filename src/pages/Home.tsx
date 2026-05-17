import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import Programs from '../components/home/Programs';
import FAQ from '../components/home/FAQ';
import CTA from '../components/home/CTA';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Stats />
      <Features />
      <Programs />
      <Testimonials />
      <FAQ />
      <CTA />
    </motion.div>
  );
}
