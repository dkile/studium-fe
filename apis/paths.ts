const BASE_URL = process.env.API_BASE_URL;
const studium = {
  home: {
    base: () => `${BASE_URL}/studium/v1/home`,
    articles: (size: number, lastArticleId: number, sort: "recent") =>
      `${BASE_URL}/studium/v1/home/articles?size=${size}&last=${lastArticleId}&sort=${sort}`,
  },
};

export default studium;
