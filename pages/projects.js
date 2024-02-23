import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Projects() {
    return (
        <div>
            <Head>
                <title>Projects - Laurin</title>
                <link rel="icon" type="image/png" href="/logosmall.png" />
            </Head>
            <Navbar />
            <div>
                <h1>Lorem Ipsum projects</h1>
            </div>
        </div>
    );
}
