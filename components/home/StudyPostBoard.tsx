import { useRef, useState } from "react";

import styles from "@/styles/pages/Home.module.sass";
import { StudyOverview } from "@/types/study";
import { getStudyOverviews } from "@/factories/homeFactory";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import PostBoard from "@/components/home/PostBoard";
import Dropdown, { DropdownItem } from "@/components/common/Dropdown";
import Button from "@/components/common/Button";
import StudyOverviewCard from "@/components/home/StudyOverviewCard";
import Grid from "@/components/common/Grid";
import Noob from "@/components/common/Noob";

type Props = {
  studies: StudyOverview[];
};

function StudyPostBoard({ studies }: Props) {
  const observableRef = useRef<HTMLDivElement | null>(null);
  const [studyList, setStudyList] = useState<StudyOverview[]>(studies);
  const [studySort, setStudySort] = useState<string>("최신순");
  const [isLastItem, setIsLastItem] = useState(false);
  const studySortItems: DropdownItem[] = [
    {
      label: "최신순",
      value: "최신순",
    },
    {
      label: "추천순",
      value: "추천순",
    },
    {
      label: "인기순",
      value: "인기순",
    },
    {
      label: "북마크순",
      value: "북마크순",
    },
  ];

  const onIntersect = async () => {
    const loadingItemCnt = 100;

    const newStudyList = await getStudyOverviews(
      loadingItemCnt,
      studyList.at(-1)?.id,
      studySort,
    );

    if (newStudyList.length < loadingItemCnt) {
      setIsLastItem(true);
    }
    setStudyList(sl => [...sl, ...newStudyList]);
  };

  const onChangeSort = async (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e === undefined || studySort === e.currentTarget.value) return;

    setStudySort(e.currentTarget.value);
    const newStudyList = await getStudyOverviews(100, 0, e.currentTarget.value);
    setStudyList(newStudyList);
  };

  useIntersectionObserver(observableRef, onIntersect, { threshold: 0.01 });

  return (
    <section className={styles.recommendsContainer}>
      <PostBoard
        title="당신의 스터디, 스터디움이 응원합니다."
        addon={
          <Dropdown
            trigger={<Button className={styles.sortButton}>{studySort}</Button>}
            items={studySortItems}
            selected={{ label: studySort, value: studySort }}
            onChange={onChangeSort}
          />
        }
      >
        <Grid>
          {studyList.map(({ id, title, description, remainTime, tags }) => (
            <Grid.Item key={id}>
              <StudyOverviewCard
                id={id}
                title={title}
                description={description}
                remainTime={remainTime}
                tags={tags}
              />
            </Grid.Item>
          ))}
          {isLastItem === false ? <Noob ref={observableRef} /> : null}
        </Grid>
      </PostBoard>
    </section>
  );
}

export default StudyPostBoard;
