import * as yup from 'yup';

export const loginValidation = yup.object().shape({
  email: yup.string().email('Email is not correct'),
  password: yup.string().max(90, 'Too much letters')
});

export const authValidation = yup.object().shape({
  email: yup.string().email('Email is not correct'),
  password: yup.string().max(90, 'Too much letters'),
  userName: yup.string().min(2, 'Name is not correct').max(30, 'Name is not correct').matches(/^[\s/a-zA-Z]+$/i, 'Name is not valid'),
  userLastName: yup.string().min(2, 'Last name is not correct').max(30, 'Last name is not correct').matches(/^[\s/a-zA-Z]+$/i, 'Last name is not valid'),
});