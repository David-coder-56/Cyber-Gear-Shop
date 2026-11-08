import { useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Categories() {
  const scrollRef = useRef(null);

  const items = [
    { name: "All Deals", img: "mouse-1.jpg", slug: "All" },
    { name: "Mouse", img: "mouse-1.jpg", slug: "Mouse" },
    { name: "Keyboard", img: "keyboard2.jpg", slug: "Keyboard" },
    { name: "Headphones", img: "headphone2.jpg", slug: "Headphones" },
    { name: "Controllers", img: "gamepad-3.jpg", slug: "Controllers" },
    { name: "Mics", img: "mic2.jpg", slug: "Mics" },
    { name: "Mousepad", img: "mousepad2.jpg", slug: "Mouse Pad" },
    { name: "Combos", img: "ipad -laptop.jpg", slug: "Combo" },
    { name: "CPU / PC", img: "computer_setup.jpg", slug: "CPU" },
    { name: "Webcam", img: "webcam1.jpg", slug: "Webcam" },
    { name: "Tablets", img: "ipad1.jpg", slug: "Tablets" },
    { name: "Laptops", img: "laptop1.jpg", slug: "Laptop" },
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
            <div className="relative h-28 w-28 rounded-full border-2 border-cyber-green/30 p-1 transition-all duration-300 group-hover:border-cyber-green group-hover:shadow-cyber group-hover:scale-105 bg-black/40">
              <img
                src={`/assets/images/${item.img}`}
                className="h-full w-full rounded-full object-cover transition-all duration-300 group-hover:scale-110"
                alt={item.name}
                loading="lazy"
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
    { name: "Mouse", img: "mouse2.jpg", slug: "Mouse" },
    { name: "Keyboard", img: "keyboard2.jpg", slug: "Keyboard" },
    { name: "Headsets", img: "headphone1.jpg", slug: "Headphones" },
    { name: "Controllers", img: "gamepad-6.jpg", slug: "Controllers" },
    { name: "Mics", img: "mic2.jpg", slug: "Mics" },
  ];

  const sliderItems = [
    { name: "Tablets", img: "ipad1.jpg", slug: "Tablets" },
    { name: "Setups & Gear", img: "game-setup.jpg", slug: "Combo" },
    { name: "CPUs & Rigs", img: "desktop-setup.jpg", slug: "CPU" },
    { name: "Laptops", img: "laptop1.jpg", slug: "Laptop" },
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
        style={{ backgroundImage: `url('/assets/images/${item.img}')` }}
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