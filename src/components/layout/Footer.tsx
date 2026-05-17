import { Link } from 'react-router-dom';
import { Dumbbell, Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-neon rounded-lg flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform">
              <Dumbbell className="text-black w-6 h-6" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tighter uppercase italic">
              East Wake <span className="text-neon">Fitness Center</span>
            </span>
          </Link>
          <p className="text-zinc-300 text-sm leading-relaxed">
            The premier fitness destination in Wendell, NC. We combine elite training, 
            premium equipment, and a supportive community to help you reach your peak performance.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon hover:text-black transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon hover:text-black transition-all">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-6 text-neon">Site Map</h4>
          <ul className="flex flex-col gap-4">
            <li><Link to="/about" className="text-zinc-300 hover:text-white transition-colors text-sm uppercase">About Us</Link></li>
            <li><Link to="/memberships" className="text-zinc-300 hover:text-white transition-colors text-sm uppercase">Memberships</Link></li>
            <li><Link to="/classes" className="text-zinc-300 hover:text-white transition-colors text-sm uppercase">Group Classes</Link></li>
            <li><Link to="/personal-training" className="text-zinc-300 hover:text-white transition-colors text-sm uppercase">Personal Training</Link></li>
            <li><Link to="/trainers" className="text-zinc-300 hover:text-white transition-colors text-sm uppercase">Our Trainers</Link></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-6 text-neon">Contact Us</h4>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-3 text-zinc-300 text-sm">
              <MapPin size={18} className="text-neon" />
              <span>1015 West Gannon Avenue, Zebulon, NC 27597</span>
            </li>
            <li className="flex items-center gap-3 text-zinc-300 text-sm">
              <Phone size={18} className="text-neon" />
              <span>(919) 269-0524</span>
            </li>
            <li className="flex items-center gap-3 text-zinc-300 text-sm">
              <Mail size={18} className="text-neon" />
              <span>eastwakefitness@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-6 text-neon">Get the Edge</h4>
          <p className="text-zinc-400 text-sm mb-4">Join our newsletter for fitness tips and exclusive offers.</p>
          <form className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm flex-grow focus:outline-none focus:border-neon transition-colors"
            />
            <button className="bg-neon text-black px-4 py-2 rounded-lg font-bold text-sm hover:scale-105 transition-transform">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-zinc-500 text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} East Wake Fitness Center. All Rights Reserved.
        </p>
        <div className="flex gap-8">
          <Link to="/privacy" className="text-zinc-500 hover:text-white text-xs uppercase tracking-widest transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="text-zinc-500 hover:text-white text-xs uppercase tracking-widest transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
