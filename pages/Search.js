// multi string search, optimized.

import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState([]);

  const data = [
    "Bharat",
    "Chanakya",
    "Himanshu",
    "Tejas",
    "Codezeros",
    "Webclues",
  ];

  function filteredData(data, search) {
    var filteredArr = [];
    data.map((val) => {
      for (let i = 0; i < search.length; i++) {
        if (val.toLowerCase().includes(search[i])) {
          filteredArr.push(val);
        }
      }
    });
    return filteredArr;
  }

  console.log("result", filteredData(data, search));

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
        {filteredData(data, search).length !== 0
          ? filteredData(data, search).map((val, key) => (
              <li key={key}>{val}</li>
            ))
          : data.map((val, key) => <li key={key}>{val}</li>)}
      </ul>
    </div>
  );
};

export default Search;
