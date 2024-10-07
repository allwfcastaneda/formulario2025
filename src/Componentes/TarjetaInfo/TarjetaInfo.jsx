import React from "react";
import { Boton } from "../Boton/Boton";
import {
    ContenedorEncabezado,
    ContenedorImagen,
    ContenedorLink,
    ContenedorPrincipal,
    ContenedorTarjeta,
    ContenedorTexto,
} from "./Styled";

export const TarjetaInfo = ({
    imgURL,
    titulo,
    texto,
    colorTitulo,
    colorFondoTitulo,
    alt,
    textoBoton, 
    fontSizeMob,
    lineHeightMob,
    link,
    target
}) => {
    return (
        <ContenedorTarjeta>
            <ContenedorPrincipal>
                <ContenedorEncabezado colorTitulo={colorTitulo} colorFondoTitulo={colorFondoTitulo}>
                    <h3>{titulo}</h3>
                </ContenedorEncabezado>
                <ContenedorImagen>
                    <img src={imgURL} alt={alt} />
                </ContenedorImagen>
                <ContenedorTexto fontSizeMob={fontSizeMob} lineHeightMob={lineHeightMob}>
                    {texto}
                </ContenedorTexto>
            </ContenedorPrincipal>
            <ContenedorLink>
                <Boton width="110px" flecha sinBorde link={link} target={target}>
                    {textoBoton}
                </Boton>
            </ContenedorLink> 
        </ContenedorTarjeta>
    );
};
