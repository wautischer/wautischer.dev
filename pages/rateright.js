import Head from "next/head";

export default function Rateright() {
    return (
        <div>
            <Head>
                <title>RateRight Info</title>
                <link rel="icon" type="image/png" href="/logosmall.png" />
            </Head>

            <div className="container mt-5">
                <div className="row justify-content-center text-center">
                    <h1 className="pb-4">Contact Us</h1>
                    <div className="col-md-4 mb-4">
                        <div className="card bg-black text-white rounded-5">
                            <div className="card-body text-center">
                                <h2 className="card-title fw-bold">Peter Gigler MsC</h2>
                                <button
                                    className="btn btn-primary bg-dark border-0"
                                    onClick={() => {
                                        window.location.href = 'mailto:recipient@example.com';
                                    }}
                                >peter.gigler@htl-klu.at
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card bg-black text-white rounded-5">
                            <div className="card-body text-center">
                                <h5 className="card-title">Stefan Schaar</h5>
                                <button
                                    className="btn btn-primary bg-dark border-0"
                                    onClick={() => {
                                        window.location.href = 'mailto:recipient@example.com';
                                    }}
                                >stefan.schaar@edu.htl-klu.at
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card bg-black text-white rounded-5">
                            <div className="card-body text-center">
                                <h5 className="card-title">Laurin Wautischer</h5>
                                <button
                                    className="btn btn-primary bg-dark border-0"
                                    onClick={() => {
                                        window.location.href = 'mailto:recipient@example.com';
                                    }}
                                >laurin.wautischer@edu.htl-klu.at
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
