import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHeadset, faTruck, faRotateLeft, faShieldHalved, 
  faChevronDown, faEnvelope, faMessage, faTimes, faPaperPlane 
} from "@fortawesome/free-solid-svg-icons";

export default function Support() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [filterCategory, setFilterCategory] = useState("all");
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: "droid", text: "Greetings Operative. Support Droid-7 online. How may I assist your armory setup?" }
  ]);
  const [chatInput, setChatInput] = useState("");

  const faqs = [
    {
      category: "shipping",
      q: "How do I track my cyber gear deployment?",
      a: "Once your order is processed, a tracking link will be sent to your encrypted email coordinate. You can also monitor status in your User Dashboard under 'Active Deployments'."
    },
    {
      category: "warranty",
      q: "What is the warranty coverage on Mechanical Keyboards?",
      a: "All our keyboards come with a 2-year 'Cyber-Shield' warranty covering switch failures, RGB LED malfunctions, and PCB defects."
    },
    {
      category: "shipping",
      q: "Do you ship to international sectors?",
      a: "Affirmative. We ship globally with quantum-tracked couriers. Delivery times usually range from 3-7 business days."
    },
    {
      category: "returns",
      q: "How do I initiate a hardware return?",
      a: "Returns are accepted within 30 days of arrival. Gear must be in factory condition. Access our Return Portal to generate an instant shipping label."
    },
    {
      category: "tech",
      q: "Are the wireless mice compatible with macOS and Linux?",
      a: "Yes. All our mice feature onboard memory profiles. Settings programmed on any PC persist seamlessly across macOS, Linux, and Windows."
    }
  ];

  const filteredFaqs = filterCategory === "all" 
    ? faqs 
    : faqs.filter(f => f.category === filterCategory);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput;
    setChatMessages(prev => [...prev, { sender: "user", text: userText }]);
    setChatInput("");

    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        { sender: "droid", text: "Telemetry logged. A human engineer or dispatch droid is reviewing your inquiry." }
      ]);
    }, 1000);
  };

  return (
    <div className="bg-slate-50 dark:bg-cyber-bg min-h-screen pt-24 pb-20 px-6 bg-cyber-grid">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-14">
          <span className="text-cyber-green text-xs font-mono uppercase tracking-[0.3em] block mb-2 font-bold">
            Assistance Array // Direct Link
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase font-cyber tracking-tight">
            Support <span className="text-cyber-green">Hub</span>
          </h1>
          <p className="text-slate-600 dark:text-white/60 mt-3 max-w-xl mx-auto font-mono text-xs md:text-sm">
            Technical diagnostics, logistics tracking, and hardware shield claims.
          </p>
        </div>

        {/* Support Grid Cards (Clickable Category Filters) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { id: "shipping", icon: faTruck, label: "Shipping", text: "Track Deployment" },
            { id: "returns", icon: faRotateLeft, label: "Returns", text: "Hardware Reset" },
            { id: "warranty", icon: faShieldHalved, label: "Warranty", text: "System Shield" },
            { id: "tech", icon: faHeadset, label: "Tech Specs", text: "Hardware Manuals" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilterCategory(filterCategory === item.id ? "all" : item.id)}
              className={`
                p-6 rounded-2xl text-center transition-all cursor-pointer border
                ${filterCategory === item.id 
                  ? "bg-cyber-green/10 border-cyber-green shadow-cyber" 
                  : "bg-white dark:bg-cyber-card border-slate-200 dark:border-cyber-border hover:border-cyber-green/50 hover:-translate-y-1 shadow-sm"}
              `}
            >
              <FontAwesomeIcon icon={item.icon} className="text-cyber-green text-2xl mb-3" />
              <h3 className="text-slate-900 dark:text-white font-bold uppercase tracking-wider text-xs font-cyber">{item.label}</h3>
              <p className="text-slate-500 dark:text-white/40 text-[11px] font-mono mt-1">{item.text}</p>
            </button>
          ))}
        </div>

        {/* FAQ Accordion Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase font-cyber flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse"></span>
                Knowledge Base {filterCategory !== "all" && `(${filterCategory.toUpperCase()})`}
              </h2>
              {filterCategory !== "all" && (
                <button
                  onClick={() => setFilterCategory("all")}
                  className="text-xs text-cyber-green font-mono uppercase underline"
                >
                  Show All
                </button>
              )}
            </div>
            
            <div className="space-y-3">
              {filteredFaqs.map((faq, index) => (
                <div key={index} className="border border-slate-200 dark:border-cyber-border rounded-xl overflow-hidden bg-white dark:bg-cyber-card shadow-sm">
                  <button 
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    className="w-full p-5 flex justify-between items-center text-left hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                  >
                    <span className="text-slate-900 dark:text-white font-bold text-sm pr-4 font-mono">{faq.q}</span>
                    <FontAwesomeIcon 
                      icon={faChevronDown} 
                      className={`text-cyber-green transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  {activeIndex === index && (
                    <div className="p-5 pt-0 border-t border-slate-200 dark:border-cyber-border/40 animate-fade-in-up">
                      <p className="text-slate-600 dark:text-white/70 text-xs font-mono leading-relaxed mt-3">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Sidebar */}
          <div className="space-y-6">
            <div className="bg-cyber-green p-8 rounded-3xl text-black">
              <h3 className="text-xl font-black uppercase font-cyber leading-tight mb-2">Need Direct Comms?</h3>
              <p className="text-xs font-mono font-bold mb-6 opacity-85">Our support squad responds within 2 hours.</p>
              
              <div className="space-y-3">
                <a href="mailto:support@cybergear.shop" className="flex items-center gap-3 bg-black/15 p-3 rounded-xl hover:bg-black/25 transition-all text-xs font-bold font-mono">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>support@cybergear.shop</span>
                </a>
                
                <button 
                  onClick={() => setChatOpen(true)}
                  className="w-full flex items-center justify-center gap-2 bg-black text-cyber-green p-3 rounded-xl font-cyber uppercase tracking-wider text-xs hover:brightness-125 transition-all"
                >
                  <FontAwesomeIcon icon={faMessage} />
                  Start Neural Chat
                </button>
              </div>
            </div>

            <div className="border border-slate-200 dark:border-cyber-border p-6 rounded-2xl bg-white dark:bg-cyber-card/60 shadow-sm">
              <h4 className="text-slate-900 dark:text-white font-bold text-xs uppercase font-cyber tracking-wider mb-2">Comms Windows</h4>
              <p className="text-slate-600 dark:text-white/60 text-xs font-mono">MON - FRI: 08:00 - 20:00 UTC</p>
              <p className="text-slate-600 dark:text-white/60 text-xs font-mono">SAT - SUN: 10:00 - 16:00 UTC</p>
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Live Chat Modal */}
      {chatOpen && (
        <div className="fixed bottom-6 right-6 z-[3000] w-full max-w-sm bg-white/95 dark:bg-black/95 border border-cyber-green rounded-2xl shadow-2xl dark:shadow-cyber overflow-hidden animate-fade-in-up">
          <div className="p-4 bg-slate-100 dark:bg-cyber-card border-b border-slate-200 dark:border-cyber-border flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyber-green animate-ping"></span>
              <span className="font-cyber text-xs uppercase text-slate-900 dark:text-white font-bold">Droid-7 Support Link</span>
            </div>
            <button onClick={() => setChatOpen(false)} className="text-slate-500 hover:text-slate-900 dark:text-white/50 dark:hover:text-white">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          <div className="h-64 p-4 overflow-y-auto space-y-3 no-scrollbar text-xs font-mono">
            {chatMessages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] p-3 rounded-xl ${msg.sender === "user" ? "bg-cyber-green text-black font-bold" : "bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white"}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-200 dark:border-cyber-border flex gap-2">
            <input
              type="text"
              placeholder="Type message..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              className="flex-1 bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-lg px-3 py-2 text-xs font-mono text-slate-900 dark:text-white outline-none focus:border-cyber-green"
            />
            <button type="submit" className="bg-cyber-green text-black px-4 py-2 rounded-lg font-bold text-xs">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
