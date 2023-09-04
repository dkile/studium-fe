import {
  OnFireStudyResponse,
  StudyResponse,
  StudyByIdResponse,
} from "@/apis/study/types";
import fetchWithHandler from "../fetch";

export const fetchStudyList = async (
  sort = "update",
): Promise<StudyResponse> => {
  const data = await fetchWithHandler(
    `https://api.server.d0lim.com/studium/api/v1/study`,
  );

  return data;
};

export const fetchOnFireStudyList = async (): Promise<OnFireStudyResponse> => {
  const data = await fetchWithHandler(
    `https://api.server.d0lim.com/studium/api/v1/study/on-fire`,
  );

  return data;
};

export const getStudyById = async (id: number): Promise<StudyByIdResponse> => {
  const data = await fetchWithHandler(
    `https://api.server.d0lim.com/studium/api/v1/study/${id}`,
  );

  return data;
};
