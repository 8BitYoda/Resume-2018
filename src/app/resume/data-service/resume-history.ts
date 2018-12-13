export interface IResumeHistory {
  logo: string;
  institution: string;
  startDate: string;
  endDate?: string | null;
  phoneNumber: string;
  city: string;
  state: string;
  detail: Array<string>;
  skills?: Array<string> | [];

  // work history
  title?: string | null;

  // school history
  degree?: string | null;
}
