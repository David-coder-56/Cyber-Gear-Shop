import { Link } from "react-router-dom";

export default function HeroSplit() {
  return (
    <section 
      className="relative h-[75vh] md:h-[75vh] h-[60vh] flex items-center px-6 md:px-16 overflow-hidden transition-all duration-300"
    >
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('/assets/images/CPU1.jpg')` 
        }}
      ></div>

      {/* Content Area */}
      <div className="relative z-10 max-w-[600px] w-full text-center md:text-left mx-auto md:mx-0">
        <h2 className="text-4xl md:text-5xl font-black text-cyber-green uppercase tracking-tighter mb-5">
          Built for <span className="text-white">Performance</span>
        </h2>
        
        <p className="text-white/85 text-lg leading-relaxed mb-8">
          Precision-engineered gear designed for gamers, creators, and
          professionals. Experience speed, control, and comfort at the highest
          level.
        </p>

        <div className="flex flex-wrap gap-5 justify-center md:justify-start">
          <Link 
            to="/shop" 
            className="px-8 py-3 bg-cyber-green text-black font-bold uppercase tracking-widest transition-all hover:-translate-y-1 hover:shadow-cyber"
          >
            Shop Now
          </Link>
          
          <Link 
            to="/products" 
            className="px-8 py-3 border-2 border-cyber-green text-cyber-green font-bold uppercase tracking-widest transition-all hover:bg-cyber-green hover:text-black hover:-translate-y-1 hover:shadow-cyber"
          >
            Explore Gear
          </Link>
        </div>
      </div>
    </section>
  );
}