import Styled from 'styled-components';
const BadgesWrapper = Styled.div`
    display:flex;
    grid-column-gap:8px;
    align-items:center;
    .day-badge{
        background-color:${({ theme }) => theme['white-color']};
        font-size:9px;
        color:${({ theme }) => theme['label-color']};
        font-weight:${({ theme }) => theme['bold-weight']};
        padding:3px 6px;
        cursor:pointer;
        letter-spacing: 0.02em;
        border-radius: 2px;
        &.active{
        background:${({ theme }) => theme['background-color']};
        color:${({ theme }) => theme['white-color']} ;
        }
        .bage-dropdown{
            background-color:#ffffff;
        }
    }
`
export { BadgesWrapper }
