import styles from "@/styles/components/Carousel.module.sass";

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
      });
  };

  return (
    <div className={styles.carouselControl}>
      <button
        type="button"
        data-swipe-direction="left"
        onClick={onClickPrevBtn}
        className={styles.carouselSwipe}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.42Z"
          />
        </svg>
      </button>
      <button
        type="button"
        data-swipe-direction="right"
        onClick={onClickNextBtn}
        className={styles.carouselSwipe}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42Z"
          />
        </svg>
      </button>
    </div>
  );
}

export default CarouselSwiper;
