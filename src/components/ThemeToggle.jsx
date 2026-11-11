import { useTheme } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg 
        text-xs font-black uppercase tracking-wider
        transition-all duration-300 overflow-hidden
        ${theme === "dark" 
          ? "bg-black text-cyber-green border border-cyber-border hover:shadow-cyber hover:border-cyber-green" 
          : "bg-slate-100 text-slate-800 border border-slate-300 hover:border-slate-400 hover:shadow-md"
        }
      `}
    >
      {/* Small status indicator dot */}
      <span className={`h-2 w-2 rounded-full animate-pulse ${theme === "dark" ? 'bg-cyber-green' : 'bg-amber-500'}`}></span>
      
      <span className="relative z-10 font-mono text-[11px]">
        {theme === "dark" ? (
          <>
            <FontAwesomeIcon icon={faSun} className="mr-1.5 text-cyber-green" />
            Deactivate Stealth
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faMoon} className="mr-1.5 text-amber-500" />
            Engage Neon
          </>
        )}
      </span>

      {/* Background glitch effect on hover (Dark mode only) */}
      {theme === "dark" && (
        <div className="absolute inset-0 bg-cyber-green/5 opacity-0 hover:opacity-100 transition-opacity pointer-events-none"></div>
      )}
    </button>
  );
};

export default ThemeToggle;