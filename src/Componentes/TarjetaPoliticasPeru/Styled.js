import styled from "styled-components";
import { colors } from "../../assets/variables";

export const ContenedorPadreTarjetas = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: 20px;
  row-gap: 20px;
  margin-bottom: 30px;
`;

export const ContenedorTarjetaPeru = styled.div`
border: 1px solid ${colors.lighterGray};
  border-radius: 8px;
  width: 365px;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  a {
   text-decoration: none;
   color: ${colors.black};
   width: 100%;
  }

  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .titulo-tarjeta-politicas-peru {
    font-size: 16px;
    font-weight: 500;
    line-height: 19.2px;
    margin-left: 0;
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 95px;

    .titulo-tarjeta-politicas-peru {
        font-size: 16px;
    }
  }
`