import { Link } from "react-router-dom";

export default function FeatureHero() {
  return (
    <section className="relative h-[75vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('/assets/images/cool-setup.jpg')` 
        }}
      ></div>

      {/* Radial Overlay: Replicates your CSS radial-gradient(circle, rgba(0, 0, 0, 0.4), #000)
          This gives it a high-end cinematic feel.
      */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: "radial-gradient(circle, rgba(0, 0, 0, 0.4), #000)"
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-20 max-w-[700px] px-5">
        <h2 className="text-4xl md:text-6xl font-black text-cyber-green uppercase tracking-tighter mb-5 drop-shadow-[0_0_10px_rgba(0,255,156,0.3)]">
          Next-Gen <span className="text-white">Cyber Tech</span>
        </h2>
        
        <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-8 font-medium">
          Precision-engineered peripherals built for gamers, creators, and
          professionals who demand more.
        </p>

        <Link 
          to="/shop" 
          className="inline-block bg-cyber-green text-black font-black uppercase tracking-widest py-4 px-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyber active:scale-95"
        >
          Explore Collection
        </Link>
      </div>
    </section>
  );
}