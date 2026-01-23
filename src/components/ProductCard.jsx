import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ product }) => {
  return (
    <div
      className="
        bg-cyber-card 
        text-white 
        border border-cyber-border 
        rounded-2xl p-5 
        hover:shadow-cyber 
        hover:border-cyber-green/50
        group
        transition-all duration-300
        flex flex-col justify-between
      "
    >
      {/* Product Image Container */}
      <div className="relative overflow-hidden rounded-lg bg-[#111] mb-4 aspect-square flex items-center justify-center">
        <img
          src={`/assets/images/${product.img}`}
          alt={product.name}
          className="h-40 object-contain transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Floating Category Tag */}
        <span className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-cyber-green text-[10px] font-black px-2 py-1 rounded border border-cyber-green/20 uppercase tracking-widest">
          {product.category}
        </span>
      </div>

      {/* Info Section */}
      <div>
        <h3 className="font-bold text-lg group-hover:text-cyber-green transition-colors line-clamp-1">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between mt-3">
          <p className="text-cyber-green font-black text-xl">
            ${product.price.toFixed(2)}
          </p>
          
          {/* View Product CTA */}
          <Link
            to={`/product/${product.id}`}
            className="
              flex items-center gap-2
              px-4 py-2 
              bg-white/5 border border-white/10
              rounded-lg text-xs font-black uppercase tracking-widest
              hover:bg-cyber-green hover:text-black hover:border-cyber-green
              transition-all duration-300
            "
          >
            <FontAwesomeIcon icon={faEye} className="text-[10px]" />
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;