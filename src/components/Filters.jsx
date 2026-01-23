import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faTags, faMicrochip } from "@fortawesome/free-solid-svg-icons";

const Filters = ({ category, setCategory, price, setPrice }) => {
  // Updated to match your new products.js categories exactly
  const categories = [
    "All", 
    "Mouse", 
    "Keyboard", 
    "Headphones", 
    "Controllers", 
    "Mics", 
    "Tablets", 
    "Laptop", 
    "Webcam", 
    "Speaker", 
    "CPU", 
    "Combo"
  ];

  return (
    <div className="space-y-10 bg-cyber-card/50 p-6 rounded-2xl border border-cyber-border backdrop-blur-sm sticky top-24">
      
      {/* Category Section */}
      <div>
        <div className="flex items-center gap-2 mb-6 text-cyber-green">
          <FontAwesomeIcon icon={faLayerGroup} className="text-xs" />
          <h4 className="font-black uppercase tracking-widest text-sm">Hardware Node</h4>
        </div>
        
        <div className="grid grid-cols-1 gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`
                group relative w-full text-left px-4 py-2.5 transition-all duration-300
                font-bold uppercase text-[10px] tracking-[0.2em] overflow-hidden rounded-sm
                ${
                  category === cat
                    ? "text-black translate-x-1"
                    : "text-white/50 hover:text-cyber-green hover:bg-white/5"
                }
              `}
            >
              {/* Background Fill for Active State */}
              <div className={`
                absolute inset-0 z-[-1] transition-all duration-500
                ${category === cat ? "bg-cyber-green opacity-100" : "bg-cyber-green opacity-0"}
              `}></div>
              
              <div className="flex justify-between items-center">
                <span>{cat}</span>
                {category === cat && <FontAwesomeIcon icon={faMicrochip} className="text-[8px] animate-pulse" />}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Price Section */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2 text-cyber-green">
            <FontAwesomeIcon icon={faTags} className="text-xs" />
            <h4 className="font-black uppercase tracking-widest text-sm">Credit Cap</h4>
          </div>
          <span className="text-cyber-green font-mono font-bold bg-cyber-green/10 px-2 py-1 rounded border border-cyber-green/20 text-xs">
            ${price}
          </span>
        </div>

        <div className="relative group px-1">
          <input
            type="range"
            min="0"
            max="3000" 
            step="50"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="
              w-full h-1 bg-cyber-border rounded-lg appearance-none cursor-pointer
              accent-cyber-green hover:shadow-cyber transition-all
            "
          />
          <div className="flex justify-between mt-4 text-[9px] font-mono text-white/30 uppercase tracking-widest">
            <span>Min_0</span>
            <span className="text-cyber-green/40 underline decoration-cyber-green/20">Target_ {price}</span>
            <span>Max_3000</span>
          </div>
        </div>
      </div>

      
      <div className="pt-6 border-t border-cyber-border/30">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-1.5 w-1.5 rounded-full bg-cyber-green animate-ping"></div>
          <span className="text-[9px] text-cyber-green font-mono uppercase tracking-widest">Filters_Online</span>
        </div>
        <p className="text-[9px] text-white/20 italic font-mono uppercase leading-tight">
          Parsing database for {category} artifacts...
        </p>
      </div>
    </div>
  );
};

export default Filters;