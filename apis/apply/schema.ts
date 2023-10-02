import { z } from "zod";

export type FormAnswer = z.infer<typeof formAnswerSchema>;
export const formAnswerSchema = z.object({
  questionId: z.number(),
  text: z.string(),
});

export type TimeFrame = z.infer<typeof timeFrameSchema>;
export const timeFrameSchema = z.object({
  day: z.enum(["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]),
  starttime: z.string(),
  endtime: z.string(),
});

export type ApplyFormRequestBody = z.infer<typeof applyFormRequestBodySchema>;
export const applyFormRequestBodySchema = z.object({
  userId: z.number(),
  studyId: z.number(),
  answers: z.array(formAnswerSchema),
  timeFrames: z.array(timeFrameSchema),
});
