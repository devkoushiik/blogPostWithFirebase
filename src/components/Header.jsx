import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  const isAuth = false;

  return (
    <header>
      <Link to="/">
        <h3 className="logo">BP</h3>
        {/* <img src="" alt="" /> */}
        <span>BlogPost</span>
      </Link>
      <nav className="nav">
        <NavLink to={"/"} className="link">
          Home
        </NavLink>
        {isAuth && (
          <NavLink to={"/create"} className="link">
            Create
          </NavLink>
        )}
        {!isAuth && <button className="auth">Login</button>}
        {isAuth && <button className="auth">Logout</button>}
      </nav>
    </header>
  );
};
