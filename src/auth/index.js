import React from "react";
import { Row, Col } from 'react-bootstrap';

// Components
import PageHeader from '../component/header';
import { AuthWrapper } from "./style";

// Images
import AuthImageLeft from '../assets/Images/auth-img-left.png';
import AuthImageRight from '../assets/Images/auth-img-right.png';

const Index = (props) => {
  const { children } = props;

  return (
    <>
      <PageHeader className="auth-header"/>
      <AuthWrapper>
        <Row className="">
          <Col md={4} className="text-center auth-section-left">
            <img src={AuthImageLeft} alt="auth image left"/>
          </Col>
          <Col md={4} className="auth-section-middle">{children}</Col>
          <Col md={4} className="text-center auth-section-right"><img src={AuthImageRight} alt="auth image left"/></Col>
        </Row>
      </AuthWrapper>
    </>
  );
};

export default Index;
