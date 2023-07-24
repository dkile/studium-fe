import { ForwardedRef, forwardRef } from "react";

const Noob = forwardRef((_noob, ref: ForwardedRef<HTMLDivElement>) => (
  <div ref={ref} style={{ width: 0, height: 0 }} />
));

export default Noob;
