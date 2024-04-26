import 'bootstrap/dist/css/bootstrap.css'
import '@styles/globals.css';
import {useEffect} from "react";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        // Redirect logic
        if (router.pathname === "/github") {
            console.log("github redirect ding da")
            window.location.href = "https://github.com/wautischer";
        }
    }, [router.pathname]);

    return <Component {...pageProps} />;
}