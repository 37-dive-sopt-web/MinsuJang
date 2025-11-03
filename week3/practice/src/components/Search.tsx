/** @tsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as React from "react";

const searchContainer = css`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

interface SearchProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const Search = ({ handleChange, onSearch }: SearchProps) => {

  return (
    <div css={searchContainer}>
      <input type="text" onChange={handleChange} />
      <button onClick={onSearch}>검색</button>
    </div>
  );
};

export default Search;
