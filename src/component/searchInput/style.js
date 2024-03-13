import Styled from 'styled-components';
const largeInput = (theme, type) => {
  return `
            input{
            height:44px;
            font-size:16px;
            letter-spacing: 0.04em;
            &::placeholder{
                font-size:16px;
            }
            }
              svg{
               font-size:16px;

                top: 15px;
                right: 21px;

            }
        `;
};
const SearchInputWrapper = Styled.div`
    position:relative;
    input{
        height:32px;
        background-color:${({ theme }) => theme['white-color']};
        min-width:228px;
        font-size:${({ theme }) => theme['base-font-size']};
        color:${({ theme }) => theme['label-color']};
        &::placeholder{
            font-size:${({ theme }) => theme['base-font-size']};
        }
    }
    svg{
        position:absolute;
        top:10px;
        right:13px;
        z-index:99;
    }
    .form-result{
        .name{
            font-size:11px;
            color:${({ theme }) => theme['secondary-color']};
        }
        .caption{
            font-size:${({ theme }) => theme['xs-small-size']};
            color:${({ theme }) => theme['label-color']};
        }
    }
    ${({ large, theme }) => large && largeInput(theme)};
`
export { SearchInputWrapper }
