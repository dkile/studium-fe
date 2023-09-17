import useIconQuery from "@/queries/useIconQuery";
import { HTMLAttributes } from "react";

interface Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  name: string;
}

function Icon({ name, ...props }: Props) {
  const { icon, isLoading } = useIconQuery(name);

  if (isLoading) {
    return <div {...props} />;
  }

  return (
    <span
      dangerouslySetInnerHTML={
        icon
          ? {
              __html: icon,
            }
          : undefined
      }
      {...props}
    />
  );
}

export default Icon;
