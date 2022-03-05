import React from "react";

function Search(){
    return(
        <div>
           <form>
               <label>Search</label>
               <br/>
               <input type="search" name="search" id=""/>
           </form>
           <br/>
           <form>
               <label>Display only products on stock</label>
               <input type="checkbox" name="search" id=""/>
           </form>
        </div>
    );
}

export default Search