import React, { FC } from 'react';
import styles from './FormInput.module.scss';
import { useFormContext } from 'react-hook-form';

interface props {
  placeholder: string;
  name: string;
}

const FormInput: FC<props> = ({ placeholder, name }) => {
  const { register } = useFormContext();
  return (
    <input className={styles.input} type={'text'} placeholder={placeholder} {...register(name)} />
  );
};

export default FormInput;