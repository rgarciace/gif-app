import { useState, useEffect } from "react";
import GifResults from "./components/GifResults";
import Header from './components/Header'
import "./giftExpertApp.css";
const GifExpertApp = () => {
  const [valueSearch, setValueSearch] = useState("")

  return (
    <div className="app">
      <div className="app__container">
        <Header setValueSearch={setValueSearch}/>
        <GifResults valueSearch={valueSearch}/>
        <footer className="footer">
          Aquí pie de página
        </footer> 
      </div>
    </div>
  );
};

export default GifExpertApp;
