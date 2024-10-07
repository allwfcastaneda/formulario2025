import styled from "styled-components";
import { colors } from "../../assets/variables";

export const ContenedorPadreTarjetas = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 20px;
  row-gap: 20px;
  margin-bottom: 30px;
`;

export const ContenedorTarjetaDescargas = styled.div`
  border: 1px solid ${colors.lighterGray};
  border-radius: 8px;
  width: 365px;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 19.2px;
    margin-bottom: 0;
    margin-left: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 95px;

    p {
        font-size: 16px;
    }
  }
`;