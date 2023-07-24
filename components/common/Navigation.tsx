import { HTMLAttributes, LiHTMLAttributes } from "react";
import Link from "next/link";

type NavigationProps = HTMLAttributes<HTMLUListElement>;

type NavigationItemProps = {
  route: string;
} & LiHTMLAttributes<HTMLLIElement>;

function Navigation({ children, className, ...props }: NavigationProps) {
  return (
    <ul className={className} {...props}>
      {children}
    </ul>
  );
}

function NavigationItem({
  route,
  children,
  className,
  ...props
}: NavigationItemProps) {
  return (
    <Link href={route} className={className}>
      <li {...props}>{children}</li>
    </Link>
  );
}

export default Object.assign(Navigation, { Item: NavigationItem });
