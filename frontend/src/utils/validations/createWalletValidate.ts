import * as yup from 'yup';

export const createWalletValidate = yup.object().shape({
  walletName: yup.string().matches(/^[\s/a-zA-Z]+$/i, 'Wallet name is not valid').max(30, 'Title is too long'),
  limit: yup.string().matches(/^\d+$/, 'Limit is not valid').max(20, 'Too much money')
});