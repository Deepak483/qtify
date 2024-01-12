import styles from "./Hero.module.css";
import headphone from "../assets/vibrating-headphone-1.png";

const Hero = () => {
  return (
    <div className={styles["hero-container"]}>
      <span className={styles["hero-container--text"]}>
        <p> 100 Thousand Songs, ad-free</p>
        <p> Over thousands podcast episode</p>
      </span>
      <img
        className={styles["hero-container--img"]}
        src={headphone}
        alt="headphone-image"
      />
    </div>
  );
};

export default Hero;
