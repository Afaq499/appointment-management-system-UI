import React from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { Form } from "react-bootstrap"
import { PhoneNumberWrapper } from "../style"
const Index = (props) => {
  const { value, placeholder, defaultCountry, label, inputStatus, onChange } = props
  return (
    <PhoneNumberWrapper>
      <Form.Group className="position-relative input-wrapper">
      {label && <Form.Label>{label}</Form.Label>}
      <PhoneInput
        containerClass="borderClass"
        international
        withCountryCallingCode={true}
        defaultCountry={defaultCountry}
        placeholder={placeholder}
        value={value}
        smartCaret={true}
        onChange={onChange}
      />
      {inputStatus && <Form.Text className='text-danger danger-border'>{inputStatus}</Form.Text> } 
      </Form.Group>
    </PhoneNumberWrapper>
  )
}

export default Index
