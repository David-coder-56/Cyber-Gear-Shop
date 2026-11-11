import { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faCheck, faInfoCircle, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function CyberToast() {
  const { toast, closeToast, setIsCartOpen } = useCart();

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      closeToast();
    }, 3800);
    return () => clearTimeout(timer);
  }, [toast, closeToast]);

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] max-w-sm w-full animate-fade-in-up">
      <div className="relative overflow-hidden bg-white/95 dark:bg-black/90 backdrop-blur-xl border border-cyber-green text-slate-900 dark:text-white p-4 rounded-xl shadow-2xl dark:shadow-cyber">
        {/* Corner HUD markers */}
        <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyber-green" />
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyber-green" />

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyber-green/10 border border-cyber-green/30 flex items-center justify-center text-cyber-green shrink-0 mt-0.5">
            <FontAwesomeIcon icon={toast.type === "info" ? faInfoCircle : faBolt} />
          </div>

          <div className="flex-1 pr-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-ping"></span>
              <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-cyber-green font-bold">
                {toast.title}
              </h4>
            </div>
            <p className="text-xs text-slate-700 dark:text-white/90 font-medium mt-1 leading-snug">
              {toast.message}
            </p>

            <div className="mt-2.5 flex items-center gap-3">
              <button
                onClick={() => {
                  closeToast();
                  setIsCartOpen(true);
                }}
                className="text-[10px] font-mono uppercase text-cyber-green font-bold hover:underline tracking-wider"
              >
                Inspect Loadout →
              </button>
            </div>
          </div>

          <button
            onClick={closeToast}
            aria-label="Dismiss notification"
            className="text-slate-400 hover:text-slate-700 dark:text-white/40 dark:hover:text-white transition-colors text-xs p-1"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        {/* Auto-depleting progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black/10 dark:bg-white/10 overflow-hidden">
          <div className="h-full bg-cyber-green animate-[shimmer_3.8s_linear_forwards] w-full origin-left" />
        </div>
      </div>
    </div>
  );
}

