import {
  Children,
  ForwardedRef,
  HTMLAttributes,
  LiHTMLAttributes,
  ReactElement,
  cloneElement,
  forwardRef,
} from "react";
import styles from "@/styles/components/Menu.module.sass";

export type MenuProps = HTMLAttributes<HTMLDivElement>;

export type MenuTriggerProps = {
  as: ReactElement;
  onClick: (e?: React.MouseEvent) => void;
};

export type MenuContainerProps = HTMLAttributes<HTMLUListElement>;

export type MenuItemProps = LiHTMLAttributes<HTMLLIElement>;

function Menu({ children }: MenuProps) {
  return <div className={styles.root}>{children}</div>;
}

function MenuTrigger({ as, onClick }: MenuTriggerProps) {
  const trigger = Children.only(as);

  return cloneElement(trigger, {
    onClick,
    ...trigger.props,
  });
}

const MenuContainer = forwardRef(
  (
    { className, children, ...props }: MenuContainerProps,
    ref: ForwardedRef<HTMLUListElement>,
  ) => (
    <ul ref={ref} className={`${styles.container} ${className}`} {...props}>
      {children}
    </ul>
  ),
);

function MenuItem({ children, ...props }: MenuItemProps) {
  return <li {...props}>{children}</li>;
}

function MenuDivider({ ...props }: HTMLAttributes<HTMLHRElement>) {
  return <hr {...props} />;
}

export default Object.assign(Menu, {
  Trigger: MenuTrigger,
  Container: MenuContainer,
  Item: MenuItem,
  Divider: MenuDivider,
});
