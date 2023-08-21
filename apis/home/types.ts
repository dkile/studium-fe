export type StudyResponse = Study[];

export type Study = {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  recruitStartDate: string;
  recruitEndDate: string;
  intro: string;
  startDate: string;
  endDate: string;
  locationDetail: string;
  total: number;
  recruited: number;
  templateContent: string;
  viewCount: number;
  tags: [
    {
      id: number;
      name: string;
    },
  ];
  location: string;
  questions: [
    {
      id: number;
      text: string;
      studyId: number;
    },
  ];
};

export type OnFireStudyList = Study[];
