import { Tag } from "@/types/study";

export type StudyOverview = {
  id: number;
  title: string;
  description: string;
  remainTime: string;
  tags: Tag[];
};

export type HomePage = {
  data: {
    privatePosts: {
      popularStudyPosts: StudyOverview[];
      myStudyPosts?: StudyOverview[];
    };
    studyPosts: StudyOverview[];
  };
};
