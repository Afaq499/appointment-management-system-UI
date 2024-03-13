import React, { useEffect, useState } from "react";
import { Formik } from 'formik';
import { object, string, ref, bool } from 'yup';
import { Row, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import Button from "../../component/Button/Index";
import Select from "../../component/select/index";
import Input from "../../component/inputs/input/index";
import PasswordInput from "../../component/inputs/passwordInput/index";
import PhoneInput from "../../component/inputs/phoneInput/index";
import CheckBox from "../../component/checkBox/index";
import Notification from '../../component/notifications';
import Loader from '../../component/loader/index';

import { SignUp, SetState } from '../../redux/slices/auth-slice';

import { Country_AND_STATES } from '../../constants';

import SignUP from "../index";
const Index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { success, err, loading } = useSelector((store) => store.auth);

  const [stateList, setStateList] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [state, setState] = useState('');

  useEffect(() => {
    if(success) {
      Notification('success', 'Sign Up', 'SignUp Succesfully!');
      navigate('/auth/email-verification')
      dispatch(SetState({ field: 'success', value: false }));
    }

    if(err) {
      Notification('error', err);
      dispatch(SetState({ field: 'err', value: '' }));
    }
  }, [success, err]);

  useEffect(() => {
    Country_AND_STATES.map(({ country }) => {
      setCountryList((preCountries) =>
        [
          ...preCountries,
          {
            value: country, label: country
          }
        ])
    })
  }, []);

  const handleSelectCountry = (country) => {
    setStateList('');
    if (country) {
      const { state } = Country_AND_STATES?.filter(countryData => countryData.country === country)[0];
      state.map(name => {
        setStateList((pre) => [...pre, { value: name, label: name }])
      })
    }
  }


  const signUp = async (data) => {
    const {
      addressLine1,
      addressLine2,
      city,
      country,
      state,
      postalCode,
      email,
      firstName,
      lastName,
      password,
      phone,
      companyName
    } = data;
    dispatch(SetState({ field: 'email', value: email }));
    const address = {
      addressLine1,
      addressLine2,
      city,
      country,
      state,
      postalCode
    }
    dispatch(SignUp({
      firstName,
      lastName,
      email,
      phone,
      company: companyName,
      address,
      password,
    }));
  }

  const schema = object().shape({
    firstName: string().required('Enter your first name!'),
    lastName: string().required('Enter your last name!'),
    email: string().email('Invalid Email').required('Enter your email!'),
    password: string()
      .required('Enter your password')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{12,})/,
        "Must Contain 12 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirmPassword: string()
      .required("Passwords must match")
      .oneOf([ref("password"), null], "Passwords must match"),
    addressLine1: string().required('Enter Address!'),
    postalCode: string().required('Postal Code is required'),
    country: string('Country is required').required('Country is required'),
    state: string().required('State is required'),
    city: string().required('City is required'),
    // terms: bool().required().oneOf([true], 'Terms must be accepted'),
  });

  return (
    <>
      { loading ? <Loader /> : ''}
      <Formik
        validationSchema={schema}
        onSubmit={(values) => signUp(values)}
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          companyName: '',
          password: '',
          confirmPassword: '',
          phone: '',
          addressLine1: '',
          addressLine2: '',
          postalCode: '',
          country: '',
          state: '',
          city: '',
          terms: false
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          setFieldValue,
          setFieldTouched,
          values,
          errors,
          touched
        }) => (
          <Form onSubmit={handleSubmit}>
            <SignUP>
              <h1 className="title">Sign Up to Unlock Your Business Potential!</h1>
              <div className="auth-section-middle-content auth-section-signup-content">
                <Row>
                  <Col md={6}>
                    <Input
                      name='firstName'
                      inputStatus={touched?.firstName && errors?.firstName}
                      value={values?.firstName}
                      label="First Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="First Name"
                    />
                  </Col>
                  <Col md={6}>
                    <Input
                      name='lastName'
                      inputStatus={touched?.lastName && errors?.lastName}
                      label="Last Name"
                      value={values?.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Last Name"
                    />
                  </Col>
                  <Col md={12}>
                    <Input
                      name='email'
                      inputStatus={touched?.email && errors?.email}
                      label="Email address"
                      value={values?.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter email address"
                    />
                  </Col>
                  <Col md={12}>
                    <PhoneInput
                      name='phone'
                      inputStatus={touched?.phone && errors?.phone}
                      label="Mobile Number"
                      smartCaret
                      onChange={(e) => setFieldValue('phone', e)}
                      value={values?.phone}
                      onBlur={handleBlur}
                      defaultCountry="US"
                      placeholder="000 000 0000"
                    />
                  </Col>
                  <Col md={12}>
                    <Input
                      name='companyName'
                      label="Company"
                      value={values?.companyName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Company Name"
                    />
                  </Col>
                  <Col md={6}>
                    <Input
                      name='addressLine1'
                      inputStatus={touched?.addressLine1 && errors?.addressLine1}
                      value={values?.addressLine1}
                      label="Address Line 1"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Address Line 1"
                    />
                  </Col>
                  <Col md={6}>
                    <Input
                      name='addressLine2'
                      inputStatus={touched?.addressLine2 && errors?.addressLine2}
                      value={values?.addressLine2}
                      label="Address Line 2"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Address Line 2"
                    />
                  </Col>
                  <Col md={6}>
                    <Input
                      name='city'
                      inputStatus={touched?.city && errors?.city}
                      value={values?.city}
                      label="City"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="City"
                    />
                  </Col>
                  <Col md={6}>
                    <Input
                      name='postalCode'
                      inputStatus={touched?.postalCode && errors?.postalCode}
                      type="number"
                      min='0'
                      value={values?.postalCode}
                      onChange={(e) => {
                        if (e.target.value >= 0) {
                          handleChange(e);
                        }
                      }}
                      onBlur={handleBlur}
                      label="Postal Code"
                      placeholder="00000" />
                  </Col>
                  <Col md={6}>
                    <Select
                      name='country'
                      inputStatus={touched?.country && errors?.country}
                      options={countryList}
                      onChange={(e) => {
                        handleSelectCountry(e.value);
                        setFieldValue("country", e.label);
                        setState('');
                      }}
                      onBlur={() => setFieldTouched("country", true)}
                      label="Country"
                    />
                  </Col>
                  <Col md={6}>
                    <Select
                      name='state'
                      inputStatus={touched?.state && errors?.state}
                      options={stateList}
                      value={state}
                      onChange={(e) => {
                        setFieldValue("state", e.value);
                        setState(e);
                      }}
                      onBlur={() => setFieldTouched("state", true)}
                      disabled={!values?.country}
                      label="State"
                    />
                  </Col>
                  <Col md={12}>
                    <PasswordInput
                      name='password'
                      inputStatus={touched?.password && errors?.password}
                      value={values?.password}
                      barColors={['#424A47', '#424A47', '#424A47', '#424A47', '#424A47']}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      strength
                      label="Password"
                      placeholder="Password Here"
                      inputInfo="Must Contain 12 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
                    />
                  </Col>
                  <Col md={12}>
                    <PasswordInput
                      name='confirmPassword'
                      inputStatus={touched?.confirmPassword && errors?.confirmPassword}
                      value={values?.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label="Password"
                      placeholder="Your Password Here"
                    />
                  </Col>
                  <Col md={12}>
                    <CheckBox
                      name="terms"
                      className="auth-checkbox"
                      type="checkbox"
                      marginBottom="32px"
                      value={values?.terms}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label={
                        <>
                          I agree to <a href="#">terms &amp; conditions </a>
                        </>
                      }
                    />
                  </Col>
                </Row>
              </div>
              <div className="auth-footer auth-signup-footer">
                <Row>
                  <Col md={12}>
                    <Button type='submit' large="1" className="auth-btn" outlined width={"100%"}>
                      Register Account
                    </Button>
                  </Col>
                  <Col md={12}>
                    <div className="already-account align-items-center">
                      <label>
                        Already have an account! <a href="/auth/sign-in">Login</a>
                      </label>
                    </div>
                  </Col>
                </Row>
              </div>
            </SignUP>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default Index;
