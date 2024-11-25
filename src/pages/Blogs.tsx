import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return (
      <div className=" h-screen flex flex-col">
        <AppBar />
        <div className=" flex    justify-evenly h-screen font-semibold text-sm">
          <div className=" pt-9 pl-3  w-1/2">
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <AppBar />
      <div className=" flex  mt-10 justify-evenly">
        <div className="">
          {blogs.map((item) => (
            <BlogCard
              id={item.id}
              authorName={item.author.name || "A"}
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
