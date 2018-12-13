import { ITechnologyDetail } from './technology-detail';

export interface IResumeHistory {
  logo: string;
  institution: string;
  startDate: string;
  endDate?: string | null;
  phoneNumber: string;
  city: string;
  state: string;
  detail: Array<string>;
  skills?: Array<ITechnologyDetail> | [];

  // work history
  title?: string | null;

  // school history
  degree?: string | null;
}
