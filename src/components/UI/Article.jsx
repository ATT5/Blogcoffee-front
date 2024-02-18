import { useContext } from "react";
import { BlogContext } from "../../context/BlogContext";
import { postIcon } from "../../assets";

const Article = ({ post }) => {
  const ctx = useContext(BlogContext);

  const formattedDate = new Date(post.date_posted).toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

  const showFullPostHandler = () => {
    ctx.setOpenFullPost((prev) => !prev);
    ctx.setFullPost(post);
    window.scrollTo(0, 0);
  };

  return (
    <article
      className="post bg-gray-200 p-4 rounded-lg shadow mb-4 cursor-pointer hover:scale-105"
      onClick={showFullPostHandler}
    >
      <div className="flex gap-2">
        <h3 className="post-title text-2xl font-bold">{post.title}</h3>
        <img src={postIcon} alt="post" width={20} height={15} />
      </div>
      <div className="post-meta text-gray-600">
        <span className="post-author">By {post.author}</span>
        <span className="post-date">- {formattedDate}</span>
      </div>
      <p className="post-excerpt mt-2">{post.content.substring(0, 70)}...</p>
    </article>
  );
};

export default Article;
