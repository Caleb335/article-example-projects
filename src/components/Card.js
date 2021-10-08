import React from "react";
import { FiUser } from "react-icons/fi";
import { HiMail } from "react-icons/hi";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 56%;
  width: 32%;
  margin: 0 15px 30px 0;
  background: #fff;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 0 15px 0 15px;

  p {
    text-transform: capitalize;
  }

  p span svg {
    font-size: 20px;
    margin: 0 10px 0 0;
    color: var(--danger);
  }

  @media only screen and (max-width: 576px) {
    width: 100%;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    width: 47%;
  }
`;

const Card = ({ result }) => {
  return (
    <>
      {result.map((users, index) => {
        return (
          <Wrapper className="users-card" key={index}>
            <p>
              <span>
                <FiUser />
              </span>{" "}
              {users.name.full !== null ? users.name.full : "no name data"}
            </p>
            <p>
              <span>
                <HiMail />
              </span>
              {users.emailAddresses[0] !== null
                ? users.emailAddresses[0]
                : "no data"}
            </p>
            <p>Title: {users.employments[0].title}</p>
            <p>
              Seniority:{" "}
              {users.employments[0].seniority !== null
                ? users.employments[0].seniority
                : "no seniority info"}
            </p>
            <p>
              Organization:{" "}
              {users.employments[0].organization.name !== null
                ? users.employments[0].organization.name
                : "no employment info"}
            </p>
          </Wrapper>
        );
      })}
    </>
  );
};

export default Card;
