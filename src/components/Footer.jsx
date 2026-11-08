import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-black dark:bg-black light:bg-slate-900 pt-16 pb-8 px-6 border-t border-cyber-border transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Section */}
        <div className="space-y-4">
          <h2 className="text-cyber-green text-2xl font-black tracking-widest uppercase font-cyber">
            CYBER GEAR
          </h2>
          <p className="text-white/70 dark:text-white/70 light:text-slate-300 leading-relaxed text-xs font-mono">
            High-performance cyber & gaming gear engineered for gamers, creators, and professionals demanding zero-latency domination.
          </p>
          <div className="flex items-center gap-2 text-xs font-mono text-cyber-green">
            <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse"></span>
            ALL SECTORS ONLINE
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-cyber-green font-bold uppercase tracking-wider mb-5 text-sm font-cyber">
            Armory Sectors
          </h3>
          <ul className="space-y-2.5 font-mono text-xs">
            {[
              { name: "Full Catalog", to: "/shop" },
              { name: "Best Sellers", to: "/shop?sort=rating" },
              { name: "Flash Breaches", to: "/sales" },
              { name: "Keyboards & Switches", to: "/shop?category=Keyboard" },
              { name: "Precision Mice", to: "/shop?category=Mouse" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  className="text-white/70 dark:text-white/70 light:text-slate-300 hover:text-cyber-green transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-cyber-green font-bold uppercase tracking-wider mb-5 text-sm font-cyber">
            Tactical Support
          </h3>
          <ul className="space-y-2.5 font-mono text-xs">
            {[
              { name: "Support Center", to: "/support" },
              { name: "Hardware Warranty", to: "/support" },
              { name: "Encrypted Dispatch", to: "/support" },
              { name: "Comms Link", to: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  className="text-white/70 dark:text-white/70 light:text-slate-300 hover:text-cyber-green transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Section */}
        <div>
          <h3 className="text-cyber-green font-bold uppercase tracking-wider mb-5 text-sm font-cyber">
            Network Links
          </h3>
          <p className="text-xs text-white/50 mb-4 font-mono">Connect with the official neural community:</p>
          <div className="flex gap-4">
            {[
              { icon: faGithub, label: "GitHub", href: "https://github.com" },
              { icon: faTwitter, label: "Twitter", href: "https://twitter.com" },
              { icon: faInstagram, label: "Instagram", href: "https://instagram.com" },
              { icon: faLinkedin, label: "LinkedIn", href: "https://linkedin.com" },
              { icon: faWhatsapp, label: "WhatsApp", href: "https://whatsapp.com" },
            ].map((soc) => (
              <a
                key={soc.label}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={soc.label}
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-cyber-green hover:border-cyber-green/50 hover:-translate-y-1 transition-all duration-300"
              >
                <FontAwesomeIcon icon={soc.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Bottom */}
      <div className="mt-14 pt-6 border-t border-white/10 text-center font-mono">
        <p className="text-white/40 text-[11px] uppercase tracking-widest">
          © {new Date().getFullYear()} Cyber Gear Shop. All tactical rights reserved.
          <span className="mx-2">|</span>
          Engineered by{" "}
          <a
            href="https://david-coder-56.github.io/cyber-hybrid-portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyber-green font-bold hover:underline"
          >
            Cyber Hybrid
          </a>
        </p>
      </div>
    </footer>
  );
}
