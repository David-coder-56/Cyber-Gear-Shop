import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFire, faGamepad, faLaptopCode, faHeadphones, faMicrochip } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../components/ProductCard";
import { getProductImage } from "../utils/imageHelper";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const searchResults = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.description?.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const interests = [
    { name: "Competitive Gaming", icon: faGamepad, category: "Mouse" },
    { name: "Content Creation", icon: faHeadphones, category: "Mics" },
    { name: "Cyber Workspace", icon: faLaptopCode, category: "Keyboard" },
    { name: "Neural Rig Setup", icon: faMicrochip, category: "CPU" },
  ];

  return (
    <div className="bg-slate-50 dark:bg-cyber-bg min-h-screen pt-24 pb-16 px-6 bg-cyber-grid">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-cyber-green text-xs font-mono uppercase tracking-[0.25em] block mb-2">
            Central Terminal Query
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase font-cyber tracking-tight">
            Armory <span className="text-cyber-green">Database Search</span>
          </h1>
        </div>

        {/* Search Input Area */}
        <div className="relative mb-12 max-w-2xl mx-auto">
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-cyber-green text-xl pointer-events-none"
          />
          <input
            type="text"
            placeholder="Search peripherals, models, chips..."
            className="w-full bg-white dark:bg-cyber-card/90 border-2 border-slate-300 dark:border-cyber-border focus:border-cyber-green outline-none py-5 pl-16 pr-6 rounded-2xl text-slate-900 dark:text-white text-lg transition-all shadow-md focus:shadow-[0_0_35px_rgba(0,255,156,0.3)] font-mono"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
        </div>

        {/* Dynamic Results Preview */}
        {query.trim() && (
          <div className="mb-16 animate-fade-in-up">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-slate-600 dark:text-white/60 uppercase text-xs font-mono font-bold tracking-widest">
                Transmitted Query: <span className="text-cyber-green">"{query}"</span> ({searchResults.length} Match{searchResults.length !== 1 ? "es" : ""})
              </h3>
            </div>

            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white dark:bg-cyber-card/40 border border-slate-200 dark:border-cyber-border rounded-2xl shadow-sm">
                <div className="w-16 h-16 mx-auto rounded-full border border-cyber-green/30 flex items-center justify-center text-cyber-green mb-4 animate-spin-slow">
                  <FontAwesomeIcon icon={faSearch} />
                </div>
                <h4 className="text-slate-900 dark:text-white font-bold uppercase font-cyber mb-1">No Hardware Match Detected</h4>
                <p className="text-xs text-slate-500 dark:text-white/40 mb-6">Verify spelling or broaden tactical parameters.</p>
                <Link
                  to="/shop"
                  className="inline-block bg-cyber-green text-black font-black uppercase text-xs px-6 py-3 rounded-lg hover:shadow-cyber transition-all"
                >
                  Browse Full Catalog
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Shop By Interest */}
        <section className="mb-16">
          <h2 className="text-slate-900 dark:text-white font-black uppercase tracking-tight text-2xl mb-6 font-cyber flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse"></span>
            Browse by <span className="text-cyber-green">Sector</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {interests.map((item, i) => (
              <Link
                key={i}
                to={`/shop?category=${encodeURIComponent(item.category)}`}
                className="bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border p-6 rounded-2xl text-center group hover:border-cyber-green hover:-translate-y-1 shadow-sm hover:shadow-cyber transition-all"
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-3xl text-cyber-green mb-3 group-hover:scale-110 transition-transform"
                />
                <h3 className="text-slate-900 dark:text-white font-bold uppercase text-xs tracking-wider">{item.name}</h3>
              </Link>
            ))}
          </div>
        </section>

        {/* Trending Sales Section */}
        <section className="bg-gradient-to-r from-red-100 to-white dark:from-red-950/40 dark:to-black/60 border border-red-300 dark:border-red-500/30 rounded-3xl p-8 mb-20 relative overflow-hidden shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-slate-900 dark:text-white font-black text-xl flex items-center gap-3 font-cyber">
              <FontAwesomeIcon icon={faFire} className="text-red-500" />
              PRIORITY <span className="text-red-500">DISCOUNTS</span>
            </h2>
            <Link to="/sales" className="text-red-500 font-bold text-xs uppercase hover:underline tracking-wider">
              Full Sales Sector →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {products.slice(0, 4).map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                className="text-center group bg-white dark:bg-black/40 border border-slate-200 dark:border-white/5 rounded-2xl p-4 hover:border-red-500/50 shadow-sm transition-all"
              >
                <div className="aspect-square rounded-xl mb-3 flex items-center justify-center p-2 bg-slate-100 dark:bg-black/40">
                  <img
                    src={getProductImage(p.img)}
                    alt={p.name}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80";
                    }}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <p className="text-slate-900 dark:text-white font-bold text-xs line-clamp-1 group-hover:text-red-500 dark:group-hover:text-red-400">{p.name}</p>
                <p className="text-red-500 font-mono font-black text-sm mt-1">
                  ${(p.price * 0.8).toFixed(2)}
                </p>
                <span className="text-[10px] text-slate-400 dark:text-white/30 line-through font-mono">
                  ${p.price.toFixed(2)}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

