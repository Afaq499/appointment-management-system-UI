import React from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// Components
import PageHeader from "../component/header";
import Loader from '../component/loader/index';

import CongratStars from "../assets/Images/congrat-stars.svg";
import Button from "../component/Button/Index";
import { CongratulationWrapper } from "./style";

const Index = () => {
  const navigate = useNavigate();
  const { loading } = useSelector((store) => store.store);
  return (
    <>
    { loading ? <Loader /> : ''}
      <PageHeader className="auth-header" />
      <CongratulationWrapper>
        <img src={CongratStars} alt="congratulation stars" />
        <h3>Congratulations!</h3>
        <p>Permissions Granted &Amazon Advertising added Successfully</p>
        <Button 
        onClick={() => navigate('/')}
        outlined="1" 
        large width={'241px'}>Get Started</Button>
      </CongratulationWrapper>
    </>
  );
};

export default Index;
