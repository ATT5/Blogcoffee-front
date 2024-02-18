import { createContext, useState, useEffect } from "react";

export const BlogContext = createContext(null);

const BlogContextComponent = ({ children }) => {
  const [openForm, setOpenForm] = useState(false);
  const [openFullPost, setOpenFullPost] = useState(false);
  const [posts, setPosts] = useState([]);
  const [fullPost, setFullPost] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:4000/blog");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const addNewPostHandler = async (newPost) => {
    try {
      const response = await fetch("http://localhost:4000/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setPosts((currentPosts) => [...currentPosts, data]);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <BlogContext.Provider
      value={{
        openForm,
        openFullPost,
        posts,
        fullPost,
        setFullPost,
        setOpenForm,
        setOpenFullPost,
        addNewPostHandler,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextComponent;
