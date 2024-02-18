import { plusIcon, closeIcon } from "../assets";
import { useContext, useState } from "react";
import { BlogContext } from "../context/BlogContext";
import Input from "./UI/Input";

const EntryForm = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ctx = useContext(BlogContext);

  const formHandler = async (e) => {
    e.preventDefault();

    if (!author.trim() || !title.trim() || !content.trim()) {
      alert("All fields are required");
      return;
    }

    const newPost = {
      author,
      title,
      content,
    };

    await ctx.addNewPostHandler(newPost);
    setAuthor("");
    setTitle("");
    setContent("");
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      ctx.setOpenForm(false);
    }, 1500);
  };

  return (
    <>
      <button
        className="bg-green-400 w-7 h-7  md:w-8 md:h-8 flex justify-center absolute top-20 left-2  md:left-5 items-center rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        onClick={() => ctx.setOpenForm((prev) => !prev)}
      >
        <img src={plusIcon} alt="plus" width={15} height={15} />
      </button>

      {ctx.openForm && (
        <div className=" w-full h-full  flex justify-center bg-black/20 absolute z-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          {!isSubmitted && (
            <form
              action=""
              className="animated animatedFadeInUp fadeInUp w-10/12 md:w-1/2 bg-white  h-[70%] md:h-3/5 p-6 rounded-2xl mt-10 relative"
              onSubmit={formHandler}
            >
              <img
                src={closeIcon}
                alt="close"
                className="w-7 h-7 absolute top-5 right-4 cursor-pointer"
                onClick={() => ctx.setOpenForm((prev) => !prev)}
              />
              <h2 className="text-2xl font-bold">Create Post </h2>

              <Input
                id="author"
                label="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="John Doe"
              />
              <Input
                id="title"
                label="Title"
                value={title}
                placeholder="React "
                onChange={(e) => setTitle(e.target.value)}
              />
              <label htmlFor="content" className="font-bold text-xl">
                Content
              </label>
              <textarea
                id="content"
                rows="5"
                className={`mb-3 block p-2.5 w-full text-sm resize-none text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 `}
                placeholder="Write your thoughts here..."
                onChange={(e) => setContent(e.target.value)}
                value={content}
                required
              ></textarea>
              <button
                type="submit"
                className="py-2.5 px-5 me-2  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 active:bg-slate-300"
              >
                Submit
              </button>
            </form>
          )}
          {isSubmitted && (
            <div className="w-10/12 md:w-1/2 text-center h-28 my-4 p-3  bg-white  rounded">
              Post creado con éxito!
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default EntryForm;
