import { body, check } from 'express-validator';


export const validationSignUp = [
  body('email').isEmail(),
  body('userName').isLength({
    min: 2,
    max: 20,
  }).isString().matches(/^[\s/a-zA-Z]+$/i),
  body('password').isLength({ min: 3, max: 32 }).isString(),
  body('userLastName').isLength({ min: 2, max: 15 }).isString(),
];

export const validationLogin = [
  body('email').isEmail(),
  body('password').isLength({ min: 3, max: 32 }).isString(),
];