import React from 'react';
import { CheckBoxWrapper } from './style'
function CheckExample(props) {
  const { id, label, marginBottom, onChange, checked } = props
  return (
    <CheckBoxWrapper
      type={"checkbox"}
      checked={checked}
      marginBottom={marginBottom}
      label={label}
      onChange={onChange}
      id={id}
    >
    </CheckBoxWrapper>
  );
}

export default CheckExample;
