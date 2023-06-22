import styles from "@/styles/components/Carousel.module.sass";
import { WithChildren } from "@/utils/util-types";

type CarouselItemProps = WithChildren<object>;

function CarouselItem({ children }: CarouselItemProps) {
  return <li className={styles.carouselSnap}>{children}</li>;
}

export default CarouselItem;
