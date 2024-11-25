import { useEffect, useState } from "react";
import axios from "axios";

export interface Blog {
  author: {
    name: string;
  };
  id: string;
  title: string;
  content: string; // Include any other fields you might need.
}

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [blog, setBlog] = useState<Blog>();
  useEffect(() => {
    const token = localStorage.getItem("JWT");
    axios
      .get(`${process.env. REACT_APP_BACKEND_URL}/api/v1/blog/${id}`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        setBlog(res.data.blog);
        setLoading(false);
      });
  }, []);
  return { loading, blog };
};

export const useBlogs = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    const token = localStorage.getItem("JWT");
    axios
      .get(`${process.env. REACT_APP_BACKEND_URL}/api/v1/blog/bulk`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        setBlogs(res.data.blogs);
        setLoading(false);
      });
  }, []);
  return { loading, blogs };
};
