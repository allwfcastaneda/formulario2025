import styled from "styled-components";
import { colors } from "../../assets/variables.js";

export const AcordeonDetails = styled.details`
  margin: ${({ margen }) => margen || 0};
  cursor: pointer;
  border-radius: 8px;
  border-bottom: 0px solid #ddd;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : "")};

  &[open] {
    border-bottom: 1px solid #dddddd;
  }

  &[open] summary img {
    transform: rotate(180deg);
  }

  summary {
    padding: 0 18px 0 10px;
    color: ${({ colorTexto }) => colorTexto || colors.blue};
    font-size: ${({ tituloFontSize }) => tituloFontSize || "20px"};
    font-weight: ${({ tituloFontWeight }) => tituloFontWeight || "500"};
    position: relative;
    min-height: 70px;
    border: 1px solid #ddd;
    border-radius: 8px;
    display: flex;
    align-items: center;
    border-left: ${({ bordeIzquierdo }) =>
      bordeIzquierdo ? `10px solid ${colors.blue}` : "1px solid #ddd;"};

    .acordeon-title-icono {
      margin-right: 8px;

      img {
        transform: none;
      }
    }

    &::before {
      background: transparent;
    }

    img {
      margin-left: auto;
    }
  }

  @media (max-width: 768px) {

    summary {
      .acordeon-title-icono {
        display: none;
      }
    }
  }
`;

export const ContenedorGrid = styled.div`
  padding: ${({paddingContenido}) => paddingContenido ? paddingContenido : "25px 20px 0 20px"};
  p {
    margin-bottom: 20px;
    margin-left: -20px;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    padding: 10px 15px 0 15px;
}

`