import { useState, useEffect } from 'react';
import './header.css'

const Header = ({ setValueSearch }) => {
  const [inputValue, setInputValue] = useState("")
  const onSubmitValue = (e) => {
    e.preventDefault();
    setValueSearch(inputValue)
  }
  return (
    <header className="header">
      <h1 className="header__title">Título</h1>
      <form className='header__form' onSubmit={onSubmitValue}>
          <input
            className="header__search"
            type="text"
            placeholder='Buscar gifs'
            onChange={(e) => setInputValue(e.target.value)}
            autoComplete = "off"
          />
      </form>
    </header>
  );
};

export default Header;
