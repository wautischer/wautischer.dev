import Head from 'next/head';
import Link from 'next/link'; // Import Link from next/link
import Navbar from '../components/Navbar';

export default function Projects() {
    return (
        <div>
            <Head>
                <title>Projects - Laurin</title>
                <link rel="icon" type="image/png" href="/logosmall.png"/>
            </Head>
            <Navbar/>
            <div>
                <div className="container mt-3">
                    <h2>Weather RestAPI</h2>
                    <div className="card border-0">
                        <div className="card-body bg-dark text-white">
                            <p>Ein kleines Projekt das von mir im 3. Jahrgang programmiert wurde.</p>
                            <Link href="/projects/basicJS/weather-restapi">
                                View Details
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="container mt-3 pt-4">
                    <h2>Product RestAPI</h2>
                    <div className="card border-0">
                        <div className="card-body bg-dark text-white">
                            <p>Ein kleines Projekt das von mir im 3. Jahrgang programmiert wurde.</p>
                            <Link href="/projects/basicJS/product-restapi">
                                View Details
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="container mt-3 pt-4">
                    <h2>Tank Game</h2>
                    <div className="card border-0">
                        <div className="card-body bg-dark text-white">
                            <p>Ein kleines Projekt das von mir im 3. Jahrgang programmiert wurde.</p>
                            <Link href="/projects/basicJS/tank-game">
                                View Details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
