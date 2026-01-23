import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image with slight zoom effect on load */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transition-transform duration-1000 scale-105"
        style={{ 
          backgroundImage: `url('assets/images/people_playing game.jpg')` 
        }}
      ></div>

      {/* The specific green overlay from your CSS: rgba(1, 91, 56, 0.295) */}
      <div className="absolute inset-0 bg-[#015b38]/30 z-10"></div>
      
      {/* Content Container */}
      <div className="relative z-20 max-w-4xl px-6">
        <h1 className="text-5xl md:text-8xl font-black text-cyber-greenSoft uppercase tracking-tighter leading-none drop-shadow-[0_0_15px_#02472c]">
          Dominate <br /> 
          <span className="text-white">Your Setup</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-white/90 my-8 max-w-2xl mx-auto font-medium leading-relaxed">
          Premium gaming & cyber tech gear for every pro.
        </p>

        <div className="flex gap-5 justify-center flex-wrap">
          {/* Primary Action */}
          <Link 
            to="/shop"
            className="bg-cyber-green text-black font-black uppercase tracking-widest py-4 px-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyber"
          >
            Shop Now
          </Link>

          {/* Outline Action */}
          <Link 
            to="/about"
            className="border-2 border-cyber-green text-cyber-green font-black uppercase tracking-widest py-4 px-10 transition-all duration-300 hover:bg-cyber-green hover:text-black hover:-translate-y-1 hover:shadow-cyber"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Decorative Bottom Gradient (Optional - makes transition to next section smoother) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyber-bg to-transparent z-15"></div>
    </section>
  );
}