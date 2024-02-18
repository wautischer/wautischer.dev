// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/" passHref>
                        <div>Home</div>
                    </Link>
                </li>
                <li>
                    <Link href="/projects" passHref>
                        <div>Projects</div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
