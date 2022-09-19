import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import GifResults from "./components/GifResults";
import Header from "./components/Header";
import "./giftExpertApp.css";

const API_KEY = "edPUisklOkr7bKicTfrJR1shTmyurGWr";
const limit = 20;

const GifExpertApp = () => {
  const [valueSearch, setValueSearch] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultsTrends, setResultsTrends] = useState([]);

  useEffect(() => {
    getData("https://api.giphy.com/v1/trending/searches");
    // getData();
  }, []);

  const getData = async (url) => {
    const response = await fetch(`${url}?api_key=${API_KEY}`);
    const { data } = await response.json();
    setResultsTrends(data.slice(0, 5));
  };

  useEffect(() => {
    setLoading(true);
    getGif();
  }, [valueSearch]);

  const getGif = async () => {
    const url =
      valueSearch !== ""
        ? `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=${limit}&q=${valueSearch}`
        : `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}`;
    const response = await fetch(url);
    const { data } = await response.json();
    setResults(data);
    setLoading(false);
  };

  return (
    <div className="app">
      <div className="app__container">
        <Header
          setValueSearch={setValueSearch}
          resultsTrends={resultsTrends}
        />
        <GifResults results={results} loading={loading} />
        <Footer></Footer>
      </div>
    </div>
  );
};

export default GifExpertApp;
