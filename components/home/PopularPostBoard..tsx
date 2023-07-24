import { StudyOverview } from "@/types/study";
import Carousel from "@/components/common/carousel/Carousel";
import PostBoard from "@/components/home/PostBoard";
import StudyOverviewCard from "@/components/home/StudyOverviewCard";

type Props = {
  studies: StudyOverview[];
};

function PopularStudyBoard({ studies }: Props) {
  return (
    <PostBoard title="현재 뜨는 스터디">
      <Carousel showSwiper>
        {studies.map(({ id, title, description, remainTime, tags }) => (
          <Carousel.Item key={id}>
            <StudyOverviewCard
              id={id}
              title={title}
              description={description}
              remainTime={remainTime}
              tags={tags}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </PostBoard>
  );
}

export default PopularStudyBoard;
