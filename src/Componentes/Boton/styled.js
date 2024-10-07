import styled from "styled-components";
import { colors } from "../../assets/variables.js"
import { Link } from "react-router-dom";

export const ContenedorBoton = styled.div`
    border: ${({ sinBorde }) => sinBorde ? sinBorde : `1px solid ${colors.blue}`};
    width: ${({ width }) => width || "160px"};
    text-decoration: ${({ sinBorde }) => sinBorde ? "underline" : ""};
    height:${({ height }) => height || "48px"};
    border-radius: 48px;
    margin: ${({ margen }) => margen ? margen : "0 0 0 0"};
    display: flex;
    justify-content: ${({justifyContent}) => justifyContent ? justifyContent : "center"};
    align-items: center;
    cursor: pointer;
    background-color: ${({ botonAzul }) => {
        if (botonAzul === "gris") {
            return colors.lightGray
        } else if (botonAzul) {
            return colors.blue
        } else {
            return "white"
        }

    }};
    color: ${({ botonAzul }) => {
        if (!botonAzul || botonAzul === "gris") {
            return colors.blue
        } else if (botonAzul) {
            return colors.white
        }
    }};

    &:hover {
        background-color: ${({ sinBorde }) => sinBorde ? "" : ({ botonAzul }) => botonAzul ? "white" : "#f2f2f2"};
        color: ${({ botonAzul }) => botonAzul && colors.blue};
        transition: background-color 250ms ease-in-out;
    }
`
export const StyledTextoBoton = styled.h5`
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    color: inherit;

`

export const BotonLink = styled(Link)`
    text-align: center;
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    color: inherit;
`