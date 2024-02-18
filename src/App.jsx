import { useContext } from "react";
import BlogPosts from "./components/BlogPosts";
import EntryForm from "./components/EntryForm";
import FullPost from "./components/FullPost";
import { BlogContext } from "./context/BlogContext";
import cafeIcon from "../public/icon.svg";
function App() {
  const ctx = useContext(BlogContext);

  return (
    <div className="w-full h-full flex flex-col items-center font-lato">
      <header className="w-full flex items-center bg-black/15 justify-center py-1 mb-2">
        <h1 className="text-5xl md:text-6xl font-extrabold font-monofett">
          Code Blog Cafe
        </h1>
      </header>
      <EntryForm />
      <BlogPosts />
      {ctx.openFullPost && <FullPost />}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 rounded-md filter blur-3xl opacity-50 -z-50 " />
    </div>
  );
}

export default App;
