import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';

const PrivateRoute = ({
  component: Component,
  ...rest
}) => {

  const navigate = useNavigate();
  const {
    token
  } = useSelector((state) => state.auth || {});

  useEffect(() => {
    if (!token || token === '') {
      navigate('/auth/sign-in');
    }
  }, [token]);

  return (
    <Routes>
      <Route {...rest} element={<Component />} />
    </Routes>
  );
};

export default PrivateRoute;
