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
import PopupWrapper from '../PopupWrapper';
import { yupResolver } from '@hookform/resolvers/yup';
import { authValidation, loginValidation } from '../../../../utils/validations/authorizationValidate';

const AuthorizePopup: FC = () => {
  const [typeAuth, setTypeAuth] = useState(true);
  const [error, setError] = useState('');
  const authorizePopup = useSelector((state: RootState) => state.popupsSlice.authorizePopup);
  const dispatch = useDispatch<any>();
  const methods = useForm(
    { resolver: yupResolver(typeAuth ? loginValidation : authValidation) },
  );
  const onSubmit = async (data: any) => {
    try {
      let response;
      if (typeAuth) response = await UserService.login(data.password, data.email);
      else response = await UserService.register(data.password, data.email, data.userName, data.userLastName);
      localStorage.setItem('authToken', response.data.token);
      await dispatch(fetchAuthUser());
      closePopup();
    } catch (e: any) {
      e.response.data?.message && setError(e.response.data?.message);
    }

  };
  const closePopup = () => {
    dispatch(setAuthorizePopup(false));
    setError('')
  };

  const changeType = () => {
    setTypeAuth(!typeAuth);
    methods.reset();
    setError('');
  };

  return (
    <PopupWrapper popup={authorizePopup} closePopup={closePopup}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.popupForm}
              onMouseDown={(e) => e.stopPropagation()}
              onClick={(e) => e.stopPropagation()}>
          <h4>Login</h4>
          {typeAuth ? <LoginForm methods={methods} /> : <Register methods={methods} />}
          <button>{typeAuth ? 'Login' : 'Registration'}</button>
          {error && <p>{error}</p>}
          <span onClick={changeType}>{typeAuth ? 'Registration' : 'Login'}</span>
        </form>
      </FormProvider>
    </PopupWrapper>
  );
};

export default AuthorizePopup;