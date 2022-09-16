import { useState, useEffect } from 'react';

const Header = ({ setValueSearch }) => {
  const [inputValue, setInputValue] = useState("")
  const onSubmitValue = (e) => {
    e.preventDefault();
    setValueSearch(inputValue)
  }
  return (
    <header className="header">
      <h1 className="header__title">Título</h1>
      <form onSubmit={onSubmitValue}>
        <input
          className="header__search"
          type="text"
          placeholder='Buscar gifs'
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
    </header>
  );
};

export default Header;
