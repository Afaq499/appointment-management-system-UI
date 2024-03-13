import React from "react";
import { useSelector } from 'react-redux';
//Component

import AdminRoutes from './admin-routes';
import UserRoutes from './user-routes';

import { setAuthToken } from '../config/axios-configuration';

const Index = () => {
  const { token, isAdmin } = useSelector((state) => state.auth) || {};
  setAuthToken(token);
  return (
    <>
      {
        isAdmin ? (
          <AdminRoutes />
        ) : (
          <UserRoutes />
        )
      }
    </>
  );
};

export default Index;
