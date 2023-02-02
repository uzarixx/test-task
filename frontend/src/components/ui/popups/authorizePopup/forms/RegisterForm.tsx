import React, { FC } from 'react';
import FormInput from '../../../inputs/formInput';

const Register: FC = () => {
  return (
    <>
      <FormInput placeholder={'Your name'} name={'userName'}/>
      <FormInput placeholder={'Your last name'} name={'userLastName'}/>
      <FormInput placeholder={'Your email'} name={'email'} type={'email'}/>
      <FormInput placeholder={'Your password'} name={'password'} type={'password'}/>
    </>
  );
};

export default Register;