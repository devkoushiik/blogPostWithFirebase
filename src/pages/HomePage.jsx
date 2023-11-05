import { PostCard } from "../components";

export const HomePage = () => {
  const posts = [
    {
      title: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
    officiis!`,
    },
    {
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero illo
    blanditiis placeat ex animi corrupti magni nostrum culpa eveniet facilis
    provident, est autem quidem numquam aut quis laudantium iste tempore?`,
    },
  ];
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
