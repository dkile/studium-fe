// 최초 홈 진입 통 API
// https://api.server.d0lim.com/studium/v1/home

export type HomeResponse = {
  popular_recruit_articles: HomeRecruitArticleResponse[];
} & RecruitArticlesResponse;

// 추가 게시글 요청
// https://api.server.d0lim.com/studium/v1/home/article?last={oldest_recent_article_id}&size={size}&sort={sortBy}
export type RecruitArticlesResponse = {
  recruit_articles: HomeRecruitArticleResponse[];
  last_recruit_article_id: number;
};

type HomeRecruitArticleResponse = {
  id: number;
  title: string;
  description: string;
  tags: Tag[];
  created_at: Date;
  expires_at: Date;
};

// https://api.server.d0lim.com/studium/v1/recruit/{id}

// 최초 홈 화면 뷰 데이터
export type HomeData = {
  popular_recruit_articles: RecruitArticle[];
} & RecruitArticles;

// 추가 게시글 데이터
export type RecruitArticles = {
  recruit_articles: RecruitArticle[];
};

// 홈 화면 게시글
export type RecruitArticle = {
  id: number;
  title: string;
  description: string;
  tags: Tag[];
  announcement: string;
};

export type SortBy = "최신순" | "추천순" | "인기순";

export type Tag = {
  id: number;
  name: string;
};
