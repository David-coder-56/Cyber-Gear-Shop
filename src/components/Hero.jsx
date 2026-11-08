import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image with slight scale */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transition-transform duration-1000 scale-105"
        style={{ 
          backgroundImage: `url('/assets/images/people_playing game.jpg')` 
        }}
      ></div>

      {/* Futuristic green/dark tint overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-[#015b38]/40 z-10"></div>
      
      {/* Content Container */}
      <div className="relative z-20 max-w-4xl px-6 animate-fade-in-up">
        <span className="text-cyber-green text-xs md:text-sm font-mono uppercase tracking-[0.35em] block mb-4">
          Tactical Grade Armory // Active
        </span>

        <h1 className="text-5xl md:text-8xl font-black text-cyber-greenSoft uppercase tracking-tight leading-none drop-shadow-[0_0_25px_rgba(0,255,156,0.35)] font-cyber">
          Dominate <br /> 
          <span className="text-white">Your Setup</span>
        </h1>
        
        <p className="text-base md:text-xl text-white/90 my-8 max-w-2xl mx-auto font-mono leading-relaxed">
          Tournament-tested gaming peripherals and neural creator workstations engineered for competitive supremacy.
        </p>

        <div className="flex gap-5 justify-center flex-wrap">
          {/* Primary Action */}
          <Link 
            to="/shop"
            className="relative group overflow-hidden bg-cyber-green text-black font-black uppercase tracking-widest py-4 px-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyber font-cyber text-xs md:text-sm rounded-lg"
          >
            <span className="relative z-10">Equip Now</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
          </Link>

          {/* Outline Action */}
          <Link 
            to="/sales"
            className="border-2 border-cyber-green text-cyber-green font-black uppercase tracking-widest py-4 px-10 transition-all duration-300 hover:bg-cyber-green hover:text-black hover:-translate-y-1 hover:shadow-cyber font-cyber text-xs md:text-sm rounded-lg"
          >
            Flash Drops
          </Link>
        </div>
      </div>

      {/* Decorative Bottom Gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyber-bg to-transparent z-15 pointer-events-none"></div>
    </section>
  );
}
