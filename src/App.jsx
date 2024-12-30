import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticlesData = async () => {
      try {
        const { data } = await axios.get(
          "https://hn.algolia.com/api/v1/search?query=react"
        );
        setArticles(data.hits);
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
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
