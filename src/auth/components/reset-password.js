import React, { useEffect } from "react";
import { Formik } from 'formik';
import { object, string } from 'yup';
import { Row, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../../component/Button/Index";
import Input from "../../component/inputs/input/index";
import Notification from '../../component/notifications';
import Loader from '../../component/loader/index';

import { SetState, SendEmail } from '../../redux/slices/auth-slice';

import ResetPassword from "../index";
const Index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { success, message, err, loading } = useSelector((store) => store.auth);

  useEffect(() => {
    if (success) {
      Notification('success', message, '');
      navigate('/auth/email-verification');
      dispatch(SetState({ field: 'success', value: false }));
    }

    if (err) {
      Notification('error', err, '');
      dispatch(SetState({ field: 'err', value: '' }));
    }
  }, [success, err]);

  const schema = object().shape({
    email: string().email('Invalid Email').required('Enter your email!'),
  });

  const handleSend = async (values) => {
    values.type = 'resetPassword';
    await dispatch(SendEmail(values))
    await dispatch(SetState({ field: 'email', value: values.email }));
  }
  return (
    <>
    { loading ? <Loader /> : ''}
      <Formik
        validationSchema={schema}
        onSubmit={(values) => handleSend(values)}
        initialValues={{
          email: '',
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
              <h2 className="subtitle">Enter your Registerd Email Address</h2>
              <div className="auth-section-middle-content auth-section-reset-content">
                <Row>
                  <Col md={12}>
                    <Input                     
                    name="email"
                    inputStatus={touched?.email && errors?.email}
                    value={values?.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Email"
                    placeholder="Email"/>
                  </Col>
                </Row>
              </div>
              <div className="auth-footer auth-reset-footer">
                <Row>
                  <Col md={12}>
                    <Button type='submit' large="1" className="auth-btn" outlined width={"100%"}>
                      Reset Password
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
