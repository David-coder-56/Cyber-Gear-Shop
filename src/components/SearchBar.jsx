import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFire, faGamepad, faLaptopCode, faHeadphones } from "@fortawesome/free-solid-svg-icons";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  // Filters results as you type
  const searchResults = products.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 4);

  const interests = [
    { name: "Competitive Gaming", icon: faGamepad, category: "Mouse" },
    { name: "Content Creation", icon: faHeadphones, category: "Mics" },
    { name: "Cyber Workspace", icon: faLaptopCode, category: "Keyboard" },
  ];

  return (
    <div className="bg-cyber-bg min-h-screen pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Search Input Area */}
        <div className="relative mb-12">
          <FontAwesomeIcon icon={faSearch} className="absolute left-5 top-1/2 -translate-y-1/2 text-cyber-green text-xl" />
          <input 
            type="text" 
            placeholder="Search the database..."
            className="w-full bg-cyber-card border-2 border-cyber-border focus:border-cyber-green outline-none p-6 pl-14 rounded-2xl text-white text-xl transition-all shadow-cyber"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
        </div>

        {/* Dynamic Results Preview */}
        {query && (
          <div className="mb-12 animate-fade-in">
            <h3 className="text-white/50 uppercase text-xs font-black tracking-widest mb-4 ml-2">Search Results</h3>
            <div className="grid grid-cols-1 gap-4">
              {searchResults.map(p => (
                <Link key={p.id} to={`/product/${p.id}`} className="bg-cyber-card border border-cyber-border p-4 rounded-xl flex items-center justify-between hover:border-cyber-green transition-all">
                  <div className="flex items-center gap-4">
                    <img src={`/assets/images/${p.img}`} alt="" className="w-12 h-12 object-contain" />
                    <span className="text-white font-bold">{p.name}</span>
                  </div>
                  <span className="text-cyber-green font-black">${p.price}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Shop By Interest */}
        <section className="mb-16">
          <h2 className="text-white font-black uppercase tracking-tighter text-2xl mb-6">Shop by <span className="text-cyber-green">Interest</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {interests.map((item, i) => (
              <Link 
                key={i} 
                to={`/shop?category=${item.category}`}
                className="bg-cyber-card border border-cyber-border p-8 rounded-2xl text-center group hover:border-cyber-green hover:-translate-y-1 transition-all"
              >
                <FontAwesomeIcon icon={item.icon} className="text-4xl text-cyber-green mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold uppercase text-sm tracking-widest">{item.name}</h3>
              </Link>
            ))}
          </div>
        </section>

        {/* Trending Sales Section */}
        <section className="bg-red-900/10 border border-red-500/20 rounded-3xl p-8 mb-20 relative overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-white font-black text-2xl flex items-center gap-3">
              <FontAwesomeIcon icon={faFire} className="text-red-500" />
              TRENDING <span className="text-red-500">DEALS</span>
            </h2>
            <Link to="/sales" className="text-red-500 font-bold text-xs uppercase hover:underline">View All Sales</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.slice(0, 4).map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="text-center group">
                <div className="aspect-square bg-black/40 rounded-xl mb-2 flex items-center justify-center p-2 border border-white/5 group-hover:border-red-500/50 transition-all">
                  <img src={`/assets/images/${p.img}`} alt="" className="w-full h-full object-contain" />
                </div>
                <p className="text-white/60 text-[10px] font-bold line-clamp-1">{p.name}</p>
                <p className="text-red-500 font-black text-sm">-${(p.price * 0.2).toFixed(0)} Off</p>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}