import { body } from 'express-validator';

export const walletCreateValidation = [
  body('limit').isNumeric().isLength({min: 1, max: 20}).trim(),
  body('walletName').isString().isLength({ min: 1, max: 30 })
];

export const walletUpdateValidation = [
  body('walletId').isNumeric().isLength({min: 1}).trim(),
  body('amount').isString().isLength({ min: 1, max: 30 })
]