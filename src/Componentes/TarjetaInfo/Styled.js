import styled from "styled-components";
import { colors } from "../../assets/variables";

export const ContenedorTarjeta = styled.div`
  border: 1px solid ${colors.lighterGray};
  border-radius: 16px;
  width: 261px;
  height: ${({ alto }) => (alto ? alto : "373px")};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 50px;
  background-color: ${({ fondo }) => (fondo ? fondo : "")};

  @media (max-width: 768px) {
    width: 99%;
  }
`;

export const ContenedorPrincipal = styled.div``;

export const ContenedorEncabezado = styled.div`
  background-color: ${({ colorFondoTitulo }) =>
    colorFondoTitulo ? colorFondoTitulo : `${colors.lighterGreen}`};
  width: 100%;
  padding: 10px 10px 10px 20px;
  margin-bottom: 2px;

  h3 {
    font-size: 22px;
    font-weight: 500;
    line-height: 26.4px;
    color: ${({ colorTitulo }) =>
      colorTitulo ? colorTitulo : `${colors.black}`};
  }
`;

export const ContenedorImagen = styled.div`
  height: 80px;
  align-content: center;
  text-align: center;
`;

export const ContenedorTexto = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: ${({ padding }) => (padding ? padding : "0 15px")};

  p {
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
    font-weight: 400;
    line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "16px")};

    span {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    p {
      font-size: ${({ fontSizeMob }) => (fontSizeMob ? fontSizeMob : "")};
      line-height: ${({ lineHeightMob }) =>
        lineHeightMob ? lineHeightMob : ""};
    }
  }
`;

export const ContenedorLink = styled.div`
  border-top: 1px solid ${colors.lighterGray};
`;
