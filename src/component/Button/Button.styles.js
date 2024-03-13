import styled from "styled-components";
import Button from 'react-bootstrap/Button';
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
const largeButton = (theme, type) => {
  return `
            padding: 7px 25px;
            &:hover, &:focus {
              background: transparent;
              border: 1px solid ${type !== "default" && theme[`${type}-hover`]};
              color: ${type !== "default" && theme[`${type}-hover`]};
            }
        `;
};
const ButtonStyled = styled(Button)`
    font-size: 13px;
    line-height: 16px;
    border:1px solid ${(props, theme) => props.variant === 'outlined' ? theme["primary-color"] : ''};
    padding: 2px 22px;
    background-color: ${(props) => props.theme["primary-color"]};
    color: ${(props, theme) => props.outlined === 'outlined' ? 'transparent' : props.theme["primary-color"]};
    width: ${(props) => props.width};
    border-radius:4px;
    margin-bottom: 16px;
    font-weight:700;
    ${({ outlined, theme, type }) => outlined && outline(theme, type)};
    ${({ large, theme, type }) => large && largeButton(theme, type)};
    ${(props) => props.outlined && `
        background-color: transparent;
        color:${props.theme['link-color']};
        border-color:${props.theme['link-color']};
        &:hover{
        background-color: transparent;
        color:${props.theme['link-color']};
        border-color::${props.theme['link-color']};
        }
    `}
`;
export default ButtonStyled
