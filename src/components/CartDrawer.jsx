import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTrash, faPlus, faMinus, faCreditCard, faShieldAlt } from "@fortawesome/free-solid-svg-icons";

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cart, updateQuantity, removeFromCart, cartTotal, cartCount } = useCart();

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer Panel */}
      <aside className="relative w-full max-w-md bg-cyber-card border-l border-cyber-border h-full flex flex-col z-10 shadow-cyber transform transition-transform duration-300 animate-fade-in-up">
        {/* Header */}
        <div className="p-6 border-b border-cyber-border flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse"></span>
              <h3 className="text-lg font-black text-white uppercase font-cyber tracking-wider">
                Current <span className="text-cyber-green">Loadout</span>
              </h3>
            </div>
            <p className="text-[11px] font-mono text-white/50 uppercase tracking-widest mt-0.5">
              {cartCount} Tactical Item{cartCount !== 1 ? "s" : ""} Linked
            </p>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart drawer"
            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white flex items-center justify-center transition-colors"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        {/* Item List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-white/50">
              <div className="w-16 h-16 rounded-full border border-cyber-border flex items-center justify-center mb-4 text-cyber-green/40">
                <FontAwesomeIcon icon={faShieldAlt} size="xl" />
              </div>
              <h4 className="text-white font-bold uppercase tracking-wider mb-2 font-cyber">Armory Empty</h4>
              <p className="text-xs text-white/40 max-w-xs mb-6">
                No peripherals or gear loaded into your active session.
              </p>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="bg-cyber-green text-black font-black text-xs py-3 px-6 uppercase tracking-widest hover:shadow-cyber transition-all"
              >
                Browse Armory
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="bg-black/50 border border-cyber-border rounded-xl p-3.5 flex gap-4 items-center group hover:border-cyber-green/40 transition-colors"
              >
                <div className="w-16 h-16 bg-white/5 rounded-lg flex items-center justify-center p-1 shrink-0 overflow-hidden">
                  <img
                    src={`/assets/images/${item.img}`}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <Link
                    to={`/product/${item.id}`}
                    onClick={() => setIsCartOpen(false)}
                    className="text-sm font-bold text-white hover:text-cyber-green truncate block transition-colors"
                  >
                    {item.name}
                  </Link>
                  <p className="text-cyber-green font-mono font-bold text-xs mt-0.5">
                    ${item.price.toFixed(2)}
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center border border-cyber-border rounded-md bg-black px-1.5 py-0.5">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="text-white/60 hover:text-cyber-green px-1 text-xs"
                      >
                        <FontAwesomeIcon icon={faMinus} size="xs" />
                      </button>
                      <span className="text-xs text-white font-mono px-2 font-bold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="text-white/60 hover:text-cyber-green px-1 text-xs"
                      >
                        <FontAwesomeIcon icon={faPlus} size="xs" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-white/30 hover:text-red-400 text-xs ml-auto transition-colors p-1"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-cyber-border bg-black/40 space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-white/60 uppercase font-mono tracking-wider text-xs">Total Credits</span>
              <span className="text-xl font-black text-cyber-green font-mono">
                ${cartTotal.toFixed(2)}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Link
                to="/cart"
                onClick={() => setIsCartOpen(false)}
                className="py-3 px-4 border border-cyber-border text-white text-xs font-bold uppercase tracking-wider text-center rounded-lg hover:border-cyber-green/50 hover:bg-white/5 transition-all"
              >
                View Cart
              </Link>

              <Link
                to="/cart"
                onClick={() => setIsCartOpen(false)}
                className="py-3 px-4 bg-cyber-green text-black text-xs font-black uppercase tracking-wider text-center rounded-lg hover:shadow-cyber hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <FontAwesomeIcon icon={faCreditCard} />
                Checkout
              </Link>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}

