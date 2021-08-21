import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div
      className="search-bar ui segment"
      style={{ backgroundColor: " #ff0000" }}
    >
      <form onSubmit={handleSubmit} className="ui form">
        <div className="field">
          <label style={{ fontWeight: "900", padding: "5px" }}>
            {" "}
            Search Videos
          </label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
