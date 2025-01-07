import axios from "axios";

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

export const fetchArticles = async (query, page) => {
  const { data } = await axios.get(`/search`, {
    params: {
      query,
      page,
    },
  });
  return data;
};
