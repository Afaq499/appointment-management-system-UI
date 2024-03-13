import React, { useState } from "react";
import { DrawerWrapper } from "./style";
import Button from "../Button/Index";
import { BsXCircle } from "react-icons/bs"
import "react-modern-drawer/dist/index.css"
const Index = (props) => {
  const {
    show,
    size,
    onHide,
    children,
    crossIcon,
    drawerHeader,
    className,
    buttons
  } = props;
  return (
    <DrawerWrapper
      className={className}
      open={show}
      size={size}
      direction="right">

      <div className="drawer-header align-items-center justify-content-end d-flex">
        {crossIcon && (
          <BsXCircle onClick={onHide} className="cross-icon" />
        )}
        {drawerHeader}
      </div>

      {children}
    </DrawerWrapper>
  );
};
export default Index;
