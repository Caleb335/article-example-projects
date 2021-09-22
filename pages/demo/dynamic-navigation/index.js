import React from "react";
import Head from "next/head";
import DynamicNavDemo from "../../../src/container/next-nav";

export default function ReactTableDemo() {
  return (
    <React.Fragment>
      <Head>
        <title>DynamicNav Demo</title>
      </Head>
      <DynamicNavDemo />
    </React.Fragment>
  );
}
