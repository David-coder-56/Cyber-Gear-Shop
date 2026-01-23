import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Welcome to the network, ${email}!`);
    setEmail("");
  };

  return (
    <section className="bg-[radial-gradient(circle_at_top,_#0f0f0f,_#000)] py-20 px-5 text-center">
      <div className="max-w-[600px] mx-auto bg-[#0b0b0b] p-10 md:p-16 rounded-[18px] shadow-[0_0_40px_rgba(0,255,156,0.15)] border border-white/5">
        
        <h2 className="text-cyber-green text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">
          Join the <span className="text-white">Cyber Community</span>
        </h2>
        
        <p className="text-white/85 text-base md:text-lg mb-8 leading-relaxed">
          Be the first to know about new gear, exclusive drops,
          discounts, and cyber tech insights.
        </p>

        <form 
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row gap-3 mb-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 bg-[#111] text-white border-none outline-none p-4 rounded-lg focus:ring-2 focus:ring-cyber-green/50 transition-all placeholder:text-gray-600"
          />
          <button 
            type="submit" 
            className="bg-cyber-green text-black font-black uppercase px-8 py-4 rounded-lg transition-all hover:-translate-y-1 hover:shadow-cyber whitespace-nowrap"
          >
            Join Now
          </button>
        </form>

        <small className="text-white/40 text-xs uppercase tracking-widest">
          No spam. Unsubscribe anytime.
        </small>
      </div>
    </section>
  );
}