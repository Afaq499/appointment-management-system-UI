// import styled from "styled-components";

// const PaginationWrapper = styled.div`
//     height: 54px;
//     background: ${(props) => props.background};
//     padding: 23px 0px 4px 16px;
// .pagination-wrapper{
//     width:100%;
//     .pagination-items-wrapper{
//     .pagination-item {
//     background: #fff;
//     margin: auto 5px;
//     padding: 1px 7px;
//     border-radius:2px;
//     font-size:13px;
//     color:#515D70;
//     cursor: pointer;
//     border:1px solid transparent;
//     &.active{
//         background:${({ theme }) => theme['background-color']};
//         color:${({ theme }) => theme['white-color']};
//     }
//     &:focus, &:hover {
//         border:1px solid #2589FF;
//         color: #2589FF;
//     }
// }

//     }
//     .pagination-icon {
//     background: #fff;
//     margin: auto 5px;
//     padding: 1px 7px;
//     color:${({ theme }) => theme['primary-color']};
//     font-size: 26px;
//     cursor: pointer;
//     border:1px solid transparent;
//     &:focus, &:hover {
//         border:1px solid #2589FF;
//         color: #2589FF;
//     }
// }
//     }

// input {
//     width: 50px;
//     border-radius: 2px;
//     margin-left: 8px;
//     margin-right: 6px;
// }
// .pagination-inputs-wrappper select{
//     background-color:red ;
// }
// .select2-container .select2-selection__control {
//     border: none;
//     max-height: 32px;
//     min-height: 32px;
//     background: transparent;
// }
// .counter-label{
//     color: #515D70;
//     width: 40px;
//     display: block;
// }.select2-container .select2-selection__control .select2-selection__placeholder {
//     color: #515D70;
// }
// select.drop-down-select.form-select {
//     background: transparent;
//     border: none;
//     cursor: pointer;
// }
// .icon-icon-drop:before {
//   content: "\e904";
//   color: #278aff;
//   width: 13px;
//   height: 13px;
//   border: 2px solid #278aff;
//   background: #ffff;
//   border-radius: 23px;
//   font-size: 6px;
//   position: absolute;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   top: 20px;
//   right: -3px;
// }
// .table-pagination{
//     margin-right: -2px;
//     margin-top: 12px;
//     .page-item{
//         .page-link{
//             border:none;
//             color:${({ theme }) => theme['label-color']};
//             font-size:${({ theme }) => theme['base-font-size']};
//             padding: 7px 12px;
//             margin-top:5px;
//             svg{
//                 color:${({ theme }) => theme['primary-color']};
//             }
         
//         }
//         &.active{
//             .page-link{
//             background:${({ theme }) => theme['background-color']}; 
//             color:${({ theme }) => theme['white-color']};
//             border-radius: 2px; 
//             }
//             }
//     }
// }
// `;
// export { PaginationWrapper };

import styled from "styled-components";

const PaginationWrapper = styled.div`
width: 100%;
    height: 49px;
    background: #f8fafb;
    /* bottom: 0; */
    /* left: 80px; */
.pagination-wrapper{
    width:100%;
    padding-left: 15px;
    padding-right:39px;
    .pagination-items-wrapper{

    .pagination-item {
    background: #fff;
    margin: auto 5px;
    padding: 0;
    border-radius:2px;
    font-size:13px;
    color:#515D70;
    width:32px;
    height:32px;
    cursor: pointer;
    border:1px solid transparent;
        margin-left:8px;
        margin-right:0px;
    &.pagination-ellipses{
        background:transparent;
        width:19px; 
        margin-left: 14px;
        margin-right: 7px;
        padding:0;
        &:focus,&:hover{
            border:1px solid transparent;
        color: #2589FF;
        }
    }
    &:focus, &:hover {
        border:1px solid #2589FF;
        color: #2589FF;
    }
}

    }
    .pagination-icon {
    background: #fff;
    cursor: pointer;
    border:1px solid transparent;
    width:32px;
    height:32px;
    margin-left:8px;
    &:focus, &:hover {
        border:1px solid #2589FF;
        color: #2589FF;
    }
    svg{
        color:#2589FF ;
        font-size: 10px;
    }
}
.pagination-input{
    margin-bottom: 0;
    margin-right: 21px;
}
    }

input {
    width: 50px;
    border-radius: 2px;
    margin-left: 8px;
    margin-right: 6px;
}
.pagination-inputs-wrappper select{
    background-color:red ;
}
.css-b62m3t-container {
    position: relative;
    box-sizing: border-box;
    top: 7px;
    right: 16px;
}
.select2-container .select2-selection__control {
    border: none;
    max-height: 32px;
    min-height: 32px;
    background: transparent;
    .select2-selection__value-container{
        padding-left:0;
        padding-right:0;
        margin-left:0;
        margin-right:8px;
    }
    .select2-selection__indicator{
        padding:0;
        padding-top:3px;
    }
    svg{
        width:10px;
        height:10px;
    }
}
.counter-label{
    color: #515D70;
    width: 40px;
    display: block;
}
.jpBOPd .select2-container .select2-selection__control .select2-selection__placeholder {
    color: #515D70;
}
select.drop-down-select.form-select {
    background: transparent;
    border: none;
    cursor: pointer;
}
.icon-icon-drop:before {
  content: "\e904";
  color: #278aff;
  width: 13px;
  height: 13px;
  border: 2px solid #278aff;
  background: #ffff;
  border-radius: 23px;
  font-size: 6px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 20px;
  right: -3px;
}
`;
export { PaginationWrapper };