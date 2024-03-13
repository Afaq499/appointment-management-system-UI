import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Routes
import PrivateRoute from './private-route';

// Components
import AppLayout from '../cintainer/app-layout';

const Index = () => {
  
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<PrivateRoute path="/" key="/" component={AppLayout} />}
        />
      </Routes>
    </>
  );
};

export default Index;
