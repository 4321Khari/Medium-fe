import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@abhishekkhari/medium-common";
import axios from "axios";

export const Auth = ({ type }: { type: "signin" | "signup" }) => {
  const navigate = useNavigate();
  const [postInput, setPostInput] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.BACKEN_URL}/api/v1/user/${
          type === "signup" ? "signup" : "signin"
        }`,
        postInput
      );
      const token = response.data.jwt;
      console.log(
        "response",
        response,
        `${process.env.BACKEN_URL}/api/v1/user/${
          type === "signup" ? "signup" : "signin"
        }`
      );
      localStorage.setItem("JWT", token);
      navigate("/blogs");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form
      onSubmit={handleSignup}
      className=" h-screen flex flex-col justify-center items-center w-full "
    >
      <div className=" w-[50%] flex flex-col items-center ">
        <div className="text-left   text-3xl font-extrabold ">
          Create An account
        </div>
        <div className=" mt-2 text-sm text-slate-400 font-semibold">
          {type == "signin"
            ? " Don't have an Account?"
            : "Already have an account?"}

          <Link to={type == "signin" ? "/signup" : "/signin"}>
            <span className=" underline">
              {type == "signin" ? "Signup" : "Login"}
            </span>
          </Link>
        </div>
        {type !== "signin" && (
          <>
            <div className="  w-full mt-2 font-semibold">Username</div>
            <input
              onChange={(e) => {
                setPostInput((c) => ({ ...c, name: e.target.value }));
              }}
              type="text"
              placeholder="Enter your Username"
              className=" pl-2 text-slate-400  border rounded-md w-full h-10"
              required
            />
          </>
        )}

        <div className="  w-full mt-2 font-semibold">Email</div>
        <input
          onChange={(e) => {
            setPostInput((c) => ({ ...c, email: e.target.value }));
          }}
          type="email"
          placeholder="Enter your Email"
          className=" pl-2 text-slate-400  border rounded-md w-full h-10"
          required
        />
        <div className="  w-full mt-2 font-semibold">Password</div>
        <input
          onChange={(e) => {
            setPostInput((c) => ({ ...c, password: e.target.value }));
          }}
          type="password"
          placeholder="Enter your Password"
          className=" pl-2 text-slate-400  border rounded-md w-full h-10"
          required
        />
        <button
          className=" w-full h-10 bg-black text-white rounded-md mt-4"
          type="submit"
        >
          {type == "signup" ? "Sign up" : "Sign in"}
        </button>
      </div>
    </form>
  );
};
