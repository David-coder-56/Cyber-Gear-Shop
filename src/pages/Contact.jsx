import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faLocationDot, faPhone, faGlobe } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [status, setStatus] = useState("idle"); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate data transmission
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    }, 2000);
  };

  return (
    <div className="bg-cyber-bg min-h-screen px-6 py-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
            Establish <span className="text-cyber-green">Connection</span>
          </h1>
          <p className="text-white/50 mt-4 font-mono text-sm tracking-widest">
            {">"} SIGNAL STATUS: ENCRYPTED // READY TO RECEIVE
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Contact Info & Map Placeholder */}
          <div className="space-y-8">
            <div className="bg-cyber-card border border-cyber-border rounded-2xl p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyber-green/10 rounded-lg flex items-center justify-center text-cyber-green shrink-0 border border-cyber-green/20">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-1">HQ Coordinates</h4>
                  <p className="text-white/60 text-sm">14 street, RhotelHub, Coleman avenue</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyber-green/10 rounded-lg flex items-center justify-center text-cyber-green shrink-0 border border-cyber-green/20">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-1">Voice Link</h4>
                  <p className="text-white/60 text-sm">+231 (0) 77-676-6055</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyber-green/10 rounded-lg flex items-center justify-center text-cyber-green shrink-0 border border-cyber-green/20">
                  <FontAwesomeIcon icon={faGlobe} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-1">Global Mesh</h4>
                  <p className="text-white/60 text-sm">davidbankole56@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Decorative Map/Visual Box */}
            <div className="h-64 rounded-2xl border border-cyber-border bg-[#0a0a0a] relative overflow-hidden group">
               <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border-2 border-cyber-green/30 border-dashed animate-spin-slow"></div>
                  <div className="absolute w-24 h-24 rounded-full border border-cyber-green/50 flex items-center justify-center">
                    <div className="w-2 h-2 bg-cyber-green rounded-full shadow-[0_0_10px_#00ff9c] animate-pulse"></div>
                  </div>
               </div>
               <span className="absolute bottom-4 left-4 text-[10px] text-cyber-green/40 font-mono">LOCATION_TRACKER_ACTIVE</span>
            </div>
          </div>

          {/* Right: The Terminal Form */}
          <div className="bg-cyber-card border border-cyber-border rounded-2xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[10px] text-cyber-green uppercase font-black ml-1">Identity</label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    required
                    className="w-full p-4 rounded-xl bg-black/40 border border-cyber-border text-white focus:border-cyber-green focus:ring-1 focus:ring-cyber-green outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-cyber-green uppercase font-black ml-1">Comms Link</label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className="w-full p-4 rounded-xl bg-black/40 border border-cyber-border text-white focus:border-cyber-green focus:ring-1 focus:ring-cyber-green outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-cyber-green uppercase font-black ml-1">Message Payload</label>
                <textarea
                  rows="6"
                  placeholder="Type your message here..."
                  required
                  className="w-full p-4 rounded-xl bg-black/40 border border-cyber-border text-white focus:border-cyber-green focus:ring-1 focus:ring-cyber-green outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status !== "idle"}
                className={`
                  w-full py-5 rounded-xl
                  font-black uppercase tracking-[0.2em] text-sm
                  transition-all duration-300
                  flex items-center justify-center gap-3
                  ${status === "success" 
                    ? "bg-green-500 text-white" 
                    : "bg-cyber-green text-black hover:shadow-cyber hover:-translate-y-1"}
                `}
              >
                {status === "idle" && (
                  <>
                    <FontAwesomeIcon icon={faPaperPlane} />
                    Transmit Message
                  </>
                )}
                {status === "sending" && (
                  <span className="animate-pulse">Uploading to Mesh...</span>
                )}
                {status === "success" && (
                  <span>Transmission Successful</span>
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