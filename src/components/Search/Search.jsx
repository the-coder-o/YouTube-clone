import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./search.css";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const submitSearchHandle = (e) => {
    e.preventDefault();
    if (searchValue) {
      navigate(`/search-elements/${searchValue}`);
      setSearchValue("");
    }
  };

  return (
    <div className="search__input">
      <form onSubmit={submitSearchHandle} id="search__form">
        <div className="icon__search">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type="search"
            placeholder="Введите запрос"
          />
        </div>
        <div className="search__microphone">
          <i class="fa-solid fa-microphone"></i>
        </div>
      </form>
    </div>
  );
};

export default Search;
