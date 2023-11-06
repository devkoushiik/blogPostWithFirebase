import { Link, NavLink, UNSAFE_DataRouterStateContext } from "react-router-dom";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase/config";
import { useState } from "react";

export const Header = () => {
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("isAuth")) || false
  );

  const handleLogin = () => {
    signInWithPopup(auth, provider).then((res) => {
      console.log(res.user.displayName);
      setIsAuth(true);
      localStorage.setItem("isAuth", true);
    });
  };

  const handleLogout = () => {
    signOut(auth);
    setIsAuth(false);
    localStorage.setItem("isAuth", false);
  };

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
        {!isAuth && (
          <button onClick={handleLogin} className="auth">
            Login
          </button>
        )}
        {isAuth && (
          <button onClick={handleLogout} className="auth">
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};
