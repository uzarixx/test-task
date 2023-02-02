import * as yup from 'yup';

export const paymentValidate = yup.object().shape({
  amount: yup.string().matches(/^\d+$/, 'Amount is not valid').max(7, 'Too much money'),
});
