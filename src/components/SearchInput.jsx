import { useRef, useState } from "react";

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleIconClick = () => {
    inputRef.current.focus();
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    if (query.length === 0) {
      setIsFocused(false);
    }
  };
  
  return (
    <div id="search" className="relative">
      {!isFocused && query.length === 0 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#000"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
          onClick={handleIconClick}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      )}
      <input
        id="searchInput"
        ref={inputRef}
        className={`w-96 ${
          isFocused || query.length ? "ps-2" : "ps-10"
        } pr-3 h-10 py-2 bg-transparent placeholder:text-slate-500 text-slate-700 border border-slate-500 rounded-xl focus:outline-none focus:border-slate-700 hover:border-slate-700`}
        placeholder="Search by Writes/Title"
        value={query}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </div>
  );
}
