import React from "react";
import fotoPerfil from '../assets/imagenes/perfil.jpeg'
const bibliografia =()=>{
    return (
     <div id="bibliografia" class="p-3 mb-2 bg-primary-subtle text-primary-emphasis bib" >
        <hr class="placeholder col-12 bg-warning"></hr>
        <h1>Mi Bibliografia</h1>
        <hr class="placeholder col-12 bg-warning"></hr>
        <img src={fotoPerfil} alt="imagen de perfil" class="imgPerfil"></img>
        <p>Mi nombre es Mercy Merchan , tengo 22 años de edad vivo en la parroquia Uzhcurrumi perteneciente al cantón pasjae, 
            naci el 12 de marzo del 2002 en la Ciudad de Pasaje. 
            Soy la menor de 3 hermanos. Culmine mis estudios primarios en la unidad educativa Enrique Coello Lecaro y los secundarios en 
            el colegio Tecnico Nacional Carmen Mora de Encalada.
        </p>
        <p>
            Actualmente estudio en la Universidad Técnica de Machala en la carrera de Tecnologías de la información y curso el 6to Semestre.
            Trabajo medio tiempo cuidando niños , me gusta mucho leer y jugar voley en mis tiempos libres.
            Me caracterizo por ser una persona muy sincera, respetuosa, empatica y amable.
            Expreso mis emociones y sentimientos cuando me nace y no por corresponder o por presion.
        </p>
    </div>
    )
}
export default bibliografia;