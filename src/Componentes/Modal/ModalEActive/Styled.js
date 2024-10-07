import styled from "styled-components";
import { colors } from "../../../assets/variables";

export const ContenedorPantalla = styled.div`
    height: 100vh;
    width: 100vw;
    display: ${({isOpen}) => isOpen ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 100;
    overflow-y: auto;
    @media (max-width: 768px) {
        padding: 0 27px;
    }
`

export const ContenedorModal = styled.div`
    background-color: ${colors.white};
    padding: 45px 25px;
    position: relative;
    height: auto;
    width: auto;
    border-radius: 16px;

    .icono-cerrar {
        position: absolute;
        top: 22px;
        right: 29px;
        width: 22px;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`