import { useContext, useState } from "react";
import { notFoundIcon } from "../assets";
import { BlogContext } from "../context/BlogContext";
import Article from "./UI/Article";

const BlogPosts = () => {
  const ctx = useContext(BlogContext);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = ctx.posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-11/12 md:w-9/12 ">
      <div className="w-full flex justify-between items-center mb-5">
        <h2 className="font-semibold self-end">Posts</h2>
        <div>
          <label className="font-semibold" htmlFor="search">
            Search:
          </label>
          <input
            id="search"
            className="w-40 bg-gray-50 text-gray-900 text-sm rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            type="text"
            placeholder="Author, Title, Content"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      {ctx.posts.length > 0 ? (
        <section className="posts-container bg-white/50 p-5 rounded-2xl">
          {filteredPosts.map((post) => (
            <Article key={post.title} post={post} />
          ))}
          {filteredPosts.length <= 0 && (
            <div className="flex gap-3 w-full justify-center">
              <p className="text-center text-2xl font-semibold">
                Post not found
              </p>
              <img src={notFoundIcon} alt="plus" width={35} height={35} />
            </div>
          )}
        </section>
      ) : (
        <div className="flex justify-center ">
          {" "}
          <p className="font-semibold">Loading...</p>
        </div>
      )}
    </div>
  );
};

export default BlogPosts;
