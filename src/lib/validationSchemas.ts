import * as Yup from 'yup';

export const AddStuffSchema = Yup.object({
  description: Yup.string().required(),
  openings: Yup.number().positive().required(),
  type: Yup.string().oneOf(['internship', 'permanent', 'both']).required(),
  owner: Yup.string().required(),
});

export const EditStuffSchema = Yup.object().shape({
  id: Yup.number().required(),
  description: Yup.string().required(),
  skill: Yup.array().of(Yup.string()).required(),
  type: Yup.mixed<'internship' | 'permanent' | 'both'>().oneOf(['internship', 'permanent', 'both']).required(),
  salary: Yup.string().required(),
  openings: Yup.number().required(),
  owner: Yup.string().required(),
  jobId: Yup.number().required(),
  company: Yup.string().required(),
  skills: Yup.string().required(),
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
