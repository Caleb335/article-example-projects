import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { demos } from "./demo-data";

const DemoWrapper = styled.section`
  padding: 0 150px 0 150px;

  h1 {
    text-align: center;
  }

  .demos-container {
    width: 100%;
    height: 100%;
    border: 1px solid red;
    padding: 30px 0 30px 0;
  }

  .demo {
  }
`;

const DemoPage = () => {
  return (
    <DemoWrapper>
      <h1>Demo Page</h1>
      <div className="demos-container">
        {demos.map((demo, index) => {
          return (
            <div className="demo" key={index}>
              <p className="demo-name">{demo.name}</p>
              <p className="demo-brief">{demo.breif}</p>
              <Link href={demo.path} className="view-demo">
                See demo
              </Link>
            </div>
          );
        })}
      </div>
    </DemoWrapper>
  );
};

export default DemoPage;
