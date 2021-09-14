import React from "react";
import Header from "../src/components/Header";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: var(--desktop-pad);

  @media only screen and (max-width: 992px) {
    padding: var(--mobile-pad);
  }
`;

export default function ServicesPage() {
  return (
    <React.Fragment>
      <Header />
      <Wrapper>
        <h1>Services Page</h1>
      </Wrapper>
    </React.Fragment>
  );
}
