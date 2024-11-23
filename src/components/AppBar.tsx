import { Avator } from "./BlogCard";

export const AppBar = () => {
  return (
    <div className=" border-b flex justify-between px-10 py-3 ">
      <div className=" text-xl flex items-center font-bold">WriteSphere</div>
      <div className="">
        <Avator name="A" size={10} />
      </div>
    </div>
  );
};
