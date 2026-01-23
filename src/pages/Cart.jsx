import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus, faCreditCard, faShield } from "@fortawesome/free-solid-svg-icons";
import { ShopCategory } from "../Sections/Categories";
import MostPurchased from "../components/best_seller";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
        <>
      <div className="min-h-screen bg-cyber-bg pt-32 px-6 text-center">
        <h2 className="text-3xl font-black text-white mb-4 uppercase">Your Loadout is Empty</h2>
        <p className="text-white/50 mb-8">No tactical gear detected in your current session.</p>
        <Link to="/shop" className="inline-block bg-cyber-green text-black font-black py-4 px-10 uppercase tracking-widest hover:shadow-cyber">
          Browse Armory
        </Link>
      </div>
       < ShopCategory />
    </>
    );
   
  }

  return (
    <>
    <div className="min-h-screen bg-cyber-bg pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black text-white mb-10 uppercase tracking-tighter">
          Current <span className="text-cyber-green">Loadout</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-cyber-card border border-cyber-border p-4 rounded-xl flex items-center gap-6">
                <div className="w-24 h-24 bg-black rounded-lg flex-shrink-0">
                  <img src={`/assets/images/${item.img}`} alt={item.name} className="w-full h-full object-contain p-2" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-white font-bold">{item.name}</h3>
                  <p className="text-cyber-green font-black text-sm">${item.price}</p>
                </div>

                <div className="flex items-center gap-3 bg-black/40 p-2 rounded-lg border border-white/5">
                  <button onClick={() => updateQuantity(item.id, -1)} className="text-white hover:text-cyber-green px-2">
                    <FontAwesomeIcon icon={faMinus} size="xs" />
                  </button>
                  <span className="text-white font-mono w-5 text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="text-white hover:text-cyber-green px-2">
                    <FontAwesomeIcon icon={faPlus} size="xs" />
                  </button>
                </div>

                <button onClick={() => removeFromCart(item.id)} className="text-white/20 hover:text-red-500 transition-colors ml-4">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            ))}
          </div>

          {/* Summary Sidebar */}
          <div className="bg-cyber-card border border-cyber-green/30 p-8 rounded-2xl h-fit sticky top-24">
            <h3 className="text-xl font-black text-white uppercase mb-6 flex items-center gap-2">
              Order Summary
            </h3>
            
            <div className="space-y-4 border-b border-cyber-border pb-6 mb-6">
              <div className="flex justify-between text-white/60 text-sm">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-white/60 text-sm">
                <span>Shipping</span>
                <span className="text-cyber-green uppercase font-bold text-[10px]">Free</span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-8">
              <span className="text-white font-black uppercase tracking-widest text-sm">Total Credits</span>
              <span className="text-2xl font-black text-cyber-green">${cartTotal.toFixed(2)}</span>
            </div>

            <button className="w-full bg-cyber-green text-black font-black py-4 rounded-xl uppercase tracking-widest flex items-center justify-center gap-3 hover:shadow-cyber hover:-translate-y-1 transition-all">
              <FontAwesomeIcon icon={faCreditCard} />
              Secure Checkout
            </button>
            
            <div className="mt-6 flex items-center gap-2 justify-center text-[10px] text-white/30 uppercase font-bold tracking-tighter">
              <FontAwesomeIcon icon={faShield} className="text-cyber-green" />
              Encrypted Transaction Active
            </div>
          </div>
        </div>
      </div>
    </div>
    <MostPurchased  />;
    </>
  );
}