import { NavLink } from "react-router-dom";

const Header = () => {
  const NavBar = [
    { title: "Home", path: "/" },
    { title: "Report Lost Items", path: "/Lost" },
    { title: "Report Found Items", path: "/Found" },
    { title: "Login", path: "/Login" },
    { title: "Signup", path: "/Signup" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        {/* Logo Section */}
        <NavLink className="navbar-brand" to="/">
          <img src="/logo.png" alt="Logo" width="50" />
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex gap-3">
            {NavBar.map((item) => (
              <li key={item.title} className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link nav-hover ${
                      isActive ? "fw-bold text-primary" : "text-dark"
                    }`
                  }
                  to={item.path}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
