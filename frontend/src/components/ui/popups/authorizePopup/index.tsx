import React, { FC, useState } from 'react';
import styles from './AuthorizePopup.module.scss';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { setAuthorizePopup } from '../../../../store/counter/popupsSlice';
import LoginForm from './forms/LoginForm';
import Register from './forms/RegisterForm';
import UserService from '../../../../services/fetchServices/user';
import { fetchAuthUser } from '../../../../store/counter/userSlice';

const AuthorizePopup: FC = () => {
  const [typeAuth, setTypeAuth] = useState(true);
  const authorizePopup = useSelector((state: RootState) => state.popupsSlice.authorizePopup);
  const dispatch = useDispatch<any>();
  const methods = useForm();
  const onSubmit = async (data: any) => {
    try {
      let response;
      if (typeAuth) response = await UserService.login(data.password, data.email);
      else response = await UserService.register(data.password, data.email, data.userName, data.userLastName);
      localStorage.setItem('authToken', response.data.token);
      await dispatch(fetchAuthUser());
      closePopup();
    } catch (e) {
      console.log(e);
    }
  };
  const closePopup = () => {
    dispatch(setAuthorizePopup(false));
  };

  const changeType = () => {
    setTypeAuth(!typeAuth);
    methods.reset();
  };

  return (
    <div className={`${styles.popupWrapper} ${authorizePopup && styles.active}`} onClick={closePopup}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.popupForm}
              onClick={(e) => e.stopPropagation()}>
          <h4>Login</h4>
          {typeAuth ? <LoginForm /> : <Register />}
          <button>{typeAuth ? 'Login' : 'Registration'}</button>
          <span onClick={changeType}>{typeAuth ? 'Registration' : 'Login'}</span>
        </form>
      </FormProvider>
    </div>
  );
};

export default AuthorizePopup;