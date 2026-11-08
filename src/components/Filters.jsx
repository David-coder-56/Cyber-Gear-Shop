import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faTags, faMicrochip, faRotateRight } from "@fortawesome/free-solid-svg-icons";

const Filters = ({ category, setCategory, price, setPrice, onReset }) => {
  const categories = [
    "All", 
    "Mouse", 
    "Keyboard", 
    "Headphones", 
    "Controllers", 
    "Mics", 
    "Mouse Pad",
    "Tablets", 
    "Laptop", 
    "Webcam", 
    "Speaker", 
    "CPU", 
    "Combo",
    "Lighting"
  ];

  const pricePresets = [
    { label: "Under $100", val: 100 },
    { label: "Under $500", val: 500 },
    { label: "Under $1,000", val: 1000 },
    { label: "All Gear (Max)", val: 3000 },
  ];

  return (
    <div className="space-y-8 bg-cyber-card dark:bg-cyber-card light:bg-white p-6 rounded-2xl border border-cyber-border dark:border-cyber-border light:border-slate-200 backdrop-blur-sm">
      {/* Category Section */}
      <div>
        <div className="flex items-center justify-between mb-4 text-cyber-green">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faLayerGroup} className="text-xs" />
            <h4 className="font-black uppercase tracking-wider text-xs font-cyber">Hardware Sector</h4>
          </div>
          {onReset && (
            <button
              onClick={onReset}
              className="text-[10px] text-white/40 dark:text-white/40 light:text-slate-400 hover:text-cyber-green flex items-center gap-1 font-mono uppercase"
            >
              <FontAwesomeIcon icon={faRotateRight} size="xs" /> Reset
            </button>
          )}
        </div>
        
        <div className="grid grid-cols-1 gap-1 max-h-72 overflow-y-auto no-scrollbar pr-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`
                group relative w-full text-left px-3.5 py-2 transition-all duration-200
                font-bold uppercase text-[11px] tracking-wider overflow-hidden rounded-lg
                flex justify-between items-center
                ${
                  category.toLowerCase() === cat.toLowerCase()
                    ? "bg-cyber-green text-black shadow-cyber"
                    : "text-white/70 dark:text-white/70 light:text-slate-700 hover:text-cyber-green hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-slate-100"
                }
              `}
            >
              <span>{cat}</span>
              {category.toLowerCase() === cat.toLowerCase() && (
                <FontAwesomeIcon icon={faMicrochip} className="text-[10px]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Price Section */}
      <div className="pt-4 border-t border-cyber-border/80">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2 text-cyber-green">
            <FontAwesomeIcon icon={faTags} className="text-xs" />
            <h4 className="font-black uppercase tracking-wider text-xs font-cyber">Credit Cap</h4>
          </div>
          <span className="text-cyber-green font-mono font-bold bg-cyber-green/10 px-2.5 py-0.5 rounded border border-cyber-green/20 text-xs">
            ${price}
          </span>
        </div>

        <div className="relative px-1 mb-4">
          <input
            type="range"
            min="20"
            max="3000" 
            step="20"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full h-1.5 bg-cyber-border rounded-lg appearance-none cursor-pointer accent-cyber-green"
          />
          <div className="flex justify-between mt-2 text-[10px] font-mono text-white/40 dark:text-white/40 light:text-slate-400">
            <span>$20</span>
            <span>$1,500</span>
            <span>$3,000</span>
          </div>
        </div>

        {/* Quick Price Tier Pills */}
        <div className="grid grid-cols-2 gap-2">
          {pricePresets.map((preset) => (
            <button
              key={preset.label}
              onClick={() => setPrice(preset.val)}
              className={`
                py-1.5 px-2 rounded text-[10px] font-mono uppercase font-bold transition-all border
                ${price === preset.val 
                  ? "border-cyber-green text-cyber-green bg-cyber-green/10"
                  : "border-cyber-border text-white/50 dark:text-white/50 light:text-slate-500 hover:text-white hover:border-white/30"
                }
              `}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Status Node */}
      <div className="pt-4 border-t border-cyber-border/80 flex items-center justify-between text-[10px] font-mono text-white/40 dark:text-white/40 light:text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-pulse"></span>
          ARMORY_ONLINE
        </span>
        <span>SEC_01</span>
      </div>
    </div>
  );
};

export default Filters;
