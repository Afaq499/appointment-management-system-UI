import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Routes
import PrivateRoute from './private-route';

// Components
import Dashboard from '../cintainer/dashboard/index.js.js';

const Index = () => {
  
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<PrivateRoute path="/" key="/" component={Dashboard} />}
        />
      </Routes>
    </>
  );
};

export default Index;
