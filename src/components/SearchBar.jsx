import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar({ query, setQuery, placeholder = "Search armory database..." }) {
  return (
    <div className="relative w-full max-w-md">
      <FontAwesomeIcon
        icon={faSearch}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-cyber-green text-sm pointer-events-none"
      />
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="
          w-full bg-cyber-card dark:bg-cyber-card light:bg-white
          border border-cyber-border dark:border-cyber-border light:border-slate-300
          text-white dark:text-white light:text-slate-900
          placeholder:text-white/40 dark:placeholder:text-white/40 light:placeholder:text-slate-400
          rounded-xl py-2.5 pl-11 pr-10 text-sm font-medium
          focus:border-cyber-green focus:ring-1 focus:ring-cyber-green outline-none
          transition-all duration-300 shadow-sm
        "
      />
      {query && (
        <button
          onClick={() => setQuery("")}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-xs p-1"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      )}
    </div>
  );
}
