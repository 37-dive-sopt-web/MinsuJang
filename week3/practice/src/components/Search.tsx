import * as React from "react";

interface SearchProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const Search = ({ handleChange, onSearch }: SearchProps) => {

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={onSearch}>검색</button>
    </div>
  );
};

export default Search;
