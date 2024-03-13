import Styled from "styled-components";
const HeaderWrapper = Styled.div`
height:56px;
position:relative;
padding:12px 35px;
&:before{
    content:'';
    height:100%;
    width:100%;
    background: linear-gradient(90deg, #04949D 28.13%, #0057D3 100%);
    position:absolute;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    z-index:-1;
    top:0;
    left:0;
}

&.auth-header{
    .right-section{
        display: none!important;
    }
}
.logo{
    background-color:${({ theme }) => theme["white-color"]};
    height:32px;
    width:32px;
    border-radius:12px;
}
.tab-list{
    margin-left:80px;
    span{
            color:${({ theme }) => theme["white-color"]};
            font-size:${({ theme }) => theme["base-font-size"]};
            /* padding: 6px 25px; */
            padding: 6px 24px;
            padding-right: 28px;
            letter-spacing: 0.02em;
            cursor:pointer;
            &:hover{
                text-decoration:underline;
            }
    }
}
.right-section{
    grid-column-gap:23px;
    svg{
        color:${({ theme }) => theme["white-color"]};
        font-size:18px;
    }
}

.header-dropdown{
    background: transparent;
    border: none;
    padding: 0px !important;
    outline: none;
    &:after{ display: none; }
}

`;
export { HeaderWrapper };
