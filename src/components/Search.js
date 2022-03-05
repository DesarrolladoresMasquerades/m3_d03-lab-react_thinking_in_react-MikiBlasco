import React from 'react';

function Search() {
  return (
    <div className='searchBlock'>
      <form className="searchBar">
        <label>Search</label>
        <br />
        <input type="search" name="search" id="" />
      </form>
      <br />
      <form className="checkBox">
        <label>Display only products on stock   </label>
        <input type="checkbox" name="search" id="" />
      </form>
    </div>
  );
}

export default Search;
