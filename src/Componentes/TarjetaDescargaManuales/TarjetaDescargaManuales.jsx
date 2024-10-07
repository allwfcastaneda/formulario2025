import React from "react";
import { ContenedorPadreTarjetas, ContenedorTarjetaDescargas } from "./Styled";

export const TarjetaDescargaManuales = ({ arregloTarjetas }) => {
  return (
    <ContenedorPadreTarjetas>
      {arregloTarjetas.map((tarjeta) => (
        <ContenedorTarjetaDescargas key={tarjeta.id}>
          <div>
            <img
              src="/global/icons/Etica/HojaDatos.svg"
              alt="datos"
              width={48}
              height={48}
            />
            <p>{tarjeta.titulo}</p>
          </div>
          <a href={tarjeta.link} target="_blank">
            <img
              src="/global/img/NuestraCultura/Descargar.svg"
              alt="descargar"
            />
          </a>
        </ContenedorTarjetaDescargas>
      ))}
    </ContenedorPadreTarjetas>
  );
};
