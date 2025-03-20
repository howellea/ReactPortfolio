export default function Footerbar({ links }) {
    return (
        <footer className="bg-dark text-white py-4 mt-auto">
            <div className="container text-center">
            <ul className="nav justify-content-center">
                {links.map((link, index) => (
                <li key={index} className="nav-item mx-2">
                    <a
                    href={link.href}
                    className="nav-link text-white d-flex align-items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    {link.icon}
                    <span className="ms-2">{link.label}</span>
                    </a>
                </li>
                ))}
            </ul>
            <p className="mt-3">&copy; {new Date().getFullYear()} EDDY HOWELL</p>
            </div>
        </footer>
        );
    }