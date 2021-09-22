import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { demos } from "../src/utils/demo-data";
import Head from "next/head";

const DemoWrapper = styled.section`
  padding: 0 80px 0 80px;

  h1 {
    text-align: center;
    color: var(--primary-demo);
  }

  .demos-container {
    width: 100%;
    height: 100%;
    padding: 30px 0 30px 0;
    display: flex;
    // justify-content: space-around;
    flex-wrap: wrap;
  }

  .demo {
    width: 380px;
    height: 200px;
    border-radius: 10px;
    border: 1px solid var(--primary-demo);
    margin: 0 0 0 10px;
    padding: 10px 15px 10px 15px;
    color: #2e294e;
  }

  .demo:hover {
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: 1px 3px 1px var(--primary-demo);
    transition: all ease-in 0.3s;
  }

  .demo-name {
    font-size: 20px;
    font-weight: 400;
  }

  .demo-brief {
    height: 65px;
  }

  @media only screen and (min-width: 0px) and (max-width: 992px) {
    padding: 0 15px 0 22px;

    .demo {
      margin: 0;
      margin-bottom: 20px;
    }
  }
`;

const DemoPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Demos &mdash; Article example</title>
      </Head>
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
    </React.Fragment>
  );
};

export default DemoPage;
