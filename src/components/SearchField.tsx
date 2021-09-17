import React,{ChangeEvent} from 'react';
import Styled from "styled-components";
import search from '../images/search.png'

interface SearchFieldProps {
  onQueryChange: Function;
  text?: string;
}

export default function SearchField(props: SearchFieldProps)  {

  const handleSearch = (event:ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    props.onQueryChange(event.target.value);
  }
   return (
    <SearchWrapper>
      <div className='input-field'>
      <input
        className='search'
        type='text'
        name='text'
        placeholder="Search"
        value={props.text}
        onChange={handleSearch} />
        <i className="search-icon"><img src={search} alt="search" /></i>
      </div>
    </SearchWrapper>
  );
};

const SearchWrapper = Styled.div`
  align-items: center!important;
  display: flex!important;
  input.search:focus, input.search:focus, input.search:focus{
    outline: none;
  }
  .input-field {
    position: relative;
    > input.search {
        border-radius: 100px;
        border: 1px solid #C4C4C4;
        display: flex;
        width: 324px;
        padding-left: 16px;
        padding-right: 50px;
        font-weight: 700;
        font-size: 16px;
        align-items: center;
        height: 40px;
      }

    i {
        position: absolute;
        top: 0px;
        padding: 5px 16px;
        right: 0px;
    }
  }
`;

