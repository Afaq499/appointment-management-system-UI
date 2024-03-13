import React, { useEffect } from "react";
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import Notification from '../../component/notifications';
import Loader from '../../component/loader/index';

import { setAuthToken } from '../../config/axios-configuration';
import VerificationImg from "../../assets/Images/verification-img.png";
import { SetState, VerifyEmial, SendEmail } from '../../redux/slices/auth-slice';

import EmailVerification from "../index";
const Index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    email,
    isSignUp,
    success,
    message,
    err,
    loading
  } = useSelector((store) => store.auth);

  const queryParams = new URLSearchParams(window.location.search)
  let token = queryParams.get("token");

  const handleReSend = () => {
    if (isSignUp) dispatch(SendEmail({ email, type: '' }));
    else dispatch(SendEmail({ email, type: 'resetPassword' }))
  }

  useEffect(() => {
    if (token) {
      setAuthToken(token);
      setTimeout(() => {
        dispatch(VerifyEmial());
      }, 1000);
      token = '';
    }
  }, [token])

  useEffect(() => {
    if (success && token) {
      Notification('success', 'User Verification', message);
      dispatch(SetState({ field: 'success', value: false }));
      setTimeout(() => {
        navigate('/auth/sign-in')
      }, 2000)
    } else if (success) {
      Notification('success', message, '');
      dispatch(SetState({ field: 'success', value: false }));
    }
    if (err) {
      Notification('error', err, '');
      dispatch(SetState({ field: 'err', value: '' }));
    }
  }, [success, err]);

  return (
    <>
    { loading ? <Loader /> : ''}
      <EmailVerification>
        <div className="email-verification-content">
          <h1 className="title">Verification Email Sent</h1>
          <div className="auth-section-middle-content">
            <p>
              We have sent you an email with verification link, please click on
              that link to proceed further.
            </p>
            <div className="email-verification-wrapper">
              <img src={VerificationImg} alt="verification image" />
            </div>
            <p className="not-recive-text">
              If you didn’t receive the email please <a onClick={() => handleReSend()}>Click Here</a>
            </p>
          </div>
        </div>
      </EmailVerification>
    </>
  );
};
export default Index;
