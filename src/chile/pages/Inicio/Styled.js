import styled from "styled-components";
import { colors } from "../../../assets/variables"; 

export const ContenedorInicio = styled.div`
    .home {
        display: flex;
        gap: 25px;
     
        .slider-container {
            width: 544px;
            max-height: 360px;
            min-height: 360px;
        }
        .reconocimiento {
            border: 1px solid ${colors.lighterGray};
            border-radius: 16px;
            max-height: 360px;

            .cumpleanios-aniversario-titulo {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 12px;
                border-top-left-radius: 16px;
                border-top-right-radius: 16px;
                /* height: 45px; */
                position: relative;
                background: white;
                &.cumple {
                    &::after {
                        content: "";
                        position: absolute;
                        width: 100%;
                        background: ${colors.lighterGreen};
                        height: 22px;
                        bottom: -21px;
                        right: 0;
                    }

                    .cumpleanios-titulo {
                        background: ${colors.lighterGreen};
                        height: 50px;
                        /* margin-top: -5px; */

                        .cumpleanios-titulo-detalle {
                            background: ${colors.lighterGreen};
                        }

                        h3 {
                            color: #0C0C0C;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: flex-start;
                            padding-left: 19px;

                            /* span {
                                display: flex;
                            } */
                        }
                    }
                }

                &.aniversario {
                    &::after {
                        content: "";
                        position: absolute;
                        width: 100%;
                        background: ${colors.blue};
                        height: 22px;
                        bottom: -21px;
                        right: 0; 
                    }

                    .aniversario-titulo {
                        background: ${colors.blue};
                        height: 50px;
                        /* margin-top: -5px; */

                        .aniversario-titulo-detalle {
                            background: ${colors.blue};
                        }

                        h3 {
                            color: white;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: flex-start;
                            padding-left: 8px; 

                            /* span {
                                display: none;
                            } */
                        }
                    }                 
                }

                .cumpleanios-titulo {
                    background: transparent;
                    border-radius: 16px 64px 0px 0px;
                    position: relative;
                    height: 45px;
                    margin-top: 0px;
                    cursor: pointer;

                    .cumpleanios-titulo-detalle {
                        border-radius: 16px 8px 0 0;
                        -webkit-transform: translateX(1%) skewX(25deg);
                        transform: translateX(1%) skewX(25deg);
                        background: transparent;
                        margin-left: 7px;
                        margin-top: 0px;
                        height: 50px;
                    }

                    h3 {
                        font-size: 16px;
                        font-weight: 500;
                        color: ${colors.darkGray};
                        position: absolute;
                        top: 11px;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 1;

                        /* span {
                            display: none;
                        } */
                    }
                }

                .aniversario-titulo {
                    background: transparent;
                    border-radius: 55px 8px 0px 0px;
                    position: relative;
                    height: 45px;
                    cursor: pointer;

                    .aniversario-titulo-detalle {
                        border-radius: 8px 8px 0 0;
                        text-overflow: ellipsis;
                        -webkit-transform: translateX(-1.3%) skewX(-25deg);
                        transform: translateX(-1.3%) skewX(-25deg);
                        background: transparent;
                        margin-right: 16px;
                        margin-top: 0px;
                        height: 50px;
                    }

                    h3 {
                        font-size: 16px;
                        font-weight: 500;
                        color: ${colors.darkGray};
                        position: absolute;
                        top: 3px;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 1;
                        right: -15px;

                        /* span {
                            display: none;
                        } */

                        @media (max-width: 600px) {
                            right: 0px;
                            top: 6px;
                        }
                    }
                }
            }

            .cumpleanios-contenedor {
                margin: 0px 16px;
                padding-top: 21px;

                .no-cumple {
                    display: flex;
                    flex-direction: column;
                    margin: 28px 20px 20px 20px;

                    h3 {
                        font-size: 18px;
                        font-weight: 400;
                        color: ${colors.blue};
                    }
                }
            }

            .aniversarios-contenedor {
                margin: 0px 16px;
                padding-top: 21px;

                .no-cumple {
                    display: flex;
                    flex-direction: column;
                    margin: 28px 20px 20px 20px;
                    gap: 30px;
                    align-items: center;

                    h3 {
                        font-size: 18px;
                        font-weight: 400;
                        color: ${colors.blue};
                    }

                    img {
                        width: 130px;
                    }
                }
            }
        }

        @media (max-width: 768px) {
            flex-direction: column;

            .slider-container {
                width: 100%;
                min-height: 230px;
            }

            .slick-slide img {
                width: 340px;
            }
        }
    }
`;

export const CardCumpleanyos = styled.div`
    display: flex;
    gap: 8px;
    margin: 16px 0px;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid #ccc;

    h4 {
        color: ${colors.blue};
        font-size: 28px;
        font-weight: 600;
    }

    h5 {
        color: ${colors.black};
        font-size: 14px;
        font-weight: 400;
    }

    div {
        position: relative;
        margin-left: auto;
        margin-top: 20px;

        img {
            cursor: pointer;
        }
    }

    img:hover ~ .tooltip {
        display: block;
    }

    .tooltip {
        position: absolute;
        bottom: 41px;
        right: 0px;
        z-index: 1;
        font-size: 14px;
        font-weight: 400;
        background: #E5E5E5;
        padding: 4px 16px 8px 16px;
        border-radius: 4px;
        width: 115px;
        display: none;

        &::after {
            bottom: -6px;
            content: "";
            position: absolute;
            left: 0;
            right: -75px;
            margin: 0 auto;
            width: 0;
            height: 0;
            border-top: 7px solid #e5e5e5;
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
        }
    }
`;

export const CardAniversarios = styled.div`
    display: flex;
    gap: 8px;
    margin: 16px 0px;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid #ccc;

    h4 {
        color: ${colors.blue};
        font-size: 28px;
        font-weight: 600;
        display: flex;
        flex-direction: column;
        align-items: center;

        position: relative;
        bottom: 5px;

        span {
            font-size: 15px;
        }
    }

    h5 {
        color: ${colors.black};
        font-size: 14px;
        font-weight: 400;
    }

    div {
        position: relative;
        margin-left: auto;
        margin-top: 20px;

        img {
            cursor: pointer;
        }
    }

    img:hover ~ .tooltip {
        display: block;
    }

    .tooltip {
        position: absolute;
        bottom: 41px;
        right: 0px;
        z-index: 1;
        font-size: 14px;
        font-weight: 400;
        background: #E5E5E5;
        padding: 4px 16px 8px 16px;
        border-radius: 4px;
        width: 115px;
        display: none;

        &::after {
            bottom: -6px;
            content: "";
            position: absolute;
            left: 0;
            right: -75px;
            margin: 0 auto;
            width: 0;
            height: 0;
            border-top: 7px solid #e5e5e5;
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
        }
    }
`;

export const BtnCarrusel = styled.div`
    position: relative;
    top: 11px;

    img {
        cursor: pointer;
        position: absolute;
        right: 0px;

        opacity: ${({ paginar }) => (paginar ? 1 : 0.25)};
    }

    .buttonLeft {
        right: 30px;
    }

    .buttonRight {
        transform: rotate(180deg);
    }
`;

export const DivAccesos = styled.div`
    margin-top: 52px;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const DivAccesosMobile = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;

        .titulo {
            display: flex;
            justify-content: space-between;

            font-size: 20px;
            font-weight: 500;
            line-height: 24px;
            color: ${colors.blue};
            align-items: center;
            /* margin-bottom: 8px; */

            h4 {
                display: flex;
                padding: 12px 10px;
                border: ${({ agregar }) => (agregar ? "1px" : "0px")} solid ${colors.lighterGray};
                border-radius: 8px 8px 0px 0px;
                position: relative;
                border-bottom: 1px solid ${colors.white};
                top: 0px;
                z-index: 1;
            }
        }

        .contenedorAcc {
            display: ${({ accFav }) => (accFav ? "flex" : "")};
            gap: 16px;
            margin-bottom: 40px;
        }
    }
`;

export const DivAccesosFavMobile = styled.div`
    min-height: auto;
    width: 72px !important;
    height: 72px !important;
    border: 1px solid ${colors.lighterGray};
    border-radius: 9999px;
    display: flex;
    align-items: center;
    padding-left: 0;
    cursor: pointer;
    position: relative;
    margin-bottom: 25px;

    a {
        display: flex;
        align-items: center;
        color: ${colors.black};
        font-size: 20px;
        font-weight: 500;
        text-decoration: none;
        width: 100%;
        height: 100%;
        flex-direction: column;
        gap: 0;
        justify-content: center;

        /* img {
            margin-bottom: 4px;
        } */

        h5 {
            font-weight: 400;
            font-size: 14px;
            position: absolute;
            bottom: -30%;
            white-space: nowrap;
            max-width: 75px;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: center;
        }
    }
`;

export const DivAccesosTitulo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h3 {
        font-size: 26px;
        font-weight: 500;
        color: ${colors.blue};
    }

    #btn-configuracion-mobile {
        display: none;
    }

    .btnConfig {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        font-weight: 400;
        color: ${colors.blue};
        cursor: pointer;

        padding: 20px 16px;
        border-radius: 8px 8px 0px 0px;
        border: ${({ agregar }) => (agregar ? "1px" : "0px")} solid ${colors.lighterGray};
        border-bottom: 1px solid ${colors.white};
        z-index: 1;
    }
`;

export const DivMisAccesos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    /* min-height: 500px; */
    border: 1px solid ${colors.lighterGray};
    border-radius: 8px 0px 8px 8px;
    margin-bottom: 16px;
    position: relative;
    top: -1px;

    h6 {
        padding: 15px 24px 0px;
        font-size: 16px;
        font-weight: 400;
    }

    .mis-accesos-listado {
        padding: 0px 16px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: repeat(7, 48px);
        gap: 0px;

        /* .mis-accesos-detalle {
            display: flex;
            align-items: center;
            padding: 16px 16px 16px 8cqh;
            border-right: ${({ borde }) => ( borde == 0 ? "1px" : "0px")} solid ${colors.lighterGray};
        } */

        .checkbox-container {
            display: flex;
            justify-content: space-between;
            width: 100%;
            gap: 8px;

            h5 {
                font-size: 16px;
                font-weight: 400;
                margin-right: auto;
            }

            .checkbox {
                opacity: 0;
                position: absolute;
            }
            
            .label {
                background-color: ${colors.darkGray};
                border-radius: 50px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 5px;
                position: relative;
                height: 24px;
                width: 48px;
            }
            
            .label .ball {
                background-color: ${colors.white};
                border-radius: 50%;
                position: absolute;
                top: 2px;
                left: 2px;
                height: 20px;
                width: 20px;
                transform: translateX(0px);
                transition: transform 0.2s linear;
            }
            
            .checkbox:checked + .label .ball {
                transform: translateX(24px);
            }
            .checkbox:checked + .label{
                background-color: ${colors.blue};
            }
            .checkbox:disabled + .label .ball {
                background-color: ${colors.darkGray};
            }
            .checkbox:disabled + .label{
                background-color: #E5E5E5;
                cursor: not-allowed;
            }
        }
    }
    
    .botones {
        display: flex;
        gap: 15px;
        margin-left: auto;
        padding: 0px 27px 21px 0px;
    }

    @media (max-width: 768px) {
        .mis-accesos-listado {
            max-height: 530px;
            overflow: auto;
            grid-template-columns: 1fr;
        }
    }
`;

export const DivMisAccesosDetalle = styled.div`
    display: flex;
    align-items: center;
    padding: 16px 16px 16px 8px;
    border-right: ${({ borde }) => ( borde == 0 ? "1px" : "0px")} solid ${colors.lighterGray};
`;

export const DivAccesosFavoritos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px 30px;
    margin-top: 16px;
`;

export const DivAccesosFavBox = styled.div`
    min-height: 80px;
    border: 1px solid ${colors.lighterGray};
    border-radius: 16px;
    display: flex;
    gap: 16px;
    align-items: center;
    padding-left: 16px;
    cursor: pointer;
    width: 100% !important;

    a {
        display: flex;
        align-items: center;
        gap: 16px;
        color: #191919;
        font-size: 20px;
        font-weight: 500;
        text-decoration: none;
        width: 100%;
        height: 100%;
    }

    h5 {
        font-size: 20px;
        font-weight: 500;
        text-align: center;
    }
`;

export const DivInformacion = styled.div`
    margin-top: 32px;
    margin-bottom: 32px;
    padding: 32px 0px 0px 0px;
    border-top: 1px solid ${colors.lighterGray};

    .denuncias-minimarket {
        display: flex;
        gap: 24px;

        .canal-denuncias {
            width: 546px;
            border-radius: 16px;
            border: 1px solid ${colors.blue};
            display: flex;
            gap: 16px;
            padding: 13px 17px 14px 8px;

            .imgCard {
                width: 168px;
                height: 168px;
            }

            div {
                display: flex;
                flex-direction: column;
                justify-content: center;

                .pMargen {
                    margin-bottom: 16px;
                }
            }
        }

        .minimarket {
            width: 261px;
            border-radius: 16px;
            border: 1px solid ${colors.blue};

            .contenido {
                padding: 16px 12px;
                border-bottom: 1px solid ${colors.lighterGray};
                display: flex;
                flex-direction: column;
                gap: 16px;

                .titulo {
                    display: flex;
                    align-items: center;
                    color: ${colors.blue};
                    font-weight: 700;
                    line-height: 21.6px;
                    font-size: 18px;

                    img {
                        width: 48px;
                        height: 48px;
                    }
                }

                .wsp {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    font-weight: 500;

                    p {
                        font-size: 15px;
                        line-height: 19.2px;
                    }

                    .numero {
                        display: flex;
                        align-items: center;
                        font-size: 18px;
                        line-height: 21.6px;
                        gap: 8px;
                        text-decoration: underline;

                        img {
                            height: 32px;
                            width: 32px;
                        }
                    }
                }
            }

            a {
                padding: 8px 19px;
                display: flex;
                align-items: center;
                color: ${colors.blue};
                text-decoration: underline;
                font-weight: 600;
                gap: 8px;

                img {
                    width: 16px;
                    height: 16px;
                }
            }

            @media (max-width: 768px) {
                width: 100%;

                .titulo {
                    flex-direction: column;
                    align-items: center;

                    p {
                        width: 290px;
                        text-align: center;
                    }
                }

                .wsp {
                    align-items: center;
                }
            }
        }

        .imgArrow {
            width: 12px;
        }

        @media (max-width: 768px) {
           flex-direction: column;

           .canal-denuncias {
                width: 320px;
                flex-direction: column;
                align-items: center;

                div {
                    align-items: center;

                    .pMargen {
                        margin-bottom: 0px;
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                    }
                }
           }
        }
    }

    @media (max-width: 768px) {
        border-top: 0px solid ${colors.lighterGray};
    }
`;

export const DivAccesosVarios = styled.div`
    display: flex;
    gap: 24px;

    .card-inicio {
        border-radius: 8px;
        border: 1px solid ${colors.lighterGray};
        width: 261px;

        .imagen {
            border-bottom: 1px solid ${colors.lighterGray};
            height: 103px;
            display: flex;
            justify-content: center;
            align-items: center;

            .anios {
                width: 127px;
            }
        }

        .texto {
            border-bottom: 1px solid ${colors.lighterGray};
            padding: 16px 10px;
            height: 89px;
        }

        a {
            padding: 8px 19px;
            display: flex;
            align-items: center;
            color: ${colors.blue};
            text-decoration: underline;
            font-weight: 600;
            gap: 8px;

            img {
                width: 16px;
                height: 16px;
            }
        }

        @media (max-width: 768px) {
            width: 100%;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const BarraExito = styled.div`
    background: #00a364;
    display: flex;
    font-weight: 500;
    font-size: 18px;
    color: #fff;
    min-height: 44px;
    border-radius: 8px;
    align-items: center;
    padding: 5px 11px;
    gap: 8px;
    margin-top: 20px;
    margin-bottom: 12px;
    height: 100%;
`;