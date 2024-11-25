import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";

export const Signup = () => {
  // const url = `${import.meta.env.VITE_BACKEND_URL}/api/v1/blog`;

  return (
    <div className=" grid lg:grid-cols-2">
      <div>
        <Auth type="signup" />
      </div>
      <div className="  hidden lg:block">
        <Quote />
      </div>
    </div>
  );
};
