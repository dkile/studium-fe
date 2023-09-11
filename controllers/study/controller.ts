import { fetchStudyById, fetchStudyNotice } from "@/apis/study/api";
import {
  resolveStudyApply,
  resolveStudyDetail,
  resolveStudyNotice,
} from "./resolver";
import { StudyApply, StudyDetail, StudyRunning } from "./types";

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

export const getStudyRunning = async (
  studyId: number,
): Promise<StudyRunning> => {
  const [study, notice] = await Promise.all([
    fetchStudyById(studyId),
    fetchStudyNotice(studyId),
  ]);

  const resolvedStudy = resolveStudyDetail(study);
  const resolvedNotice = resolveStudyNotice(notice);

  return Object.assign(resolvedStudy, {
    notice: resolvedNotice,
  });
};
