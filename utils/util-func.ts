const fetchData = async (url: string, options?: RequestInit) => {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error(`fetching data from ${url} failed`);
  const data = await res.json();

  return data;
};

export default fetchData;
