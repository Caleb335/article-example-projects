import React from "react";
import Head from "next/head";
import DropDownSelect from "../../../src/container/dropdown-select";

export default function ReactTableDemo() {
  return (
    <React.Fragment>
      <Head>
        <title>DynamicNav Demo</title>
      </Head>
      <DropDownSelect />
    </React.Fragment>
  );
}
