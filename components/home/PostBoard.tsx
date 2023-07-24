import styles from "@/styles/pages/Home.module.sass";
import { HTMLAttributes, ReactNode } from "react";

type Props = {
  title: string;
  addon?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

function PostBoard({ title, addon, className, children }: Props) {
  return (
    <div className={`${styles.postBoard} ${className}`}>
      <header>
        <h2>{title}</h2>
        {addon}
      </header>
      <div>{children}</div>
    </div>
  );
}

PostBoard.defaultProps = {
  addon: null,
};

export default PostBoard;
