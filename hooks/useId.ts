import { useState } from "react";

let idCounter = 0;

export function generateID(prefix = "studium-id-") {
  idCounter += 1;
  return `${prefix}${idCounter}`;
}

export default function useId(prefix?: string) {
  const [id] = useState(() => generateID(prefix));

  return id;
}
