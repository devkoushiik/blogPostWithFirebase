export const PostCard = ({ title, description }) => {
  return (
    <div className="card">
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <p className="control">
        <span className="author">Koushik</span>
        <span
          style={{
            border: "2px solid red",
            cursor: "pointer",
          }}
          className="author"
        >
          delete
        </span>
      </p>
    </div>
  );
};
