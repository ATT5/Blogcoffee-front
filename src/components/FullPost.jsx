import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { closeIcon } from "../assets";
const FullPost = () => {
  const ctx = useContext(BlogContext);
  const post = ctx.fullPost;

  const formattedDate = new Date(post.date_posted).toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

  return (
    <div className=" w-full h-full  flex justify-center bg-black/20 absolute z-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <article className="animated animatedFadeInUp fadeInUp w-10/12 md:w-1/2 bg-white  h-[70%] md:h-3/5 p-6 rounded-2xl mt-10 relative">
        <img
          src={closeIcon}
          alt="close"
          className="w-7 h-7 absolute top-5 right-4 cursor-pointer"
          onClick={() => ctx.setOpenFullPost((prev) => !prev)}
        />
        <h3 className="post-title text-2xl font-bold mb-4">{post.title}</h3>
        <div className="post-meta text-gray-600 mb-3">
          <span className="post-author">By {post.author}</span>
          <span className="post-date">- {formattedDate}</span>
        </div>
        <p className="post bg-gray-100 h-4/6 p-4 rounded-lg shadow mb-4 cursor-pointer">
          {post.content}
        </p>
      </article>
    </div>
  );
};

export default FullPost;
