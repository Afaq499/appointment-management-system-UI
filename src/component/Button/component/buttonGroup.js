import React, { useState } from "react";
import { ToggleButton, ButtonGroup, ToggleButtonGroup } from "react-bootstrap";
import { ButtonGroupWrappr } from "../style";
const Index = (props) => {
  const { label, onAsinTypeChange } = props;
  const button = [
    { name: 'Parent', value: 1 },
    { name: 'Child', value: 2 },
  ];

  const onAsinChange = (value) => {
    onAsinTypeChange(value);
  };

  return (
    <ButtonGroupWrappr>
      <div className="button-group">
        <ButtonGroup size="sm" className="mb-2">
          {button?.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant="outline-primary"
              name="radio"
              value={radio.value}
              checked={label == radio.value}
              onChange={(e) => onAsinChange(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
    </ButtonGroupWrappr>
  );
};

export default Index;
