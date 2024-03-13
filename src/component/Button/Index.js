import React from "react";
import PropTypes from 'prop-types';
import ButtonStyled from "./Button.styles";
const Index = (props) => {
  const { children, type, transparented, outlined, width, className, onClick, large, disabled } = props;
  return (
    <ButtonStyled 
    onClick={onClick} 
    large={large ? 1 : 0} 
    width={width} 
    className={className} 
    disabled={disabled}
    type={type} 
    outlined={outlined ? 1 : 0} 
    transparent={transparented ? 1 : 0}
    >
      {children}
    </ButtonStyled>
  );
};
Index.propTypes = {
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'link',
    'dark',
    'light',
    'white',
    'dashed',
    'error',
    'default',
  ]),
  shape: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  large: PropTypes.bool,
  outlined: PropTypes.bool,
  transparented: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.node]),
};

export default Index;
