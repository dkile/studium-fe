import { useQuery } from "@tanstack/react-query";

export async function fetchIcon(
  name: string,
  { baseURL }: { baseURL: string },
) {
  const res = await fetch(`${baseURL}/${name}.svg`);
  const icon = await res.text();

  return icon;
}

export type IconQueryOption = {
  baseURL?: string;
};

export default function useIconQuery(name: string, options?: IconQueryOption) {
  const { baseURL } = options ?? {
    baseURL: "https://studium-fe.s3.ap-northeast-2.amazonaws.com/public/icon",
  };
  const {
    data: icon,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["icon", name],
    queryFn: () =>
      fetchIcon(name, {
        baseURL:
          baseURL ??
          "https://studium-fe.s3.ap-northeast-2.amazonaws.com/public/icon",
      }),
  });

  return { icon, isLoading, isError };
}
