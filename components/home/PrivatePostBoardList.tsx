import { StudyOverview } from "@/types/study";
import PopularStudyBoard from "@/components/home/PopularPostBoard.";

type Props = {
  posts: {
    popularStudyPosts: StudyOverview[];
    myStudyPosts?: StudyOverview[];
  };
};

function PrivatePostBoardList({ posts }: Props) {
  return (
    <section>
      <PopularStudyBoard studies={posts.popularStudyPosts} />
    </section>
  );
}

export default PrivatePostBoardList;
