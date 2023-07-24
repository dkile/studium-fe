// 최초 홈 진입 통 API
// ${API_PATH}/home

export type HomeResponse = {
  popularRecruitArticles: HomeRecruitArticleResponse[];
} & RecruitArticlesResponse;

// 추가 게시글 요청
// ${API_PATH}/home/article?last={oldest_recent_article_id}&size={size}&sort={sortBy}
export type RecruitArticlesResponse = {
  recruitArticles: HomeRecruitArticleResponse[];
  lastRecruitArticleId: number;
};

export type HomeRecruitArticleResponse = {
  id: number;
  title: string;
  description: string;
  tags: { id: number; label: string }[];
  createdAt: Date;
  expiresAt: Date;
};
