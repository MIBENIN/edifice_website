import "../App.css";
import logo from "../assets/images/edufire.png";
import { Link } from "react-scroll";
const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg position-fixed top-0 start-0 z-2 w-100">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} style={{ width: "8rem" }} alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav text-center text-lg-left ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                delay={10}
                to="home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                delay={10}
                to="about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                delay={10}
                to="projects"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
                delay={10}
                to="services"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
                delay={10}
                to="pricing"
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
                delay={10}
                to="testimonials"
              >
                Testimonials
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
                delay={10}
                to="location"
              >
                Location
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
