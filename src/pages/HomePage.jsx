import { useEffect, useState } from "react";
import { PostCard, SkeletonCard } from "../components";
import { getDocs, collection } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { useTitle } from "../hooks/useTitle";

export const HomePage = () => {
  const [posts, setPosts] = useState([false, false, false]);
  const postsRef = collection(db, "posts");

  const [toggle, setToggle] = useState(false);

  useTitle("Home");

  const getPosts = async () => {
    const data = await getDocs(postsRef);
    console.log(data);
    setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getPosts();
  }, [toggle]);

  return (
    <section>
      {posts.map((post) =>
        post ? (
          <PostCard
            toggle={toggle}
            setToggle={setToggle}
            key={Math.random().toString()}
            post={post}
          />
        ) : (
          <SkeletonCard key={Math.random().toString()} />
        )
      )}
    </section>
  );
};
