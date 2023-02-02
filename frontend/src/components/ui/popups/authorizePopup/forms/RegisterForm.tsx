import React, { FC } from 'react';
import FormInput from '../../../inputs/formInput';

interface props {
  methods: any;
}



const Register: FC<props> = ({methods}) => {
  return (
    <>
      <FormInput placeholder={'Your name'} name={'userName'} error={methods.formState.errors}/>
      <FormInput placeholder={'Your last name'} name={'userLastName'} error={methods.formState.errors}/>
      <FormInput placeholder={'Your email'} name={'email'} type={'email'} error={methods.formState.errors}/>
      <FormInput placeholder={'Your password'} name={'password'} type={'password'} error={methods.formState.errors}/>
    </>
  );
};

export default Register;