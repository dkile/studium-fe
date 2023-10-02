import { useRef, useState } from "react";
import styles from "@/styles/components/TimeTable.module.sass";
import Cell, { SelectState } from "./Cell";

const DayOfTheWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const convertFloatToTime = (fl: number) => {
  const minutePerHour = 60;
  const integer = Math.trunc(fl);
  const decimalPoint = fl - integer;

  const hour = `${integer}`.padStart(2, "0");
  const minute = `${Math.trunc(minutePerHour * decimalPoint)}`.padStart(2, "0");

  return `${hour}:${minute}`;
};

type Props = {
  onChange: (data: Record<string, number[]>) => void;
  options?: {
    startTime: number;
    endTime: number;
    step: number;
  };
};

function TimeTable({
  onChange,
  options = { startTime: 0, endTime: 24, step: 1 },
}: Props) {
  const { startTime, endTime, step } = options;
  const [dragging, setDragging] = useState<boolean>(false);
  const [dragStartPoint, setDragStartPoint] = useState<[number, number]>([
    0, 0,
  ]);
  const [mode, setMode] = useState<SelectState>(SelectState.None);
  const [table, setTable] = useState<SelectState[][]>(
    Array.from(Array((endTime - startTime) / step), () =>
      Array(7).fill(SelectState.None),
    ),
  );
  const exTable = useRef<readonly SelectState[][]>([...table]);

  const tableHeads = [
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
    "일요일",
  ];

  const handleMouseDown = (point: [number, number], state: SelectState) => {
    setDragging(true);
    setDragStartPoint(point);
    setMode(
      state === SelectState.None ? SelectState.Selected : SelectState.None,
    );
    const newTable = structuredClone(table);
    newTable[point[0]][point[1]] = SelectState.ToSelect;
    setTable(newTable);
  };

  const handleMouseEnter = (point: [number, number]) => {
    if (dragging) {
      const newTable = structuredClone(table);
      const [minRow, maxRow] = [dragStartPoint[0], point[0]].sort(
        (a, b) => a - b,
      );
      const [minCol, maxCol] = [dragStartPoint[1], point[1]].sort(
        (a, b) => a - b,
      );
      for (let i = 0; i < newTable.length; i += 1) {
        for (let j = 0; j < newTable[i].length; j += 1) {
          if (i <= maxRow && i >= minRow && j <= maxCol && j >= minCol) {
            newTable[i][j] = SelectState.ToSelect;
          } else {
            newTable[i][j] = exTable.current[i][j];
          }
        }
      }
      setTable(newTable);
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
    const selected: Record<string, number[]> = Object.values(
      DayOfTheWeek,
    ).reduce(
      (prev, cur) => ({
        [cur]: [],
        ...prev,
      }),
      {},
    );
    const newTable = structuredClone(table);

    for (let i = 0; i < table.length; i += 1) {
      for (let j = 0; j < table[i].length; j += 1) {
        if (table[i][j] === SelectState.ToSelect) {
          newTable[i][j] = mode;
        }
      }
    }
    for (let i = 0; i < newTable.length; i += 1) {
      for (let j = 0; j < newTable[i].length; j += 1) {
        if (newTable[i][j] === SelectState.Selected) {
          selected[DayOfTheWeek[j]].push(startTime + step * i);
        }
      }
    }
    onChange(selected);
    setTable(newTable);
    exTable.current = newTable;
  };

  return (
    <table className={styles.timeTable}>
      <thead>
        <tr>
          {tableHeads.map((head, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <th key={i} scope="col">
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.map((tr, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <tr key={i}>
            {tr.map((td, j) => (
              <Cell
                // eslint-disable-next-line react/no-array-index-key
                key={j}
                label={convertFloatToTime(startTime + step * i)}
                state={td}
                point={[i, j]}
                handleMouseDown={handleMouseDown}
                handleMouseEnter={handleMouseEnter}
                handleMouseUp={handleMouseUp}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TimeTable.defaultProps = {
  options: {
    startTime: 0,
    endTime: 24,
    step: 1,
  },
};

export default TimeTable;
