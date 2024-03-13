import React from "react";

import { Route, Routes } from "react-router-dom";

import PrivateRoute from './private-route';
import PublicRoute from './public-route';
import SignUp from "../auth/components/signup";
import SignIn from "../auth/components/signin";
import ResetPassword from "../auth/components/reset-password";
import EmailVerification from "../auth/components/email-verification";
import ConfirmPassword from '../auth/components/confirm-password';
import Congratulations from "../auth/congratulation";

const AuthRoute = () => {
  return (
    <Routes>
      <Route exact path="/auth/sign-up"  element={<PublicRoute path='/' component={SignUp} />} />
      <Route exact path="/auth/sign-in" element={<PublicRoute path='/' component={SignIn} />} />
      <Route exact path="/auth/confirm-password" element={<PublicRoute path='/' component={ConfirmPassword} />} />
      <Route exact path="/auth/reset-password" element={<PublicRoute path='/' component={ResetPassword} />} />
      <Route
        exact
        path="/auth/email-verification"
        element={<PublicRoute path='/' component={EmailVerification} />}
      />
      <Route exact path="/auth/congratulations" element={<PrivateRoute path='/' component={Congratulations} />}/>
    </Routes>
  );
};

export default AuthRoute;
