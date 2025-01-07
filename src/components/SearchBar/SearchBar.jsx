import { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ onSearchChanged }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchChanged(value);
    console.log(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  onSearchChanged: PropTypes.func.isRequired,
};

export default SearchBar;
