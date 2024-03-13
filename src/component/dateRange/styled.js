import styled from "styled-components";

const DateRangeWrapper = styled.div`
  .rdrInputRanges {
    .rdrInputRange {
      .rdrInputRangeInput {
        background: rgba(230, 232, 240, 0.5);
        border-radius: 4px;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.04em;
        color: #19181a;
      }
    }
  }
  .rdrDefinedRangesWrapper {
    padding-top: 24px;
    .rdrStaticRanges {
      .rdrStaticRange {
        border-bottom: 1px solid #e6e8f0;
        margin-top: 0;
      }
    }
  }
  .rdrDayNumber span {
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.02em;
  }
  .rdrDay {
    height: 3.5em;
  }
  .rdrStartEdge {
    border-radius: 72px 0px 0px 72px;
  }
  .rdrEndEdge {
    border-radius: 0px 72px 72px 0px;
  }
  .rdrStaticRanges {
    .rdrStaticRange {
      padding-left: 22px;
      padding-right: 22px;
    }
  }
  .rdrNextPrevButton {
    padding: 0 !important;
  }
  .rdrDateDisplayItem {
    border: 1px solid #0057d3;
    border-radius: 4px;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.02em;
    color: #7c8092;
    input {
      height: auto;
      padding-top: 5px;
      padding-bottom:5px;
    }
  }
  .rdrDayHovered {
    background: #f8f7fa;
    border-radius: 8px;
    border:0px;
  }
  .rdrDayStartPreview{
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .rdrDayEndPreview{
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  .rdrMonthAndYearPickers{
    select{
      color: #151A26;
    }
  }
  .rdrDateDisplayItemActive input{
    color:#7C8092;
  }
  .rdrMonthName,
  .rdrWeekDay{
    color: #151A26;
  }
`;
export default DateRangeWrapper;
