import React from "react";
import {
  ContenedorDescripcion,
  ContenedorDesplegable,
  ContenedorMiniTarjetas,
  ContenedorTarjeta,
  StyledH2,
} from "../../chile/pages/EntelActive/BienestarEmocional/Styled";
import { Link } from "react-router-dom";

export const TarjetaImagenBeneficios = ({
  arregloDatos,
  conMensajeDesplegable,
  target,
  heightContenedorDesplegable,
  backgroundColor,
  children
}) => {
  return (
    <ContenedorMiniTarjetas>
      {arregloDatos.map((card) => (
        <ContenedorTarjeta key={card.id} background={backgroundColor}>
          <Link
            style={{ textDecoration: "none" }}
            target={target}
            to={card.link}
          >
            <img src={card.imagen} alt={card.alt} />
            <ContenedorDescripcion>
              <StyledH2>{card.desc}</StyledH2>
            </ContenedorDescripcion>
          </Link>
          {conMensajeDesplegable && (
            <ContenedorDesplegable heightContenedorDesplegable={heightContenedorDesplegable}>
              <StyledH2>{card.desc}</StyledH2>
              {card.contenido}
            </ContenedorDesplegable>
          )}
        </ContenedorTarjeta>
      ))}
      {children}
    </ContenedorMiniTarjetas>
  );
};
