import React, { useRef, useEffect } from 'react';
import { render } from 'react-dom';
import { AgGridReact, onGridReady } from 'ag-grid-react';
import { TableWrapper } from './style'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Index = (props) => {
  const {
    gridReady,
    defaultColDef,
    columnDefinitions,
    user_referrals,
    sidebarOpen,
    height,
    rowHeight,
    onSortChange,
    headerHeight,
    loading
  } = props;
  const gridRef = useRef(null);

  useEffect(() => {
    if (loading && gridRef.current.api) {
      gridRef.current.api.showLoadingOverlay();
    } else if (gridRef.current.api) {
      gridRef.current.api.hideOverlay();
    }
  }, [loading]);

  return (
    <TableWrapper height={height}>
      <div className={`ag-theme-balham QB-dataTable`} ß>
        <AgGridReact
          ref={gridRef}
          reactNext={true}
          onGridReady={gridReady}
          deltaRowDataMode={false}
          animateRows={true}
          defaultColDef={defaultColDef}
          columnDefs={columnDefinitions}
          onSortChanged={onSortChange}
          rowData={user_referrals}
          rowHeight={rowHeight}
          headerHeight={headerHeight}
          enableCellTextSelection={true}
          getRowNodeId={({ id }) => id}
          pagination={false}
          sideBar={sidebarOpen ? "columns" : false}
          enableRangeSelection={true}
          suppressRowClickSelection={true}
          suppressScrollOnNewData={true}
          paginationPageSize={10}>
        </AgGridReact>
      </div>
    </TableWrapper>
  );
};
export default Index;
