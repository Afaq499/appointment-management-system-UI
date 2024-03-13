import Styled from 'styled-components';
import Form from 'react-bootstrap/Form';
const CheckBoxWrapper = Styled(Form.Check)`
display:flex;
align-items:center;
margin-bottom: ${(props) => props.marginBottom ? props.marginBottom : "16px"};

input[type="checkbox"] {
    width:16.67px;
    height:16.67px;
    margin-right:12px;
    border-radius:2px;
    position: relative;
    left: 2px;
}
label{
    font-size:${({ theme }) => theme['base-font-size']};
    color:${({ theme }) => theme['secondary-color']};
    letter-spacing: 0.02em;
    margin-top:4px;
    line-height:15px
}
`
export { CheckBoxWrapper }
