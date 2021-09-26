import React from "react";
import styled from "styled-components";
import Input from "../../components/Input";
import { queryOptions } from "../../utils/options";
import { FiUser } from "react-icons/fi";
import { HiMail } from "react-icons/hi";

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

  .users-card {
    height: 56%;
    width: 32%;
    margin: 0 15px 30px 0;
    background: #fff;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    padding: 0 15px 0 15px;
  }

  .users-card p {
    text-transform: capitalize;
  }

  .users-card p span svg {
    font-size: 20px;
    margin: 0 10px 0 0;
    color: var(--danger);
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

  const getuserData = () => {
    fetch(
      `https://api.kelvindata.com/rest/v1/search-v2?lastName=${lastName}&firstName=${firstName}&apiKey=${process.env.NEXT_PUBLIC_DATA_KEY}`,
      queryOptions.headers
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
        {!userData & userData
          ? "loading..."
          : userData.map((users, index) => {
              return (
                <div className="users-card" key={index}>
                  <p>
                    <span>
                      <FiUser />
                    </span>{" "}
                    {users.name.full}
                  </p>
                  <p>
                    <span>
                      <HiMail />
                    </span>
                    {users.emailAddresses[0]
                      ? users.emailAddresses[0]
                      : "no data"}
                  </p>
                  <p>Title: {users.employments[0].title}</p>
                  <p>
                    Seniority:{" "}
                    {users.employments[0].seniority
                      ? users.employments[0].seniority
                      : "no data"}
                  </p>
                  <p>
                    Organization:{" "}
                    {users.employments[0].organization.name
                      ? users.employments[0].organization.name
                      : "no data"}
                  </p>
                </div>
              );
            })}
      </div>
    </Wrapper>
  );
};

export default UserAPIComponent;
