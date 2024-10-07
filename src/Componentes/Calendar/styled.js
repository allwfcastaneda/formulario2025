import styled from 'styled-components';
import { colors } from "../../assets/variables";

export const CalendarWrapper = styled.div`
  .calendario-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .calendario-box {
    border: 1px solid ${colors.lighterGray};
    border-radius: 8px;
    overflow: hidden;
    width: calc(100% / 3 - 20px);
    height: 280px;
    margin-bottom: 20px;
  }

  .calendario-titulo {
    background: ${colors.lightGray};
    padding: 10px;
    font-size: 1.2em;
    font-weight: bold;
    text-align: center;
  }

  .calendario-dias {
    display: grid;
    grid-template-columns: repeat(7, 1fr); /* Garantiza que siempre haya 7 columnas */
    border-top: 1px solid ${colors.lighterGray};
    align-items: baseline;
    
  
  }

  .calendario-dias h4, .calendario-dias h5 {
    width: 100%;
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
    margin: 0;
    position: relative; /* Necesario para la línea ::before */
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background 0.3s, color 0.3s;
  }

  .calendario-dias h4 {
    background: ${colors.lightBlue};
    font-weight: bold;
  }

  .calendario-dias h5 {
    background-color: transparent;
  }

  .calendario-dias h5:hover {
    background: ${colors.lightGray};
  }

  .calendario-dias h5.activo {
    background: ${colors.blue};
    color: ${colors.white};
  }

  /* Línea horizontal en el centro del contenedor */
  .calendario-dias h5::before,
  .calendario-dias h5.cl::before,
  .calendario-dias h5.pe::before,
  .calendario-dias h5.ambos::before,
  .calendario-dias h5.empty::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 1px; /* Grosor de la línea */
    background-color: ${colors.lighterGray}; /* Color de la línea */
    z-index: -1; /* Asegúrate que la línea esté detrás del contenido */
  }

  /* Estilos para días vacíos */
  .calendario-dias h5.empty {
    visibility: hidden; /* Mantiene el espacio pero lo hace invisible */
  }

  .calendario-dias h5.hidden-day {
    color: transparent; /* Oculta el texto */
    background-color: transparent; /* Asegura que el fondo sea transparente */
  }

  /* Ajustar el tamaño de los círculos */
  .calendario-dias h5.cl, 
  .calendario-dias h5.pe, 
  .calendario-dias h5.ambos {
    border-radius: 50%;
    color: ${colors.white};
    font-size: 0.8em; /* Ajusta el tamaño del texto dentro del círculo */
    width: 25px; /* Ajusta el tamaño del círculo */
    height: 25px; /* Ajusta el tamaño del círculo */
    line-height: 25px; /* Alinea verticalmente el texto dentro del círculo */
    margin: 0 auto; /* Centra el círculo en su contenedor */
    position: relative; /* Asegura que la línea ::before se aplique correctamente */
  }

  .calendario-dias h5.cl {
    background-color: ${colors.blue};
  }

  .calendario-dias h5.pe {
    background-color: ${colors.red};
  }

  .calendario-dias h5.ambos {
    background-color: ${colors.ligthGreen};
  }

  .leyenda {
    display: flex;
    justify-content: end;
    margin-bottom: 20px;
    margin-right: 20px;
    gap: 10px;
  }

  .leyenda div {
    display: flex;
    align-items: center;
  }

  .circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 10px;
  }

  .circle.cl {
    background-color: ${colors.blue};
  }

  .circle.pe {
    background-color: ${colors.red};
  }

  .circle.ambos {
    background-color: ${colors.ligthGreen};
  }
`;
