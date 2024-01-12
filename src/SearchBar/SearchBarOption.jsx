import styles from "./SearchBar.module.css";
const SearchBarOptionsTotalData = ({ item }) => {
  return (
    <a>
      <li className={styles["input-options-list"]}>
        <div className={styles["mini-container"]}>
          <img src={item.image}></img>
          <h3>{item.title}</h3>
        </div>

        <p>{item.follows} Follows</p>
      </li>
    </a>
  );
};

export default SearchBarOptionsTotalData;
