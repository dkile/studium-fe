// import fetchData from "@/utils/util-func";
import { HomeResponse, RecruitArticlesResponse } from "@/types/home";
// import studium from "./paths";

const createRecruitItem = (count: number) =>
  Array.from({ length: count }, (v, i) => i + 1).map(v => ({
    id: v,
    title: `스프링 기초 스터디 ${v}`,
    description:
      "스프링 6 버전에서 새로 도입된 개념과 스프링 프레임워크의 핵심 요소들을 공부합니다.",
    tags: [
      {
        id: 1,
        name: "BE",
      },
      {
        id: 2,
        name: "Spring",
      },
    ],
    created_at: new Date(),
    expires_at: new Date(),
  }));

const recruitArticleListData = createRecruitItem(500);
const popularRecruitArticleData = createRecruitItem(12);

export const getHomeResponseData = async (): Promise<HomeResponse> => {
  // const homeData = await fetchData(studium.home.base());
  const homeData = {
    popular_recruit_articles: popularRecruitArticleData,
    recruit_articles: recruitArticleListData.slice(0, 100),
    last_recruit_article_id: 100,
  };
  return homeData;
};

export const getRecruitArticlesResponseData = async (
  size: number,
  lastArticleId: number,
  sort: string,
): Promise<RecruitArticlesResponse> => {
  // const articlesData = await fetchData(
  //   studium.home.articles(size, lastArticleId, sort)
  // );

  if (sort === "최신순") {
    const articlesData = {
      recruit_articles: recruitArticleListData.slice(
        lastArticleId,
        lastArticleId + size,
      ),
      last_recruit_article_id: lastArticleId + size,
    };
    return articlesData;
  }
  const articlesData = {
    recruit_articles: recruitArticleListData
      .toReversed()
      .slice(lastArticleId, lastArticleId + size),
    last_recruit_article_id: lastArticleId + size,
  };
  return articlesData;
};
