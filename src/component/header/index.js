import React from "react";
import { useDispatch } from 'react-redux';
import { BsBell, BsGear } from "react-icons/bs";
import Avatar from "../../assets/Images/avatar.svg";
import Dropdown from 'react-bootstrap/Dropdown';

import { HeaderWrapper } from "./style";

import { LogOut } from '../../redux/slices/auth-slice';

const Header = (props) => {
  const dispatch = useDispatch();
  const { children, className,onClick } = props;
  return (
    <HeaderWrapper className={className}>
      <div className="d-flex justify-content-between align-items-center">
        <div className="logo">
        </div>
        <div className="tab-list">
          {children}
        </div>
        <div className="right-section d-flex align-items-center">
          <BsBell />
          <BsGear onClick={onClick} />
          <Dropdown>
            <Dropdown.Toggle className='position-relative d-flex justify-content-center header-dropdown' id="dropdown-basic">
              <img src={Avatar} alt="no-user" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => dispatch(LogOut())}>LogOut</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

      </div>
    </HeaderWrapper>
  )
}
export default Header;
