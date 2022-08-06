import type { NextPage } from 'next'
import Link from "next/link";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="container container--full container--content-center">
    <Head>
        <title>Homepage</title>
    </Head>
      <h1 className="text-4xl">Welcome to the cinema!</h1>
      <Link href="/movies" className="text-xl">Check our movies out!</Link>
    </div>
  )
}

export default Home
