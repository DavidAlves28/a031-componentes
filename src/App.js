import React from "react";
import CardVideo from "./components/CardVideo/CardVideo";
import { HeaderPage,ContainerTela, BarraNav, TelaInteira, FooterTela } from "./components/Styles/ContainerTela";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
import "./styles.css";


export default function App() {
 const dados= {
  titulo: "Meu Filme",
  imagem: "https://picsum.photos/400/400?a=2"
}

 
  return (
    <div>
    <GlobalStyle/>
      <TelaInteira>
        <HeaderPage>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </HeaderPage>

        <ContainerTela>
          <BarraNav>
            <ul>
              <li>Início</li>
              <li>Em alta</li>
              <li>Inscrições</li>
              <hr />
              <li>Originais</li>
              <li>Histórico</li>
            </ul>
          </BarraNav>
          <CardVideo 
            titulo={dados.titulo}
            imagem={dados.imagem}
            />          
            <CardVideo 
            titulo={dados.titulo}
            imagem={dados.imagem}
            />
             <CardVideo 
            titulo={dados.titulo}
            imagem={dados.imagem}
            />
              <CardVideo 
            titulo={dados.titulo}
            imagem={dados.imagem}
            />
           
        
        </ContainerTela>

        <FooterTela>
          <h4>Oi! Eu moro no footer!</h4>
        </FooterTela>
      </TelaInteira>
    </div>
  );
}
