import Head from "next/head";
import Header from "../src/components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Caleb's article examples</title>
      </Head>
      <Header />
      <h1>All my article examples will go here</h1>
    </div>
  );
}
