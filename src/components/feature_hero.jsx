import { Link } from "react-router-dom";

export default function FeatureHero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden my-12">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80')` 
        }}
      ></div>

      {/* Radial Overlay */}
      <div 
        className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7),#f8fafc_90%)] dark:bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.4),#050505_85%)]"
      ></div>
      
      {/* Content */}
      <div className="relative z-20 max-w-[720px] px-6">
        <span className="text-cyber-green text-xs font-mono uppercase tracking-[0.3em] block mb-3">
          Zero Latency // Neural Link
        </span>

        <h2 className="text-3xl md:text-6xl font-black text-cyber-green uppercase tracking-tight mb-5 drop-shadow-[0_0_15px_rgba(0,255,156,0.35)] font-cyber">
          Next-Gen <span className="text-slate-900 dark:text-white">Cyber Hardware</span>
        </h2>
        
        <p className="text-base md:text-lg text-slate-700 dark:text-white/85 leading-relaxed mb-8 font-mono">
          Precision-calibrated sensors, hot-swappable tactile switches, and high-impedance acoustic drivers for operatives who accept nothing less than dominance.
        </p>

        <Link 
          to="/shop" 
          className="inline-block bg-cyber-green text-black font-black uppercase tracking-widest py-4 px-10 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-cyber active:scale-95 font-cyber text-xs"
        >
          Explore All Armory Units
        </Link>
      </div>
    </section>
  );
}
