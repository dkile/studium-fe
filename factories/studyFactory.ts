import { StudyDetail } from "@/types/study";
import { convertDateToFormat, extractTimeInFormat } from "@/utils/util-func";
import { getStudyById } from "@/apis/study/api";

const getStudyDetail = async (studyId: number): Promise<StudyDetail> => {
  const [study] = await Promise.all([getStudyById(studyId)]);

  return {
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
  };
};

export default getStudyDetail;
