import { useState, useEffect } from "react";
import Logo from "../../assets/giphy-logo.svg";
import { Search } from "iconoir-react";
import "./header.css";

const Header = ({ setValueSearch }) => {
  const [inputValue, setInputValue] = useState("");
  const [seeTrends, setSeeTrends] = useState(true);
  const [seeCategories, setSeeCategories] = useState(false);

  const onSubmitValue = (e) => {
    e.preventDefault();
    setValueSearch(inputValue);
  };
  const onClickTrends = () => {
    setSeeCategories(false);
    setSeeTrends(true);
  };
  const onClickCategories = () => {
    setSeeTrends(false);
    setSeeCategories(true);
  };
  return (
    <div className="containerHeader">
      <header className="header">
        <div className="header__main">
          <img className="header__main--logo" src={Logo} alt="Logotipo" />
          <form className="header__main--form" onSubmit={onSubmitValue}>
            <input
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
                ? "header__options--option header__options--option-see"
                : "header__options--option"
            }
            onClick={onClickTrends}
          >
            Tendencias
          </button>
          <button
            className={
              seeCategories
                ? "header__options--option header__options--option-see"
                : "header__options--option"
            }
            onClick={onClickCategories}
          >
            Categorías
          </button>
        </div>
        {seeTrends && (
          <div className="header__trends">Aquí mostrar lista de tendencias</div>
        )}
        {seeCategories && (
          <div className="header__categories">
            Aquí mostrar lista de categorías
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
