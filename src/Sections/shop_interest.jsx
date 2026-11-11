import { useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { getProductImage } from "../utils/imageHelper";

export default function ShopByInterest() {
  const scrollRef = useRef(null);

  const interests = [
    { 
      title: "🎮 Combat Gaming", 
      desc: "Ultra-low latency, 8k polling rate gear", 
      img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80", 
      slug: "gaming" 
    },
    { 
      title: "💻 Neural Coding", 
      desc: "Tactile mechanical comfort for long coding runs", 
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80", 
      slug: "programming" 
    },
    { 
      title: "🎧 Studio Streaming", 
      desc: "Broadcast XLR acoustic capture & lighting", 
      img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80",
      slug: "streaming" 
    },
    { 
      title: "🖥 Cyber Workspace", 
      desc: "Clean minimal multi-monitor productivity hubs", 
      img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80", 
      slug: "office" 
    },
    { 
      title: "⚡ Esports Stage", 
      desc: "Tournament-spec hardware built for apex rank", 
      img: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=600&q=80", 
      slug: "esports" 
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto relative group/section">
      {/* Header Section */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <span className="text-cyber-green text-xs font-mono uppercase tracking-[0.25em] block mb-1">
            Tactical Specialization
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-cyber-green uppercase font-cyber tracking-tight">
            Shop by <span className="text-slate-900 dark:text-white">Mission Interest</span>
          </h2>
        </div>

        {/* Desktop Controls */}
        <div className="hidden sm:flex gap-2">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="w-10 h-10 rounded-lg bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border text-slate-800 dark:text-white hover:text-cyber-green hover:border-cyber-green/50 flex items-center justify-center transition-all active:scale-95 shadow-sm"
          >
            <FontAwesomeIcon icon={faChevronLeft} size="sm" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="w-10 h-10 rounded-lg bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border text-slate-800 dark:text-white hover:text-cyber-green hover:border-cyber-green/50 flex items-center justify-center transition-all active:scale-95 shadow-sm"
          >
            <FontAwesomeIcon icon={faChevronRight} size="sm" />
          </button>
        </div>
      </div>

      {/* Slider Track */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 pt-4 snap-x snap-mandatory no-scrollbar"
      >
        {interests.map((item) => (
          <Link
            key={item.slug}
            to={`/shop?interest=${item.slug}`}
            className="group relative min-w-[320px] h-[250px] rounded-2xl overflow-hidden flex-shrink-0 snap-start transition-all duration-300 hover:-translate-y-2 hover:shadow-cyber border border-slate-200 dark:border-cyber-border hover:border-cyber-green/50"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url('${getProductImage(item.img)}')` }}
            ></div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-cyber-green mb-1 font-bold">
                Specialized Sector
              </span>
              <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md font-cyber group-hover:text-cyber-green transition-colors flex items-center justify-between">
                <span>{item.title}</span>
                <FontAwesomeIcon icon={faArrowRight} className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-white/70 text-xs font-mono leading-relaxed">
                {item.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
