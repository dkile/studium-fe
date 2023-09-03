import { StudyDetail } from "@/types/study";
import { convertDateToFormat, extractTimeInFormat } from "@/utils/util-func";
import { getStudyById } from "@/apis/study/api";

const getStudyDetail = async (studyId: number): Promise<StudyDetail> => {
  const [study] = await Promise.all([getStudyById(studyId)]);

  return {
    id: study.id,
    title: study.name,
    leader: {
      id: 1,
      name: "Olivia Rhye",
      email: "olivia@untitledui.com",
      thumnail:
        "https://studium-fe.s3.ap-northeast-2.amazonaws.com/public/icon/avatar.svg",
      intro:
        "15년차 토익 강사. 수능 영어 1등급 (쉽다)" +
        "\n" +
        "쉬운 문제만 가르칩니다.",
    },
    tags: [
      {
        id: 1,
        name: "Label",
      },
      {
        id: 2,
        name: "Label",
      },
      {
        id: 3,
        name: "Label",
      },
    ],
    rules: study.rules,
    progress: [""],
    progressPeriod: `${convertDateToFormat(
      new Date(study.startDate),
      "yyyy.mm.dd",
    )} ~ ${convertDateToFormat(new Date(study.endDate), "yyyy.mm.dd")}`,
    recruitsNumber: `${study.recruiting}명`,
    recruitPeriod: `${convertDateToFormat(
      new Date(study.recruitEndDate),
      "yyyy.mm.dd",
    )} ${extractTimeInFormat(new Date(study.recruitEndDate), "hh:mm:ss")}까지`,
    location: study.location,
  };
};

export default getStudyDetail;
