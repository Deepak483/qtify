import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";

const Navbar = ({ totalData }) => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <SearchBar
        placeholder={`Search a album of your choice`}
        totalData={totalData}
      />
      <Button> Give Feedback </Button>
    </nav>
  );
};

export default Navbar;
