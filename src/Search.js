import React, {useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

function Search({ placeholder, value, setValue }) {
  const [typedValue, setTypedValue] = useState(value);

  const handleSearch = (event) => {
    const searchWord = event.target.value;
    setTypedValue(searchWord);
  };

  const onClick = () => {
    setValue(typedValue);
  };

  return (
    <div className="search">
      <div className="searchInput">
        <input
          type="text"
          placeholder={placeholder}
          value={typedValue}
          onChange={handleSearch}
        />
        <div className="searchIcon">
          <SearchIcon onClick={onClick} />
        </div>
      </div>
    </div>
  );
}

export default Search;
