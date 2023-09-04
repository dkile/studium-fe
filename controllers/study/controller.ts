import { fetchStudyById } from "@/apis/study/api";
import { resolveStudyApply, resolveStudyDetail } from "./resolver";
import { StudyApply, StudyDetail } from "./types";

export const getStudyDetail = async (studyId: number): Promise<StudyDetail> => {
  const [study] = await Promise.all([fetchStudyById(studyId)]);

  const resolvedStudyDetail = resolveStudyDetail(study);

  return resolvedStudyDetail;
};

export const getStudyApply = async (studyId: number): Promise<StudyApply> => {
  const [study] = await Promise.all([fetchStudyById(studyId)]);

  const resolvedStudyApply = resolveStudyApply(study);

  return resolvedStudyApply;
};
