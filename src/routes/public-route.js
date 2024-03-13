import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const PublicRoute = ({ component: Component, ...rest }) => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth)|| {};

  useEffect(() => {
    if (token) { 
      navigate('/');
    }
  }, [token]);

  return ( 
    <Routes>
      <Route {...rest} element={<Component/>} />
    </Routes>
  );
}

export default PublicRoute;
