import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const SearchBox = styled.input`
  width: 500px;
  height: 45px;
  border-radius: 5px;
  background: 1px solid ghostwhite;
  border: 1px solid var(--primary-demo);
  padding: 0 10px;

  ::placeholder {
    color: grey;
    font-size: 15px;
  }
`;

const Search = ({ type, placeholder, onChange, ...props }) => {
  return (
    <SearchBox
      type={type}
      name="search"
      placeholder={placeholder}
      onChange={onChange}
      {...props}
    />
  );
};

export default Search;

Search.propTypes = {
  type: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
