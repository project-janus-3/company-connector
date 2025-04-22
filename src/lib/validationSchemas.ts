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
  skill: Yup.array(Yup.string().required()).required(),
  type: Yup.mixed<'internship' | 'permanent' | 'both'>().required(),
  salary: Yup.string().required(),
  openings: Yup.number().required(),
  owner: Yup.string().required(),
});
