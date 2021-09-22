import "../styles/globals.css";
import "../styles/variables.css";
import Head from "next/head";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta name="theme-color" content="#73e2a7" />
        <link rel="icon" type="image/ico" href="/img/goals.ico" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
