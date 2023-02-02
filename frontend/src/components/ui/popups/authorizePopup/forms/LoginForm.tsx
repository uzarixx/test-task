import React, { FC } from 'react';
import FormInput from '../../../inputs/formInput';

const LoginForm: FC = () => {
  return (
    <>
      <FormInput placeholder={'Your email'} name={'email'} type={'email'}/>
      <FormInput placeholder={'Your password'} name={'password'} type={'password'}/>
    </>
  );
};

export default LoginForm;