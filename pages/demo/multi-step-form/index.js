import React from "react";
import Head from "next/head";
import MainForm from "../../../src/container/multi-step-form/forms";

export default function FormPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Multi Step Form</title>
      </Head>
      <MainForm />
    </React.Fragment>
  );
}
