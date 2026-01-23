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
    <footer className="bg-black pt-16 pb-6 px-6 border-t border-[#111]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div className="space-y-4">
          <h2 className="text-cyber-green text-2xl font-black tracking-widest uppercase">
            CYBER GEAR
          </h2>
          <p className="text-white/70 leading-relaxed text-sm">
            High-performance cyber & gaming gear built for gamers, creators, and
            professionals.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-cyber-green font-bold uppercase tracking-wider mb-5">
            Shop
          </h3>
          <ul className="space-y-3">
            {["Products", "Best Sellers", "Latest Gear", "Accessories"].map(
              (item) => (
                <li key={item}>
                  <Link
                    to="/shop"
                    className="text-white/70 hover:text-cyber-green transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-cyber-green font-bold uppercase tracking-wider mb-5">
            Support
          </h3>
          <ul className="space-y-3">
            {["Help Center", "Warranty", "Shipping", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to="/support"
                  className="text-white/70 hover:text-cyber-green transition-colors text-sm"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Section */}
        <div>
          <h3 className="text-cyber-green font-bold uppercase tracking-wider mb-5">
            Connect
          </h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-xl text-white hover:text-cyber-green hover:-translate-y-1 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="#"
              className="text-xl text-white hover:text-cyber-green hover:-translate-y-1 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="#"
              className="text-xl text-white hover:text-cyber-green hover:-translate-y-1 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="#"
              className="text-xl text-white hover:text-cyber-green hover:-translate-y-1 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="#"
              className="text-xl text-white hover:text-cyber-green hover:-translate-y-1 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bottom */}
      <div className="mt-16 pt-8 border-t border-white/5 text-center">
        <p className="text-white/40 text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} Cyber Gear Shop. All rights reserved.
          {/* Separator and Design Credit */}
          <span className="mx-2">|</span>
          Design by{""} -
          <a
            href="https://david-coder-56.github.io/cyber-hybrid-portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-white transition-colors duration-300"
          >
            Cyber Hybrid
          </a>
        </p>
      </div>
    </footer>
  );
}
