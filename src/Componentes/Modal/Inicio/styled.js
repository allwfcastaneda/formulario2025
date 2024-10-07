import styled from "styled-components";
import { colors } from "../../../assets/variables";

export const DivContenedorModal = styled.div`
    padding: 16px 16px 26px;

    .iconoCerrar {
        position: relative;
        left: 94%;
        cursor: pointer;
    }

    .card-cumpleanios {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 10px;
        margin-bottom: 24px;

        .img-cumple {
            width: 100%;
            cursor: pointer;
            border: 1px solid ${colors.darkGray};
            border-radius: 8px;
        }

        .img-cumple.active {
            border: 2px solid ${colors.orange};
            border-radius: 8px;
        }
    }

    .contenedor {
        padding: 0px 14px;

        h3 {
            color: ${colors.blue};
            font-weight: 400;
            font-size: 18px;
            margin-bottom: 16px;
        }

        h4 {
            font-size: 16px;
            font-weight: 400;
            margin-bottom: 16px;
        }

        .input-formulario {
            position: relative;

            label {
                position: absolute;
                font-size: 16px;
                left: 10px;
                top: 47%;
                transform: translateY(-50%);
                background-color: white;
                color: #636467;
                padding: 0 8px;
                margin: 0 0.5rem;
                transition: .2s ease-out;
                transform-origin: left top;
                pointer-events: none;

                span {
                    color: #e8200c;
                }
            }

            input {
                width: 100%;
                min-width: 255px;
                font-size: 16px;
                outline: none;
                border: 1px solid ${colors.darkGray};
                min-height: 56px;
                border-radius: 8px;  
                padding: 0px 16px;
                color: #3E3C3D;
                font-weight: 400;
                transition: 0.1s ease-out;
                position: relative;
                &:disabled{
                    background: #E5E5E5;
                }
                &:disabled + label{
                    background-color: #E5E5E5;
                }
                &.input-icono{
                    padding: 0px 26px;
                }
                &.correcto{
                    border: 1px solid #E5E5E5;
                    background: url("../img/icono-exito-card.svg");
                    background-repeat: no-repeat;
                    background-position-x: 96%;
                    background-position-y: 50%;
                    background-size: 24px 24px;
                }
                &.error 
                {
                    border: 1px solid #e8200c;
                }
                &.error + label{ 
                    color: #e8200c;
                    top: 0;
                    transform: translateY(-50%);
                    font-weight: 600;
                    font-size: 14px;
                }
            }

            input[type="text"]:focus + label {
                color: ${colors.blue};
                top: 0;
                transform: translateY(-50%);
                font-weight: 600;
                font-size: 14px;
            }

            input[type=text]:not(:placeholder-shown)+label {
                top: 0;
                font-size: 14px;
                font-weight: 600;
            }
        }

        p {
            color: #666;
            font-size: 14px;
            font-weight: 400;
            padding-left: 10px;
            padding-top: 3px;
        }
        
        .btn-continuar-contenedor{
            margin-top: 34px;
            text-align: right;

            div {
                margin-left: auto;
            }
        }
    }

    @media (max-width: 768px) {
        .iconoCerrar {
            left: 90%;
        }

        .card-cumpleanios {
            grid-template-columns: repeat(3, 1fr);
        }
    }
`;

export const DivPreview = styled.div`
    display: flex;
    flex-direction: column;

    h4 {
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 30px;
        color: ${colors.blue};
    }

    h5 {
        font-size: 30px;
        color: ${colors.blue};
        font-weight: 600;
        margin-bottom: 14px;
    }

    p {
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 20px;
    }

    h6 {
        font-size: 18px;
        font-weight: 400;

        span {
            font-weight: 600;
        }
    }

    .banner-cumple-modal {
        width: 100%;
        height: 370px;
        margin-top: 18px;
    }

    .botones {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
    }

    @media (max-width: 768px) {
        .banner-cumple-modal {
            height: 100%;        
        } 
    }
`;