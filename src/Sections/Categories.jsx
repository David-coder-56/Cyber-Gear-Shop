import { Link } from "react-router-dom";

export default function Categories() {
  const items = [
    { name: "All Deals", img: "mouse-1.jpg", slug: "all" },
    { name: "Mouse", img: "mouse-1.jpg", slug: "mouse" },
    { name: "Keyboard", img: "keyboard2.jpg", slug: "keyboard" },
    { name: "Headset", img: "headphone2.jpg", slug: "headset" },
    { name: "Controller", img: "gamepad-3.jpg", slug: "controller" },
    { name: "Mics", img: "mic2.jpg", slug: "mics" },
    { name: "Mousepad", img: "mousepad2.jpg", slug: "mousepad" },
    { name: "Combos", img: "ipad -laptop.jpg", slug: "combos" },
    { name: "Monitor", img: "computer_setup.jpg", slug: "monitor" },
    { name: "Webcam", img: "webcam1.jpg", slug: "webcam" },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="mb-12 text-center text-4xl font-black text-white uppercase tracking-tighter">
        Shop by <span className="text-cyber-green">Category</span>
      </h2>

      {/* Horizontal Scroll Container 
          'no-scrollbar' is a custom class (defined below) or use 'scrollbar-hide' if you have the plugin
      */}
      <div className="flex gap-8 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory no-scrollbar">
        {items.map((item) => (
          <Link
            key={item.name}
            to={`/shop?category=${item.slug}`}
            className="group flex w-[120px] flex-shrink-0 snap-start flex-col items-center"
          >
            {/* Circular Image Container */}
            <div className="relative h-28 w-28 rounded-full border-2 border-cyber-green/30 p-1 transition-all duration-300 group-hover:border-cyber-green group-hover:shadow-cyberSoft">
              <img
                src={`/assets/images/${item.img}`}
                className="h-full w-full rounded-full object-cover grayscale-[50%] transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105"
                alt={item.name}
              />
            </div>

            {/* Label */}
            <p className="mt-4 font-bold text-white/70 transition-colors duration-300 group-hover:text-cyber-green text-sm uppercase tracking-widest">
              {item.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};
export function ShopCategory() {
  const gridItems = [
    { name: "Mouse", img: "mouse2.jpg", slug: "mouse" },
    { name: "Keyboard", img: "keyboard2.jpg", slug: "keyboard" },
    { name: "Headsets", img: "headphone1.jpg", slug: "headset" },
    { name: "Controllers", img: "gamepad-6.jpg", slug: "controller" },
    { name: "Accessories", img: "game-hard-drive.jpg", slug: "accessories" },
  ];

  const sliderItems = [
    { name: "Ipads", img: "ipad1.jpg", slug: "ipad" },
    { name: "Chairs", img: "chair.png", slug: "chair" },
    { name: "PCs", img: "desktop-setup.jpg", slug: "pc" },
    { name: "Laptops", img: "laptop1.jpg", slug: "laptop" },
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-black text-cyber-green uppercase tracking-tighter mb-10">
        Shop by <span className="text-white">Category</span>
      </h2>

      {/* 1. Main Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
        {gridItems.map((item) => (
          <CategoryCard key={item.name} item={item} />
        ))}
      </div>

      {/* 2. Horizontal Slider for More Categories */}
      <h3 className="text-xl font-bold text-white/50 uppercase tracking-widest mb-6">More Gear</h3>
      <div className="flex gap-6 overflow-x-auto pb-6 no-scrollbar snap-x snap-mandatory">
        {sliderItems.map((item) => (
          <div key={item.name} className="flex-shrink-0 w-[220px] snap-start">
            <CategoryCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}

// Reusable Card Component to keep code DRY (Don't Repeat Yourself)
 function CategoryCard({ item }) {
  return (
    <Link
      to={`/shop?category=${item.slug}`}
      className="group relative h-40 w-full rounded-2xl overflow-hidden block transition-all duration-300 hover:-translate-y-1 hover:shadow-cyber"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url('/assets/images/${item.img}')` }}
      >
        {/* Dark Overlay (the ::before replacement) */}
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-300"></div>
      </div>

      {/* Category Name */}
      <div className="absolute bottom-4 left-4 z-10">
        <span className="text-cyber-green font-black uppercase tracking-tight text-lg drop-shadow-md">
          {item.name}
        </span>
      </div>
    </Link>
  );
}