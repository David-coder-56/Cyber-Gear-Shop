import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBolt, 
  faShieldHalved, 
  faTruckFast, 
  faLaptopCode 
} from "@fortawesome/free-solid-svg-icons";

export default function WhyCyber() {
  const points = [
    { 
      title: "Performance First", 
      desc: "Optimized for speed, accuracy, and responsiveness.",
      icon: faBolt 
    },
    { 
      title: "Built to Last", 
      desc: "Premium materials tested for long-term use.",
      icon: faShieldHalved 
    },
    { 
      title: "Fast & Reliable Delivery", 
      desc: "Quick fulfillment with secure packaging.",
      icon: faTruckFast 
    },
    { 
      title: "Designed for Pros", 
      desc: "Minimal, aggressive, and functional cyber aesthetics.",
      icon: faLaptopCode 
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto transition-colors duration-300">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Why Text */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-black text-cyber-green uppercase tracking-tight font-cyber">
            Why Choose Cyber Gear?
          </h2>
          
          <div className="space-y-4 text-lg leading-relaxed text-slate-700 dark:text-white/80 font-mono text-sm">
            <p>
              Cyber Gear isn’t just about selling peripherals — it’s about
              delivering precision, performance, and reliability for those who
              live in the digital world.
            </p>
            <p>
              Every product is engineered with cyber-grade durability, ultra-low
              latency response, and a design language inspired by modern gaming
              and professional workspaces.
            </p>
            <p className="font-semibold text-cyber-green">
              Whether you're a competitive gamer, developer, streamer, or creator
              — Cyber Gear equips you to perform at your peak.
            </p>
          </div>
        </div>

        {/* Right Column: Why Points (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((point) => (
            <div 
              key={point.title} 
              className="group p-8 rounded-2xl border transition-all duration-300
                         bg-white dark:bg-cyber-card border-slate-200 dark:border-cyber-border hover:border-cyber-green/50 dark:hover:border-cyber-green/50 shadow-sm hover:shadow-cyberSoft"
            >
              <div className="text-cyber-green text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <FontAwesomeIcon icon={point.icon} />
              </div>
              <h3 className="text-slate-900 dark:text-white font-bold text-xl mb-2 uppercase tracking-tight font-cyber">
                {point.title}
              </h3>
              <p className="text-slate-600 dark:text-white/60 text-sm leading-relaxed font-mono">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}