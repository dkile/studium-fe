import useToggle from "@/useToggle";
import { WithChildren } from "@/utils/util-types";
import {
  Children,
  HTMLAttributes,
  ReactElement,
  cloneElement,
  createContext,
  useContext,
} from "react";

type Props = WithChildren<object>;

type TriggerProps = {
  as: ReactElement;
};

type BoardProps = HTMLAttributes<HTMLDivElement>;

const CollapseContext = createContext<boolean>(false);
const CollapseActionContext = createContext<() => void>(() => {});

function CollapseBoard({ children }: Props) {
  const [popped, toggle] = useToggle();

  return (
    <CollapseContext.Provider value={popped}>
      <CollapseActionContext.Provider value={toggle}>
        {children}
      </CollapseActionContext.Provider>
    </CollapseContext.Provider>
  );
}

function Trigger({ as }: TriggerProps) {
  const toggle = useContext(CollapseActionContext);
  const trigger = Children.only(as);

  const onClick = () => {
    toggle();
  };

  return cloneElement(trigger, {
    onClick,
    ...trigger.props,
  });
}

function Board({ children }: BoardProps) {
  const open = useContext(CollapseContext);

  return open ? <div>{children}</div> : null;
}

export default Object.assign(CollapseBoard, { Trigger, Board });
