import React, { useState } from "react";

const Search = (props) => {
  const [data, setData] = useState("");
  const handleSearch = (event) => {
    setData(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(data);
  };

  return (
    <div className="ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="field">
          <label>Search</label>
          <input type="text" value={data} onChange={handleSearch} />
        </div>
      </form>
    </div>
  );
};

export default Search;
