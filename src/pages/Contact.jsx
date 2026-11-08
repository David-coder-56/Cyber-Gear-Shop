import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faLocationDot, faPhone, faGlobe, faCheckCircle, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../context/CartContext";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, sending, success
  const { showToast } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate tactical message transmission
    setTimeout(() => {
      setStatus("success");
      showToast("Transmission received. Tactical team responding within 2 hours.", "SIGNAL ESTABLISHED", "success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1500);
  };

  return (
    <div className="bg-cyber-bg min-h-screen px-6 py-24 bg-cyber-grid">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-14">
          <span className="text-cyber-green text-xs font-mono uppercase tracking-[0.3em] block mb-2">
            Secure Comms Frequency // 4096-Bit
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase font-cyber tracking-tight">
            Establish <span className="text-cyber-green">Connection</span>
          </h1>
          <p className="text-white/50 mt-3 font-mono text-xs tracking-wider">
            {">"} SIGNAL STATUS: ENCRYPTED // READY TO RECEIVE OPERATIVE TELEMETRY
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Contact Info & Tactical Radar */}
          <div className="space-y-6">
            <div className="bg-cyber-card border border-cyber-border rounded-2xl p-8 space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyber-green/10 rounded-xl flex items-center justify-center text-cyber-green shrink-0 border border-cyber-green/20">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-xs font-cyber tracking-wider mb-1">HQ Coordinates</h4>
                  <p className="text-white/60 text-sm font-mono">Sector 14, Coleman Avenue, Innovation Hub</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyber-green/10 rounded-xl flex items-center justify-center text-cyber-green shrink-0 border border-cyber-green/20">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-xs font-cyber tracking-wider mb-1">Voice Frequency</h4>
                  <a href="tel:+231776766055" className="text-white/60 hover:text-cyber-green text-sm font-mono transition-colors">
                    +231 (0) 77-676-6055
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyber-green/10 rounded-xl flex items-center justify-center text-cyber-green shrink-0 border border-cyber-green/20">
                  <FontAwesomeIcon icon={faGlobe} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-xs font-cyber tracking-wider mb-1">Global Mesh</h4>
                  <a href="mailto:davidbankole56@gmail.com" className="text-white/60 hover:text-cyber-green text-sm font-mono transition-colors">
                    davidbankole56@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Tactical Radar Display Box */}
            <div className="h-64 rounded-2xl border border-cyber-border bg-black/80 relative overflow-hidden group flex items-center justify-center">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00ff9c_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              <div className="w-44 h-44 rounded-full border border-cyber-green/30 border-dashed animate-spin-slow flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border border-cyber-green/20 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border border-cyber-green/40 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-cyber-green rounded-full shadow-[0_0_12px_#00ff9c] animate-ping" />
                  </div>
                </div>
              </div>

              {/* Sweeping radar line */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-48 h-48 rounded-full border border-cyber-green/10 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-tr from-transparent via-transparent to-cyber-green/25 animate-radar origin-center" />
                </div>
              </div>

              <span className="absolute bottom-4 left-4 text-[10px] text-cyber-green/60 font-mono tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-pulse"></span>
                SATELLITE_LINK_LOCKED
              </span>
            </div>
          </div>

          {/* Right: The Terminal Form */}
          <div className="bg-cyber-card border border-cyber-border rounded-2xl p-8 shadow-cyber">
            <span className="text-cyber-green text-[10px] font-mono uppercase tracking-[0.25em] block mb-4">
              Transmission Terminal
            </span>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-[10px] text-cyber-green font-mono uppercase font-bold">
                    Operative Identity
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Enter Callsign / Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-4 rounded-xl bg-black/60 border border-cyber-border text-white focus:border-cyber-green outline-none transition-all font-mono text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-[10px] text-cyber-green font-mono uppercase font-bold">
                    Comms Coordinate
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="name@domain.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-4 rounded-xl bg-black/60 border border-cyber-border text-white focus:border-cyber-green outline-none transition-all font-mono text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-[10px] text-cyber-green font-mono uppercase font-bold">
                  Message Payload
                </label>
                <textarea
                  id="contact-message"
                  rows="5"
                  placeholder="Type telemetry, inquiry, or custom procurement spec..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-4 rounded-xl bg-black/60 border border-cyber-border text-white focus:border-cyber-green outline-none transition-all resize-none font-mono text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={status !== "idle"}
                className={`
                  w-full py-4 rounded-xl
                  font-black uppercase tracking-widest font-cyber text-xs
                  transition-all duration-300
                  flex items-center justify-center gap-2.5
                  ${status === "success" 
                    ? "bg-cyber-green text-black" 
                    : "bg-cyber-green text-black hover:shadow-cyber hover:brightness-110 active:scale-95"}
                `}
              >
                {status === "idle" && (
                  <>
                    <FontAwesomeIcon icon={faPaperPlane} size="xs" />
                    Transmit Message Payload
                  </>
                )}
                {status === "sending" && (
                  <>
                    <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                    Uploading to Neural Mesh...
                  </>
                )}
                {status === "success" && (
                  <>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    Transmission Verified
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
