import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cyber-bg flex items-center justify-center px-6 pt-20 bg-cyber-grid">
      <div className="max-w-md w-full bg-cyber-card border border-cyber-border rounded-3xl p-10 text-center shadow-cyber">
        <div className="w-16 h-16 mx-auto rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 text-2xl mb-4">
          <FontAwesomeIcon icon={faTriangleExclamation} />
        </div>
        <span className="text-red-500 font-mono text-xs uppercase tracking-[0.25em] block mb-2 font-bold">
          404 // Sector Breach
        </span>
        <h1 className="text-3xl font-black text-white uppercase font-cyber mb-3">
          Sector Not Found
        </h1>
        <p className="text-white/50 text-xs font-mono leading-relaxed mb-8">
          The tactical coordinate or system node you navigated to does not exist or has been decommissioned.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-cyber-green text-black font-black uppercase text-xs py-3 px-8 rounded-xl font-cyber tracking-widest hover:shadow-cyber transition-all"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Return to Armory
        </Link>
      </div>
    </div>
  );
}

