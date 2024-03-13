import React, { useEffect, useState } from "react";
import { Formik } from 'formik';
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Form } from 'react-bootstrap';
import { object, string } from 'yup';
// import Button from "../../component/button/button.styled";

import Button from "../../component/Button/Index";
import Input from "../../component/inputs/input/index";
import PasswordInput from "../../component/inputs/passwordInput/index";
import Notification from '../../component/notifications';
import Loader from '../../component/loader/index';

import { SetState, SignIn } from '../../redux/slices/auth-slice';

import SignUp from "../index";
const Index = () => {
  const dispatch = useDispatch();

  const { loading, success, err } = useSelector(store => store.auth);

  const schema = object().shape({
    email: string().email('Invalid Email').required('Enter your email!'),
    password: string().required('Enter your password')
  });

  const signIn = (user) => {
    dispatch(SetState({ field: 'email', value: user.email }));
    dispatch(SignIn(user));
  }

  useEffect(() => {
    if (success) {
      Notification('success', 'Sign In', 'SignIn Successfully');
      dispatch(SetState({ field: 'success', value: false }));
    }

    if (err) {
      Notification('error', err);
      dispatch(SetState({ field: 'err', value: '' }));
      dispatch(SetState({ field: 'email', value: '' }));
    }
  }, [success, err]);

  return (
    <>
    { loading ? <Loader /> : ''}
      <Formik
        validationSchema={schema}
        onSubmit={(values) => signIn(values)}
        initialValues={{
          email: '',
          password: '',
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
          touched
        }) => (
          <Form onSubmit={handleSubmit}>
            <SignUp>
              <h1 className="title">Login to Use Your<br /> Business Potential!</h1>
              <div className="auth-section-middle-content auth-section-signup-content">
                <Row>
                  <Col md={12}>
                    <Input
                      name="email"
                      inputStatus={touched?.email && errors?.email}
                      value={values?.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label="User Name"
                      placeholder="User Name"
                    />
                  </Col>
                  <Col md={12}>
                    <PasswordInput
                      name="password"
                      inputStatus={touched?.password && errors?.password}
                      value={values?.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label="Password"
                      placeholder="Your Password Here"
                    />
                    <label className="d-flex forgot-link justify-content-end"><a href="/auth/reset-password">Forgot Password!</a></label>
                  </Col>
                </Row>
              </div>
              <div className="auth-footer auth-signup-footer">
                <Row>
                  <Col md={12}>
                    <Button
                      type='submit'
                      large="1"
                      className="auth-btn"
                      outlined width={"100%"}
                    >
                      Login
                    </Button>
                  </Col>
                  <Col md={12}>
                    <div className="already-account align-items-center">
                      <label>
                        Already have an account! <a href="/auth/sign-up">Sign Up</a>
                      </label>
                    </div>
                  </Col>
                </Row>
              </div>
            </SignUp>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default Index;
