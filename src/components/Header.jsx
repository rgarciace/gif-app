import { useState, useEffect } from "react";
import Logo from "../../assets/giphy-logo.svg";
import { Search } from "iconoir-react";
import "./header.css";

const Header = ({ setValueSearch, resultsTrends }) => {
  const [inputValue, setInputValue] = useState("");
  const [seeTrends, setSeeTrends] = useState(false);
  const [selectedTrend, setSelectedTrend] = useState("");

  useEffect(() => {
    setInputValue(selectedTrend);
    setValueSearch(selectedTrend);
  }, [selectedTrend])
  

  const onSubmitValue = (e) => {
    e.preventDefault();
    setValueSearch(inputValue);
  };
  const onClickTrends = () => {
    setSeeTrends(!seeTrends);
  };
  const searchTrend = (e) => {
    setSelectedTrend(e.target.innerText)
  }
  return (
    <div className="containerHeader">
      <header className="header">
        <div className="header__content-header">
          <div className="header__main">
            <img className="header__main--logo" src={Logo} alt="Logotipo" />
            <form className="header__main--form" onSubmit={onSubmitValue}>
              <input
                id="input-search"
                className="form__search"
                type="text"
                placeholder="Buscar gifs"
                onChange={(e) => setInputValue(e.target.value)}
                autoComplete="off"
              />
              <Search className="form__icon" />
            </form>
          </div>
          <div className="header__options">
            <button
              className={
                seeTrends
                  ? "header__options--option-see header__options--option"
                  : "header__options--option"
              }
              onClick={onClickTrends}
            >
              Tendencias
            </button>
            <button className="header__options--option">
              <a href="https://giphy.com/">Ir a Giphy</a>
            </button>
          </div>
        </div>
        {seeTrends && (
          <div className="header__sub-header">
            <div className="header__trends">
              {resultsTrends.map((trend) => (
                <button
                  className={`trends__trend trends__trend--color-${
                    Math.floor(Math.random() * 5) + 1
                  }`}
                  key={trend}
                  onClick={searchTrend}
                >
                  {trend}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
