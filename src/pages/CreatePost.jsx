import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { useNavigate } from "react-router-dom";

export const CreatePost = () => {
  const navigate = useNavigate();
  const postRef = collection(db, "posts");

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    const document = {
      title: e.target.title.value,
      description: e.target.description.value,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    };
    await addDoc(postRef, document);
    navigate("/");
  };

  return (
    <section>
      <div className="heading">
        <h1>Add New Post</h1>
      </div>
      <form onSubmit={handleSubmitPost} className="createPost">
        <input
          type="text"
          className="title"
          name="title"
          placeholder="Title"
          maxLength={"50"}
          required
        />
        <textarea
          name="description"
          id=""
          maxLength={600}
          required
          className="description"
          placeholder="Description"
        ></textarea>
        <button type="submit" className="submit">
          Create
        </button>
      </form>
    </section>
  );
};

// JS has some incredible dom-manipulation power, Which gives him an additional advantage over other languages. For this reason, JS is getting popular day by day.

// Some good libraries and frameworks are -
// React, Angular, Vue, Svelt, Next JS, Remix and many more.

// So don't dally, Start learning JS today.
