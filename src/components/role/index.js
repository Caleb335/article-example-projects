import React from "react";
import { InputGroup } from "./style/role.styled";
import Select from "react-dropdown-select";
import propTypes from "prop-types";

const Role = ({ staffRole, roleChange }) => {
  const options = [
    { label: "Worker", value: "Worker" },
    { label: "Manager", value: "Manager" },
  ];

  return (
    <React.Fragment>
      <InputGroup>
        <label htmlFor="fullname">Role</label>
        <Select
          value={staffRole}
          options={options}
          placeholder="Please select your role"
          required={true}
          dropdownPosition="top"
          className="select"
          color="var(--danger)"
          onChange={roleChange}
        />
      </InputGroup>
    </React.Fragment>
  );
};

export default Role;

Role.propTypes = {
  staffRole: propTypes.array.isRequired,
  roleChange: propTypes.func.isRequired,
};
