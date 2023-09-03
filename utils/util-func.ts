export const fetchData = async (url: string, options?: RequestInit) => {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error(`fetching data from ${url} failed`);
  const data = await res.json();

  return data;
};

export const calculateDateDiff = (before: Date, after: Date) => {
  const SEC_IN_MSEC = 1000;
  const MINUTE_IN_MSEC = SEC_IN_MSEC * 60;
  const HOUR_IN_MSEC = MINUTE_IN_MSEC * 60;
  const DAY_IN_MSEC = HOUR_IN_MSEC * 24;

  const diffInMSec = after.getTime() - before.getTime();

  const dayDiff = Math.trunc(diffInMSec / DAY_IN_MSEC);
  const hourDiff = Math.trunc(
    (diffInMSec - dayDiff * DAY_IN_MSEC) / HOUR_IN_MSEC,
  );
  const minuteDiff = Math.trunc(
    (diffInMSec - dayDiff * DAY_IN_MSEC - hourDiff * HOUR_IN_MSEC) /
      MINUTE_IN_MSEC,
  );
  const secondDiff = Math.trunc(
    (diffInMSec -
      dayDiff * DAY_IN_MSEC -
      hourDiff * HOUR_IN_MSEC -
      minuteDiff * MINUTE_IN_MSEC) /
      SEC_IN_MSEC,
  );

  return {
    day: dayDiff,
    hour: hourDiff,
    minute: minuteDiff,
    second: secondDiff,
  }; 
}

export const convertDateToObj = (date: Date) => ({
  year: date.getFullYear(),
  month: date.getMonth(),
  day: date.getDate(),
  hour: date.getHours(),
  minute: date.getMinutes(),
  second: date.getSeconds(),
});

export const convertDateToFormat = (
  date: Date,
  format: "yyyy.mm.dd" | "yyyy-mm-dd" = "yyyy.mm.dd",
) => {
  const { year, month, day } = convertDateToObj(date);

  switch (format) {
    case "yyyy.mm.dd":
      return `${year}.${month}.${day}`;
    case "yyyy-mm-dd":
      return `${year}-${month}-${day}`;
    default:
      throw new Error("convertDateToFormat format error");
  }
};

export const extractTimeInFormat = (
  date: Date,
  format: "hh:mm:ss" = "hh:mm:ss",
) => {
  const { hour, minute, second } = convertDateToObj(date);

  switch (format) {
    case "hh:mm:ss":
      return `${hour}:${minute}:${second}`;
    default:
      throw new Error("extractTimeInFormat format error");
  }
};
