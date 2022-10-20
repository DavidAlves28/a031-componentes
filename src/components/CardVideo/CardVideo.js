import React from "react";
import InfosUsuario from "../InfoUsuario/InfosUsuario";
import perfil from "./img/meliodas.jpg"
import { BoxPrincipal, Imagem, PainelVideos } from "./style";

export default function (props) {
  const img = perfil
  const autor = "David"
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
  {/* Exercicio Props e Componentes */ }
  return (
    <PainelVideos>
      <BoxPrincipal  onClick={reproduzVideo}>
         {/*Acessando Objeto*/}
        <Imagem src={props.imagem} alt="" />
        {props.titulo}
        


        {/* Exercicio Props e Componentes */}
        <InfosUsuario
          autor={autor} 
          img={img}
        />
      </BoxPrincipal>


    </PainelVideos>
  )
}