import { useEffect, useState } from "react";
//import axios from "axios";
import { fetchArticles } from "./services/api";
//import { FidgetSpinner } from "react-loader-spinner";
import Loader from "./components/Loader";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getArticlesData = async () => {
      try {
        setIsLoading(true);
        console.log("Loading started");
        setIsError(false);
        const { hits } = await fetchArticles("react");
        setArticles(hits);
      } catch (error) {
        setIsError(true);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getArticlesData();
  }, []);

  return (
    <div className="main">
      {" "}
      <h1>Articles</h1>{" "}
      <ul>
        {" "}
        {articles.map((item) => (
          <li key={item.objectID}>
            {" "}
            <a href={item.url}>{item.title}</a>{" "}
          </li>
        ))}{" "}
      </ul>{" "}
      {isLoading && <Loader />}
      {isError && <h2>Something went wrong! Try again...</h2>}{" "}
    </div>
  );
};
export default App;
