import {
  OnFireStudyResponse,
  StudyResponse,
  StudyByIdResponse,
  StudyJournalListResponse,
  StudyNoticeResponse,
  studyResponseSchema,
  onFireStudyResponseSchema,
  studyByIdResponseSchema,
  studyJournalListResponseSchema,
  studyNoticeResponseSchema,
} from "@/apis/study/schema";
// eslint-disable-next-line import/no-cycle
import { StudyForm } from "@/pages/study/new";
import appAxios from "../appAxios";

export const fetchStudyList = async (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  sort = "update",
): Promise<StudyResponse> => {
  const { data } = await appAxios().get("/study");
  const validatedData = studyResponseSchema.parse(data);

  return validatedData;
};

export const fetchOnFireStudyList = async (): Promise<OnFireStudyResponse> => {
  const { data } = await appAxios().get("/study/on-fire");
  const validatedData = onFireStudyResponseSchema.parse(data);

  return validatedData;
};

export const fetchStudyById = async (
  id: number,
): Promise<StudyByIdResponse> => {
  const { data } = await appAxios().get(`/study/${id}`);
  const validatedData = studyByIdResponseSchema.parse(data);

  return validatedData;
};

export const fetchStudyJournalList = async (
  id: number,
): Promise<StudyJournalListResponse> => {
  const { data } = await appAxios().get(`/study/${id}/journals`);
  const validatedData = studyJournalListResponseSchema.parse(data);

  return validatedData;
};

export const fetchStudyNotice = async (
  id: number,
): Promise<StudyNoticeResponse> => {
  const { data } = await appAxios().get(`/study/${id}/notices`);
  const validatedData = studyNoticeResponseSchema.parse(data);

  return validatedData;
};

export const postStudy = async (
  newStudy: StudyForm,
): Promise<StudyResponse> => {
  const { data } = await appAxios().post(`/study`, newStudy);
  return data;
};
