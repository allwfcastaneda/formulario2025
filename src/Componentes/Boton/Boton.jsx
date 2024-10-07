import React, { Children } from 'react'
import { BotonLink, ContenedorBoton, StyledTextoBoton } from './styled'
import { FlechaBoton, FlechaBotonIzq } from '../FlechaBoton/FlechaBoton'
import { Link } from 'react-router-dom';

export const Boton = ({
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
}) => {
  return (
    <Link
      style={{ textDecoration: "none" }}
      target={target}
      to={link}
      onClick={onClick}
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
          {flechaIzquierda && <FlechaBotonIzq />}
          {children} {flecha && <FlechaBoton />}
        </StyledTextoBoton>
      </ContenedorBoton>
    </Link>
  );
};
