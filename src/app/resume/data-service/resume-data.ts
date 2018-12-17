import { IResumeHistory } from './resume-history';

export interface IResumeData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  title: string;
  profilePic: string;
  summary: string;
  jobs?: (IResumeHistory)[] | null;
  education?: (IResumeHistory)[] | null;
}
