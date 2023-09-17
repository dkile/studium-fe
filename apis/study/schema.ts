import { z } from "zod";

export type Study = z.infer<typeof studySchema>;

export const studySchema = z.object({
  id: z.number(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  name: z.string(),
  recruitStartDate: z.string(),
  recruitEndDate: z.string(),
  intro: z.string(),
  rules: z.array(z.string()),
  startDate: z.string(),
  endDate: z.string(),
  locationDetail: z.string(),
  location: z.string(),
  total: z.number(),
  recruited: z.number(),
  templateContent: z.string(),
  viewCount: z.number(),
  tags: z.array(z.object({ name: z.string() })),
  questions: z.array(
    z.object({ id: z.number(), text: z.string(), studyId: z.number() }),
  ),
});

const userSchema = z.object({
  id: z.number(),
  nickname: z.string(),
  manners: z.number(),
  intro: z.string(),
  profileURL: z.string(),
});

export type StudyResponse = z.infer<typeof studyResponseSchema>;

export const studyResponseSchema = z.array(studySchema);

export type StudyByIdResponse = z.infer<typeof studyByIdResponseSchema>;

export const studyByIdResponseSchema = studySchema.merge(
  z.object({ leader: userSchema }),
);

export type OnFireStudyResponse = z.infer<typeof onFireStudyResponseSchema>;

export const onFireStudyResponseSchema = z.array(studySchema);

export type StudyJournalListResponse = z.infer<
  typeof studyJournalListResponseSchema
>;

export const studyJournalListResponseSchema = z.array(
  z.object({
    id: z.number(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    title: z.string(),
    content: z.string(),
    authorId: z.number(),
    studyId: z.number(),
  }),
);

export type StudyNoticeResponse = z.infer<typeof studyNoticeResponseSchema>;

export const studyNoticeResponseSchema = z.object({
  id: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  content: z.string(),
  studyId: z.number(),
});
