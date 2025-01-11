import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com/";

export const fetchAllUsers = async () => {
  const { data } = await axios.get("/users");
  return data.users;
};

export const fetchUserById = async (Id) => {
  const { data } = await axios.get(`/users/${Id}`);
  return data;
};

export const fetchPostByUserId = async (userId) => {
  const { data } = await axios.get(`/posts/user${userId}/posts`);
  return data.posts;
};
