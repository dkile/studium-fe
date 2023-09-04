import { Study } from "@/apis/study/types";
import { StudyOverview } from "@/types/study";
import { calculateDateDiff } from "@/utils/util-func";

export const resolveRecruitRemainTime = (diff: {
  day: number;
  hour: number;
  minute: number;
  second: number;
}) => `마감일 ${diff.day}일 ${diff.hour}시간 남음`;

export const resolveStudyOverview = (study: Study): StudyOverview => ({
  id: study.id,
  title: study.name,
  description: study.intro,
  remainTime: resolveRecruitRemainTime(
    calculateDateDiff(new Date(), new Date(study.recruitEndDate)),
  ),
  tags: study.tags,
});
