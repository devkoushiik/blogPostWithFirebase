export const CreatePost = () => {
  return (
    <section>
      <div className="heading">
        <h1>Add New Post</h1>
      </div>
      <form className="createPost">
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
