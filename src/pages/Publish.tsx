import axios from "axios";
import { AppBar } from "../components/AppBar";
import { useState } from "react";
import { CreateBlogInput } from "@abhishekkhari/medium-common";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
  const navigate = useNavigate();
  const [postInput, setPostInput] = useState<CreateBlogInput>({
    title: "",
    content: "",
  });
  return (
    <>
      <AppBar />
      <div className=" mt-2 flex justify-center items-center">
        <div className=" max-w-screen-lg flex flex-col items-center w-full">
          <input
            onChange={(e) =>
              setPostInput((prev) => ({ ...prev, title: e.target.value }))
            }
            type="text"
            id="helper-text"
            className="bg-gray-50 border outline-none  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-gray-500 block w-full p-2.5  "
            placeholder="Title"
          />
          <textarea
            onChange={(e) =>
              setPostInput((prev) => ({ ...prev, content: e.target.value }))
            }
            id="helper-text"
            className="bg-gray-50 h-32  mt-4 border outline-none  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-gray-500 block w-full p-2.5  "
            placeholder="What is on your mind?"
          />
          <button
            onClick={async () => {
              console.log("postInput", postInput);

              const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/v1/blog`,
                postInput,
                {
                  headers: {
                    Authorization: localStorage.getItem("JWT"),
                  },
                }
              );
              navigate(`/blog/${response.data.id}`);
            }}
            className=" px-2 font-semibold text-sm h-10 bg-green-700 mt-4 rounded-md text-white"
          >
            Publish Post
          </button>
        </div>
      </div>
    </>
  );
};

// function TextEditor() {
//   return;
// }
