import { Study, StudyResponse, StudyByIdResponse } from "@/apis/study/types";

const createFakeStudy = (count: number): Study[] =>
  Array.from({ length: count }, (v, i) => i + 1).map(v => ({
    id: v,
    leaderId: 3,
    createdAt: "2023-07-27T14:11:37.609Z",
    updatedAt: "2023-07-27T14:11:55.526Z",
    intro: "string",
    rules: [""],
    location: "string",
    status: "RECRUITING",
    endDate: "2023-07-27T14:06:39.677Z",
    recruitEndDate: "2023-07-27T14:06:39.677Z",
    recruitStartDate: "2023-07-27T14:06:39.677Z",
    startDate: "2023-07-27T14:06:39.677Z",
    name: "string",
    tags: [
      { id: 1, label: "BE" },
      { id: 2, label: "Spring" },
    ],
    questionnaire: [{ id: 1, question: "" }],
    recruited: 0,
    recruiting: 0,
    studyTemplate: "string",
    title: "가나다라마바사",
  }));

const popularStudyListFake = createFakeStudy(12);

export const getStudyList = async (): Promise<StudyResponse> => {
  const res = await fetch(`https://api.server.d0lim.com/studium/api/v1/study`);
  if (!res.ok) {
    throw new Error("study response not ok");
  }
  const data = await res.json();

  return data;
};

export const getPopularStudyList = async (): Promise<StudyResponse> => {
  const data = await Promise.resolve(popularStudyListFake);
  return data;
};

export const getStudyById = async (id: number): Promise<StudyByIdResponse> => {
  const res = await fetch(
    `https://api.server.d0lim.com/studium/api/v1/study/${id}`,
  );
  if (!res.ok) {
    throw new Error("getStudyById response not ok");
  }
  const data = await res.json();

  return data;
};
