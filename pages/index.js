import Head from "next/head";
import Header from "../src/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Caleb's article examples</title>
        <link rel="icon" href="/img/codec.png" />
      </Head>
      <Header />
      <h1>All my article examples will go here</h1>
    </>
  );
}
