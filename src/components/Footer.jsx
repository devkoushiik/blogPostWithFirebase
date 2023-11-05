import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      &copy; 2030 <Link to={"/"}> BlogPost</Link>. All rights is reserved by
      Koushik Ahmed.
    </footer>
  );
};
