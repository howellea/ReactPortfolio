export default function Navbar({ links }) {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
            <span className="text-white">My Portfolio</span>
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => link)}
              </ul>
            </div>
        </div>
    </nav>
  );
}

