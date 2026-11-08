import { useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { getProductImage } from "../utils/imageHelper";

export default function Categories() {
  const scrollRef = useRef(null);

  const items = [
    { name: "All Deals", img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80", slug: "All" },
    { name: "Mouse", img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=400&q=80", slug: "Mouse" },
    { name: "Keyboard", img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&q=80", slug: "Keyboard" },
    { name: "Headphones", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80", slug: "Headphones" },
    { name: "Controllers", img: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=400&q=80", slug: "Controllers" },
    { name: "Mics", img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=400&q=80", slug: "Mics" },
    { name: "Mousepad", img: "https://images.unsplash.com/photo-1616440347437-b1c73416efc2?auto=format&fit=crop&w=400&q=80", slug: "Mouse Pad" },
    { name: "Combos", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&q=80", slug: "Combo" },
    { name: "CPU / PC", img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80", slug: "CPU" },
    { name: "Webcam", img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&q=80", slug: "Webcam" },
    { name: "Tablets", img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=400&q=80", slug: "Tablets" },
    { name: "Laptops", img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=400&q=80", slug: "Laptop" },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -280 : 280,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto relative group/section">
      <div className="flex items-center justify-between mb-10">
        <div>
          <span className="text-cyber-green text-xs font-mono uppercase tracking-[0.25em] block mb-2">Hardware Divisions</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white dark:text-white light:text-slate-900 font-cyber">
            Shop by <span className="text-cyber-green">Category</span>
          </h2>
        </div>
        {/* Desktop Scroll Chevrons */}
        <div className="hidden sm:flex gap-2">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="w-10 h-10 rounded-lg bg-cyber-card border border-cyber-border text-white hover:text-cyber-green hover:border-cyber-green/50 flex items-center justify-center transition-all active:scale-95 shadow-sm"
          >
            <FontAwesomeIcon icon={faChevronLeft} size="sm" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="w-10 h-10 rounded-lg bg-cyber-card border border-cyber-border text-white hover:text-cyber-green hover:border-cyber-green/50 flex items-center justify-center transition-all active:scale-95 shadow-sm"
          >
            <FontAwesomeIcon icon={faChevronRight} size="sm" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory no-scrollbar"
      >
        {items.map((item) => (
          <Link
            key={item.name}
            to={`/shop?category=${encodeURIComponent(item.slug)}`}
            className="group flex w-[120px] flex-shrink-0 snap-start flex-col items-center"
          >
            {/* Circular Image Container with Neon Pulse Glow */}
            <div className="relative h-28 w-28 rounded-full border-2 border-cyber-green/30 p-1 transition-all duration-300 group-hover:border-cyber-green group-hover:shadow-cyber group-hover:scale-105 bg-black/40 overflow-hidden">
              <img
                src={getProductImage(item.img)}
                className="h-full w-full rounded-full object-cover transition-all duration-300 group-hover:scale-110"
                alt={item.name}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=400&q=80";
                }}
              />
            </div>

            {/* Label */}
            <p className="mt-4 font-bold text-white/70 dark:text-white/70 light:text-slate-700 transition-colors duration-300 group-hover:text-cyber-green text-xs uppercase tracking-wider text-center">
              {item.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function ShopCategory() {
  const gridItems = [
    { name: "Mouse", img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&q=80", slug: "Mouse" },
    { name: "Keyboard", img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80", slug: "Keyboard" },
    { name: "Headsets", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80", slug: "Headphones" },
    { name: "Controllers", img: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=600&q=80", slug: "Controllers" },
    { name: "Mics", img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80", slug: "Mics" },
  ];

  const sliderItems = [
    { name: "Tablets", img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80", slug: "Tablets" },
    { name: "Setups & Gear", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80", slug: "Combo" },
    { name: "CPUs & Rigs", img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80", slug: "CPU" },
    { name: "Laptops", img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80", slug: "Laptop" },
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="mb-10">
        <span className="text-cyber-green text-xs font-mono uppercase tracking-[0.25em] block mb-2">Tactical Arrays</span>
        <h2 className="text-3xl md:text-4xl font-black text-cyber-green uppercase tracking-tight font-cyber">
          Featured <span className="text-white dark:text-white light:text-slate-900">Armories</span>
        </h2>
      </div>

      {/* 1. Main Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
        {gridItems.map((item) => (
          <CategoryCard key={item.name} item={item} />
        ))}
      </div>

      {/* 2. Horizontal Slider for More Categories */}
      <h3 className="text-lg font-bold text-white/50 dark:text-white/50 light:text-slate-500 uppercase tracking-widest mb-6 font-cyber">More Loadout Sectors</h3>
      <div className="flex gap-6 overflow-x-auto pb-6 no-scrollbar snap-x snap-mandatory">
        {sliderItems.map((item) => (
          <div key={item.name} className="flex-shrink-0 w-[240px] snap-start">
            <CategoryCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}

// Reusable Card Component
function CategoryCard({ item }) {
  return (
    <Link
      to={`/shop?category=${encodeURIComponent(item.slug)}`}
      className="group relative h-40 w-full rounded-2xl overflow-hidden block transition-all duration-300 hover:-translate-y-1 hover:shadow-cyber border border-cyber-border hover:border-cyber-green/50"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url('${getProductImage(item.img)}')` }}
      >
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors duration-300"></div>
      </div>

      {/* Category Name */}
      <div className="absolute bottom-4 left-4 z-10">
        <span className="text-cyber-green font-black uppercase tracking-wider text-base drop-shadow-md font-cyber flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-pulse"></span>
          {item.name}
        </span>
      </div>
    </Link>
  );
}
