import React from "react";
import facebookIcon from '../assets/imagenes/fb.png';
import instagramIcon from '../assets/imagenes/ig.png'
const contacto = () => {
  return (
    <div id="contacto" class="redes bg-primary-subtle">
      <h2>Mis Redes Sociales</h2>
      <a href="https://www.facebook.com/mercy.merchan14?mibextid=ZbWKwL">
        <img src={facebookIcon} alt="Facebook" />
      </a>
      <a href="https://www.instagram.com/mercy_merchan06?igsh=dTlzandqamNhMHRs">
        <img src={instagramIcon} alt="Facebook" />
      </a>
    </div>
  );
};
export default contacto;
