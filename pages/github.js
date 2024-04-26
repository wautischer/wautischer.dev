import Head from "next/head";
import Link from "next/link";

export default function Github() {
    return (
        <div className="text-center">
            <Head>
                <title>About - Laurin</title>
                <link rel="icon" type="image/png" href="/logosmall.png" />
            </Head>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <img src="/rectangle.gif" alt="redirect Image" />
                <div>
                    <h1 className="m-0">Waiting for redirect...</h1>
                </div>
                <div>
                    <h4 className="m-0">or click <Link href="https://github.com/wautischer">here</Link></h4>
                </div>
            </div>
        </div>
    );
}
