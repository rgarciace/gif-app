import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import GifResults from "./components/GifResults";
import Header from "./components/Header";
import "./giftExpertApp.css";

const api = "edPUisklOkr7bKicTfrJR1shTmyurGWr";
const limit = 20;

const GifExpertApp = () => {
  const [valueSearch, setValueSearch] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getGif();
  }, [valueSearch]);

  const getGif = async () => {
    const url =
      valueSearch !== ""
        ? `https://api.giphy.com/v1/gifs/search?api_key=${api}&limit=${limit}&q=${valueSearch}`
        : `https://api.giphy.com/v1/gifs/trending?api_key=${api}&limit=${limit}`;
    const response = await fetch(url);
    const { data } = await response.json();
    setResults(data);
    setLoading(false);
  };

  return (
    <div className="app">
      <div className="app__container">
        <Header setValueSearch={setValueSearch} />
        <GifResults results={results} loading={loading} />
        <Footer></Footer>
      </div>
    </div>
  );
};

export default GifExpertApp;
