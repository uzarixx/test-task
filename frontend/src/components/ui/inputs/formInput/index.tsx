import React, { FC } from 'react';
import styles from './FormInput.module.scss';
import { useFormContext } from 'react-hook-form';

interface props {
  placeholder: string;
  name: string;
  type?: string;
  error?: any;
}

const FormInput: FC<props> = ({ placeholder, name, type, error }) => {
  const { register } = useFormContext();
  return (
    <div className={styles.inputWrapper}>
    <input className={styles.input} type={type || 'text'} placeholder={placeholder} {...register(name)} />
      <p className={styles.error}>{error && error[name]?.message}</p>
    </div>
  );
};

export default FormInput;