import React from "react";
const navbar =()=>{
    return (
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Mi Pagina</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
    aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#bibliografia">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#acercaDeMi">Acerca de</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#tecnologias">Tecnologias</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#contacto">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}
export default navbar;