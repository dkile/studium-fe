import {
  getHomeResponseData,
  getRecruitArticlesResponseData,
} from "@/apis/home/api";
import { StudyOverview } from "@/types/study";

export type HomePage = {
  data: {
    privatePosts: {
      popularStudyPosts: StudyOverview[];
      myStudyPosts?: StudyOverview[];
    };
    studyPosts: StudyOverview[];
  };
};

export const getHomePageData = async (): Promise<HomePage> => {
  const { popularRecruitArticles: popularArticles, recruitArticles: articles } =
    await getHomeResponseData();
  const resolvedPopularOverviews = popularArticles.map(article => ({
    id: article.id,
    title: article.title,
    description: article.description,
    remainTime: "마감일 2일 17시간 남음",
    tags: article.tags,
  }));
  const resolvedOverviews = articles.map(article => ({
    id: article.id,
    title: article.title,
    description: article.description,
    remainTime: "마감일 2일 17시간 남음",
    tags: article.tags,
  }));

  return {
    data: {
      privatePosts: {
        popularStudyPosts: resolvedPopularOverviews,
      },
      studyPosts: resolvedOverviews,
    },
  };
};

export const getStudyOverviews = async (
  size: number,
  lastOverviewId = 0,
  sort = "최신순",
) => {
  const { recruitArticles: articles } = await getRecruitArticlesResponseData(
    size,
    lastOverviewId,
    sort,
  );
  const resolvedOverviews = articles.map(article => ({
    id: article.id,
    title: article.title,
    description: article.description,
    remainTime: "마감일 2일 17시간 남음",
    tags: article.tags,
  }));

  return resolvedOverviews;
};
