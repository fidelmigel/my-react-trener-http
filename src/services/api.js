import axios from "axios";

export const fetchArticles = async (query) => {
  try {
    const { data } = await axios.get(
      `https://hn.algolia.com/api/v1/search?query=${query}`
    );
    return data.hits;
  } catch (error) {
    console.error(error);
    return [];
  }
};
