import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';
import PortfolioLogo from '../../Images/PortfolioLogo.png';

export default function Nav() {
  return (
    <Navbar
      links={[
        <Link key={1} className="nav-link text-light d-flex flex-column align-items-center" to="/">
          <img
            src={PortfolioLogo}
            alt="Portfolio Logo"
            className="img-fluid mb-2"
            style={{ width: '60px', height: 'auto' }}
          />
          <h1 className="h6 mb-0">Eddy Howell</h1>
        </Link>,

        <Link key={2} className="nav-link text-light" to="/">
          About Me
        </Link>,
        <Link key={3} className="nav-link text-light" to="/portfolio">
          Portfolio
        </Link>,
        <Link key={4} className="nav-link text-light" to="/contact">
          Contact
        </Link>,
        <Link key={5} className="nav-link text-light" to="/resume">
          Resume
        </Link>,
      ]}
    />
  );
}
