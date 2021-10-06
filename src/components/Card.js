import React from "react";
import propTypes from "react";
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
`;

const Card = ({ data: [] }) => {
  return (
    <>
      {data.map((users, index) => {
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
              {users.emailAddresses[0] ? users.emailAddresses[0] : "no data"}
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
    </>
  );
};

export default Card;

Card.propTypes = {
  data: propTypes.array,
};
