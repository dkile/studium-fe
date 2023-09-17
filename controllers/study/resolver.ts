import { convertDateToFormat, extractTimeInFormat } from "@/utils/util-func";
import { StudyByIdResponse, StudyNoticeResponse } from "@/apis/study/schema";
import { StudyApply, StudyDetail, StudyNotice } from "./types";

export const resolveStudyDetail = (study: StudyByIdResponse): StudyDetail => ({
  id: study.id,
  title: study.name,
  leader: {
    id: study.leader.id,
    nickname: study.leader.nickname,
    profileUrl:
      "https://studium-fe.s3.ap-northeast-2.amazonaws.com/public/icon/avatar.svg",
    intro: study.leader.intro,
  },
  tags: study.tags,
  rules: study.rules,
  progress: study.templateContent,
  progressPeriod: `${convertDateToFormat(
    new Date(study.startDate),
    "yyyy.mm.dd",
  )} ~ ${convertDateToFormat(new Date(study.endDate), "yyyy.mm.dd")}`,
  recruitsNumber: `${study.total}명`,
  recruitPeriod: `${convertDateToFormat(
    new Date(study.recruitEndDate),
    "yyyy.mm.dd",
  )} ${extractTimeInFormat(new Date(study.recruitEndDate), "hh:mm:ss")}까지`,
  location: study.location,
});

export const resolveStudyApply = (study: StudyByIdResponse): StudyApply => ({
  id: study.id,
  title: study.name,
  leader: {
    id: study.leader.id,
    nickname: study.leader.nickname,
    profileUrl:
      "https://studium-fe.s3.ap-northeast-2.amazonaws.com/public/icon/avatar.svg",
    intro: study.leader.intro,
  },
  tags: study.tags,
  rules: study.rules,
  progress: study.templateContent,
  progressPeriod: `${convertDateToFormat(
    new Date(study.startDate),
    "yyyy.mm.dd",
  )} ~ ${convertDateToFormat(new Date(study.endDate), "yyyy.mm.dd")}`,
  recruitsNumber: `${study.total}명`,
  recruitPeriod: `${convertDateToFormat(
    new Date(study.recruitEndDate),
    "yyyy.mm.dd",
  )} ${extractTimeInFormat(new Date(study.recruitEndDate), "hh:mm:ss")}까지`,
  location: study.location,
  questions: study.questions.map(question => ({
    id: question.id,
    text: question.text,
  })),
});

export const resolveStudyNotice = (
  notice: StudyNoticeResponse,
): StudyNotice => ({
  id: notice.id,
  content: notice.content,
});
