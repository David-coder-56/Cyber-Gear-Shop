import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faStar } from "@fortawesome/free-solid-svg-icons";
import { products } from "../data/product";

// Get top 5 best-selling products
const bestSellers = products
  .sort((a, b) => b.sold_count - a.sold_count)
  .slice(0, 5);

export default function MostPurchased() {


  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">
            Most <span className="text-cyber-green">Purchased</span>
          </h2>
          <p className="text-gray-400 mt-2 text-sm">Gear that everyone is talking about.</p>
        </div>
        
        {/* Decorative Line */}
        <div className="hidden md:block h-px flex-1 bg-cyber-border mx-8 relative top-[-10px]"></div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar">
        {bestSellers.map((product, index) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group relative flex-shrink-0 w-[280px] snap-start bg-cyber-card border border-cyber-border rounded-xl overflow-hidden transition-all duration-300 hover:border-cyber-green hover:-translate-y-2 hover:shadow-cyber"
          >
            {/* Rank Badge (Optional) */}
            <div className="absolute top-3 left-3 z-20 bg-cyber-green text-black font-black text-xs px-2 py-1 rounded uppercase tracking-wide flex items-center gap-1">
              <FontAwesomeIcon icon={faFire} /> #{index + 1} Best Seller
            </div>

            {/* Image Container */}
            <div className="relative h-60 overflow-hidden bg-[#151515]">
              <img
                src={`/assets/images/${product.img}`}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>

            {/* Product Info */}
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs text-gray-500 font-mono">{product.sold}</span>
                <div className="text-yellow-400 text-xs">
                  <FontAwesomeIcon icon={faStar} /> 5.0
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyber-green transition-colors">
                {product.name}
              </h3>
              
              <div className="flex items-center justify-between mt-3">
                <p className="text-xl font-black text-cyber-green">{product.price}</p>
                <span className="text-xs font-bold text-white border border-white/20 px-2 py-1 rounded group-hover:bg-cyber-green group-hover:text-black group-hover:border-cyber-green transition-all">
                  VIEW
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}