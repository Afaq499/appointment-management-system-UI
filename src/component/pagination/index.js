import Select from "../select/index";
import { PaginationWrapper } from "./style";

import React, { useState, useEffect } from 'react';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';

const Pagination = ({ total, onChange, onlyCount }) => {
  const [totalPages, setTotalPages] = useState(1);
  const [options, SetOptions] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);

  const perPageOptions = [
    { value: 20, label: '20' },
    { value: 50, label: '50' },
    { value: 100, label: '100' },
    { value: 300, label: '300' }
  ];

  useEffect(() => {
    const totalPagesCount = Math.ceil(total / perPage);
    setTotalPages(totalPagesCount);
    SetOptions([]);
    for (let i = 1; i <= totalPagesCount; i++) {
      SetOptions((pre) => [...pre, { value: i, label: i }])
    }
  }, [total, perPage]);

  useEffect(() => {
    const skip = (page - 1) * perPage;
    const limit = perPage;
    onChange({ skip, limit });
  }, [page, perPage]);

  return (
    <PaginationWrapper className="pagination-wrapper d-flex align-items-center position-relative">
      <div className="pagination-wrapper d-flex justify-content-between align-items-center">
        <div className='total-item-wrapper'>
          <span>Total {total} items</span>
        </div>
        {
          onlyCount ? '' : <div className="d-flex justify-content-between align-items-center">
            <div className=" pagination-inputs-wrappper d-flex justify-content-between align-items-center">
              <Select
                onChange={(e) => {
                  setPerPage(e.value);
                }}
                className="border-none"
                placeholder={`${perPage} / page`}
                options={perPageOptions}
                width="68"
                menuPlacement="top"
              ></Select>
              <Select
                onChange={(e) => {
                  setPage(e.value);
                }}
                value={page}
                className="border-none"
                placeholder={`${page} page`}
                options={options}
                width="68"
                menuPlacement="top"
              ></Select>
            </div>
            <div className="pagination-items-wrapper d-flex align-items-center">
              <BsFillCaretLeftFill
                onClick={() => {
                  if (page > 1) {
                    setPage(page - 1);
                  }
                }}
                disabled={true}
                style={{ marginRight: '20px', color: '#2589FF' }}
              />
              <BsFillCaretRightFill
                onClick={() => {
                  if (totalPages > page) {
                    setPage(page + 1);
                  }
                }}
                style={{ color: '#2589FF' }}
              />
            </div>
          </div>
        }
      </div>
    </PaginationWrapper>
  );
};
export default Pagination;
