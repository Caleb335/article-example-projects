import React from "react";
import styled from "styled-components";
import Search from "../../components/Search";
import { queryOptions } from "../../utils/options";

const Wrapper = styled.section`
  padding: 0 150px 0 150px;
`;

const Button = styled.button`
  height: 45px;
`;

const UserAPIComponent = () => {
  const [userData, setUserData] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState({
    firstName: "",
    lastName: "",
  });
  const [search, setSearch] = React.useState("");

  const handleInputChange = (e) =>
    setSearchTerm({
      ...searchTerm,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const getuserData = () => {
    fetch(
      `https://api.kelvindata.com/rest/v1/search-v2?lastName=${searchTerm.lastName}&firstName=${searchTerm.firstName}&apiKey=${process.env.NEXT_PUBLIC_DATA_KEY}`,
      queryOptions
    )
      .then((response) => response.json())
      .then((response) => {
        setSearchTerm(response);
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getuserData();
  }, [search]);

  return (
    <Wrapper>
      <h3>User API</h3>
      <div className="search-container">
        <div className="input-container">
          <Search
            type="text"
            value={searchTerm.firstName}
            placeholder="First Name"
            onChange={handleInputChange}
          />
          <Search
            type="text"
            value={searchTerm.lastName}
            placeholder="Lastname"
            onChange={handleInputChange}
          />
        </div>
        <Button onClick={() => setSearch(searchTerm)}>Search</Button>
      </div>
    </Wrapper>
  );
};

export default UserAPIComponent;
