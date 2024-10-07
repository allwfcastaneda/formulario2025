import styled from 'styled-components';
import { colors } from "../../assets/variables";

export const Cardstyle = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.lighterGray};
  border-radius: 8px;
  padding: 0px;
  padding-bottom: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: ${colors.white};
  text-align: start;

  img {
    width: 55px; /* Ajusta el tamaño de la imagen */
    height: 55px; /* Mantén la proporción de la imagen */
  }

  h4 {
    font-size: 1.2em;
    font-weight: bold;
    color: ${colors.blue};
    padding: 10px;
    border-bottom: 1px solid ${colors.lighterGray};
  }

  h5 {
    font-size: 1em;
    font-weight: bold;
    color: ${colors.black};
    padding: 5px 0 5px 10px;
  }

  a {
    color: ${colors.black};
    text-decoration: underline;
    font-size: 0.9em;
    padding: 0px 0px 5px 10px;
  }

  a:hover {
    text-decoration: underline;
  }

  p {
    margin-top: 0px;
    font-size: 0.9em;
    color: ${colors.darkGray};
    padding: 0px 0px 10px 10px;
  }
  .logocard {
  display:flex;
  }

  /* Estilos específicos para las tarjetas con clase "doble" */
  &.doble {
    .textocard {
      display: grid;
      grid-template-columns: repeat(2, 1fr); /* 2 columnas */
      gap: 10px;
      padding: 10px;
    }
  }
`;