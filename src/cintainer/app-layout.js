import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

//styles
import { ContentWrapper } from "./style";

//component
import PageHeader from "../component/header";
import Dashboard from "./dashboard/index.js";

const AppLayout = () => {
  const dispatch = useDispatch();

  const [tab, setTabs] = useState("dashboard");
  const handleTabSelection = (selection) => {
    setTabs(selection);
  }

  return (
    <>
      <PageHeader onSettingsClick={() => setTabs("setting")}>
        {/* <span onClick={() => handleTabSelection("dashboard")}>Dashboard</span> */}
        {/* <span onClick={() => handleTabSelection("product")}>Products</span>
        <span onClick={() => handleTabSelection("keyword")}>Keywords</span>
        <span onClick={() => handleTabSelection("stores")}>Stores</span> */}
      </PageHeader>
      <ContentWrapper>
        {
        tab === "dashboard"
          ? <Dashboard />
          : ''
        }
      </ContentWrapper>
    </>
  )
}

export default AppLayout;
