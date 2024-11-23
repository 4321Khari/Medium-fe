import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return (
      <div className=" flex justify-center items-center h-screen font-semibold text-sm">
        Loading...
      </div>
    );
  }
  return (
    <>
      <AppBar />
      <div className=" flex  justify-evenly">
        <div className="">
          {blogs.map((item) => (
            <BlogCard
              authorName={item.author.name}
              publishedDate="Dec 19 2024"
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </>
  );
};
