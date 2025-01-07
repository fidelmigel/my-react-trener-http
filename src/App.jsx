// App.js
import { useEffect, useState } from "react";
// import axios from "axios"; // Якщо не використовується, залиште закоментованим
import { fetchArticles } from "./services/api"; // Переконайтесь, що функція fetchArticles існує
import Loader from "./components/Loader"; // Перевірте шлях до Loader
import Articles from "./components/Articles/Articles";
import SearchBar from "./components/SearchBar/SearchBar";
import { toast } from "react-hot-toast";
const App = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getArticlesData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { hits } = await fetchArticles(query, page);
        setArticles((prev) => [...prev, ...hits]);
      } catch (error) {
        setIsError(true);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getArticlesData();
  }, [page, query]);
  const handleChangePage = () => {
    toast.success(`Page changed to: ${page + 1}`);
    setPage((prev) => prev + 1);
  };

  const handleChangeQuery = (newQuery) => {
    if (query === newQuery) {
      toast.error("Please change  query!");
      return;
    }

    setQuery(newQuery);
    setArticles([]);
    setPage(0);
  };
  return (
    <div className="main">
      <h1>Articles</h1>
      <SearchBar onSearchChanged={handleChangeQuery} />
      {articles.length > 0 && <Articles articles={articles} />}
      <button onClick={handleChangePage}>Load more</button>
      {isLoading && <Loader />}
      {isError && <h2>Something went wrong! Try again...</h2>}
    </div>
  );
};

export default App;
