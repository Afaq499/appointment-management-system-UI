import React from "react";
import { FormGroup, Form } from "react-bootstrap";
import Select, { components } from "react-select";
import { SelectWrapper } from "./style";
import { BiChevronDown } from "react-icons/bi"
const ReactSelect = (props) => {
  const { 
    label,
    width,
    options,
    placeholder,
    shouldBePlacedOnTopInstead,
    defaultValue,
    value,
    onChange,
    inputStatus,
    disabled,
    marginBottom
  } = props;
  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <BiChevronDown />
      </components.DropdownIndicator>
    );
  };
  return (
    <SelectWrapper width={width} marginBottom={marginBottom}>
      <FormGroup className="select2-container input-wrapper">
        {label && <label className="form-label">{label}</label>}
        <Select
          options={options}
          classNamePrefix="select2-selection"
          defaultValue={defaultValue}
          value={value}
          width={width}
          onChange={onChange}
          isDisabled={disabled}
          menuPlacement={shouldBePlacedOnTopInstead ? "top" : "auto"}
          placeholder={placeholder}
          components={{ DropdownIndicator }}
        />
      </FormGroup>
      {inputStatus && <Form.Text className='text-danger danger-border'>{inputStatus}</Form.Text>}
    </SelectWrapper>
  );
};
export default ReactSelect;
