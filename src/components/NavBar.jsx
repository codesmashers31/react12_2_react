import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">LOGO</div>
        <div className="linkstyle">
          <Link className="linklist" to="/">
            Home
          </Link>
          <Link className="linklist" to="/about">
            About
          </Link>
          <Link className="linklist" to="/product">
            Product
          </Link>
          <Link className="linklist" to="/service">
            Service
          </Link>
          <Link className="linklist" to="/state">
            State
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
