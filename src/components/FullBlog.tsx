import { Blog } from "../hooks";
import { Avator } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div className="flex w-full h-screen  justify-around ">
      <div className=" w-3/5 ">
        <div className=" mt-4  text-4xl font-bold w-[70%]">{blog.title}</div>
        <div className=" mt-2 text-sm font-light text-slate-500">
          Posted on Date
        </div>
        <div className=" mt-4 text-sm font-normal text-slate-600">
          {blog.content}
        </div>
      </div>
      <div className=" w-2/6">
        <div className=" mt-5 text-sm  font-medium text-slate-400 ">Author</div>
        <div className="   flex">
          <div className="  mr-2 mt-4 ">
            <Avator size="small" name={blog.author.name[0]} />
          </div>
          <div className="">
            <div className=" text-xl font-bold mt-4">{blog.author.name}</div>
            <div className="mt-4">Author Description</div>
          </div>
        </div>
      </div>
    </div>
  );
};
