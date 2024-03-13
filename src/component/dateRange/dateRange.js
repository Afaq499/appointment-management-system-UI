import React, { useState } from "react";
import PropTypes from "prop-types";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import DateRangeWrapper from "./styled";

const DateRangeFilter = ({ onChange, rangeColors, range }) => {
  const handleOnChange = (ranges) => {
    const { selection } = ranges;
    onChange(selection);
  };

  return (
    <DateRangeWrapper>
      <DateRangePicker
        onChange={handleOnChange}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={range}
        rangeColors={rangeColors}
        direction="horizontal"
      />
    </DateRangeWrapper>
  );
};

DateRangeFilter.propTypes = {
  onChange: PropTypes.func,
};

export default DateRangeFilter;
