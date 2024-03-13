import Styled from "styled-components";
import Button from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
const outline = (theme, type) => {
  return `
          background: transparent;
          border: 1px solid  #0057D3ß;
          color:${({ theme }) => theme['link-color']};
          &:hover, &:focus {
            background: transparent;
            border: 1px solid ${type !== "default" && theme[`${type}-hover`]};
            color: ${type !== "default" && theme[`${type}-hover`]};
          }
      `;
};
const transparents = (theme, type) => {
  return `
          background: ${type !== "default" && theme["#515D70"]};
          border-width: 0px;
          color: ${type !== "default" && theme[`${type}-color`]};
          &:hover, &:focus {
              background: ${type !== "default" && theme[`${type}-hover`]}15;
              border-width: 0px;
              color: ${type !== "default" && theme[`${type}-hover`]};
          }
      `;
};
const largeButton = (theme, type) => {
  console.log(type, "sss")
  return `
          background: ${type !== "default" && theme["#515D70"]};
          padding:8px 24px;
          color: ${type !== "default" && theme[`${type}-color`]};
          &:hover, &:focus {
              background: ${type !== "default" && theme[`${type}-hover`]}15;
              border-width: 0px;
              color: ${type !== "default" && theme[`${type}-hover`]};
          }
      `;
};
const ButtonStyled = Styled(Button)`
    font-size: 13px;
    line-height: 16px;
    border:1px solid #000;
    padding: 7px 24px;
    border-width: 0px;
    background: ${(props, theme) => props.primary ? theme['primary-color'] : ''};
    font-weight: 500;
    box-shadow: 0 0;
    &:hover, &:focus {
        background: ${({ type, theme }) =>
    type !== "default" && theme[`${type}-hover`]};
        color: ${({ type }) => (type !== "default" ? "#ffffff" : "#5A5F7D")};
    }
    i,
    svg,
    img{
        width: 16px;
        height: 16px;
        +span{
            ${({ theme }) => (theme.rtl ? "margin-right" : "margin-left")}: 6px;
        }
    }
    &.btn-large{
      padding:8px 24px;

    }
    ${({ outlined, theme, type }) => outlined && outline(theme, type)};
    ${({ transparent, theme, type }) => transparent && transparents(theme, type)};
    ${({ large, theme, type }) => largeButton && console.log("hello")};

`;
const ButtonGroupWrappr = Styled(ButtonGroup)`
   .button-group{
      display:flex;
      flex-direction:column;
      label{
        margin-bottom:4px;
        color: ${({ theme }) => theme['regent_gray']};
        font-size: ${({ theme }) => theme['base-font-size-small']};
      }
      .btn-outline-primary{
        border-color:${({ theme }) => theme['text-primary']};
        color:${({ theme }) => theme['label-color']};
        padding: 2px 22px;
        &:hover{
          background:${({ theme }) => theme['background-color']};
          color:${({ theme }) => theme['white-color']};
        }
        &:focus{
          box-shadow:none
        }
      }
      .btn-check:checked+.btn-outline-primary{
        background:${({ theme }) => theme['background-color']};
        color:${({ theme }) => theme['white-color']};
    }
`
export { ButtonStyled, ButtonGroupWrappr };
