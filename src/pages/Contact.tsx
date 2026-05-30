import PageLayout from '../components/layout/PageLayout';
import { Mail, MapPin, Phone, Clock, MessageSquare, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    program: 'General Inquiry'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate contact form submission
    setSubmitted(true);
  };

  return (
    <PageLayout
      title="Contact Us"
      subtitle="Connect with East Wake Fitness Center"
      heroImage="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2070&auto=format&fit=crop"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32" id="contact-content">
        {/* Contact info card details */}
        <div>
          <span className="text-neon text-xs font-bold uppercase tracking-[0.4em] mb-4 block italic">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-black uppercase italic leading-none mb-8">
            Let's Redefine <br />
            <span className="text-neon">Your Potential</span>
          </h2>
          <p className="text-zinc-400 font-light leading-relaxed mb-12">
            If you are thinking about getting in shape or just trying to maintain a healthy lifestyle, stop by East Wake Fitness Center today. Let us show you how our facility, equipment, coaching, and nutrition can help you exceed your fitness goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-zinc-950 border border-white/5 rounded-2xl">
              <MapPin size={24} className="text-neon mb-4" />
              <h4 className="font-display font-medium uppercase text-white tracking-widest text-sm mb-2">Facility Location</h4>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                1015 West Gannon Avenue<br />
                Zebulon, NC 27597
              </p>
            </div>

            <div className="p-6 bg-zinc-950 border border-white/5 rounded-2xl">
              <Phone size={24} className="text-neon mb-4" />
              <h4 className="font-display font-medium uppercase text-white tracking-widest text-sm mb-2">Call Office</h4>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Phone: <span className="text-zinc-250 font-mono font-bold">919-404-0110</span>
              </p>
            </div>
          </div>

          <div className="p-8 bg-zinc-950 border border-white/5 rounded-3xl">
            <h4 className="font-display font-bold uppercase tracking-widest text-sm text-neon mb-6 flex items-center gap-3">
              <Clock size={20} /> Gym Operating Hours
            </h4>
            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between text-zinc-300 pb-3 border-b border-white/5">
                <span className="uppercase text-zinc-500">Monday - Thursday</span>
                <span className="text-white font-sans font-bold">6:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between text-zinc-300 pb-3 border-b border-white/5">
                <span className="uppercase text-zinc-500">Friday</span>
                <span className="text-white font-sans font-bold">6:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between text-zinc-300 pb-3 border-b border-white/5">
                <span className="uppercase text-zinc-500">Saturday</span>
                <span className="text-white font-sans font-bold">9:00 AM - 1:00 PM</span>
              </div>
              <div className="flex justify-between text-zinc-300">
                <span className="uppercase text-zinc-500">Sunday</span>
                <span className="text-red-500 font-sans font-bold uppercase tracking-widest">Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form panel */}
        <div className="bg-zinc-950/40 border border-white/5 p-8 md:p-12 rounded-3xl relative">
          <div className="absolute top-0 right-0 w-48 h-48 bg-neon/5 rounded-full blur-3xl" />
          <h3 className="font-display text-2xl font-black uppercase italic mb-8 relative z-10 text-white">
            Send EWFC <span className="text-neon">A Message</span>
          </h3>

          {submitted ? (
            <div className="p-8 border border-neon/30 bg-neon/10 rounded-2xl text-center">
              <ShieldCheck className="text-neon w-16 h-16 mx-auto mb-4" />
              <h4 className="font-display text-xl font-bold uppercase italic text-white mb-2">Message Sent Successfully!</h4>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Thank you for reaching out to East Wake Fitness Center. One of our team members or trainers will contact you shortly!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 font-mono">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-black border border-white/10 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-neon transition-colors text-white"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 font-mono">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-black border border-white/10 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-neon transition-colors text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 font-mono">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(919) 555-0199"
                    className="w-full bg-black border border-white/10 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-neon transition-colors text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 font-mono">Program of Interest</label>
                <select
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full bg-black border border-white/10 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-neon transition-colors text-white"
                >
                  <option>General Inquiry</option>
                  <option>Group Classes</option>
                  <option>Personal Training</option>
                  <option>Nutrition Coaching</option>
                  <option>Silver Sneakers / Medicare program</option>
                  <option>Massage Therapy</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 font-mono">Your Message</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about yourself and your fitness goals..."
                  className="w-full bg-black border border-white/10 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-neon transition-colors text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-neon text-black font-black uppercase text-xs py-4 rounded-xl tracking-wider hover:scale-[1.02] transition-transform active:scale-95"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
