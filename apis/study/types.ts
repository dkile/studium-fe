export type StudyResponse = Study[];

export type StudyByIdResponse = Study;

export type Study = {
  id: number;
  leaderId: number;
  createdAt: string;
  updatedAt: string;
  intro: string;
  rules: string[];
  location: string;
  status: string;
  endDate: string;
  recruitEndDate: string;
  recruitStartDate: string;
  startDate: string;
  name: string;
  tags: {
    id: number;
    label: string;
  }[];
  questionnaire: {
    id: number;
    question: string;
  }[];
  recruited: number;
  recruiting: number;
  studyTemplate: string;
  title: string;
};
