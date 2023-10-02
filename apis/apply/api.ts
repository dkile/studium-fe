import appAxios from "../appAxios";
import { FormAnswer, TimeFrame, applyFormRequestBodySchema } from "./schema";

const postStudyApplyForm = async (
  userId: number,
  studyId: number,
  answers: FormAnswer[],
  timeFrames: TimeFrame[],
) => {
  const data = {
    userId,
    studyId,
    answers,
    timeFrames,
  };

  const body = applyFormRequestBodySchema.parse(data);

  const res = await appAxios().post(`/applyForm`, body);

  return res;
};

export default postStudyApplyForm;
