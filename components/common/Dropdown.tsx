import { ReactElement, useState } from "react";
import { generateID } from "@/hooks/useId";
import styles from "@/styles/components/Dropdown.module.sass";
import Menu from "./Menu";
import Button from "./Button";

export type DropdownItem<T = string> = (
  | { icon?: ReactElement; label: T | ReactElement }
  | { icon: ReactElement; label?: T | ReactElement }
) & { value: string | number };

export type DropdownProps = {
  trigger: ReactElement;
  items: DropdownItem[];
  selected: DropdownItem;
  onChange: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};

function Dropdown({ trigger, items, selected, onChange }: DropdownProps) {
  const [pop, setPop] = useState(false);
  const open = () => {
    if (pop === false) {
      setPop(true);
    }
  };

  const close = () => {
    if (pop === true) {
      setPop(false);
    }
  };

  const onClickTrigger = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    open();
  };

  const onClickItem = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      e.stopPropagation();
    }
    close();
    onChange(e);
  };

  return (
    <Menu>
      <Menu.Trigger as={trigger} onClick={onClickTrigger} />
      {pop !== false ? (
        <Menu.Container className={styles.dropdownContainer}>
          <Menu.Item>
            <Button
              value={selected.value}
              onClick={onClickItem}
              className={styles.dropdownItem}
              autoFocus
            >
              {selected.icon}
              {selected.label}
            </Button>
          </Menu.Item>
          {items
            .filter(item => item.value !== selected.value)
            .map(item => (
              <Menu.Item key={generateID("studium-dropdown")}>
                <Button value={item.value} onClick={onClickItem}>
                  {item.icon !== undefined ? item.icon : null}
                  {item.label !== undefined ? item.label : null}
                </Button>
              </Menu.Item>
            ))}
        </Menu.Container>
      ) : null}
    </Menu>
  );
}

export default Dropdown;
