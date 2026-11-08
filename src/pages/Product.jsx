import { useParams, Link } from "react-router-dom";
import { useState } from "react"; 
import { products } from "../data/product";
import { useCart } from "../context/CartContext";
import { getProductImage } from "../utils/imageHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faShieldAlt,
  faTruckFast,
  faMicrochip,
  faCheckCircle,
  faStar,
  faPlus,
  faMinus,
  faBolt
} from "@fortawesome/free-solid-svg-icons";

const Product = () => {
  const { id } = useParams();
  const { addToCart, setIsCartOpen } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === Number(id));

  // Find related products
  const relatedProducts = products
    .filter((p) => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  const handleAddToCart = (openDrawer = false) => {
    if (product) {
      addToCart(product, quantity, openDrawer);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cyber-bg text-white px-6">
        <div className="text-center bg-cyber-card border border-cyber-border p-12 rounded-3xl max-w-md w-full shadow-cyber">
          <span className="text-cyber-green text-6xl font-black font-cyber block mb-4">404</span>
          <h2 className="text-xl font-bold uppercase mb-2">GEAR NOT DETECTED</h2>
          <p className="mb-8 text-white/50 text-xs font-mono">
            The requested hardware identity is not cataloged in this armory sector.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-cyber-green text-black px-8 py-3 uppercase font-black text-xs tracking-widest hover:shadow-cyber transition-all rounded-lg"
          >
            Back to Armory
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cyber-bg dark:bg-cyber-bg light:bg-slate-50 min-h-screen transition-colors duration-300 pt-24 pb-20 bg-cyber-grid">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-white/50 dark:text-white/50 light:text-slate-500 mb-8">
          <Link to="/" className="hover:text-cyber-green">HOME</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-cyber-green">SHOP</Link>
          <span>/</span>
          <Link to={`/shop?category=${encodeURIComponent(product.category)}`} className="hover:text-cyber-green">{product.category.toUpperCase()}</Link>
          <span>/</span>
          <span className="text-cyber-green truncate">{product.name}</span>
        </div>

        {/* Product Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20 items-center">
          
          {/* Left: Product Image Stage */}
          <div className="bg-cyber-card dark:bg-cyber-card light:bg-white border border-cyber-border dark:border-cyber-border light:border-slate-200 rounded-3xl p-8 lg:p-14 flex items-center justify-center relative group shadow-cyberCard">
            {/* Background Category Watermark */}
            <div className="absolute top-6 left-6 text-cyber-green/10 text-5xl md:text-7xl font-black select-none uppercase font-cyber pointer-events-none">
              {product.category}
            </div>

            <img
              src={getProductImage(product.img)}
              alt={product.name}
              loading="lazy"
              decoding="async"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80";
              }}
              className="w-full max-h-[460px] object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-2xl"
            />

            {/* Tactical Spec Tag */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-xs font-mono">
              <span className="text-white/70">DEPLOYMENT STATUS</span>
              <span className="text-cyber-green font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse"></span>
                ACTIVE ARMED
              </span>
            </div>
          </div>

          {/* Right: Product Info & Configuration */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-cyber-green font-mono uppercase tracking-[0.2em] text-xs font-bold bg-cyber-green/10 px-2.5 py-1 rounded border border-cyber-green/20">
                  Sector // {product.category}
                </span>
                {product.stats?.rating && (
                  <div className="flex items-center gap-1 text-yellow-400 text-xs font-mono font-bold">
                    <FontAwesomeIcon icon={faStar} />
                    <span>{product.stats.rating}</span>
                    <span className="text-white/40 dark:text-white/40 light:text-slate-400 ml-1 font-normal">
                      ({product.stats.sold || "Verified Pro Gear"})
                    </span>
                  </div>
                )}
              </div>

              <h1 className="text-3xl md:text-5xl font-black text-white dark:text-white light:text-slate-900 uppercase font-cyber tracking-tight leading-tight">
                {product.name}
              </h1>
            </div>

            <p className="text-white/70 dark:text-white/70 light:text-slate-600 text-base leading-relaxed font-mono">
              {product.description ||
                "High-performance tactical hardware engineered for zero-latency execution, ergonomic endurance, and tournament combat."}
            </p>

            {/* Price & Stock */}
            <div className="flex items-baseline gap-4 pt-2">
              <span className="text-4xl md:text-5xl font-black text-cyber-green font-mono">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-white/40 dark:text-white/40 light:text-slate-400 text-xs font-mono uppercase">
                Stock: {product.quantity ? `${product.quantity} Units Ready` : "Available in Sector"}
              </span>
            </div>

            {/* Quantity Selector & Add to Cart */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-4">
                {/* Quantity Toggle */}
                <div className="flex items-center bg-cyber-card dark:bg-cyber-card light:bg-slate-100 border border-cyber-border dark:border-cyber-border light:border-slate-300 rounded-xl p-1 text-white dark:text-white light:text-slate-900">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    aria-label="Decrease quantity"
                    className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-cyber-green transition-colors"
                  >
                    <FontAwesomeIcon icon={faMinus} size="sm" />
                  </button>
                  <span className="w-10 text-center font-mono font-bold text-sm">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    aria-label="Increase quantity"
                    className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-cyber-green transition-colors"
                  >
                    <FontAwesomeIcon icon={faPlus} size="sm" />
                  </button>
                </div>

                {/* Primary Add to Cart */}
                <button
                  onClick={() => handleAddToCart(true)}
                  className={`
                    flex-1 font-black uppercase py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-cyber tracking-wider text-xs md:text-sm
                    ${
                      added
                        ? "bg-white text-black scale-95"
                        : "bg-cyber-green text-black hover:shadow-cyber hover:-translate-y-1 active:scale-95"
                    }
                  `}
                >
                  <FontAwesomeIcon icon={added ? faCheckCircle : faCartPlus} />
                  {added ? "Equipped to Loadout" : "Equip to Loadout"}
                </button>
              </div>
            </div>

            {/* Tactical Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-cyber-border/80">
              <div className="text-center p-3 rounded-xl bg-cyber-card/40 border border-cyber-border/40">
                <FontAwesomeIcon
                  icon={faShieldAlt}
                  className="text-cyber-green text-lg mb-1"
                />
                <p className="text-[10px] text-white/70 dark:text-white/70 light:text-slate-600 uppercase font-mono font-bold">
                  2-Yr Warranty
                </p>
              </div>
              <div className="text-center p-3 rounded-xl bg-cyber-card/40 border border-cyber-border/40">
                <FontAwesomeIcon
                  icon={faTruckFast}
                  className="text-cyber-green text-lg mb-1"
                />
                <p className="text-[10px] text-white/70 dark:text-white/70 light:text-slate-600 uppercase font-mono font-bold">
                  Fast Dispatch
                </p>
              </div>
              <div className="text-center p-3 rounded-xl bg-cyber-card/40 border border-cyber-border/40">
                <FontAwesomeIcon
                  icon={faMicrochip}
                  className="text-cyber-green text-lg mb-1"
                />
                <p className="text-[10px] text-white/70 dark:text-white/70 light:text-slate-600 uppercase font-mono font-bold">
                  Pro Tuned
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Gear */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-cyber-border pt-16">
            <div className="mb-8">
              <span className="text-cyber-green text-xs font-mono uppercase tracking-[0.25em] block mb-1">
                Synchronized Hardware
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-white dark:text-white light:text-slate-900 uppercase font-cyber tracking-tight">
                Related <span className="text-cyber-green">Units</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  className="group bg-cyber-card dark:bg-cyber-card light:bg-white border border-cyber-border dark:border-cyber-border light:border-slate-200 p-4 rounded-2xl transition-all hover:border-cyber-green/50 hover:shadow-cyber flex flex-col justify-between"
                >
                  <div className="h-44 w-full bg-black/40 rounded-xl p-3 flex items-center justify-center mb-4">
                    <img
                      src={getProductImage(p.img)}
                      alt={p.name}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80";
                      }}
                      className="h-full object-contain transition-transform group-hover:scale-105"
                    />
                  </div>

                  <div>
                    <h4 className="text-white dark:text-white light:text-slate-900 font-bold text-sm group-hover:text-cyber-green transition-colors truncate">
                      {p.name}
                    </h4>

                    <p className="text-cyber-green font-mono font-black text-base mt-2">
                      ${p.price.toFixed(2)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
