
import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { BsSearch } from "react-icons/bs"
import { SearchInputWrapper } from "../searchInput/style"
function App({ items, onSelect, placeholder, onChange, value }) {
  // note: the id field is mandatory

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log('hover => ', result)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <div className='d-flex form-result'>
        {item.img ? <img src={item.img} alt={item.name} /> : ''}
        <div className='d-flex flex-column ms-2'>
          <span className='name'>{item.name}</span>
          <span className='caption'>{item.caption}</span>
        </div>
      </div>
    )
  }

  return (
    <SearchInputWrapper>
      <div style={{ width: 228, position: "relative" }}>
        <ReactSearchAutocomplete
          items={items}
          onSearch={onChange}
          inputSearchString={value}
          onHover={handleOnHover}
          onSelect={onSelect}
          onFocus={handleOnFocus}
          autoFocus={false}
          formatResult={formatResult}
          showClear={false}
          showIcon={false}
          placeholder={placeholder}
          styling={{
            borderRadius: "6px",
            height: "32px",
            maxWidth: "228px",
            boxShadow: "none",
            fontSize: 13,
            zIndex: 1
          }}
        />
        <BsSearch className='link-text' />
      </div>
    </SearchInputWrapper>
  )
}

export default App
