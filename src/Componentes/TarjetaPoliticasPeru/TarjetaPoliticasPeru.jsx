import React from "react";
import { ContenedorPadreTarjetas, ContenedorTarjetaPeru } from "./Styled";

export const TarjetaPoliticasPeru = ({ arregloTarjetas }) => {
  return (
    <ContenedorPadreTarjetas>
      {arregloTarjetas.map((tarjeta) => (
        <ContenedorTarjetaPeru key={tarjeta.id}>
          <a href={tarjeta.link} target="_blank">
            <div>
              <img
                src="/global/icons/Etica/HojaDatos.svg"
                alt="datos"
                width={48}
                height={48}
              />
              <p className="titulo-tarjeta-politicas-peru">{tarjeta.titulo}</p>
            </div>
          </a>
        </ContenedorTarjetaPeru>
      ))}
    </ContenedorPadreTarjetas>
  );
};
