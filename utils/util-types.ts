import { ReactNode } from "react";

export type WithChildren<T = Record<string, unknown>> = T & {
  children: ReactNode | ReactNode[] | JSX.Element | JSX.Element[];
};
