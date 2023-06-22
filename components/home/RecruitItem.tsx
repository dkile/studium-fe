import RecruitItemContainer from "./RecruitItemContainer";
import RecruitItemMetric from "./RecruitItemMetric";
import RecruitItemHeader from "./RecruitItemHeader";
import RecruitItemTags from "./RecruitItemTags";
import RecruitItemDescription from "./RecruitItemDescription";

function RecruitItem() {}

export default Object.assign(RecruitItem, {
  Container: RecruitItemContainer,
  Metric: RecruitItemMetric,
  Header: RecruitItemHeader,
  Description: RecruitItemDescription,
  Tags: RecruitItemTags,
});
