import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "../data/product";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faArrowDownWideShort, faRotateRight } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState("default"); // default, price-asc, price-desc, rating, name
  
  // Initialize state from URL or defaults
  const [query, setQuery] = useState(searchParams.get("query") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "All");
  const [price, setPrice] = useState(Number(searchParams.get("price")) || 3000);
  const interestParam = searchParams.get("interest");

  // Sync state when URL params change (e.g. from navbar or categories link)
  useEffect(() => {
    const urlCat = searchParams.get("category");
    if (urlCat) setCategory(urlCat);
    const urlQuery = searchParams.get("query");
    if (urlQuery !== null) setQuery(urlQuery);
  }, [searchParams]);

  // Sync state back with URL whenever a filter changes
  useEffect(() => {
    const params = {};
    if (query) params.query = query;
    if (category && category !== "All") params.category = category;
    if (price < 3000) params.price = price;
    if (interestParam) params.interest = interestParam;
    setSearchParams(params, { replace: true });
  }, [query, category, price, interestParam, setSearchParams]);

  // Interest to category map
  const interestCategoryMap = {
    gaming: ["Mouse", "Keyboard", "Headphones", "Controllers"],
    programming: ["Keyboard", "Laptop", "CPU", "Mouse"],
    streaming: ["Mics", "Webcam", "Headphones", "Lighting"],
    office: ["Keyboard", "Mouse", "Tablets", "Mouse Pad"],
    esports: ["Controllers", "Headphones", "Mouse"],
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search matching
      const matchQuery =
        !query ||
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.description?.toLowerCase().includes(query.toLowerCase());

      // Category matching
      const matchCategory =
        category === "All" ||
        product.category.toLowerCase() === category.toLowerCase();

      // Interest matching if present
      const matchInterest =
        !interestParam ||
        (interestCategoryMap[interestParam.toLowerCase()] &&
          interestCategoryMap[interestParam.toLowerCase()].includes(product.category));

      // Price matching
      const matchPrice = Number(product.price) <= price;

      return matchQuery && matchCategory && matchInterest && matchPrice;
    });
  }, [query, category, price, interestParam]);

  // Sorted products
  const sortedProducts = useMemo(() => {
    const items = [...filteredProducts];
    switch (sortBy) {
      case "price-asc":
        return items.sort((a, b) => a.price - b.price);
      case "price-desc":
        return items.sort((a, b) => b.price - a.price);
      case "rating":
        return items.sort((a, b) => (b.stats?.rating || 0) - (a.stats?.rating || 0));
      case "name":
        return items.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return items;
    }
  }, [filteredProducts, sortBy]);

  const handleReset = () => {
    setCategory("All");
    setPrice(3000);
    setQuery("");
    setSortBy("default");
    setSearchParams({});
  };

  return (
    <div className="bg-cyber-bg min-h-screen pt-24 pb-20 bg-cyber-grid"> 
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Armory Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-cyber-border">
          <div>
            <span className="text-cyber-green text-xs font-mono uppercase tracking-[0.25em] block mb-1">
              Armory Inventory // {interestParam ? `Sector: ${interestParam.toUpperCase()}` : "Global Database"}
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white dark:text-white light:text-slate-900 uppercase font-cyber tracking-tight">
              Hardware <span className="text-cyber-green">Catalog</span>
            </h1>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <SearchBar query={query} setQuery={setQuery} />
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="md:hidden py-2.5 px-4 bg-cyber-card border border-cyber-border text-cyber-green rounded-xl font-bold text-xs uppercase flex items-center gap-2 whitespace-nowrap"
            >
              <FontAwesomeIcon icon={faSliders} />
              Filters
            </button>
          </div>
        </div>

        {/* Catalog Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Filters Sidebar for Desktop */}
          <aside className="hidden md:block md:col-span-1">
            <div className="sticky top-24">
              <Filters
                category={category}
                setCategory={setCategory}
                price={price}
                setPrice={setPrice}
                onReset={handleReset}
              />
            </div>
          </aside>

          {/* Mobile Filter Drawer / Collapsible */}
          {mobileFiltersOpen && (
            <div className="md:hidden mb-6">
              <Filters
                category={category}
                setCategory={(cat) => {
                  setCategory(cat);
                  setMobileFiltersOpen(false);
                }}
                price={price}
                setPrice={setPrice}
                onReset={handleReset}
              />
            </div>
          )}

          {/* Product Listing Section */}
          <main className="md:col-span-3 space-y-6">
            
            {/* Sorting & Filter State Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-cyber-card/60 dark:bg-cyber-card/60 light:bg-white p-4 rounded-xl border border-cyber-border">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-white/60 dark:text-white/60 light:text-slate-500">Showing:</span>
                <span className="text-cyber-green font-bold">{sortedProducts.length}</span>
                <span className="text-white/60 dark:text-white/60 light:text-slate-500">Units Available</span>
                {category !== "All" && (
                  <span className="ml-2 px-2 py-0.5 rounded bg-cyber-green/10 text-cyber-green border border-cyber-green/30 text-[10px] uppercase font-bold">
                    {category}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faArrowDownWideShort} className="text-cyber-green text-xs" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-black dark:bg-black light:bg-slate-100 text-white dark:text-white light:text-slate-900 border border-cyber-border rounded-lg text-xs font-mono py-1.5 px-3 outline-none focus:border-cyber-green"
                >
                  <option value="default">Default Priority</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                  <option value="name">Name A-Z</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            {sortedProducts.length > 0 ? (
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-24 border border-dashed border-cyber-border rounded-2xl bg-cyber-card/30">
                <div className="w-16 h-16 mx-auto rounded-full border border-cyber-green/30 flex items-center justify-center text-cyber-green mb-4">
                  <FontAwesomeIcon icon={faRotateRight} />
                </div>
                <h3 className="text-lg font-bold text-white uppercase font-cyber mb-1">No Tactical Gear Matches</h3>
                <p className="text-white/40 text-xs max-w-sm mx-auto mb-6">
                  No units align with your current price threshold or hardware node filters.
                </p>
                <button 
                  onClick={handleReset}
                  className="bg-cyber-green text-black font-black uppercase text-xs py-3 px-8 rounded-lg hover:shadow-cyber transition-all"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Shop;
