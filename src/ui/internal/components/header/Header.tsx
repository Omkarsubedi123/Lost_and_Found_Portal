import { NavLink } from "react-router-dom";

const Header = () => {
  const NavBar = [
    { title: "Dashboard", path: "/" },
    { title: "Report Lost Items", path: "/Lost" },
    { title: "Report Found Items", path: "/Found" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow  fixed-top">
      <div className="container d-flex align-items-center">
        {/* Logo Section */}
        <NavLink className="navbar-brand fw-bold text-primary" to="/">
          <img src="/logo.png" alt="Logo" width="50" className="me-2" />
          Lost & Found
        </NavLink>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex  gap-4">
            {NavBar.map((item) => (
              <li key={item.title} className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link fw-semibold px-3 py-2 rounded position-relative ${
                      isActive ? "text-primary active-link " : "text-dark"
                    }`
                  }
                  to={item.path}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
            {/* Login & Signup Buttons */}
            <li className="nav-item">
              <NavLink
                to="/Login"
                className="btn btn-outline-primary px-4 py-2 fw-bold"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Signup"
                className="btn btn-primary px-4 py-2 fw-bold"
              >
                Signup
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
