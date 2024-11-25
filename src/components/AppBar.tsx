import { Link } from "react-router-dom";
import { Avator } from "./BlogCard";
import { useEffect, useState } from "react";

export const AppBar = () => {
  const [name, setName] = useState<string>();
  useEffect(() => {
    const userName = localStorage.getItem("USER");

    if (userName) {
      setName(userName);
    }
  }, []);
  return (
    <div className=" border-b flex justify-between   px-10  py-3 ">
      <div className=" text-xl flex items-center font-bold">WriteSphere</div>
      <div className="flex">
        <Link to={"/publish"}>
          <button
            type="button"
            className="  flex item mr-8 justify-center focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Publish
          </button>
        </Link>
        <Avator name={name || "A"} size={"big"} />
      </div>
    </div>
  );
};
