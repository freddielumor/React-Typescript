import * as React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Link className="header__brand" to="/">
        React TS
      </Link>

      <nav className="header__nav">
        <Link className="header__navLink" to="/">
          Home
        </Link>
        <Link className="header__navLink" to="/teams">
          Teams
        </Link>
        <Link className="header__navLink" to="/players">
          Players
        </Link>
      </nav>
    </header>
  );
};

export default Header;
