import { useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faStar, faChevronLeft, faChevronRight, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { products } from "../data/product";
import { useCart } from "../context/CartContext";

export default function MostPurchased() {
  const scrollRef = useRef(null);
  const { addToCart } = useCart();

  // Safely filter best sellers without mutating array or relying on non-existent properties
  const bestSellers = [...products]
    .filter((p) => p.bestSeller)
    .slice(0, 8);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto relative group/section">
      <div className="flex items-end justify-between mb-10">
        <div>
          <span className="text-cyber-green text-xs font-mono uppercase tracking-[0.25em] block mb-1">
            Elite Combat Proof
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white dark:text-white light:text-slate-900 uppercase font-cyber tracking-tight">
            Most <span className="text-cyber-green">Purchased</span>
          </h2>
          <p className="text-white/60 dark:text-white/60 light:text-slate-600 mt-2 text-sm font-mono">
            Hardware battle-tested by top-tier streamers and esports pros.
          </p>
        </div>

        {/* Desktop Controls */}
        <div className="hidden sm:flex gap-2">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="w-10 h-10 rounded-lg bg-cyber-card border border-cyber-border text-white hover:text-cyber-green hover:border-cyber-green/50 flex items-center justify-center transition-all active:scale-95 shadow-sm"
          >
            <FontAwesomeIcon icon={faChevronLeft} size="sm" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="w-10 h-10 rounded-lg bg-cyber-card border border-cyber-border text-white hover:text-cyber-green hover:border-cyber-green/50 flex items-center justify-center transition-all active:scale-95 shadow-sm"
          >
            <FontAwesomeIcon icon={faChevronRight} size="sm" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar"
      >
        {bestSellers.map((product, index) => (
          <div
            key={product.id}
            className="group relative flex-shrink-0 w-[290px] snap-start bg-cyber-card dark:bg-cyber-card light:bg-white border border-cyber-border dark:border-cyber-border light:border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-cyber-green hover:-translate-y-2 hover:shadow-cyber flex flex-col justify-between"
          >
            {/* Rank Badge */}
            <div className="absolute top-3 left-3 z-20 bg-cyber-green text-black font-black text-[11px] px-2.5 py-1 rounded uppercase tracking-wider flex items-center gap-1 font-mono shadow-md">
              <FontAwesomeIcon icon={faFire} /> #{index + 1} Best Seller
            </div>

            {/* Image Container */}
            <div className="relative h-60 overflow-hidden bg-black/40 dark:bg-black/40 light:bg-slate-100 flex items-center justify-center p-4">
              <img
                src={`/assets/images/${product.img}`}
                alt={product.name}
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/images/cool-setup.jpg";
                }}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Product Info */}
            <div className="p-5 flex flex-col flex-1 justify-between">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[11px] text-white/50 dark:text-white/50 light:text-slate-500 font-mono">
                    {product.stats?.sold || "1.2k+ deployed"}
                  </span>
                  <div className="text-yellow-400 text-xs flex items-center gap-1 font-mono font-bold">
                    <FontAwesomeIcon icon={faStar} />
                    <span>{product.stats?.rating || 4.9}</span>
                  </div>
                </div>

                <Link
                  to={`/product/${product.id}`}
                  className="text-base font-bold text-white dark:text-white light:text-slate-900 group-hover:text-cyber-green transition-colors line-clamp-1 block mb-1"
                >
                  {product.name}
                </Link>
                <p className="text-xs text-white/40 dark:text-white/40 light:text-slate-400 line-clamp-1 font-mono">
                  {product.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-5 pt-3 border-t border-cyber-border">
                <span className="text-lg font-black text-cyber-green font-mono">
                  ${product.price.toFixed(2)}
                </span>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => addToCart(product, 1)}
                    aria-label={`Add ${product.name} to cart`}
                    className="p-2 bg-cyber-green/10 text-cyber-green rounded-lg hover:bg-cyber-green hover:text-black transition-all"
                  >
                    <FontAwesomeIcon icon={faCartPlus} />
                  </button>

                  <Link
                    to={`/product/${product.id}`}
                    className="text-[11px] font-bold text-white dark:text-white light:text-slate-800 border border-white/20 dark:border-white/20 light:border-slate-300 px-3 py-1.5 rounded-lg group-hover:bg-cyber-green group-hover:text-black group-hover:border-cyber-green transition-all uppercase tracking-wider"
                  >
                    Specs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
