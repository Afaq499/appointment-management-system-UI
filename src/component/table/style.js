import Styled from "styled-components";
const TableWrapper = Styled.div`
.QB-dataTable{
    height: ${(props) => `calc(100vh - ${props.height})`};
    font-family: 'Lato', sans-serif;
    padding-top: 0px;
    padding-left: 0px;
}
.QB-dataTable.drawer-table{
    height: calc(100vh - 766px);
    padding-top: 25px;
    padding-left: 5px;
}
.QB-dataTable .ag-header{
    font-family: 'Lato', sans-serif;
}
.QB-dataTable{
    .ag-root{
        width:100% ;
    }
    .ag-root-wrapper{
        border:none
    }
}
.QB_dataTable .ag-cell{
    border-bottom:1px solid ${({ theme }) => theme['secondary-color']};
}
.QB-dataTable .ag-header-viewport{
    border-radius: 4px 4px 0px 0px;
}
.QB-dataTable .ag-header-viewport .ag-header-cell{
    font-weight: 500;
    font-size: 11px;
    line-height: 16px;
    padding: 10px 16px;
    color:${({ theme }) => theme['label-color']};
}
.QB-dataTable .ag-header-viewport .ag-header-cell::after{
    border-right:none;
}
.QB-dataTable .ag-center-cols-viewport .ag-cell-value{
    font-size: 13px;
    line-height: 18px;
    display: flex;
    color:${({ theme }) => theme['secondary-color']};
    align-items:flex-start;
}
.QB-dataTable .ag-center-cols-viewport .ag-cell-wrapper{
    height: auto;
    min-height: 48px;
    padding: 0 4px;
}
.QB-dataTable  .ag-row-even,
.QB-dataTable  .ag-row-odd,
.QB-dataTable  .ag-row{
    border-bottom-color: #EEF1F5;
    background-color: #fff;


}

.QB-dataTable  .ag-paging-panel{
background-color: #F8FAFB;
}
.QB-dataTable .ag-paging-button{
    border-left: 1px solid #C4C4C4;
    padding: 8px 8px 8px 10px;
    color: #1565D8;
}
.QB-dataTable .ag-paging-button .ag-icon{
    font-weight: bold;
}
.QB-dataTable .ag-tool-panel-wrapper{
    width: 320px;
}
.QB-dataTable .ag-rtl .ag-side-bar-left,
.QB-dataTable .ag-ltr .ag-side-bar-right{
    border: top 1px;

}
`;
export { TableWrapper };
