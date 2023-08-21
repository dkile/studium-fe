import { OnFireStudyList, StudyResponse } from "@/apis/home/types";

export const fetchStudyList = async (): Promise<StudyResponse> => {
  const res = await fetch(`https://api.server.d0lim.com/studium/api/v1/study`);
  if (!res.ok) {
    throw new Error(`study list response not error. status-${res.status}`);
  }
  const data = await res.json();

  return data;
};

export const fetchOnFireStudyList = async (): Promise<OnFireStudyList> => {
  const res = await fetch(
    `https://api.server.d0lim.com/studium/api/v1/study/on-fire`,
  );
  if (!res.ok) {
    throw new Error(`On fire sutdy list response error. status-${res.status}`);
  }
  const data = await res.json();

  return data;
};
