import styles from "@/styles/components/TimeTable.module.sass";

export enum SelectState {
  "None" = 0,
  "ToSelect",
  "Selected",
}

type CellProps = {
  label: string;
  state: SelectState;
  point: [number, number];
  handleMouseDown: (point: [number, number], state: SelectState) => void;
  handleMouseEnter: (point: [number, number]) => void;
  handleMouseUp: (point: [number, number]) => void;
};

// on, off state
// on trigger event: mousedown,
function Cell({
  label,
  state,
  point,
  handleMouseDown,
  handleMouseEnter,
  handleMouseUp,
}: CellProps) {
  const onMouseDown = (e: React.MouseEvent<HTMLTableDataCellElement>) => {
    e.stopPropagation();
    handleMouseDown(point, state);
  };

  const onMouseEnter = (e: React.MouseEvent<HTMLTableDataCellElement>) => {
    e.stopPropagation();
    handleMouseEnter(point);
  };

  const onMouseUp = (e: React.MouseEvent<HTMLTableDataCellElement>) => {
    e.stopPropagation();
    handleMouseUp(point);
  };

  return (
    <td
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      onMouseUp={onMouseUp}
      data-state={state}
      className={styles.cell}
    >
      {label}
    </td>
  );
}

export default Cell;
