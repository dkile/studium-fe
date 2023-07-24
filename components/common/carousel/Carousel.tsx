import styles from "@/styles/components/Carousel.module.sass";
import { LiHTMLAttributes, useEffect, useRef } from "react";
import { WithChildren } from "@/utils/util-types";
import CarouselSwiper from "./CarouselSwiper";

export type CarouselProps = WithChildren<{
  showSwiper?: boolean;
}>;

function Carousel({ showSwiper = false, children }: CarouselProps) {
  const carouselScrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(({ isIntersecting, target }) => {
          if (isIntersecting) {
            target.classList.add("carouselItemInView");
            // target.setAttribute("tabIndex", "0");
          } else {
            target.classList.remove("carouselItemInView");
            // target.setAttribute("tabIndex", "-1");
          }
        });
      },
      {
        root: carouselScrollerRef.current,
        threshold: 1,
      },
    );
    Array.from(document.getElementsByClassName(styles.carouselSnap)).forEach(
      el => intersectionObserver.observe(el),
    );

    return () => {
      intersectionObserver.disconnect();
    };
  }, []);

  return (
    <div className={styles.carousel}>
      {showSwiper && <CarouselSwiper />}
      <ul ref={carouselScrollerRef} className={styles.carouselScroller}>
        {children}
      </ul>
    </div>
  );
}

export type CarouselItemProps = LiHTMLAttributes<HTMLLIElement>;

function CarouselItem({ children, ...props }: CarouselItemProps) {
  return (
    <li className={styles.carouselSnap} {...props}>
      {children}
    </li>
  );
}

Carousel.Item = CarouselItem;

export default Carousel;
