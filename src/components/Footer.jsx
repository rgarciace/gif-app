import React from 'react';
import Contact from './Contact';

const Footer = () => {
  return (
    <footer>
      <p>Desarrollado por:</p>
      <div class="contact-container">
        <Contact
          name="Lizbeth Aldana"
          fb="https://facebook.com/"
          git="https://github.com/lizth09"
        ></Contact>
        <Contact
          name="Renzo García"
          fb="https://facebook.com/RenzoGc20038"
          git="https://github.com/rgarciace"
        ></Contact>
        <Contact
          name="Brayian Antony"
          fb="https://facebook.com/brayianRA"
          git="https://github.com/bramireza"
        ></Contact>
      </div>
      <div class="contact-logo">
        <img src="../assets/logo-facherito.png"></img>
      </div>
      <div>
        Todos los derechos reservados <br></br>
        Copyrigth &copy;2022
      </div>
    </footer>
  );
}

export default Footer