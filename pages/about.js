import Navbar from '../components/Navbar';
import Head from "next/head";

export default function about(){
    return(
        <div>
            <Head>
                <title>About - Laurin</title>
            </Head>
            <Navbar />
            <div className="container">
                <h1>Lorem Ipsum</h1>
            </div>
        </div>
    );
}