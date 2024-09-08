import React, { useState, useEffect } from 'react';



const Search = (props) => {

    const handleCountryNameChange = (event)=>{
       props.onHandleCountrySearch(event.target.value);
    }

  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="search country"
        onChange={handleCountryNameChange}
      />
    </div>
  );
};


export default Search;
