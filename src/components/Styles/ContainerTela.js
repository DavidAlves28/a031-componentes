import styled from "styled-components";
export const ContainerTela = styled.main`
    min-height: 80%;
  display: flex;
`
export const HeaderPage = styled.header `

  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: 10%;
`
export const BarraNav = styled.nav`
  flex-basis: 200px;
  border-right-style: solid;
  border-right-width: thin;
`
export const TelaInteira = styled.body`
height: 100vh;
  display: flex;
  flex-direction: column;
`
export const FooterTela = styled.footer`
 background: #333b3e;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  padding: 0 10px;
  height: 7%;
`