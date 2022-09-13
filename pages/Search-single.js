// simple search with single string

import React, { useState } from "react";

const Search = () => {
  const arr = ["apple", "banana", "orange", "pineapple", "mango"];

  const [search, setSearch] = useState("");

  const changeHandler = (e) => {
    setSearch(e.target.value);
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
        {arr
          .filter((val) => {
            if (search === "") {
              return val;
            } else if (val.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          })
          .map((val, key) => {
            return <li key={key}>{val}</li>;
          })}
      </ul>
    </div>
  );
};

export default Search;
