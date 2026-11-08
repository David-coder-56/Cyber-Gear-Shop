import { useTheme } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative flex items-center gap-3 px-4 py-2 rounded-lg 
        text-xs font-black uppercase tracking-widest
        transition-all duration-500 overflow-hidden
        border border-cyber-border
        ${theme === "dark" 
          ? "bg-black text-cyber-green hover:shadow-cyber hover:border-cyber-green" 
          : "bg-white text-gray-800 border-gray-200 hover:shadow-lg"
        }
      `}
    >
      {/* Small status indicator dot */}
      <span className={`h-2 w-2 rounded-full animate-pulse ${theme === "dark" ? 'bg-cyber-green' : 'bg-orange-400'}`}></span>
      
      <span className="relative z-10">
        {theme === "dark" ? (
          <>
            <FontAwesomeIcon icon={faSun} className="mr-2" />
            Deactivate Stealth
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faMoon} className="mr-2" />
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