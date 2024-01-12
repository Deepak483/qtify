import React from "react";
import styles from "./Card.module.css";
import { Tooltip, Chip } from "@mui/material";

const Card = ({ item, type }) => {
  if (type === "songs") {
    const { title, likes, image } = item;
    return (
      <div onClick={() => setCurrentSong(item)} style={{ cursor: "pointer" }}>
        <div className={styles["card-container"]}>
          <img src={image} alt="card-image" />
          <div className={styles["card-container--body"]}>
            <Chip
              label={`${likes} Likes`}
              size="small"
              className={styles["chip"]}
            />
          </div>
        </div>

        <div className={styles["card-title"]}>{title}</div>
      </div>
    );
  }

  const { title, follows, image, songs } = item;
  return (
    <Tooltip title={`${songs?.length} songs`} placement="top" arrow>
      <>
        <div className={styles["card-container"]}>
          <img src={image} alt="card-image" />
          <div className={styles["card-container--body"]}>
            <Chip
              label={`${follows} Follows`}
              size="small"
              className={styles["chip"]}
            />
          </div>
        </div>

        <div className={styles["card-title"]}>{title}</div>
      </>
    </Tooltip>
  );
};

export default Card;
