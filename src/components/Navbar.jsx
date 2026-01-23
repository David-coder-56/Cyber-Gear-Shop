import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faTimes, 
  faBars, 
  faSearch, 
  faShoppingCart, 
  faUser 
} from "@fortawesome/free-solid-svg-icons";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <>
      <header className="fixed top-0 w-full h-[60px] bg-black dark:bg-black flex items-center justify-between px-5 z-[1000] border-b border-cyber-border">
        
        {/* Left Section: Menu Toggle */}
        <div className="flex-1 flex justify-start">
          <button 
            className="text-white text-xl cursor-pointer hover:text-cyber-green transition-colors" 
            onClick={() => setOpen(!open)} 
            aria-label="Toggle Menu"
          >
            <FontAwesomeIcon icon={open ? faTimes : faBars} />
          </button>
        </div>

        {/* Center Section: Logo */}
        <div className="flex-1 flex justify-center items-center gap-2">
          <img src="/assets/images/logo-generator Background Removed.png" alt="Cyber Hybrid Logo" className="h-8 w-auto" />
          <Link to="/" className="text-cyber-green font-black tracking-[2px] text-lg uppercase">
            CYBER <span className="text-white">GEAR SHOP</span>
          </Link>
        </div>

        {/* Right Section: Actions */}
        <div className="flex-1 flex justify-end gap-2 md:gap-5 items-center">
          
          {/* THEME TOGGLE ADDED HERE */}
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>

          {/* Search Page Link */}
          <Link to="/search" className="text-white hover:text-cyber-green transition-colors px-2">
            <FontAwesomeIcon icon={faSearch} />
          </Link>
          
          {/* Profile Dropdown */}
          <div className="relative group py-2">
            <button className="text-white hover:text-cyber-green transition-colors px-2">
              <FontAwesomeIcon icon={faUser} />
            </button>
            
            <div className="absolute right-0 top-full w-48 bg-cyber-card border border-cyber-border rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 p-4 shadow-cyber">
              <Link to="/login" className="block text-white hover:text-cyber-green text-sm mb-3 font-bold">LOG IN</Link>
              <Link to="/signup" className="block text-white hover:text-cyber-green text-sm mb-3 font-bold">SIGN UP</Link>
              <div className="h-px bg-cyber-border my-2"></div>
              <Link to="/profile" className="block text-white/50 hover:text-white text-xs">My Account</Link>
            </div>
          </div>

          {/* Dynamic Cart Link */}
          <Link to="/cart" className="relative text-white hover:text-cyber-green transition-colors group px-2">
            <FontAwesomeIcon icon={faShoppingCart} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-cyber-green text-black text-[10px] font-black px-1.5 py-0.5 rounded-full shadow-[0_0_10px_#00ff9c] animate-in zoom-in">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* SIDE NAVIGATION */}
        <nav className={`side-nav ${open ? "active" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/shop" onClick={() => setOpen(false)}>Shop</Link>
          <Link to="/sales" onClick={() => setOpen(false)}>Sales</Link>
          <Link to="/support" onClick={() => setOpen(false)}>Support</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          {/* Mobile Theme Toggle inside Side Nav */}
          <div className="mt-8 px-8 sm:hidden">
            <ThemeToggle />
          </div>
        </nav>
        
        {/* Background Overlay */}
        {open && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[998] mt-[60px]" 
            onClick={() => setOpen(false)}
          ></div>
        )}
      </header>
    </>
  );
}