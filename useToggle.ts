import { useState } from "react";

function useToggle() {
  const [on, setOn] = useState<boolean>(false);

  const toggle = () => {
    setOn(o => !o);
  };

  return [on, toggle] as const;
}

export default useToggle;
