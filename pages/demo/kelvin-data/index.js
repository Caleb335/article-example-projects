import React from "react";
import Head from "next/head";
import UserAPIComponent from "../../../src/container/users";

export default function KelvinDataPage() {
  return (
    <React.Fragment>
      <Head>
        <title>User Data Demo</title>
      </Head>
      <UserAPIComponent />
    </React.Fragment>
  );
}
