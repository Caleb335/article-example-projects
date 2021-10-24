import React from "react";
import Loader from "../../../src/container/loader";
import Head from "next/head";

export default function Preloader() {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);

    setTimeout(() => setLoading(false), 5000);
  }, []);

  return (
    <>
      {!loading ? (
        <React.Fragment>
          <Head>
            <title>React preloader</title>
          </Head>
          <div>
            <h1>Page content</h1>
          </div>
        </React.Fragment>
      ) : (
        <Loader />
      )}
    </>
  );
}
