import { Link } from "react-router-dom";

export default function ShopByInterest() {
  const interests = [
    { 
      title: "🎮 Gaming", 
      desc: "High-speed, competitive gear", 
      img: "cool-setup.jpg", 
      slug: "gaming" 
    },
    { 
      title: "💻 Programming", 
      desc: "Comfort for long coding hours", 
      img: "coding-setup.jpg", 
      slug: "programming" 
    },
    { 
      title: "🎧 Streaming", 
      desc: "Crystal clear audio & control", 
      img: "computer_setup.jpg",
      slug: "streaming" 
    },
    { 
      title: "🖥 Office Setup", 
      desc: "Clean, productive workspace", 
      img: "office-setup.jpg", 
      slug: "office" 
    },
    { 
      title: "⚡ Esports", 
      desc: "Tournament-grade performance", 
      img: "esport-setup.jpg", 
      slug: "esports" 
    },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-3xl md:text-4xl font-black text-cyber-green uppercase tracking-tighter">
          Shop by <span className="text-white">Interest</span>
        </h2>
        <Link 
          to="/shop" 
          className="text-cyber-green font-bold text-sm uppercase tracking-widest hover:text-white transition-colors"
        >
          View All →
        </Link>
      </div>

      {/* Slider Track */}
      {/* - 'snap-x snap-mandatory': Makes it lock into place when scrolling 
         - 'no-scrollbar': Uses the utility we added earlier to hide the bar
      */}
      <div className="flex gap-6 overflow-x-auto pb-8 pt-4 snap-x snap-mandatory no-scrollbar">
        {interests.map((item) => (
          <Link
            key={item.slug}
            to={`/shop?interest=${item.slug}`}
            className="group relative min-w-[320px] h-[240px] rounded-2xl overflow-hidden flex-shrink-0 snap-start transition-all duration-300 hover:-translate-y-2 hover:shadow-cyber"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url('/assets/images/${item.img}')` }}
            ></div>

            {/* Gradient Overlay (The ::before replacement) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-2xl"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-6">
              <h3 className="text-2xl font-bold text-cyber-green mb-1 drop-shadow-md">
                {item.title}
              </h3>
              <p className="text-white/85 text-sm font-medium tracking-wide">
                {item.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}