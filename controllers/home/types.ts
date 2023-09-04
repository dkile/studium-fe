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
