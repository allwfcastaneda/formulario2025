import React from "react";
import { AcordeonDetails, ContenedorGrid } from "./styled";
import IconoArrowAcordeon from "/global/icons/ArrowAcordeon.svg";

export const Acordeon = ({
  icono,
  titulo,
  tituloFontSize,
  tituloFontWeight,
  children,
  colorTexto,
  margen,
  bordeIzquierdo,
  marginBottom,
  open,
  onClick,
  fontWeight,
  paddingContenido,
}) => {
  return (
    <AcordeonDetails
      open={open}
      colorTexto={colorTexto}
      margen={margen}
      bordeIzquierdo={bordeIzquierdo}
      marginBottom={marginBottom}
      fontWeight={fontWeight}
      tituloFontSize={tituloFontSize}
      tituloFontWeight={tituloFontWeight}
    >
      <summary onClick={onClick}>
        <div className="acordeon-title-icono">
          {icono && <img src={icono} alt="" />}
        </div>
        {titulo} <img src={IconoArrowAcordeon} alt="" />
      </summary>
      <ContenedorGrid paddingContenido={paddingContenido}>
        {children}
      </ContenedorGrid>
    </AcordeonDetails>
  );
};
