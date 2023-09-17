import { Tag } from "@/types/study";

export type StudyDetail = {
  id: number;
  title: string;
  progressPeriod: string;
  recruitPeriod: string;
  recruitsNumber: string;
  location: string;
  progress: string;
  rules: string[];
  tags: Tag[];
  leader: {
    id: number;
    nickname: string;
    intro: string;
    profileUrl: string;
  };
};

export type StudyApply = StudyDetail & {
  questions: { id: number; text: string }[];
};

export type StudyRunning = StudyDetail & {
  notice: StudyNotice;
};

export type StudyNotice = {
  id: number;
  content: string;
};

export type StudyJournal = {
  id: number;
  lastUpdate: string;
  title: string;
  content: string;
  author: string;
};
