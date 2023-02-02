import * as yup from 'yup';

export const cardValidate = yup.object().shape({
  cardNumber: yup.string()
    .min(16, 'card number is not valid')
    .max(19, 'card number is not valid')
    .matches(/^\d+$/, 'card number is not valid')
    .required(),
  month: yup.string()
    .min(2, 'card month is not valid')
    .max(2, 'card month is not valid')
    .matches(/^\d+$/, 'card number is not valid')
    .required(),
  year: yup.string()
    .min(2, 'card year is not valid')
    .max(2, 'card year is not valid')
    .matches(/^\d+$/, 'card year is not valid')
    .required(),
  cvvCard: yup.string()
    .min(3, 'card cvv is not valid')
    .max(3, 'card cvv is not valid')
    .matches(/^\d+$/, 'card cvv is not valid')
    .required(),
});
