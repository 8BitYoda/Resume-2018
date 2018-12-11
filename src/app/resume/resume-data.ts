import { IResumeDataJob } from './resume-data-job';

export interface IResumeData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  profilePic: string;
  jobs?: (IResumeDataJob)[] | null;
}
