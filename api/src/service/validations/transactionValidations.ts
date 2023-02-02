import { body } from 'express-validator';

export const transactionValidations = [
  body('amount').isString().isLength({ min: 1, max: 30 })
];