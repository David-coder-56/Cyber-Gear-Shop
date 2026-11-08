import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faTimes, 
  faBars, 
  faSearch, 
  faShoppingCart, 
  faUser,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <>
      <header className="fixed top-0 w-full h-[65px] bg-black/90 dark:bg-black/90 light:bg-white/95 backdrop-blur-md flex items-center justify-between px-5 md:px-8 z-[1000] border-b border-cyber-border dark:border-cyber-border light:border-slate-200 transition-colors">
        
        {/* Left Section: Mobile Menu Toggle */}
        <div className="flex-1 flex justify-start items-center gap-4">
          <button 
            className="text-white dark:text-white light:text-slate-900 text-xl cursor-pointer hover:text-cyber-green transition-colors p-1" 
            onClick={() => setOpen(!open)} 
            aria-label="Toggle Menu"
          >
            <FontAwesomeIcon icon={open ? faTimes : faBars} />
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-mono font-bold uppercase tracking-widest text-white/70 dark:text-white/70 light:text-slate-600">
            <Link to="/" className="hover:text-cyber-green transition-colors">Home</Link>
            <Link to="/shop" className="hover:text-cyber-green transition-colors">Shop</Link>
            <Link to="/sales" className="hover:text-red-400 text-red-500 font-bold transition-colors">Sales</Link>
            <Link to="/support" className="hover:text-cyber-green transition-colors">Support</Link>
            <Link to="/contact" className="hover:text-cyber-green transition-colors">Contact</Link>
          </nav>
        </div>

        {/* Center Section: Logo */}
        <div className="flex-1 flex justify-center items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="/assets/images/logo.png" 
              alt="Cyber Hybrid Logo" 
              className="h-8 w-auto group-hover:scale-110 transition-transform" 
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
              }}
            />
            <span className="text-cyber-green font-black tracking-[2px] text-base md:text-lg uppercase font-cyber">
              CYBER <span className="text-white dark:text-white light:text-slate-900">GEAR</span>
            </span>
          </Link>
        </div>

        {/* Right Section: Actions */}
        <div className="flex-1 flex justify-end gap-3 md:gap-5 items-center">
          
          {/* THEME TOGGLE */}
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>

          {/* Search Page Link */}
          <Link 
            to="/search" 
            aria-label="Search"
            className="text-white dark:text-white light:text-slate-800 hover:text-cyber-green transition-colors p-1 text-base"
          >
            <FontAwesomeIcon icon={faSearch} />
          </Link>
          
          {/* Profile Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setProfileOpen(!profileOpen)}
              onBlur={() => setTimeout(() => setProfileOpen(false), 250)}
              aria-label="User Profile"
              className="text-white dark:text-white light:text-slate-800 hover:text-cyber-green transition-colors p-1 text-base"
            >
              <FontAwesomeIcon icon={faUser} />
            </button>
            
            {profileOpen && (
              <div className="absolute right-0 top-full mt-2 w-52 bg-cyber-card dark:bg-cyber-card light:bg-white border border-cyber-border dark:border-cyber-border light:border-slate-200 rounded-xl p-4 shadow-cyber animate-fade-in-up z-50">
                <span className="text-[10px] font-mono text-cyber-green uppercase tracking-widest block mb-2">Neural Access</span>
                <Link to="/contact" onClick={() => setProfileOpen(false)} className="block text-white dark:text-white light:text-slate-900 hover:text-cyber-green text-xs mb-2.5 font-bold font-mono">
                  CONTACT ARMORY
                </Link>
                <Link to="/support" onClick={() => setProfileOpen(false)} className="block text-white dark:text-white light:text-slate-900 hover:text-cyber-green text-xs mb-2.5 font-bold font-mono">
                  SUPPORT CENTER
                </Link>
                <div className="h-px bg-cyber-border my-2"></div>
                <div className="text-[11px] text-white/50 dark:text-white/50 light:text-slate-500 font-mono">
                  Guest Operative
                </div>
              </div>
            )}
          </div>

          {/* Dynamic Cart Drawer Trigger */}
          <button 
            onClick={() => setIsCartOpen(true)}
            aria-label="Open cart"
            className="relative text-white dark:text-white light:text-slate-800 hover:text-cyber-green transition-colors p-1 text-base group"
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-cyber-green text-black text-[10px] font-black px-1.5 py-0.2 rounded-full shadow-[0_0_10px_#00ff9c] font-mono">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </button>
        </div>

        {/* SIDE NAVIGATION DRAWER */}
        <div
          className={`
            fixed top-[65px] left-0 h-[calc(100vh-65px)] w-full sm:w-80
            bg-cyber-card/95 dark:bg-cyber-card/95 light:bg-white/95 backdrop-blur-xl
            border-r border-cyber-border dark:border-cyber-border light:border-slate-200
            transition-transform duration-300 z-[999] p-6 flex flex-col justify-between
            ${open ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <div className="space-y-4">
            <span className="text-[10px] font-mono text-cyber-green uppercase tracking-[0.25em] block">
              Navigation Sector
            </span>

            <nav className="flex flex-col space-y-3 font-cyber text-sm tracking-wider">
              {[
                { name: "Armory Home", to: "/" },
                { name: "Hardware Catalog", to: "/shop" },
                { name: "Breach Sales", to: "/sales", badge: "Live" },
                { name: "Support Hub", to: "/support" },
                { name: "Comms Link", to: "/contact" },
                { name: "Search Terminal", to: "/search" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between text-white dark:text-white light:text-slate-900 hover:text-cyber-green py-2 border-b border-cyber-border/40 transition-colors uppercase"
                >
                  <span>{link.name}</span>
                  {link.badge ? (
                    <span className="bg-red-500 text-white text-[9px] px-2 py-0.5 rounded font-mono font-bold">
                      {link.badge}
                    </span>
                  ) : (
                    <FontAwesomeIcon icon={faArrowRight} className="text-white/20 text-xs" />
                  )}
                </Link>
              ))}
            </nav>
          </div>

          {/* Mobile Theme Toggle inside Side Nav */}
          <div className="pt-6 border-t border-cyber-border sm:hidden flex justify-between items-center">
            <span className="text-xs font-mono text-white/50">Interface Scheme</span>
            <ThemeToggle />
          </div>
        </div>
        
        {/* Background Overlay */}
        {open && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[998] mt-[65px]" 
            onClick={() => setOpen(false)}
          />
        )}
      </header>
    </>
  );
}
