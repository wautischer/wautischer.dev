// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="navMenu">
            <Link href="/" passHref>
                <div>Home</div>
            </Link>

            <Link href="/work" passHref>
                <div>Work</div>
            </Link>

            <Link href="/about" passHref>
                <div>About</div>
            </Link>
        </nav>
    );
};

export default Navbar;
