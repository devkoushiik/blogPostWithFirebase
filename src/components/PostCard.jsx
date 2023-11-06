import { RiDeleteBin6Line } from "react-icons/ri";
import { auth, db } from "../firebase/config";
import { deleteDoc, doc } from "firebase/firestore";

export const PostCard = ({ post, setToggle }) => {
  const { title, description, author, id } = post;

  const isAuth = JSON.parse(localStorage.getItem("isAuth"));

  const handleDelete = async () => {
    const document = doc(db, "posts", id);
    await deleteDoc(document);
    setToggle((toggle) => !toggle);
  };

  return (
    <div className="card">
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <p className="control">
        <span className="author">{author?.name}</span>
        <div
          style={{
            cursor: "pointer",
            color: "red",
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {isAuth && author?.id === auth.currentUser.uid ? (
            <RiDeleteBin6Line onClick={handleDelete} />
          ) : null}
        </div>
      </p>
    </div>
  );
};
