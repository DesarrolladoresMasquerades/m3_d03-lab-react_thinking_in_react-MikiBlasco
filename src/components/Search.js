import React from 'react';
import {useState} from 'react'

function Search({handleSearch, handleCheck, search, checkBox}) {


  return (
    <div className='searchBlock'>
      <form className="searchBar">
        <label>Search</label>
        <br />
        <input type="text" name="search" value={search} onChange={handleSearch}/>
      </form>
      <br />
      <form className="checkBox">
        <label>Display only products on stock   </label>
        <input type="checkbox" name="stocked" onChange={handleCheck} checkBox={checkBox}  />
      </form>
    </div>
  );
}

export default Search;
