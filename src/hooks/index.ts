import { useEffect, useState } from "react";
import { BACKEN_URL } from "../config";
import axios from "axios";

interface Blog {
  author: {
    name: string;
  };
  title: string;
  content: string; // Include any other fields you might need.
}

export const useBlogs = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    const token = localStorage.getItem("JWT");
    axios
      .get(`${BACKEN_URL}/api/v1/blog/bulk`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        setBlogs(res.data.blogs);
        setLoading(false);
      });
  }, []);
  return { loading, blogs };
};
