import PopularStudyBoard from "@/components/home/PopularPostBoard.";
import { StudyOverview } from "@/controllers/home/types";

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
