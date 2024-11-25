export const BlogSkeleton = () => {
  return (
    <div role="status" className="max-w-screen mt-4 animate-pulse">
      <div className=" border-b ml-2  mt-2 cursor-pointer">
        <div className="text-sm font-semibold mt-2 flex   items-centers ">
          <div className=" bg-gray-200 rounded-full w-7 h-7  mb-2.5"></div>
          <div className=" pl-2 flex items-center   justify-center">
            <div className="h-3  bg-gray-200 rounded-full w-20 "></div>
            <div className=" flex flex-col justify-center   pl-2 pt-1   items-center ">
              <div className=" w-1 h-1 rounded-full bg-slate-400"></div>
            </div>

            {/* <h3 className=" pl-2  ">&#x2022;</h3> */}
            <div className="pl-2 font-extralight text-slate-400">
              <div className="h-3 bg-gray-200 rounded-full w-20  "></div>
            </div>
          </div>
        </div>
        <div className="font-bold text-xl mt-2">
          {" "}
          <div className="h-2 bg-gray-200 rounded-full w-3/4  mb-2.5"></div>
        </div>
        <div className=" text-md font-light mt-2">
          <div className="h-2 bg-gray-200 rounded-full w-3/5  mb-2.5"></div>
        </div>
        <div className=" text-sm font-thin text-slate-400 mt-1">
          {" "}
          <div className="h-3 mb-2 bg-gray-200 rounded-full w-20"></div>
        </div>
      </div>
    </div>
  );
};
