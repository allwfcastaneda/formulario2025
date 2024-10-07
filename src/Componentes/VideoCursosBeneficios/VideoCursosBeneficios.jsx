import React from "react";
import { StyleH4 } from "../../chile/pages/EntelActive/BienestarEmocional/DefineTusPrioridades/Styled";
import { ContenedorVideoHerramientas } from "../../chile/pages/EntelActive/BienestarEmocional/OrganizaTuAgenda/Styled";
import { Boton } from "../Boton/Boton";
import { Parrafo } from "../../chile/pages/EntelActive/BienestarEmocional/Styled";

export const VideoCursosBeneficios = ({ videoURL, descripcion }) => {
  return (
    <>
      <StyleH4>Herramientas</StyleH4>
      <ContenedorVideoHerramientas>
        <div className="encabezado-con-boton">
          <div>
            <img
              src="/global/img/eActive/VivaMSTeams.png"
              alt="viva-ms-teams"
            />
            <h3>Viva Insights de MS Teams</h3>
          </div>
          <Boton
            target="_blank"
            botonAzul
            flecha
            link="https://teams.microsoft.com/l/app/57e078b5-6c0e-44a1-a83f-45f75b030d4a?source=app-details-dialog"
          >
            Ir a Viva Insights
          </Boton>
        </div>
        <Parrafo>{descripcion}</Parrafo>
        <div className="contenedor-video">
          <video src={videoURL} autoPlay muted controls></video>
        </div>
      </ContenedorVideoHerramientas>
    </>
  );
};
