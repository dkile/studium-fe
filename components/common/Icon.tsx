import { HTMLAttributes, useEffect, useState } from "react";

interface Props extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  name: string;
}

export async function fetchIcon(
  name: string,
  { baseUrl }: { baseUrl: string },
) {
  const res = await fetch(`${baseUrl}/${name}.svg`);
  const icon = await res.text();

  return icon;
}

function Icon({ name, ...props }: Props) {
  const [icon, setIcon] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getIcon = async () => {
      const svg = await fetchIcon(name, {
        baseUrl:
          "https://studium-fe.s3.ap-northeast-2.amazonaws.com/public/icon",
      });
      setIcon(svg);
    };
    getIcon();
    setIsLoading(false);
  }, [name]);

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
