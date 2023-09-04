import { NotFoundError } from "./error";

function handleFetchError(res: Response) {
  const { status } = res;

  if (status === 404) {
    throw new NotFoundError();
  }

  if (!res.ok) {
    throw new Error(`fetch error occured. status=${res.status}`);
  }

  return res;
}

export default async function fetchWithHandler(
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
) {
  const res = await fetch(input, init);
  const successfulRes = handleFetchError(res);

  const data = await successfulRes.json();

  return data;
}
