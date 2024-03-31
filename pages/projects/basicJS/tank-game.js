import Head from 'next/head';
import Navbar from '/components/Navbar';

export default function tankGame() {
    return (
        <div>
            <Head>
                <title>Projects - Tank Game</title>
                <link rel="icon" type="image/png" href="/logosmall.png" />
            </Head>
            <Navbar />
            <div>
                <h1 className="text-center text-danger">DETAILS COMING SOON!</h1>
            </div>
        </div>
    );
}
