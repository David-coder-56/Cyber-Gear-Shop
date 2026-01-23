import { Link } from "react-router-dom";
import { products } from "../data/product"; // Fixed import path to match your file name

export default function LatestProducts() {
  // 1. Filter for featured items first, then take the top 4 for a clean grid
  const latestFeatured = products
    .filter((product) => product.featured)
    .slice(0, 4); 

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
            Latest <span className="text-cyber-green">Arrivals</span>
          </h2>
          <div className="h-1 w-20 bg-cyber-green mt-2"></div>
        </div>
        <Link 
          to="/shop" 
          className="text-cyber-green hover:text-white transition-colors font-bold uppercase tracking-widest text-sm"
        >
          View All Products →
        </Link>
      </div>

      {/* Grid Display: Changed to 4 columns for better balance on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {latestFeatured.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group bg-cyber-card border border-cyber-border rounded-xl overflow-hidden transition-all duration-300 hover:border-cyber-green/50 hover:shadow-cyber hover:-translate-y-2"
          >
            {/* Image Container */}
            <div className="h-64 overflow-hidden bg-[#151515] relative">
              <img 
                src={`/assets/images/${product.img}`} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>

            {/* Content Container */}
            <div className="p-6">
              <span className="text-xs text-cyber-green uppercase font-black tracking-widest opacity-60">
                {product.category}
              </span>
              <h3 className="text-xl font-bold text-white mt-1 group-hover:text-cyber-green transition-colors">
                {product.name}
              </h3>
              
              <div className="flex justify-between items-center mt-4">
                <p className="text-cyber-green font-black text-xl">
                  ${product.price.toFixed(2)}
                </p>
                <button className="text-[10px] font-bold text-white border border-white/20 px-2 py-1 rounded uppercase group-hover:bg-cyber-green group-hover:text-black group-hover:border-cyber-green transition-all">
                  Details
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}