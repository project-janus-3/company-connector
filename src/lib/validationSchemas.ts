import * as Yup from 'yup';

export const AddJobSchema = Yup.object({
  position: Yup.string().required(),
  description: Yup.string().required(),
  openings: Yup.number().positive().required(),
  skills: Yup.string().required(),
  salary: Yup.string().required(),
  type: Yup.string().oneOf(['internship', 'permanent', 'both']).required(),
  jobId: Yup.number().required(),
});

export const EditJobSchema = Yup.object().shape({
  id: Yup.number().required(),
  jobId: Yup.number().required(),
  position: Yup.string().required(),
  description: Yup.string().required(),
  skills: Yup.string().required(),
  type: Yup.string().oneOf(['internship', 'permanent', 'both']).required(),
  openings: Yup.number().positive().required(),
  salary: Yup.string().required(),
});

export const EditStudentProfileSchema = Yup.object().shape({
  id: Yup.number().required(),
  studentId: Yup.number().required(),
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  major: Yup.string().required(),
  location: Yup.string().required(),
  aboutMe: Yup.string().required(),
  interests: Yup.string().required(),
  portfolio: Yup.string().url().required(),
  profilePic: Yup.string().url().required(),
});

export const EditCompanyProfileSchema = Yup.object().shape({
  id: Yup.number().required(),
  companyId: Yup.number().required(),
  name: Yup.string().required(),
  overview: Yup.string().required(),
  location: Yup.string().required(),
  contact: Yup.string().required(),
  mainSite: Yup.string().nullable().default(null),
  companyPic: Yup.string().url().required(),
});
