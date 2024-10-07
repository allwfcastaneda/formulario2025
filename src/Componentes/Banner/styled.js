import styled from "styled-components";
import { colors } from "../../assets/variables";

export const ContenedorBanner = styled.div`
  width: 100%;
  height: 240px;
  border-radius: 16px;
  border: ${({borde}) => borde ? borde : `1px solid ${colors.lighterGray}`};
  display: flex;
  gap: ${({ gap }) => gap};

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: 32px;

    h3 {
      font-weight: 600;
      font-size: 22px;
      line-height: 26.4px;
      color: ${colors.black};
    }
  }

  .imgBanner {
    height: ${({ altoImagen }) => (altoImagen ? altoImagen : "240px")};
    margin-top: ${({ margenTop }) => (margenTop ? margenTop : "-25px")};
  }
`;
