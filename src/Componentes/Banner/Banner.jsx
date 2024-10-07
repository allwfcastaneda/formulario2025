import React from "react";
import { ContenedorBanner } from "./styled";

export const Banner = ({
  icono = "iconoBanner",
  titulo,
  imagen = "imgBanner",
  gap = "75px",
  altoImagen = "240px",
  margenTop = "-25px",
  tieneIcono = false,
}) => {
  return (
    <ContenedorBanner gap={gap} altoImagen={altoImagen} margenTop={margenTop}>
      <div>
        {tieneIcono && <img src={`${icono}.svg`} alt={`${icono}`} />}
        <h3>{titulo}</h3>
      </div>
      <img src={`${imagen}.svg`} alt={`${imagen}`} className="imgBanner" />
    </ContenedorBanner>
  );
};
