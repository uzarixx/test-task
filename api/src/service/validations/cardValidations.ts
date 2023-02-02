import { body } from 'express-validator';

export const validationCards = [
  body('cardNumber').isNumeric().isLength({min: 15, max: 20}).trim(),
  body('expireDateCard').isString().isLength({ min: 4, max: 6 }),
  body('cvvCard').isNumeric().isLength({min: 3, max: 3})
];