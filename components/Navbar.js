import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter();
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const getPageName = () => {
        if (router.pathname === '/projects') {
            return 'Projects';
        } else if (router.pathname.startsWith('/projects')) {
            return 'Projects/...';
        }

        switch (router.pathname) {
            case '/':
                return 'Home';
            case '/about':
                return 'About';
            default:
                return '';
        }
    };

    return (
        <nav className="navbar navbar-expand-sm bg-transparent navbar-dark justify-content-center">
            <div className="container-fluid">
                <span className="d-sm-none fs-3 fw-bold">{getPageName()}</span>
                <button className="border-0 navbar-toggler" type="button" onClick={toggleMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse justify-content-center ${isMenuOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav" onClick={closeMenu}>
                        <li className={`nav-item ${router.pathname === '/' ? 'active' : ''}`}>
                            <Link href="/">
                                <p className="nav-link">Home</p>
                            </Link>
                        </li>
                        <li className={`nav-item ${router.pathname === '/projects' ? 'active' : ''}`}>
                            <Link href="/projects">
                                <p className="nav-link">Projects</p>
                            </Link>
                        </li>
                        <li className={`nav-item ${router.pathname === '/about' ? 'active' : ''}`}>
                            <Link href="/about">
                                <p className="nav-link">About</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
