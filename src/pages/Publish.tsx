import { AppBar } from "../components/AppBar";

export const Publish = () => {
  return (
    <>
      <AppBar />
      <div className=" mt-2 flex justify-center items-center">
        <div className=" max-w-screen-lg flex items-center w-full">
          <input
            type="text"
            id="helper-text"
            className="bg-gray-50 border outline-none  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-gray-500 block w-full p-2.5  "
            placeholder="Title"
          />
        </div>
      </div>
    </>
  );
};

// function TextEditor() {
//   return;
// }
