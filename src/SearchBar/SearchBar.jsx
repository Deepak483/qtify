import { useRef, useState, useEffect } from "react";
import search from "../assets/search-icon.svg";
import styles from "./SearchBar.module.css";
import SearchBarOption from "./SearchBarOption.jsx";

const SearchBar = ({ placeholder, totalData }) => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [showData, setShowData] = useState(false);
  const [filteredData, setFilteredData] = useState(totalData);
  const inputRef = useRef(null);

  const handleFocus = () => setShowData(true);
  const handleBlur = () => setShowData(false);
  const handleSubmit = (e) => e.preventDefault();
  const handleChange = (e) => setSearchQuery(e.target.value);

  useEffect(() => {
    const updatedData = totalData.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(updatedData);
  }, [searchQuery]);

  return (
    <form className={styles["search-container"]} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={placeholder}
        className="SearchField"
        required
        value={searchQuery}
        onChange={handleChange}
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {showData && (
        <ul
          style={{
            height: Math.min("25rem", filteredData.length * 2.5 + "rem"),
          }}
          id={styles["input-options"]}
          className="scrollable-container"
        >
          {filteredData.map((item) => (
            <SearchBarOption item={item} />
          ))}
        </ul>
      )}
      <button type="submit" className={styles["searchIcon"]}>
        <img src={search} alt="Search" />
      </button>
    </form>
  );
};

export default SearchBar;
