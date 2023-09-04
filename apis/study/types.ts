export type StudyResponse = Study[];

export type StudyByIdResponse = Study;

export type OnFireStudyResponse = Study[];

export type Study = {
  id: number;
  leader: {
    id: number;
    createdAt: string;
    updatedAt: string;
    universalAccountId: string;
    manners: number;
    intro: string;
    profileURL: string;
    nickname: string;
  };
  createdAt: string;
  updatedAt: string;
  name: string;
  recruitStartDate: string;
  recruitEndDate: string;
  intro: string;
  rules: [string];
  startDate: string;
  endDate: string;
  locationDetail: string;
  location: string;
  total: number;
  recruited: number;
  templateContent: string;
  viewCount: number;
  tags: { name: string }[];
  questions: { id: number; text: string; studyId: number }[];
};
