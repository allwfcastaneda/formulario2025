import React from "react";
import { ContenedorModal, ContenedorPantalla } from "./Styled";
import { GlobalStyle } from "../../../chile/Styled";

export const ModalUentel = ({ isOpen, children, closeModal }) => {
  console.log("ModalUentel abierto: ", isOpen); 
  return (
    <>
      <GlobalStyle isOpen={isOpen} />
        <ContenedorPantalla isOpen={isOpen}>
          <ContenedorModal>
            <img
            onClick={closeModal}
              className="icono-cerrar"
              src="/global/icons/eActive/CerrarModal.svg"
            />
            {children}
          </ContenedorModal>
        </ContenedorPantalla>
    </>
  );
};
