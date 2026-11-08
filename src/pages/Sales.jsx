import { useState, useEffect } from "react";
import { products } from "../data/product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faPercent, faClock, faFire, faEye, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Sale = () => {
  const { addToCart } = useCart();

  // Dynamic ticking countdown
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 42,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 12, minutes: 0, seconds: 0 }; // Loop
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Products on flash sale (IDs: 1, 2, 4, 7, 9, 13, 16, 21)
  const saleProductIds = [1, 2, 4, 7, 9, 13, 16, 21];
  const saleProducts = products
    .filter((p) => saleProductIds.includes(p.id))
    .map((p) => ({
      ...p,
      discount: 25, // 25% off
      salePrice: p.price * 0.75,
    }));

  return (
    <div className="bg-cyber-bg min-h-screen pt-24 pb-20 px-6 bg-cyber-grid">
      <div className="max-w-7xl mx-auto">
        
        {/* Sale Hero Banner with Cyber Glitch & Live Countdown */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-950/60 via-black to-black border border-red-500/40 p-8 md:p-14 mb-16 shadow-[0_0_50px_rgba(239,68,68,0.2)]">
          <div className="absolute top-0 right-0 p-8 opacity-5 text-9xl font-black italic select-none font-cyber text-red-500">
            SALE
          </div>
          
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-10">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/20 border border-red-500/40 text-red-400 text-xs font-mono font-bold uppercase tracking-widest mb-4">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                <FontAwesomeIcon icon={faBolt} />
                Live Breach Override: Discounts Active
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black text-white uppercase font-cyber tracking-tight leading-none mb-4">
                Flash <span className="text-red-500 drop-shadow-[0_0_20px_#ef4444]">Deals</span>
              </h1>
              
              <p className="text-white/70 text-base md:text-lg max-w-xl font-mono">
                Direct hardware price overrides. Up to 40% discount on tournament peripherals and neural workstations.
              </p>
            </div>

            {/* Countdown Box */}
            <div className="bg-black/80 backdrop-blur-md border border-red-500/40 p-6 md:p-8 rounded-2xl flex items-center gap-4 text-center shadow-lg">
              <div>
                <p className="text-3xl md:text-4xl font-black text-white font-mono">
                  {String(timeLeft.hours).padStart(2, "0")}
                </p>
                <p className="text-[10px] text-white/40 uppercase font-mono tracking-widest mt-1">Hours</p>
              </div>
              <div className="text-2xl font-black text-red-500 font-mono">:</div>
              <div>
                <p className="text-3xl md:text-4xl font-black text-white font-mono">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </p>
                <p className="text-[10px] text-white/40 uppercase font-mono tracking-widest mt-1">Mins</p>
              </div>
              <div className="text-2xl font-black text-red-500 font-mono">:</div>
              <div>
                <p className="text-3xl md:text-4xl font-black text-white font-mono text-red-500 animate-pulse">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </p>
                <p className="text-[10px] text-white/40 uppercase font-mono tracking-widest mt-1">Secs</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Sale Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <div className="bg-cyber-card border border-red-500/30 p-6 rounded-2xl flex items-center gap-4 hover:border-red-500 hover:shadow-cyberRed transition-all">
            <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 text-2xl border border-red-500/20 shrink-0">
              <FontAwesomeIcon icon={faPercent} />
            </div>
            <div>
              <h3 className="text-white font-bold uppercase text-sm font-cyber">Clearance Units</h3>
              <p className="text-xs text-white/40 font-mono mt-0.5">Final factory surplus stock</p>
            </div>
          </div>

          <div className="bg-cyber-card border border-red-500/30 p-6 rounded-2xl flex items-center gap-4 hover:border-red-500 hover:shadow-cyberRed transition-all">
            <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 text-2xl border border-red-500/20 shrink-0">
              <FontAwesomeIcon icon={faClock} />
            </div>
            <div>
              <h3 className="text-white font-bold uppercase text-sm font-cyber">24H Drops</h3>
              <p className="text-xs text-white/40 font-mono mt-0.5">Refreshes every daylight cycle</p>
            </div>
          </div>

          <div className="bg-cyber-card border border-red-500/30 p-6 rounded-2xl flex items-center gap-4 hover:border-red-500 hover:shadow-cyberRed transition-all">
            <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 text-2xl border border-red-500/20 shrink-0">
              <FontAwesomeIcon icon={faFire} />
            </div>
            <div>
              <h3 className="text-white font-bold uppercase text-sm font-cyber">Neural Bundles</h3>
              <p className="text-xs text-white/40 font-mono mt-0.5">Tier 1 setup combo discounts</p>
            </div>
          </div>
        </div>

        {/* Sale Products Grid with Strikethrough Pricing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {saleProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-cyber-card border border-cyber-border rounded-2xl p-5 hover:border-red-500 hover:shadow-cyberRed transition-all flex flex-col justify-between"
            >
              {/* Sale Tag */}
              <div className="absolute top-3 left-3 z-20 bg-red-600 text-white text-[11px] font-black px-2.5 py-1 rounded font-mono shadow-md uppercase tracking-wider">
                -{product.discount}% OFF
              </div>

              {/* Product Image */}
              <div className="relative overflow-hidden rounded-xl bg-black/40 aspect-square flex items-center justify-center p-4 mb-4">
                <img
                  src={`/assets/images/${product.img}`}
                  alt={product.name}
                  loading="lazy"
                  className="h-44 w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Info */}
              <div>
                <span className="text-[10px] text-red-400 font-mono uppercase tracking-widest block mb-1">
                  {product.category}
                </span>
                <Link
                  to={`/product/${product.id}`}
                  className="font-bold text-base text-white group-hover:text-red-400 transition-colors line-clamp-1 block mb-3"
                >
                  {product.name}
                </Link>

                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-2xl font-black text-red-500 font-mono">
                    ${product.salePrice.toFixed(2)}
                  </span>
                  <span className="text-xs text-white/40 line-through font-mono">
                    ${product.price.toFixed(2)}
                  </span>
                </div>

                {/* Stock Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-[10px] font-mono uppercase text-white/50 mb-1">
                    <span>Units Allocated</span>
                    <span className="text-red-400 font-bold">Only 4 Left</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-red-600 w-3/4 rounded-full shadow-[0_0_8px_#ef4444]" />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-cyber-border">
                  <button
                    onClick={() => addToCart({ ...product, price: product.salePrice }, 1)}
                    className="py-2 px-3 bg-red-600 text-white rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-red-500 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <FontAwesomeIcon icon={faCartPlus} />
                    Equip
                  </button>

                  <Link
                    to={`/product/${product.id}`}
                    className="py-2 px-3 border border-white/20 text-white rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <FontAwesomeIcon icon={faEye} size="xs" />
                    Specs
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Sale;
