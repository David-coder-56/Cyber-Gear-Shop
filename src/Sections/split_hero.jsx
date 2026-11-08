import { Link } from "react-router-dom";

export default function HeroSplit() {
  return (
    <section 
      className="relative min-h-[65vh] flex items-center px-6 md:px-16 overflow-hidden transition-all duration-300 py-16"
    >
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9) 20%, rgba(0, 0, 0, 0.6) 80%), url('/assets/images/CPU1.jpg')` 
        }}
      ></div>

      {/* Content Area */}
      <div className="relative z-10 max-w-[650px] w-full text-center md:text-left mx-auto md:mx-0">
        <span className="text-cyber-green text-xs font-mono uppercase tracking-[0.25em] block mb-2">
          Architecture & Rig Precision
        </span>

        <h2 className="text-3xl md:text-5xl font-black text-cyber-green uppercase tracking-tight mb-5 font-cyber">
          Built for <span className="text-white">Peak Execution</span>
        </h2>
        
        <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8 font-mono">
          Precision-engineered silicon and mechanical rigs designed for overclocked gamers, 3D creators, and developers. Experience speed, control, and acoustic silence.
        </p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <Link 
            to="/shop" 
            className="px-8 py-3.5 bg-cyber-green text-black font-black uppercase tracking-widest text-xs font-cyber rounded-lg transition-all hover:-translate-y-1 hover:shadow-cyber"
          >
            Shop Rigs
          </Link>
          
          <Link 
            to="/shop?category=CPU" 
            className="px-8 py-3.5 border border-cyber-green text-cyber-green font-black uppercase tracking-widest text-xs font-cyber rounded-lg transition-all hover:bg-cyber-green hover:text-black hover:-translate-y-1 hover:shadow-cyber"
          >
            Explore CPUs
          </Link>
        </div>
      </div>
    </section>
  );
}
