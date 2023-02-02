import React, { FC } from 'react';
import styles from './FormInput.module.scss';
import { useFormContext } from 'react-hook-form';

interface props {
  placeholder: string;
  name: string;
  type?: string;
}

const FormInput: FC<props> = ({ placeholder, name, type }) => {
  const { register } = useFormContext();
  return (
    <input className={styles.input} type={type || 'text'} placeholder={placeholder} {...register(name)} />
  );
};

export default FormInput;