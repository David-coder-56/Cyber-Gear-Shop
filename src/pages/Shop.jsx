import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "../data/product";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Initialize state from URL or defaults
  const [query, setQuery] = useState(searchParams.get("query") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "All");
  const [price, setPrice] = useState(Number(searchParams.get("price")) || 500);

  // Sync state with URL whenever a filter changes
  useEffect(() => {
    const params = {};
    if (query) params.query = query;
    if (category !== "All") params.category = category;
    if (price !== 500) params.price = price;
    setSearchParams(params);
  }, [query, category, price, setSearchParams]);

  const filteredProducts = products.filter((product) => {
    const matchQuery = product.name
      .toLowerCase()
      .includes(query.toLowerCase());

    const matchCategory =
      category === "All" || product.category.toLowerCase() === category.toLowerCase();

    const matchPrice = product.price <= price;

    return matchQuery && matchCategory && matchPrice;
  });

  return (
    <div className="bg-cyber-bg min-h-screen pt-20"> 
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Filters Sidebar */}
        <aside className="md:col-span-1">
          <div className="sticky top-24"> 
            <h2 className="text-cyber-green font-black uppercase tracking-widest mb-6">Filters</h2>
            <Filters
              category={category}
              setCategory={setCategory}
              price={price}
              setPrice={setPrice}
            />
          </div>
        </aside>

        {/* Product Listing */}
        <main className="md:col-span-3 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="text-3xl font-black text-white uppercase tracking-tighter">
              Showing <span className="text-cyber-green">{filteredProducts.length}</span> Results
            </h1>
            <SearchBar query={query} setQuery={setQuery} />
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-dashed border-cyber-border rounded-2xl">
              <p className="text-white/50 italic">No gear matches your current filters.</p>
              <button 
                onClick={() => {setCategory("All"); setPrice(500); setQuery("");}}
                className="mt-4 text-cyber-green underline uppercase text-sm font-bold"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Shop;