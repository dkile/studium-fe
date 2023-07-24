import { HTMLAttributes, LiHTMLAttributes } from "react";
import styles from "@/styles/components/Grid.module.sass";

type GridProps = HTMLAttributes<HTMLUListElement>;

type GridItemProps = LiHTMLAttributes<HTMLLIElement>;

function Grid({ className, children, ...props }: GridProps) {
  return (
    <ul className={`${styles.grid} ${className}`} {...props}>
      {children}
    </ul>
  );
}

function GridItem({ className, children, ...props }: GridItemProps) {
  return (
    <li className={className} {...props}>
      {children}
    </li>
  );
}

export default Object.assign(Grid, {
  Item: GridItem,
});
