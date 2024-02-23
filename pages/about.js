import Navbar from '../components/Navbar';
import Head from "next/head";

export default function about(){
    return(
        <div>
            <Head>
                <title>About - Laurin</title>
                <link rel="icon" type="image/png" href="/logosmall.png" />
            </Head>
            <Navbar />
            <div>
                <h1>Lorem Ipsum about</h1>
            </div>
        </div>
    );
}