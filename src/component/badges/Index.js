import React, { useState } from "react";
import { BadgesWrapper } from "./style"
const Index = (props) => {
  const { badges, onChange } = props
  const [value, setValue] = useState("custom")
  return (
    <BadgesWrapper>
      {badges?.map((badge, index) => {
        return (
          <span
            key={index}
            className={value === badge.value ? "day-badge active" : "day-badge"}
            onClick={() => {
              setValue(badge.value);
              onChange(badge.value);
            }}
          >
            {badge.title}
          </span>
        )
      })}
    </BadgesWrapper>
  )
}
export default Index;
