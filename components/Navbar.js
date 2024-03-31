import {useRouter} from 'next/router';

const Navbar = () => {
    const router = useRouter();
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
                <div className="ms-auto">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
