import { fetchOnFireStudyList, fetchStudyList } from "@/apis/home/api";
import { StudyOverview } from "@/types/study";
import { calculateDateDiff } from "@/utils/util-func";

export type HomePage = {
  data: {
    privatePosts: {
      popularStudyPosts: StudyOverview[];
      myStudyPosts?: StudyOverview[];
    };
    studyPosts: StudyOverview[];
  };
};

const convertDateDiffToRemainTimeVO = (diff: {
  day: number;
  hour: number;
  minute: number;
  second: number;
}) => `마감일 ${diff.day}일 ${diff.hour}시간 남음`;

export const getHomePageData = async (): Promise<HomePage> => {
  const [popularStudyList, studyList] = await Promise.all([
    fetchOnFireStudyList(),
    fetchStudyList(),
  ]);
  const resolvedPopularList = popularStudyList.map(study => ({
    id: study.id,
    title: study.name,
    description: study.intro,
    remainTime: convertDateDiffToRemainTimeVO(
      calculateDateDiff(new Date(), new Date(study.recruitEndDate)),
    ),
    tags: study.tags,
  }));
  const resolvedStudyList = studyList.map(study => ({
    id: study.id,
    title: study.name,
    description: study.intro,
    remainTime: convertDateDiffToRemainTimeVO(
      calculateDateDiff(new Date(), new Date(study.recruitEndDate)),
    ),
    tags: study.tags,
  }));

  return {
    data: {
      privatePosts: {
        popularStudyPosts: resolvedPopularList,
      },
      studyPosts: resolvedStudyList,
    },
  };
};

export const getStudyList = async (
  size: number,
  lastOverviewId = 0,
  sort = "최신순",
) => {
  const studyList = await fetchStudyList();
  const resolvedList = studyList.map(study => ({
    id: study.id,
    title: study.name,
    description: study.intro,
    remainTime: convertDateDiffToRemainTimeVO(
      calculateDateDiff(new Date(), new Date(study.recruitEndDate)),
    ),
    tags: study.tags,
  }));

  return resolvedList;
};
