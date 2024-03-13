import React, { useEffect } from "react";
import "../src/assets/css/style.css";
import { useDispatch, useSelector } from 'react-redux';

import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "../src/routes/AppRoute";
import AuthRoute from './routes/auth-routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { theme } from "../src/assets/themes/index";
import GlobalStyles from "./assets/themes/global-styled";

import { RefreshUser } from '../src/redux/slices/auth-slice'

function App() {
  const dispath = useDispatch();
  const {
    token
  } = useSelector((state) => state.auth || {});

  useEffect(() => {
    if (token) {
      dispath(RefreshUser());
    }
  }, [token]);
  return (
    <BrowserRouter>
      <ThemeProvider theme={{ ...theme }}>
        <GlobalStyles />
        <AuthRoute path='/auth' />
        <AppRoute path="/" />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
