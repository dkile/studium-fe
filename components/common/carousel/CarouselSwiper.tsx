import styles from "@/styles/components/Carousel.module.sass";

import Prev from "@/components/common/icon/Prev";
import Next from "@/components/common/icon/Next";
import Button from "@/components/common/Button";

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
        <Prev />
      </Button>
      <Button
        type="button"
        data-swipe-direction="right"
        onClick={onClickNextBtn}
        className={styles.carouselSwipe}
      >
        <Next />
      </Button>
    </div>
  );
}

export default CarouselSwiper;
