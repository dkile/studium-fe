import { fetchOnFireStudyList, fetchStudyList } from "@/apis/study/api";
import { resolveStudyOverview } from "./resolver";
import { HomePage } from "./types";

export const getHomePageData = async (): Promise<HomePage> => {
  const [popularStudyList, studyList] = await Promise.all([
    fetchOnFireStudyList(),
    fetchStudyList(),
  ]);
  const resolvedPopularList = popularStudyList.map(resolveStudyOverview);
  const resolvedStudyList = studyList.map(resolveStudyOverview);

  return {
    data: {
      privatePosts: {
        popularStudyPosts: resolvedPopularList,
      },
      studyPosts: resolvedStudyList,
    },
  };
};

export const getStudyList = async (sort = "update") => {
  const studyList = await fetchStudyList(sort);
  const resolvedStudyList = studyList.map(resolveStudyOverview);

  return resolvedStudyList;
};
