import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { demos } from "./demo-data";

const DemoWrapper = styled.section`
  padding: 0 80px 0 80px;

  h1 {
    text-align: center;
  }

  .demos-container {
    width: 100%;
    height: 100%;
    padding: 30px 0 30px 0;
    display: flex;
    // justify-content: space-around;
  }

  .demo {
    width: 380px;
    height: 200px;
    border-radius: 6px;
    border: 1px solid #73e2a7;
    margin: 0 0 0 30px;
    padding: 10px 15px 10px 15px;
    color: #2e294e;
  }

  .demo:hover {
    cursor: pointer;
  }

  .demo-name {
    font-size: 20px;
    font-weight: 400;
  }

  .demo-brief {
    height: 65px;
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
