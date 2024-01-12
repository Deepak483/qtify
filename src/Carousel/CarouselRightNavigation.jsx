import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
// CarouselLeftNavigation.jsx
import { RightArrow } from "/src/assets/RightArrowNavigation.jsx";

import styles from "./Carousel.module.css";

const CarouselRightNavagation = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);
  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsEnd(swiper.isEnd);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swiper]);
  return (
    <div className={styles.rightNavigation}>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
};

export default CarouselRightNavagation;
