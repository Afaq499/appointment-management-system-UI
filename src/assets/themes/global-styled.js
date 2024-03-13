
import { createGlobalStyle, ThemeConsumer } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #F9FAFC;
    font-family: 'Lato', sans-serif;
    font-size: ${({ theme }) => theme['base-font-size']};
    letter-spacing: 0.02em;
  }

    h1{
        font-size:${({ theme }) => theme['base-font-lg']};
        font-weight:${({ theme }) => theme['bold-weight']};
        letter-spacing: 0.02em;
    }
    h2{
        font-size:${({ theme }) => theme['base-font-md']};
        font-weight:${({ theme }) => theme['bold-weight']};
        letter-spacing: 0.02em;
    }
    h3{
        font-size:${({ theme }) => theme['base-size']};
        font-weight: 700;
    }
    .primary-text{
        color:${({ theme }) => theme['primary-color']};
    }
    .link-text{
        color:${({ theme }) => theme['link-color']};
    }
    .label-color{
        color:${({ theme }) => theme['label-color']};
    }
    .success-color{
        color:${({ theme }) => theme['success-color']};
    }
    .success-color{
        color:${({ theme }) => theme['success-color']};
    }
    .danger-color{
        color:${({ theme }) => theme['danger-color']};
    }
    .warning-color{
        color:${({ theme }) => theme['warning-color']};
    }
    svg{
        cursor:pointer;
    }
    .highcharts-credits,.highcharts-axis-title{
        display:none;
    }
    .highcharts-legend highcharts-no-tooltip{
        font-family: 'Lato', sans-serif!important;

    }
    label{
        letter-spacing: 0.02em;
        font-size:11px;
    }
`;
export default GlobalStyles;
