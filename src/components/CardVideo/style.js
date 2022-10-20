import styled from "styled-components";
export const PainelVideos = styled.section`
  flex-grow: 1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  row-gap: 10px;
  column-gap: 10px;
  margin: 10px ;  
`
export const BoxPrincipal = styled.section`
    display: grid;
  grid-template-rows: 2fr ;
  grid-template-columns: 1fr;
  border-style: solid;
  border-width: thin;
  align-items: center;
  justify-items: stretch;
  text-align: center;
  font-weight: bolder;
`
export const Imagem = styled.img`
    width: 100%;
    height: 150px;
`

