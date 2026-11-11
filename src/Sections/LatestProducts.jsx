import { Link } from "react-router-dom";
import { products } from "../data/product";
import ProductCard from "../components/ProductCard";

export default function LatestProducts() {
  const latestFeatured = products
    .filter((product) => product.featured)
    .slice(0, 4); 

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="text-cyber-green text-xs font-mono uppercase tracking-[0.25em] block mb-1">
            New Factory Drops
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase font-cyber tracking-tight">
            Latest <span className="text-cyber-green">Arrivals</span>
          </h2>
        </div>
        <Link 
          to="/shop" 
          className="text-cyber-green hover:underline transition-all font-mono font-bold uppercase tracking-wider text-xs flex items-center gap-1"
        >
          View All Armory →
        </Link>
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {latestFeatured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
