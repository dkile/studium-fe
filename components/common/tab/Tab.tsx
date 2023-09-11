import {
  Children,
  HTMLAttributes,
  ReactElement,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

const initialIndex = 0;

const TabContext = createContext<number>(initialIndex);
const TabActionContext = createContext<Record<string, (index: number) => void>>(
  {},
);

export type TabProps = HTMLAttributes<HTMLElement>;

function Tab({ children }: TabProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);

  const handleTabIndex = (index: number) => {
    setCurrentIndex(index);
  };

  const tabActions = useMemo(
    () => ({
      handleTabIndex,
    }),
    [],
  );

  return (
    <TabContext.Provider value={currentIndex}>
      <TabActionContext.Provider value={tabActions}>
        {children}
      </TabActionContext.Provider>
    </TabContext.Provider>
  );
}

export type TabMenusProps = HTMLAttributes<HTMLDivElement>;

function Menus({ children, ...props }: TabMenusProps) {
  return <div {...props}>{children}</div>;
}

export type TabMenuProps = {
  index: number;
  onClickTabMenu?: () => void;
} & HTMLAttributes<HTMLElement>;

function Menu({ index, children, onClickTabMenu, ...props }: TabMenuProps) {
  const { handleTabIndex } = useContext(TabActionContext);
  const currentIndex = useContext(TabContext);
  let isSelected = false;

  if (currentIndex === index) {
    isSelected = true;
  }

  const handleClickTabMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    handleTabIndex(index);
    if (onClickTabMenu) {
      onClickTabMenu();
    }
  };

  return (
    <button
      type="button"
      onClick={handleClickTabMenu}
      data-selected={isSelected}
      {...props}
    >
      {children}
    </button>
  );
}

export type TabPanelsProps = {
  children: ReactElement[];
} & HTMLAttributes<HTMLDivElement>;

function Panels({ children, ...props }: TabPanelsProps) {
  const currentIndex = useContext(TabContext);
  const currentPanel = Children.toArray(children).filter(
    child => (child as ReactElement).props.index === currentIndex,
  );

  return <div {...props}>{currentPanel}</div>;
}

export type TabPanelProps = {
  index: number;
} & HTMLAttributes<HTMLDivElement>;

function Panel({ index, children, ...props }: TabPanelProps) {
  return <div {...props}>{children}</div>;
}

export default Object.assign(Tab, {
  Menus,
  Menu,
  Panels,
  Panel,
});

Menu.defaultProps = {
  onClickTabMenu: () => {},
};
