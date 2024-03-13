import React from 'react';
import { CheckBoxWrapper } from './style'
function CheckExample(props) {
  const { label, marginBottom, name, onChange, checked } = props
  return (
    <CheckBoxWrapper
      type={"radio"}
      marginBottom={marginBottom}
      name={name}
      checked={checked}
      label={label}
      onChange={onChange}
    >
    </CheckBoxWrapper>
  );
}

export default CheckExample;
