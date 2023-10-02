import postStudyApplyForm from "@/apis/apply/api";
import { FormAnswer, TimeFrame } from "@/apis/apply/schema";
import { useMutation } from "@tanstack/react-query";

function useApplyFormMutation() {
  const mutation = useMutation(
    ({
      userId,
      studyId,
      answers,
      timeFrames,
    }: {
      userId: number;
      studyId: number;
      answers: FormAnswer[];
      timeFrames: TimeFrame[];
    }) => postStudyApplyForm(userId, studyId, answers, timeFrames),
  );

  return mutation;
}

export default useApplyFormMutation;
