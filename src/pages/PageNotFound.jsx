import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <section>
      <Link to={"/"}>
        <button
          style={{
            padding: "10px",
            background: "dodgerblue",
            color: "white",
            borderRadius: "20px",
            marginTop: "20px",
            marginBottom: "20px",
            cursor: "pointer",
          }}
        >
          Back to home
        </button>
      </Link>
      <p>404 / Page Not Found</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <img
          width={"300"}
          src="../../public/not found.svg"
          alt="page not found img"
        />
      </div>
    </section>
  );
};
