import React, { useEffect } from "react";
import { Formik } from 'formik';
import { object, string, ref } from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Row, Col, Form } from "react-bootstrap";

import Button from "../../component/Button/Index";
import PasswordInput from "../../component/inputs/passwordInput/index";
import Notification from '../../component/notifications';
import Loader from '../../component/loader/index';

import { SetState, ResetPassword as resetPassword } from '../../redux/slices/auth-slice';

import { setAuthToken } from '../../config/axios-configuration';

import ResetPassword from "../index";
const Index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { success, message, err, loading } = useSelector((store) => store.auth);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search)
    const token = queryParams.get("token");
    if (token) setAuthToken(token);
  }, []);

  useEffect(() => {
    if (success) {
      Notification('success', message);
      navigate('/auth/sign-in');
      dispatch(SetState({ field: 'success', value: false }));
    }

    if (err) {
      Notification('error', err, err);
      dispatch(SetState({ field: 'err', value: '' }));
    }
  }, [success, err]);

  const schema = object().shape({
    password: string()
      .required('Enter your password')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{12,})/,
        "Must Contain 12 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirmPassword: string()
      .required('Passwords must match')
      .oneOf([ref("password"), null], "Passwords must match"),
  });

  return (
    <>
    { loading ? <Loader /> : ''}
      <Formik
        validationSchema={schema}
        onSubmit={({ password }) => {
          dispatch(resetPassword({ password }));
        }}
        initialValues={{
          password: '',
          confirmPassword: '',
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
            <ResetPassword>
              <h1 className="title">Reset Your Password</h1>
              <h2 className="subtitle">Enter New Password</h2>
              <div className="auth-section-middle-content auth-section-reset-content">
                <Row>
                  <Col md={12}>
                    <PasswordInput
                      name="password"
                      inputStatus={touched?.password && errors?.password}
                      value={values?.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      strength
                      label="Type New Password"
                      placeholder="Type Password"
                      inputInfo="Password instructions will come here"
                    />
                  </Col>
                  <Col md={12}>
                    <PasswordInput
                      name="confirmPassword"
                      inputStatus={touched?.confirmPassword && errors?.confirmPassword}
                      value={values?.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      strength
                      label="Re-Type New Password"
                      placeholder="Your Password Here"
                      inputInfo="Password instructions will come here"
                    />
                  </Col>
                </Row>
              </div>
              <div className="auth-footer auth-reset-footer">
                <Row>
                  <Col md={12}>
                    <Button type='submit' large="1" className="auth-btn" outlined width={"100%"}>
                      Save New Password and Login
                    </Button>
                  </Col>
                </Row>
              </div>
            </ResetPassword>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default Index;
