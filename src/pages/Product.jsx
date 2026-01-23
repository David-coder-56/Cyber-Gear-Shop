import { useParams, Link } from "react-router-dom";
import { useState } from "react"; 
import { products } from "../data/product";
import { useCart } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faShieldAlt,
  faTruckFast,
  faMicrochip,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const Product = () => {
  const { id } = useParams();
  const { addToCart } = useCart(); // Access the add function
  const [added, setAdded] = useState(false); // UI feedback state

  const product = products.find((p) => p.id === Number(id));

  // Find related products
  const relatedProducts = products
    .filter((p) => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      setAdded(true);

      // Reset the button text after 2 seconds
      setTimeout(() => setAdded(false), 2000);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cyber-bg text-white">
        <div className="text-center">
          <h2 className="text-4xl font-black text-cyber-green mb-4">404</h2>
          <p className="mb-6 opacity-60">GEAR NOT FOUND IN DATABASE</p>
          <Link
            to="/shop"
            className="text-cyber-green border border-cyber-green px-6 py-2 uppercase font-bold hover:bg-cyber-green hover:text-black transition"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-light-bg dark:bg-cyber-bg min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          {/* Left: Product Image */}
          <div className="bg-cyber-card border border-cyber-border rounded-3xl p-10 flex items-center justify-center relative group shadow-cyberCard">
            <div className="absolute top-5 left-5 text-cyber-green/20 text-6xl font-black select-none uppercase">
              {product.category}
            </div>
            <img
              src={`/assets/images/${product.img}`}
              alt={product.name}
              className="w-full max-h-[500px] object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Right: Product Info */}
          <div className="space-y-8">
            <div>
              <span className="text-cyber-green font-mono uppercase tracking-[0.2em] text-sm">
                System Artifact / {product.category}
              </span>
              <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter mt-2 leading-none">
                {product.name}
              </h1>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              {product.description ||
                "High-performance hardware optimized for neural link synchronization."}
            </p>

            <div className="flex items-center gap-6">
              <span className="text-4xl font-black text-cyber-green">
                ${product.price.toFixed(2)}
              </span>
              <div className="flex flex-col">
                <span className="text-cyber-green text-[10px] font-black uppercase tracking-widest mb-1">
                  Status
                </span>
                <span className="bg-cyber-green/10 text-cyber-green text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-cyber-green/20">
                  Online & Ready
                </span>
              </div>
            </div>

            {/* CONNECTED CTA BUTTON */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleAddToCart}
                disabled={added}
                className={`
                  flex-1 font-black uppercase py-5 px-8 flex items-center justify-center gap-3 transition-all duration-300
                  ${
                    added
                      ? "bg-white text-black scale-95"
                      : "bg-cyber-green text-black hover:shadow-cyber hover:-translate-y-1 active:scale-95"
                  }
                `}
              >
                <FontAwesomeIcon icon={added ? faCheckCircle : faCartPlus} />
                {added ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-cyber-border">
              <div className="text-center">
                <FontAwesomeIcon
                  icon={faShieldAlt}
                  className="text-cyber-green mb-2"
                />
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">
                  2 Year Warranty
                </p>
              </div>
              <div className="text-center">
                <FontAwesomeIcon
                  icon={faTruckFast}
                  className="text-cyber-green mb-2"
                />
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">
                  Fast Deployment
                </p>
              </div>
              <div className="text-center">
                <FontAwesomeIcon
                  icon={faMicrochip}
                  className="text-cyber-green mb-2"
                />
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">
                  Cyber Optimized
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Grid... (remains as you had it) */}
        {/* Related Products Section */}

        {relatedProducts.length > 0 && (
          <div className="border-t border-cyber-border pt-16">
            <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-10">
              Related <span className="text-cyber-green">Gear</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  className="group bg-cyber-card border border-cyber-border p-4 rounded-xl transition-all hover:border-cyber-green/50"
                >
                  <img
                    src={`/assets/images/${p.img}`}
                    alt={p.name}
                    className="h-40 w-full object-contain mb-4 transition-transform group-hover:scale-110"
                  />

                  <h4 className="text-white font-bold group-hover:text-cyber-green transition-colors">
                    {p.name}
                  </h4>

                  <p className="text-cyber-green font-black">
                    ${p.price.toFixed(2)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
