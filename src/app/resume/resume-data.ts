import { IResumeDataJob } from './resume-data-job';
import { IResumeDataEdu } from './resume-data-edu';

export interface IResumeData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  profilePic: string;
  jobs?: (IResumeDataJob)[] | null;
  education?: (IResumeDataEdu)[] | null;
}
