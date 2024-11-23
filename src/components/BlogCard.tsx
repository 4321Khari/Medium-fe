interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const BlogCard = ({
  authorName,
  content,
  title,
  publishedDate,
}: BlogCardProps) => {
  return (
    <div className=" border-b ml-2  mt-2 cursor-pointer">
      <div className="text-sm font-semibold mt-2 flex   items-centers ">
        <Avator name={authorName} size="small" />
        <div className=" pl-2 flex items-center   justify-center">
          {authorName}
          <div className=" flex flex-col justify-center   pl-2 pt-1   items-center ">
            <div className=" w-1 h-1 rounded-full bg-slate-500"></div>
          </div>

          {/* <h3 className=" pl-2  ">&#x2022;</h3> */}
          <div className="pl-2 font-extralight text-slate-400">
            {publishedDate}
          </div>
        </div>
      </div>
      <div className="font-bold text-xl mt-2">{title}</div>
      <div className=" text-md font-light mt-2">
        {content.length > 100 ? `${content.slice(0, 100)}....` : content}
      </div>
      <div className=" text-sm font-thin text-slate-400 mt-1">{`${Math.ceil(
        content.length / 100
      )} min read`}</div>
    </div>
  );
};

export function Avator({
  name,
  size,
}: {
  name: string;
  size?: "small" | "big";
}) {
  return (
    <div
      className={` flex items-center justify-center ${
        size == "big" ? `w-10 h-10` : "w-7 h-7"
      }   overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
    >
      <span className="font-medium  text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}
