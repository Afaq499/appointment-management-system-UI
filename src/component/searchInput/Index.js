import React from 'react';
import Form from 'react-bootstrap/Form';
import { SearchInputWrapper } from "./style"
import { BsSearch } from "react-icons/bs"
const Index = (props) => {
  const { placeholder, large, onChange } = props
  return (
    <SearchInputWrapper large={large ? 1 : 0}>
      <Form.Control
        placeholder={placeholder}
        onChange={onChange}
      />
      <BsSearch className='link-text' />
    </SearchInputWrapper>
  )
}
export default Index;
