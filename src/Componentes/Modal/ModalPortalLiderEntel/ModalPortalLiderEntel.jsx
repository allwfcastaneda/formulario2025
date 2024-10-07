import React from "react";
import { ContenedorModal, ContenedorPantalla, Titulo } from "./styled";
import { GlobalStyle, BarraSeparacion } from "../../../chile/Styled";
import IconoLiderazgoEntel from "/global/icons/BeneficiosDuotono.svg";
import IconoBuenasPracticas from "/global/icons/ExitoFilled.svg";
export const ModalPortalLiderEntel = ({
  isOpen,
  children,
  closeModal,
  iconoTitulo = "EstiloLiderazgo",
  titulo,
  ancho,
  alto,
  padding,
}) => {
  return (
    <>
      <GlobalStyle isOpen={isOpen} />
      <ContenedorPantalla isOpen={isOpen}>
        <ContenedorModal ancho={ancho} alto={alto} padding={padding}>
          <img
            onClick={closeModal}
            className="icono-cerrar"
            src="/global/icons/eActive/CerrarModal.svg"
          />
          <div className="contenedor-scroll">
            <div className="contenido-modal">
              <Titulo>
                <img
                  src={
                    iconoTitulo === "EstiloLiderazgo"
                      ? IconoLiderazgoEntel
                      : IconoBuenasPracticas
                  }
                  alt=""
                />
                <h3>{titulo}</h3>
              </Titulo>
              <BarraSeparacion margen="15px 0 15px 6px" />
              {children}
            </div>
          </div>
        </ContenedorModal>
      </ContenedorPantalla>
    </>
  );
};
