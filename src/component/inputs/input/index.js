// import React from "react";
// import { InputWrapper } from "../style";
// import {
//   BsSearch,
//   BsArrowReturnRight,
//   BsFillCreditCardFill,
// } from "react-icons/bs";
// import { Form } from "react-bootstrap";
// const Index = (props) => {
//   const {
//     label,
//     type,
//     placeholder,
//     inputStatus,
//     onChange,
//     required,
//     value,
//     name,
//     onBlur,
//     autoComplete,
//     disabled,
//     as,
//     rows,
//     width,
//     height,
//     search,
//     searchwitharrow,
//     marginBottom,
//   } = props;
//   return (
//     <InputWrapper width={width} height={height} marginBottom={marginBottom}>
//       <Form.Group className="position-relative input-wrapper">
//         {label && <Form.Label>{label}</Form.Label>}
//         <span className="position-relative input-container">
//           <Form.Control
//             autoComplete={autoComplete}
//             type={type}
//             placeholder={placeholder}
//             value={value}
//             onChange={onChange}
//             required={required}
//             name={name}
//             onBlur={onBlur}
//             disabled={disabled}
//             className={inputStatus ? "danger-border" : ""}
//             as={as || undefined}
//             rows={rows || undefined}
//           />
//           {search && <BsSearch className="cursor-pointer search-icon" />}
//           {searchwitharrow && (
//             <BsArrowReturnRight className="cursor-pointer search-icon" />
//           )}
//         </span>
//       </Form.Group>
//     </InputWrapper>
//   );
// };

// export default Index;

import React from 'react'
import { InputWrapper } from '../style'
import { Form } from "react-bootstrap"
import {BsSearch , BsArrowReturnRight , BsFillCreditCardFill} from "react-icons/bs"
const Index = (props) => {
  const {
    label,
    type,
    min,
    className,
    placeholder,
    inputStatus,
    inputInfo,
    onChange,
    searchwitharrow,
    required,
    value,
    name,
    cardicon,
    onBlur,
    autoComplete,
    disabled,
    as,
    rows,
    width,
    height,
    readonly,
    search
  } = props;
  return (
    <InputWrapper className={className} width={width} height={height}>
      <Form.Group className="position-relative input-wrapper" >
        {label && <Form.Label>{label}</Form.Label>}
        <span className='position-relative input-container'>
          <Form.Control
          autoComplete={autoComplete}
          type={type}
          min={min}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          name={name}
          onBlur={onBlur}
          disabled={disabled}
          className={inputStatus ? "danger-border" : ""}
          as={as || undefined}
          rows={rows || undefined}
          readonly = {readonly}
        />
          {search &&

          <BsSearch className='cursor-pointer search-icon'  />

          }
          {searchwitharrow &&

          <BsArrowReturnRight className='cursor-pointer search-icon' />

          }
          {cardicon &&

          <BsFillCreditCardFill className='cursor-pointer search-icon credit-card' />

          }
        </span>
        {inputStatus && <Form.Text className='text-danger danger-border'>{inputStatus}</Form.Text> }
        {inputInfo && <Form.Text className='text-info'>{inputInfo}</Form.Text> }
      </Form.Group>
    </InputWrapper>
  )
}

export default Index

