import React from "react";
import styled from "styled-components";
import { InputGroup } from "../../components/role/style/role.styled";
import Role from "../../components/role";
import axios from "axios";

const AuthForm = styled.form`
  width: 500px;
  height: 100%;
  border-radius: 8px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin: 0 auto;
  padding: 20px 40px;
  transform: translate(0, 20%);
  background: #000;

  h2 {
    color: var(--danger);
  }

  .btn {
    height: 55px;
    width: 100%;
    background: var(--danger);
    border: none;
    outline: none;
    font-size: 16px;
    color: #fff;
    font-weight: 600;
    margin-top: 24px;
    margin-bottom: 30px;
    border-radius: 8px;
  }
`;

const DropDownSelect = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [role, setRole] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios({
        method: "POST",
        url: "https://admir-service.herokuapp.com/api/v1/user",
        data: {
          email,
          password,
          role: role.toString(),
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthForm onSubmit={handleSignUp}>
      <h2>Register an Account...</h2>
      <InputGroup>
        <label htmlFor="email">Email address</label>
        <input
          name="email"
          id="email"
          type="email"
          placeholder="Enter email address"
          className="inputs"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="password">Create password</label>
        <input
          name="password"
          id="password"
          type="password"
          placeholder="Create password"
          className="inputs"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputGroup>
      <Role
        staffRole={role}
        roleChange={(role) => setRole(role.map((role) => role.value))}
      />
      <button className="btn">{loading ? "Registering" : "Register"}</button>
    </AuthForm>
  );
};

export default DropDownSelect;
