import { IResumeHistory } from './resume-history';

export interface IResumeData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  profilePic: string;
  summary: string;
  jobs?: (IResumeHistory)[] | null;
  education?: (IResumeHistory)[] | null;
}
