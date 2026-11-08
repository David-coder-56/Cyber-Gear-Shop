import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div
      className="
        relative group
        bg-cyber-card dark:bg-cyber-card light:bg-white
        text-white dark:text-white light:text-slate-900
        border border-cyber-border dark:border-cyber-border light:border-slate-200
        rounded-2xl p-5 
        hover:shadow-cyber 
        hover:border-cyber-green/60
        transition-all duration-300
        flex flex-col justify-between
      "
    >
      {/* Cyber Corner Reticles */}
      <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-cyber-green/30 group-hover:border-cyber-green transition-colors rounded-tl" />
      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-cyber-green/30 group-hover:border-cyber-green transition-colors rounded-br" />

      {/* Product Image Container */}
      <div className="relative overflow-hidden rounded-xl bg-black/40 dark:bg-black/50 light:bg-slate-100 mb-4 aspect-square flex items-center justify-center p-4">
        <img
          src={`/assets/images/${product.img}`}
          alt={product.name}
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/assets/images/cool-setup.jpg";
          }}
          className="h-44 w-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Floating Category Tag */}
        <span className="absolute top-2.5 right-2.5 bg-black/75 backdrop-blur-md text-cyber-green text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-cyber-green/20 uppercase tracking-widest">
          {product.category}
        </span>

        {/* Quick Add Overlay on Hover */}
        <button
          onClick={handleQuickAdd}
          className="
            absolute bottom-3 left-3 right-3
            py-2.5 px-3
            bg-cyber-green text-black font-black text-xs uppercase tracking-widest
            rounded-lg
            opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0
            transition-all duration-300
            flex items-center justify-center gap-2
            hover:brightness-110 hover:shadow-cyber
            active:scale-95
          "
        >
          <FontAwesomeIcon icon={faCartPlus} />
          Quick Add
        </button>
      </div>

      {/* Info Section */}
      <div>
        <h3 className="font-bold text-base group-hover:text-cyber-green transition-colors line-clamp-1">
          {product.name}
        </h3>
        
        {product.description && (
          <p className="text-xs text-white/50 dark:text-white/50 light:text-slate-500 line-clamp-1 mt-1 font-mono">
            {product.description}
          </p>
        )}
        
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-cyber-border/60">
          <div>
            <span className="text-[10px] text-white/40 dark:text-white/40 light:text-slate-400 font-mono block">Credits</span>
            <p className="text-cyber-green font-mono font-black text-lg">
              ${Number(product.price).toFixed(2)}
            </p>
          </div>
          
          {/* View Product CTA */}
          <Link
            to={`/product/${product.id}`}
            className="
              flex items-center gap-1.5
              px-3.5 py-1.5 
              bg-white/5 dark:bg-white/5 light:bg-slate-100
              border border-white/10 dark:border-white/10 light:border-slate-300
              rounded-lg text-[11px] font-bold uppercase tracking-wider
              hover:bg-cyber-green hover:text-black hover:border-cyber-green
              transition-all duration-300
            "
          >
            <FontAwesomeIcon icon={faEye} className="text-[10px]" />
            Specs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
