import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHeadset, faTruck, faRotateLeft, faShieldHalved, 
  faChevronDown, faEnvelope, faMessage 
} from "@fortawesome/free-solid-svg-icons";

export default function Support() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "How do I track my cyber gear deployment?",
      a: "Once your order is processed, a tracking link will be sent to your encrypted email. You can also monitor status in your User Dashboard under 'Active Orders'."
    },
    {
      q: "What is the warranty on Mechanical Keyboards?",
      a: "All our keyboards come with a 2-year 'Cyber-Shield' warranty covering switch failures, LED malfunctions, and PCB defects."
    },
    {
      q: "Do you ship to international sectors?",
      a: "Affirmative. We ship globally. Delivery times vary by sector, usually ranging from 5-12 business days."
    },
    {
      q: "How do I initiate a hardware return?",
      a: "Returns are accepted within 30 days. Gear must be in original 'factory-new' condition. Access our Return Portal to generate a shipping label."
    }
  ];

  return (
    <div className="bg-cyber-bg min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
            Support <span className="text-cyber-green">Hub</span>
          </h1>
          <p className="text-white/60 mt-4 max-w-xl mx-auto">
            Technical issues? Logistics questions? Our support droids are standing by to assist with your loadout.
          </p>
        </div>

        {/* Support Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          {[
            { icon: faTruck, label: "Shipping", text: "Track Deployment" },
            { icon: faRotateLeft, label: "Returns", text: "Hardware Reset" },
            { icon: faShieldHalved, label: "Warranty", text: "System Shield" },
            { icon: faHeadset, label: "Tech Support", text: "Direct Link" },
          ].map((item, i) => (
            <div key={i} className="bg-cyber-card border border-cyber-border p-6 rounded-2xl text-center group hover:border-cyber-green hover:shadow-cyber transition-all cursor-pointer">
              <FontAwesomeIcon icon={item.icon} className="text-cyber-green text-3xl mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-bold uppercase tracking-widest text-sm">{item.label}</h3>
              <p className="text-white/40 text-xs mt-1">{item.text}</p>
            </div>
          ))}
        </div>

        {/* FAQ Accordion Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-8 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-cyber-green"></span>
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-cyber-border rounded-xl overflow-hidden bg-cyber-card/30">
                  <button 
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    className="w-full p-5 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="text-white font-bold pr-4">{faq.q}</span>
                    <FontAwesomeIcon 
                      icon={faChevronDown} 
                      className={`text-cyber-green transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <div className={`transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-40 p-5 pt-0 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-white/60 text-sm leading-relaxed border-t border-cyber-border/50 pt-4">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Sidebar */}
          <div className="space-y-6">
            <div className="bg-cyber-green p-8 rounded-3xl text-black">
              <h3 className="text-xl font-black uppercase leading-tight mb-4">Still Need Assistance?</h3>
              <p className="text-sm font-bold mb-6 opacity-80">Our elite support team responds to most pings within 2 hours.</p>
              
              <div className="space-y-4">
                <a href="mailto:support@cybergear.shop" className="flex items-center gap-3 bg-black/10 p-3 rounded-xl hover:bg-black/20 transition-all">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className="text-xs font-black">support@cybergear.shop</span>
                </a>
                <button className="w-full flex items-center justify-center gap-3 bg-black text-cyber-green p-3 rounded-xl hover:scale-105 transition-all">
                  <FontAwesomeIcon icon={faMessage} />
                  <span className="text-xs font-black uppercase">Start Live Chat</span>
                </button>
              </div>
            </div>

            <div className="border border-cyber-border p-6 rounded-2xl bg-cyber-card/20">
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-2">Office Hours</h4>
              <p className="text-white/50 text-xs font-mono">MON-FRI: 09:00 - 18:00 EST</p>
              <p className="text-white/50 text-xs font-mono">SAT-SUN: 10:00 - 14:00 EST</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}