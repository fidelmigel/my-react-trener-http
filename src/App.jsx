import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // axios
    //   .get("https://hn.algolia.com/api/v1/search?query=react")
    //  .then((res) => {
    //    setArticles(res.data.hits);
    // попередній приклад працює, але на практиці використовують наступний спосіб

    const getArticlesData = async () => {
      try {
        const res = await axios.get(
          "https://hn.algolia.com/api/v1/search?query=react"
        );
        setArticles(res.data.hits);
      } catch (error) {
        console.error(error);
      }
    };
    getArticlesData();
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map((item) => (
          <li key={item.objectID}>
            <a href={item.url} target="_blank">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
