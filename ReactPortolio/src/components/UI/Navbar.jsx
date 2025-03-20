export default function Nav({ links }) {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container-fluid"> </div>
              {/* Logo on the left, wrapped in a Link to home */}
          <div className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={PortfolioLogo}
            alt="Portfolio Logo"
            width="40" // adjust as needed
            height="40" // adjust as needed
            className="d-inline-block align-text-top me-2"/>
                       {/* Nav Links */}
            <span className="text-white">My Portfolio</span>
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => link)}
              </ul>
            </div>
        </div>
      </div>
    </nav>
  );
}

