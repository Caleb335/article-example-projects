import React from "react";
import styled from "styled-components";
import Input from "../../components/Input";
import { queryOptions } from "../../utils/options";

const Wrapper = styled.section`
  padding: 0 150px 0 150px;
  height: 100%;
  width: 50%;
  transform: translate(50%, 50%);

  .form-group {
    margin-bottom: 20px;
    display: block;
  }

  label {
    display: block;
    padding: 0 0 10px 0;
  }

  @media only screen and (max-width: 576px) {
    padding: 0 15px 0 15px;
    width: 100%;
    transform: translate(0, 50%);
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    padding: 0 100px 0 100px;
    width: 100%;
    transform: translate(0, 50%);
  }
`;

const Button = styled.button`
  height: 45px;
  width: 100%;
  margin: 0 auto !important;
  background: var(--primary);
  border: none;
  outline: none;
  color: #fff;
  font-size: 18px;
  border-radius: 5px;
  margin-top: 10px !important;

  :hover {
    cursor: pointer;
  }
`;

const UserAPIComponent = () => {
  const [userData, setUserData] = React.useState([]);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  const getuserData = () => {
    fetch(
      `https://api.kelvindata.com/rest/v1/Input-v2?lastName=${InputTerm.lastName}&firstName=${InputTerm.firstName}&apiKey=${process.env.NEXT_PUBLIC_DATA_KEY}`,
      queryOptions
    )
      .then((response) => response.json())
      .then((response) => {
        setUserData(response);
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    getuserData();
  };

  return (
    <Wrapper>
      <h3>User API</h3>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="form-group">
            <label htmlFor="firstname">First name</label>
            <Input
              type="text"
              name="firstname"
              value={firstName}
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Lastname</label>
            <Input
              type="text"
              name="lastname"
              value={lastName}
              placeholder="Lastname"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="btn-container">
          <Button>Search</Button>
        </div>
      </form>
    </Wrapper>
  );
};

export default UserAPIComponent;
