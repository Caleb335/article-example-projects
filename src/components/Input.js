import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const InputBox = styled.input`
  width: 100%;
  height: 45px;
  border-radius: 5px;
  background: 1px solid ghostwhite;
  border: 1px solid var(--primary-demo);
  padding: 0 10px;
  outline: none;

  ::placeholder {
    color: grey;
    font-size: 15px;
  }
`;

const Input = ({ type, name, placeholder, onChange, ...props }) => {
  return (
    <InputBox
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      {...props}
      required
    />
  );
};

export default Input;

Input.propTypes = {
  type: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
};
