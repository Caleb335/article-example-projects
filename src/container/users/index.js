import React from "react";
import styled from "styled-components";
import Input from "../../components/Input";
import axios from "axios";
import Card from "../../components/Card";

const Wrapper = styled.section`
  padding: 0 100px 0 100px;
  height: 100%;
  width: 100%;

  h3 {
    font-size: 26px;
    text-align: center;
    color: var(--primary-demo);
  }

  form {
    width: 50%;
    transform: translate(50%, 0%);
  }

  .form-group {
    width: 260px;
  }

  .inputs {
    display: flex;
    justify-content: space-between;
  }

  label {
    display: block;
    padding: 0 0 10px 0;
  }

  .btn-container {
    text-align: center;
    margin-top: 20px;
  }

  .results-container {
    height: 400px;
    width: 100%;
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    padding: 20px 0;
    margin-top: 20px;
  }

  .results-container::-webkit-scrollbar {
    width: 10px;
  }

  .results-container::-webkit-scrollbar-thumb {
    height: 4px;
    background: var(--primary-demo);
    border-radius: 10px;
  }

  .results-container::-webkit-scrollbar-track {
    border: 1px solid var(--primary-demo);
    border-radius: 10px;
  }

  @media only screen and (max-width: 576px) {
    padding: 0 15px 0 15px;
    width: 100%;

    form {
      width: 100%;
      transform: translate(0, 0);
    }

    .form-group {
      padding: 4px;
    }

    .users-card {
      width: 100%;
    }
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    padding: 0 100px 0 100px;
    width: 100%;

    form {
      width: 100%;
      transform: translate(0, 0);
    }

    .users-card {
      width: 47%;
    }
  }
`;

const Button = styled.button`
  height: 45px;
  width: 50%;
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

  const getuserData = async () => {
    axios
      .get(`/api/users?firstName=${firstName}&lastName=${lastName}`, {
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => response)
      .then((response) => {
        setUserData(response.data.data);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getuserData();
  };

  return (
    <Wrapper>
      <h3>Search for Anyone</h3>
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
      <div className="results-container">
        {userData ? <Card result={userData} /> : "loading..."}
      </div>
    </Wrapper>
  );
};

export default UserAPIComponent;
