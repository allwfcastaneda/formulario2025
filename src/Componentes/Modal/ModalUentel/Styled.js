import styled from 'styled-components';
import { Swiper } from "swiper/react";
import { colors } from '../../../assets/variables';

export const ContenedorPantalla = styled.div`
  height: 100vh;
  width: 100vw;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
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
    padding: 0 27px;
  }
`;

export const ContenedorModal = styled.div`
  height: 469px;
  width: 730px;
  display: flex; /* Para que el contenido esté en columnas */
  justify-content: space-between;
  background-color: ${colors.white};
  background-image: url('/global/img/UEntel/backgroundmodal1.png');
  background-size: auto;
  background-position: left;
  background-repeat: no-repeat;
  position: relative;
  border-radius: 16px;

  .icono-cerrar {
    position: absolute;
    top: 16px;
    right: 16px;
    font-size: 48px;
    color: ${colors.white};
    cursor: pointer;
    background: none;
    border: none;
    outline: none;

    &:hover {
      color: ${colors.red};
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

// Contenedor del modal con fondo de móvil
export const ContenedorModalAcademia = styled.div`
  height: 674px;
  width: 546px;
  display: flex;
  justify-content: space-between;
  background-color: ${colors.white};
  background-image: url('/global/img/UEntel/fonobase.png'); /* Imagen de móvil como fondo */
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  border-radius: 16px;

  .icono-cerrar {
    position: absolute;
    top: 16px;
    right: 16px;
    font-size: 48px;
    color: ${colors.blue};
    cursor: pointer;
    background: none;
    border: none;
    outline: none;

    &:hover {
      color: ${colors.red};
    }
  }

  .swiper-button-prev, .swiper-button-next {
    color: ${colors.blue}; /* Flechas en color azul */
    font-size: 32px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 10;
  }

  .swiper-button-prev {
    left: 10px;
  }

  .swiper-button-next {
    right: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const ContenedorDataModal = styled.div`
    width: 50%;
    padding:30px;
    padding-right:0;

    .tituloModal{
    font-size: 28px;

    span{
    color: ${colors.blue}
    }
    }

  .subtituloModal {
    font-size: 22px;
    padding: 10px;
    font-weight: 500;
    background-color: ${colors.ligthGreen};
  }

  .imagenPlataformas {
    padding: 10px;
    max-width: 100%; /* Para que las imágenes no desborden */
  }

`;

export const ContenedorImagenModal = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 50%;
//   padding: 20px;

  .imagenModalPlataforma {
    width: 306px;
    height: 316px;

    object-fit: contain;
  }

    .imagenModalPartner {
    width: 405;
    height: 263px;

    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

// Contenedor de las imágenes dentro del modal
export const ContenedorImagenModalAcademia = styled.div`
  display: flex;
  justify-content: center; /* Centra horizontalmente */
  align-items: center; /* Centra verticalmente */
  width: 100%;
  height: 100%; /* Para que ocupe todo el alto del modal */

  .imagenModalPlataforma {
    max-width: 100%; /* Asegura que la imagen no desborde */
    max-height: 100%; /* La imagen ocupará todo el alto del contenedor */
    object-fit: contain; /* Asegura que la imagen mantenga su proporción y no se deforme */
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;