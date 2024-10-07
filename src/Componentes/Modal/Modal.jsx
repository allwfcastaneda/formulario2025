import React from "react";
import { Backdrop, ModalContainer, StyledModal } from "./styled";

export const Modal = ({
  estaModalAbierto,
  colorFondo,
  ancho,
  alto,
  children,
}) => {
  return (
    <>
      {estaModalAbierto && (
        <Backdrop>
          <ModalContainer ancho={ancho} alto={alto}>
            <StyledModal colorFondo={colorFondo} ancho={ancho} alto={alto}>
              {children}
            </StyledModal>
          </ModalContainer>
        </Backdrop>
      )}
    </>
  );
};
