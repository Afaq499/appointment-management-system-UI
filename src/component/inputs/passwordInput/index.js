import React, { useState } from "react";
import PasswordStrengthBar from "react-password-strength-bar";
import { InputWrapper } from "../style";
import { Form } from "react-bootstrap";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
const Index = (props) => {
  const { label, inputStatus, inputInfo, placeholder, strength, onChange, value, name } = props;
  const [passwordShow, setPasswordShow] = useState(false);
  return (
    <InputWrapper className="password-input">
      <Form.Group className="position-relative ">
        <span className="d-flex justify-content-between">
          {label && <Form.Label>{label}</Form.Label>}
          {strength &&
            <span className="d-flex">
              <label>Strength</label>
              <PasswordStrengthBar className="password-strength" password={value} minLength={5} />
            </span>
          }
        </span>
        <Form.Control
          name={name}
          type={passwordShow ? "text" : "password"}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />

        {passwordShow ? (
          <BsFillEyeFill
            className="password-icon"
            onClick={() => setPasswordShow(false)}
          />
        ) : (
          <BsFillEyeSlashFill
            className="password-icon"
            onClick={() => setPasswordShow(true)}
          />
        )}

        {inputStatus && <Form.Text className='text-danger danger-border'>{inputStatus}</Form.Text>}
        {inputInfo && <Form.Text className='input-text'>{inputInfo}</Form.Text>}
      </Form.Group>
    </InputWrapper>
  );
};

export default Index;
