import Styled from "styled-components";
const InputWrapper = Styled.div`

&.password-input{
      .password-icon{
        font-size:${({ theme }) => theme["base-size"]};
        position:absolute;
        right: 11px;
        top: 26px;
        color: ${({ theme }) => theme["link-color"]}; 
      }
      
      .password-strength{
        top:1px;
          div{
            width:177px;
            div{
              height:4px!important;
              position:relative;
              &:nth-child(1){
                &:before{
                content:'';
                height:4px;
                background-color:#F9FAFC;
                width: 4px;
                position:absolute;
                left:19px;
              }
              }
              &:nth-child(3){
                &:before{
                content:'';
                height:4px;
                background-color:#F9FAFC;
                width: 4px;
                position:absolute;
                left:19px;
              }
              }
              &:nth-child(5){
                &:before{
                content:'';
                height:4px;
                background-color:#F9FAFC;
                width: 4px;
                position:absolute;
                left:19px;
              }
              }
              &:nth-child(7){
                &:before{
                content:'';
                height:4px;
                background-color:#F9FAFC;
                width: 4px;
                position:absolute;
                left:19px;
              }
              }
            }

          }
          p{
            opacity:0;
            height:0;
          }
      }
      .d-flex{
        label{
          font-size:9px;
          line-height:12px;
          margin-right:8px;
          position: relative;
          top: 1px;
        }
        .form-label{
        letter-spacing: 0.02em;
        font-weight: 500;
        font-size: 11px;
        line-height: 14px;
      }
      }
  }
        width: ${(props) => props.width};
        margin-bottom:${(props) => props.marginBottom};
        .form-label{
            margin-bottom:4px;
            color: ${({ theme }) => theme["label-color"]};
            font-size: ${({ theme }) => theme["base-font-sm"]};
            line-height:14px;
        }
    input{
        line-height:18px;
        border-radius:4px;
        font-size: ${({ theme }) => theme["base-font-size"]}; ;
        height: ${(props) => props.height};
        padding:6px 11px;
        letter-spacing: 0.02em;
        border:1px solid ${({ theme }) => theme["text-primary"]};
        &:focus{
        box-shadow:none;
        }
        &::placeholder{
          font-size: ${({ theme }) => theme["base-font-size"]};
        }

    }
    .search-icon{
        font-size:12px;
        position:absolute;
        right:10px;
        top:14px;
        color: ${({ theme }) => theme["primary-color"]};
        }
        small.form-text{
          &.text-info{
            font-size:8px;
            line-height:9.88px;
            letter-spacing: 0.02em;
          }
          &.input-text{
            font-size:9px;
            line-height:12px;
            font-weight:700;
            letter-spacing: 0.02em;
          }
        }

  `;
const PhoneNumberWrapper = Styled.div`
    margin-bottom:16px;
       .form-label{
           margin-bottom:4px;
           color: ${({ theme }) => theme["label-color"]};
           font-size: ${({ theme }) => theme["base-font-sm"]};
           line-height:14px;
       }
       .PhoneInput{
         border:1px solid ${({ theme }) => theme["text-primary"]};
         border-radius:4px;
         padding: 0px 10px;
         &:focus{
           border-color: #86b7fe;
         }
         .PhoneInputCountrySelectArrow{
           border:0;
           width: 10px;
           height: 7px;
           background-size: cover;
           background-repeat: no-repeat;
           transform: none;
           background-image: url("data:image/svg+xml,%3Csvg stroke='%230057D3' fill='%230057D3' stroke-width='0' viewBox='0 0 16 16' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'%3E%3C/path%3E%3C/svg%3E");
           opacity:1;
         }
         .PhoneInputCountryIcon--border{
           border-radius: 55px;
           overflow: hidden;
           height: 19px;
           box-shadow: none;
           width: 19px;
         }
  
       }
   input{
       border: transparent;
       line-height:18px;
       border-radius:0;
       color: ${({ theme }) => theme["label-color"]};
       font-size: ${({ theme }) => theme["base-font-size"]};
       height: ${(props) => props.height};
       padding:6px 11px;
       padding-left:0;
       letter-spacing: 0.02em;
       &:focus{
       box-shadow:none;
       color: ${({ theme }) => theme["label-color"]};
       }
       &::placeholder{
       font-size:  ${({ theme }) => theme["base-font-size"]};
       color:  ${({ theme }) => theme["label-color"]};
       }
       &:focus-visible{
         outline:none;
       }
  
   }
 `;
export { InputWrapper, PhoneNumberWrapper };
