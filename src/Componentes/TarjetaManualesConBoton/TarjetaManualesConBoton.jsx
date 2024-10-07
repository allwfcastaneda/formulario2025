import React from "react";
import { ContenedorTarjeta } from "./Styled";
import { Boton } from "../Boton/Boton";

export const TarjetaManualesConBoton = ({
  width,
  titulo,
  link,
  target,
  tituloBoton,
  minHeight,
  heightIcon,
  widthIcon,
  altImage,
  onClick
}) => {
  return (
    <ContenedorTarjeta
      widthTarjeta={width}
      minHeight={minHeight}
      heightIcon={heightIcon}
      widthIcon={widthIcon}
    >
      <div>
        {altImage ? altImage : <img src="/global/img/ServicioCliente/Datos.png" alt="datos" />}
        <p>{titulo}</p>
      </div>
      <div className="contenerdor-boton-git">
        <Boton height="40px" botonAzul link={link} target={target} onClick={onClick}>
          {tituloBoton}
        </Boton>
      </div>
    </ContenedorTarjeta>
  );
};
