import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) =>
    `px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300
    ${
      isActive
        ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
        : "text-gray-300 hover:bg-gray-800 hover:text-white hover:-translate-y-0.5"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-gray-800 shadow-xl">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-bold text-white">
          My<span className="text-blue-500">App</span>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-2">
          <NavLink to="/" end className={navLinkStyles}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkStyles}>
            About
          </NavLink>

          <NavLink to="/contact" className={navLinkStyles}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
