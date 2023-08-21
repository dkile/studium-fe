import styles from "@/styles/components/Carousel.module.sass";

import Button from "@/components/common/Button";
import Icon from "../Icon";

function CarouselSwiper() {
  const onClickNextBtn = () => {
    const carouselSnaps = Array.from(
      document.getElementsByClassName(styles.carouselSnap),
    );
    const nextFirstIndex =
      carouselSnaps
        .map(el => el.classList.contains("carouselItemInView"))
        .lastIndexOf(true) + 1;
    if (nextFirstIndex < carouselSnaps.length)
      carouselSnaps[nextFirstIndex].scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
  };

  const onClickPrevBtn = () => {
    const carouselSnaps = Array.from(
      document.getElementsByClassName(styles.carouselSnap),
    );
    const prevFirstIndex =
      carouselSnaps
        .map(el => el.classList.contains("carouselItemInView"))
        .indexOf(true) - 1;
    if (prevFirstIndex >= 0)
      carouselSnaps[prevFirstIndex].scrollIntoView({
        behavior: "smooth",
        inline: "end",
        block: "nearest",
      });
  };

  return (
    <div className={styles.carouselControl}>
      <Button
        type="button"
        data-swipe-direction="left"
        onClick={onClickPrevBtn}
        className={styles.carouselSwipe}
      >
        <Icon name="arrow-head-left" />
      </Button>
      <Button
        type="button"
        data-swipe-direction="right"
        onClick={onClickNextBtn}
        className={styles.carouselSwipe}
      >
        <Icon name="arrow-head-right" />
      </Button>
    </div>
  );
}

export default CarouselSwiper;
