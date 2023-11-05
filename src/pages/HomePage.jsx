import { useEffect, useState } from "react";
import { PostCard } from "../components";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";

export const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const postsRef = collection(db, "posts");

  const getPosts = async () => {
    const data = await getDocs(postsRef);
    console.log(data);
    setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <section>
      {posts.map(({ title, description }) => (
        <PostCard
          title={title}
          key={Math.random().toString()}
          description={description}
        />
      ))}
    </section>
  );
};
