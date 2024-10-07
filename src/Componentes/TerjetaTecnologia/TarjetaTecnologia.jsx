import React from 'react'
import { ContenedorImagen, ContenedorTarjeta, ContenedorTexto } from '../TarjetaInfo/Styled'
import { colors } from '../../assets/variables'
import { StyledH3 } from '../../chile/pages/SoyNuevo/Styled'
import { Boton } from '../Boton/Boton'
import { ContenedorBotones, ContenedorLink, ContenedorPrincipal } from './Styled'

export const TarjetaTecnologia = ({ imgURL, alt, titulo, texto, textoBoton, extraLink, paddingMob, target, link, targetExtraLink }) => {
    return (
        <ContenedorTarjeta fondo={colors.lightGray} alto="420px">
            <ContenedorPrincipal>
                <ContenedorImagen>
                    <img src={imgURL} alt={alt} />
                </ContenedorImagen>
                <ContenedorTexto fontSize="18px" lineHeight="21.6px" padding="0 12px">
                    <StyledH3 paddingMob={paddingMob} fontWeight="600">{titulo}</StyledH3>
                    <p>{texto}</p>
                </ContenedorTexto>
            </ContenedorPrincipal>
            <ContenedorBotones>
                <div id='primer-boton'>
                <Boton flecha link={link} target={target}>Ingrese aquí</Boton>
                </div>
                <div>
                <ContenedorLink extraLink={extraLink}>
                    <Boton botonAzul="gris" flecha sinBorde target={targetExtraLink}>
                        {textoBoton}
                    </Boton>
                </ContenedorLink>
                </div>
            </ContenedorBotones>
        </ContenedorTarjeta>
    )
}

