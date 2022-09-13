// multi string search, string is separated by comma

import React, { useState } from "react";

const Search = () => {
  const arr = ["apple", "banana", "orange", "pineapple", "mango"];

  const [search, setSearch] = useState([]);

  const changeHandler = (e) => {
    setSearch(e.target.value.split(", "));
  };

  return (
    <div>
      <br />
      <br />
      <label>Search </label>
      <input type="text" onChange={changeHandler} />
      <br />
      <br />
      <ul>
        {arr.map((val, key) => {
          for (let i = 0; i < search.length; i++) {
            if (val.toLowerCase().includes(search[i].toLowerCase())) {
                console.log(val, key)
              return <li key={key}>{val}</li>;
            }
          }
        })}
      </ul>
    </div>
  );
};

export default Search;
