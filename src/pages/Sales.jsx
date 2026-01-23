import { useState, useEffect } from "react";
import { products } from "../data/product";
import ProductCard from "../components/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faClock, faPercent } from "@fortawesome/free-solid-svg-icons";

const Sale = () => {
  // Filter only items that are on sale (using price logic or adding a 'sale' flag)
  // For this example, we'll pretend items with ID 1, 3, and 5 are on sale
  const saleProducts = products.filter(p => [1, 3, 5, 6].includes(p.id));

  return (
    <div className="bg-cyber-bg min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Sale Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-900/40 to-black border border-red-500/30 p-8 md:p-16 mb-16">
          <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-black italic select-none">
            SALE
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500 text-white text-xs font-black uppercase tracking-widest mb-4 animate-pulse">
                <FontAwesomeIcon icon={faBolt} />
                Live System Breach: Discounts Detected
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-4">
                Flash <span className="text-red-500">Sale</span>
              </h1>
              <p className="text-white/60 text-lg max-w-md">
                Limited-time hardware overrides. Up to 40% off high-tier peripherals.
              </p>
            </div>

            {/* Countdown Timer Box */}
            <div className="bg-black/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex gap-4 text-center">
              <div>
                <p className="text-2xl font-black text-white">04</p>
                <p className="text-[10px] text-white/40 uppercase font-bold">Hrs</p>
              </div>
              <div className="text-2xl font-black text-red-500">:</div>
              <div>
                <p className="text-2xl font-black text-white">22</p>
                <p className="text-[10px] text-white/40 uppercase font-bold">Min</p>
              </div>
              <div className="text-2xl font-black text-red-500">:</div>
              <div>
                <p className="text-2xl font-black text-white">59</p>
                <p className="text-[10px] text-white/40 uppercase font-bold">Sec</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sale Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-cyber-card border border-red-500/20 p-6 rounded-xl flex items-center gap-4 group hover:border-red-500 transition-all cursor-pointer">
             <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500">
               <FontAwesomeIcon icon={faPercent} />
             </div>
             <div>
               <h3 className="text-white font-bold uppercase text-sm italic">Clearance</h3>
               <p className="text-xs text-white/40">Last chance units</p>
             </div>
          </div>
          {/* Repeat for other sale categories... */}
        </div>

        {/* Sale Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {saleProducts.map((product) => (
            <div key={product.id} className="relative">
              {/* Sale Badge */}
              <div className="absolute top-4 left-4 z-20 bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase">
                -30% OFF
              </div>
              
              {/* Reuse your existing ProductCard but with customized props or style if needed */}
              <ProductCard product={product} />
              
              {/* Stock Progress Bar */}
              <div className="mt-4 px-2">
                <div className="flex justify-between text-[10px] font-bold uppercase mb-1">
                  <span className="text-white/40">Stock Remaining</span>
                  <span className="text-red-500">12 units</span>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                   <div className="h-full bg-red-600 w-1/3 shadow-[0_0_8px_#ef4444]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Sale;