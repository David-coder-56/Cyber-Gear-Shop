import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../context/CartContext";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useCart();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    setSubscribed(true);
    showToast(`Access granted. ${email} registered into neural updates network`, "NETWORK REGISTRATION", "success");
    setEmail("");
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <section className="bg-gradient-to-b from-slate-100 to-white dark:from-black dark:to-cyber-card py-20 px-6 text-center border-t border-slate-200 dark:border-cyber-border transition-colors">
      <div className="max-w-2xl mx-auto bg-white/90 dark:bg-black/80 backdrop-blur-xl p-8 md:p-14 rounded-3xl shadow-xl dark:shadow-cyber border border-slate-200 dark:border-cyber-green/30 relative overflow-hidden">
        
        {/* Cyber Reticle corners */}
        <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyber-green" />
        <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyber-green" />

        <span className="text-cyber-green text-xs font-mono uppercase tracking-[0.3em] block mb-3 font-bold">
          Encrypted Frequency // Dispatch
        </span>

        <h2 className="text-cyber-green text-3xl md:text-4xl font-black uppercase tracking-tight mb-4 font-cyber">
          Join the <span className="text-slate-900 dark:text-white">Cyber Network</span>
        </h2>
        
        <p className="text-slate-600 dark:text-white/80 text-sm md:text-base mb-8 leading-relaxed font-mono">
          Receive direct firmware drops, prototype clearances, tournament discounts, and hardware blueprints before public launch.
        </p>

        {subscribed ? (
          <div className="p-4 rounded-xl bg-cyber-green/10 border border-cyber-green text-cyber-green font-mono text-sm flex items-center justify-center gap-2 animate-fade-in-up">
            <FontAwesomeIcon icon={faCheckCircle} />
            Transmission Received. Welcome to the Neural Mesh.
          </div>
        ) : (
          <form 
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3 mb-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter encrypted email coordinate..."
              required
              aria-label="Email address for updates"
              className="flex-1 bg-slate-50 dark:bg-black/90 text-slate-900 dark:text-white border border-slate-300 dark:border-cyber-border outline-none p-4 rounded-xl focus:border-cyber-green transition-all placeholder:text-slate-400 dark:placeholder:text-white/40 font-mono text-sm"
            />
            <button 
              type="submit" 
              className="bg-cyber-green text-black font-black uppercase px-8 py-4 rounded-xl transition-all hover:-translate-y-1 hover:shadow-cyber hover:brightness-110 whitespace-nowrap font-cyber text-xs flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon icon={faPaperPlane} size="xs" />
              Subscribe
            </button>
          </form>
        )}

        <small className="text-slate-400 dark:text-white/40 text-[11px] font-mono uppercase tracking-widest block mt-4">
          Quantum encrypted. Zero tracking spam. Unsubscribe anytime.
        </small>
      </div>
    </section>
  );
}
