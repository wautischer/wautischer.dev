import Navbar from '../components/Navbar';
import Head from 'next/head';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Laurin - Software Engineer</title>
                <link rel="icon" type="image/png" href="/logosmall.png" />
            </Head>
            <Navbar />
            <div>
                <h1>Lorem Ipsum Home</h1>
            </div>
        </div>
    );
}
