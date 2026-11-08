import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faTrash, 
  faPlus, 
  faMinus, 
  faCreditCard, 
  faShield, 
  faTag, 
  faCheckCircle, 
  faSpinner, 
  faRotateLeft 
} from "@fortawesome/free-solid-svg-icons";
import MostPurchased from "../components/best_seller";
import { getProductImage } from "../utils/imageHelper";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal, showToast } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState("idle"); // idle, processing, success

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === "CYBER20") {
      setDiscountPercent(20);
      setPromoApplied(true);
      showToast("CYBER20 applied: 20% Override Discount Granted", "DISCOUNT OVERRIDE", "success");
    } else {
      showToast("Invalid authorization code. Try CYBER20", "ACCESS DENIED", "info");
    }
  };

  const discountAmount = (cartTotal * discountPercent) / 100;
  const finalTotal = Math.max(0, cartTotal - discountAmount);

  const handleSimulateCheckout = () => {
    setCheckoutStep("processing");
    setTimeout(() => {
      setCheckoutStep("success");
      clearCart();
    }, 2400);
  };

  if (cart.length === 0 && checkoutStep !== "success") {
    return (
      <div className="min-h-screen bg-cyber-bg pt-28 pb-16 px-6 bg-cyber-grid">
        <div className="max-w-2xl mx-auto text-center py-20 bg-cyber-card border border-cyber-border rounded-3xl p-8 shadow-cyber">
          <div className="w-20 h-20 mx-auto rounded-full border border-cyber-green/30 flex items-center justify-center text-cyber-green text-3xl mb-6">
            <FontAwesomeIcon icon={faShield} />
          </div>
          <h1 className="text-3xl font-black text-white uppercase font-cyber mb-3">
            Armory Loadout is Empty
          </h1>
          <p className="text-white/50 text-sm font-mono max-w-md mx-auto mb-8">
            No active combat peripherals or tactical gear equipped in your session.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-cyber-green text-black font-black py-4 px-10 uppercase tracking-widest hover:shadow-cyber hover:brightness-110 transition-all rounded-xl font-cyber text-xs"
          >
            Deploy into Armory
          </Link>
        </div>
        <div className="mt-16">
          <MostPurchased />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cyber-bg pt-24 pb-20 px-6 bg-cyber-grid">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-cyber-border">
          <div>
            <span className="text-cyber-green text-xs font-mono uppercase tracking-[0.25em] block mb-1">
              Active Procurement System
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white uppercase font-cyber tracking-tight">
              Operational <span className="text-cyber-green">Loadout</span>
            </h1>
          </div>
          
          <button
            onClick={clearCart}
            className="text-xs font-mono text-white/40 hover:text-red-400 uppercase tracking-wider flex items-center gap-1.5 transition-colors"
          >
            <FontAwesomeIcon icon={faRotateLeft} size="xs" /> Purge Loadout
          </button>
        </div>

        {/* Checkout Modal / Success State */}
        {checkoutStep === "success" ? (
          <div className="max-w-xl mx-auto bg-cyber-card border border-cyber-green p-10 rounded-3xl text-center shadow-cyber mb-16 animate-fade-in-up">
            <div className="w-20 h-20 mx-auto rounded-full bg-cyber-green/10 text-cyber-green border border-cyber-green flex items-center justify-center text-4xl mb-6">
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <span className="text-cyber-green text-xs font-mono uppercase tracking-[0.3em] block mb-2">
              Order Dispatched
            </span>
            <h2 className="text-3xl font-black text-white uppercase font-cyber mb-4">
              Tactical Acquisition Confirmed
            </h2>
            <p className="text-white/60 text-sm font-mono leading-relaxed mb-8">
              Transmission authorized. Your encrypted tracking telemetry has been generated and dispatched to your communication link.
            </p>
            <Link
              to="/shop"
              onClick={() => setCheckoutStep("idle")}
              className="inline-block bg-cyber-green text-black font-black py-4 px-10 uppercase tracking-widest hover:shadow-cyber transition-all rounded-xl font-cyber text-xs"
            >
              Return to Catalog
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-cyber-card border border-cyber-border p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-5 hover:border-cyber-green/40 transition-colors"
                >
                  <Link
                    to={`/product/${item.id}`}
                    className="w-24 h-24 bg-black/60 rounded-xl p-2 flex items-center justify-center shrink-0 border border-white/5"
                  >
                    <img
                      src={getProductImage(item.img)}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80";
                      }}
                      className="w-full h-full object-contain"
                    />
                  </Link>

                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-mono text-cyber-green uppercase tracking-widest block mb-1">
                      {item.category}
                    </span>
                    <Link
                      to={`/product/${item.id}`}
                      className="text-base font-bold text-white hover:text-cyber-green transition-colors truncate block"
                    >
                      {item.name}
                    </Link>
                    <p className="text-cyber-green font-mono font-black text-sm mt-1">
                      ${Number(item.price).toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity and Controls */}
                  <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                    <div className="flex items-center bg-black/60 px-2 py-1 rounded-xl border border-white/10">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="text-white/60 hover:text-cyber-green px-2 py-1 text-xs"
                        aria-label="Decrease quantity"
                      >
                        <FontAwesomeIcon icon={faMinus} size="xs" />
                      </button>
                      <span className="text-white font-mono font-bold text-sm w-7 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="text-white/60 hover:text-cyber-green px-2 py-1 text-xs"
                        aria-label="Increase quantity"
                      >
                        <FontAwesomeIcon icon={faPlus} size="xs" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Remove item"
                      className="text-white/30 hover:text-red-400 p-2 transition-colors"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary & Checkout Sidebar */}
            <div className="space-y-6">
              
              {/* Promo Code Box */}
              <div className="bg-cyber-card border border-cyber-border p-6 rounded-2xl">
                <div className="flex items-center gap-2 text-cyber-green mb-3">
                  <FontAwesomeIcon icon={faTag} className="text-xs" />
                  <h4 className="font-bold text-xs uppercase font-cyber tracking-wider">Discount Override</h4>
                </div>
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Auth code (e.g. CYBER20)"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 bg-black/60 border border-cyber-border rounded-xl px-3 py-2 text-xs font-mono text-white outline-none focus:border-cyber-green uppercase"
                  />
                  <button
                    type="submit"
                    className="bg-cyber-green text-black font-black uppercase text-xs px-4 py-2 rounded-xl hover:brightness-110 tracking-wider"
                  >
                    Apply
                  </button>
                </form>
                {promoApplied && (
                  <p className="text-[11px] font-mono text-cyber-green mt-2 flex items-center gap-1">
                    <FontAwesomeIcon icon={faCheckCircle} /> Code CYBER20 active (20% Off)
                  </p>
                )}
              </div>

              {/* Order Calculation */}
              <div className="bg-cyber-card border border-cyber-green/40 p-6 md:p-8 rounded-2xl shadow-cyber sticky top-24 space-y-6">
                <h3 className="text-lg font-black text-white uppercase font-cyber tracking-wider">
                  Order Summary
                </h3>

                <div className="space-y-3 font-mono text-xs border-b border-cyber-border pb-6">
                  <div className="flex justify-between text-white/70">
                    <span>Hardware Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>

                  {discountPercent > 0 && (
                    <div className="flex justify-between text-cyber-green">
                      <span>Override Discount ({discountPercent}%)</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-white/70">
                    <span>Encrypted Deployment</span>
                    <span className="text-cyber-green font-bold uppercase tracking-wider">FREE (VIP)</span>
                  </div>
                </div>

                <div className="flex justify-between items-baseline font-mono">
                  <span className="text-white font-black uppercase font-cyber text-sm tracking-wider">Total Credits</span>
                  <span className="text-3xl font-black text-cyber-green">
                    ${finalTotal.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={handleSimulateCheckout}
                  disabled={checkoutStep === "processing"}
                  className="w-full bg-cyber-green text-black font-black py-4 rounded-xl uppercase tracking-widest font-cyber text-xs flex items-center justify-center gap-3 hover:shadow-cyber hover:brightness-110 active:scale-95 transition-all"
                >
                  {checkoutStep === "processing" ? (
                    <>
                      <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                      Encrypting Transaction...
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faCreditCard} />
                      Execute Tactical Checkout
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-[10px] text-white/40 font-mono uppercase tracking-wider">
                  <FontAwesomeIcon icon={faShield} className="text-cyber-green" />
                  Quantum SHA-512 Encrypted Transaction
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Recommended Gear */}
        <div className="mt-20">
          <MostPurchased />
        </div>
      </div>
    </div>
  );
}
