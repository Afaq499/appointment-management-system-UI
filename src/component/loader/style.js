import Styled from "styled-components";
const LoaderWrapper = Styled.div`
        background: rgba(255, 255, 255, 0.7);
    position:absolute;
    width: 100%;
    height: 100%;
    left: 0;
    z-index: 12;
    top: 0;
    transition:0.3s all ease-in;
    .loader{
        position: absolute; 
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 140px;
    height: 70px;
    }
  svg path,
svg rect{
  fill: #04949D;
}
  `;
export { LoaderWrapper };
