import styled from "styled-components";
import { colors } from "../../../assets/variables";

export const ContenedorPantalla = styled.div`
  height: 100vh;
  width: 100vw;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  overflow-y: auto;
  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const ContenedorModal = styled.div`
  background-color: ${colors.white};
  padding: ${({ padding }) => (padding ? padding : "50px 10px 46px 15px")};
  position: relative;
  height: ${({ alto }) => (alto ? alto : "auto")};
  max-height: 650px;
  width: ${({ ancho }) => (ancho ? ancho : "700px")};
  border-radius: 16px;
  
  .icono-cerrar {
    position: absolute;
    top: 22px;
    right: 29px;
    width: 22px;
    cursor: pointer;
  }
  
  .contenedor-scroll {
    max-height: 590px;
    overflow-y: auto; /* Habilita el scroll vertical */
    padding-right: 28px;

    /* Estilos para scrollbars WebKit */
    &::-webkit-scrollbar {
      width: 6px; 
      -webkit-appearance: none;
      position: fixed;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #cccccc;
      border-radius: 20px;
      border: 2px solid #f1f2f3; 
      
    }

    scrollbar-width: thin; 
    scrollbar-color: #cccccc #f1f2f3;
    
    &::-webkit-scrollbar-button:increment,
    .contenedor::-webkit-scrollbar-button {
    display: none;
}
    
    .contenido-modal {
      padding-right: 28px;
    }
  }
  
  @media (max-width: 768px) {
    .contenedor-scroll {
      padding-right: 0;
    }
  }
`;

export const Titulo = styled.div`
  display: flex;
  align-items: center;

  h3 {
    font-size: 24px;
    font-weight: 500;
    color: ${colors.blue};
  }

  img {
    width: 43px;
    padding-left: 5px;
    padding-right: 5px;
  }

  @media (max-width: 768px) {
    align-items: start;
    h3 {
      font-size: 20px;
    }

    img {
      padding-top: 3px;
    }
  }
`;
