import { useState, useEffect } from "react";
import Logo from "../../assets/giphy-logo.svg";
import { Search } from 'iconoir-react';
import "./header.css";

const Header = ({ setValueSearch }) => {
  const [inputValue, setInputValue] = useState("");
  const onSubmitValue = (e) => {
    e.preventDefault();
    setValueSearch(inputValue);
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
            <Search className="form__icon"/>
          </form>
        </div>
        <div className="header__options">
          <a className="header__options--option" href="">Tendencias</a>
          <a className="header__options--option" href="">Categorías</a>
        </div>
      </header>
    </div>
  );
};

export default Header;
