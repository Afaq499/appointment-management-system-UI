import Styled from 'styled-components';

const SelectWrapper = Styled.div`
  label{
    margin-bottom:4px;
    color:${({ theme }) => theme['label-color']};
    font-size: ${({ theme }) => theme['font-size']};
    margin-top:2px;
  }
  .select2-container {
      display: flex;
      flex-direction:column;
      margin-bottom:${(props) => props.marginBottom};
      width: ${(props) => props.width};
        &.error{
          .select2-selection__control{
            border: 1px solid  ${({ theme }) => theme['danger-color']};
          }
      }
     
.select2-selection__placeholder,
.select2-selection__single-value {
  color:${({ theme }) => theme['label-color']};
  font-size: ${({ theme }) => theme['font-size']};
}
.select2-selection__placeholder{
  color:${({ theme }) => theme['label-color']};
}
  .select2-selection__control {
    max-height: 32px;
    min-height:32px;
    &:focus {
      outline: none;
    }
    &.select2-selection__control--is-focused {
      box-shadow: none !important;
    }
    .select2-selection__rendered {
      line-height: 36px;
      padding-left: 12px;
      color:${({ theme }) => theme['label-color']};
    }

    .select2-selection__arrow {
      height: 34px;
      width: 34px;
      right: 3px;

      b {
        border-color: #cacaca transparent transparent transparent;
        border-width: 6px 6px 0 6px;
      }
    }

    .select2-selection__placeholder {
      color:${({ theme }) => theme['label-color']};
    }
    svg{
        color: ${({ theme }) => theme['link-color']};  
        height:15px;
        width:15px;
    }
  }
  .select2-selection__indicator-separator {
  display: none;
  }
  .select2-selection__input-container{
      margin:0;
  }
}
  `;
export { SelectWrapper };
