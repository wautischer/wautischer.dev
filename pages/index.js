import Navbar from '../components/Navbar';
import Head from "next/head";

export default function Home() {
  return (
      <div>
          <Head>
              <title>Laurin - Software Engineer</title>
          </Head>
          <Navbar />
          <div className="container">
              <h1>Lorem Ipsum</h1>
          </div>
      </div>
  )
}
