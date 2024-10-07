import React from "react";
import { FlechaBoton } from "../FlechaBoton/FlechaBoton";
import { FlechaIzquierda } from "../FlechaIzquierda/FlechaIzquierda";
import { ContenedorBoton, StyledTextoBoton } from "../Boton/styled";
import { StyledButton } from "./Styled";

export const BotonSubmit = ({
  children,
  link,
  width,
  height,
  flecha,
  botonAzul,
  margen,
  sinBorde,
  sinSubrayado,
  flechaIzquierda,
  target,
  justifyContent,
  onClick,
  onSubmit
}) => {
  return (
    <StyledButton
      type="submit"
      style={{ textDecoration: "none" }}
      target={target}
      to={link}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      <ContenedorBoton
        botonAzul={botonAzul}
        height={height}
        width={width}
        margen={margen}
        sinBorde={sinBorde}
        sinSubrayado={sinSubrayado}
        justifyContent={justifyContent}
      >
        <StyledTextoBoton>
          {flechaIzquierda && <FlechaIzquierda />}
          {children} {flecha && <FlechaBoton />}
        </StyledTextoBoton>
      </ContenedorBoton>
    </StyledButton>
  );
};
