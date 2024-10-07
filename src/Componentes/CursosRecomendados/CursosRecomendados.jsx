import React from "react";
import {
  ContenedorBordeAzul,
  ContenedorCursosRecomendados,
} from "../../chile/pages/EntelActive/BienestarEmocional/DefineTusPrioridades/Styled";
import { TarjetaImagenBeneficios } from "../TarjetaImagenBeneficios/TarjetaImagenBeneficios";

export const CursosRecomendados = ({arregloDatos, target}) => {
  return (
    <ContenedorCursosRecomendados>
      <img
        className="ecabezado-cursos"
        src="/global/img/eActive/CursosEncabezado.png"
        alt="encabezado-cursos"
      />
      <p>
        Revisa estos cursos recomendados y sigue profundizando en este tema:
      </p>
      <TarjetaImagenBeneficios target={target} arregloDatos={arregloDatos} />
      <ContenedorBordeAzul>
        <div className="contenedor-imagen-texto">
          <img src="/global/icons/SoyNuevo/Informacion.svg" alt="informacion" />
          <p>
            Si aún no tienes activa tu cuenta en LinkedIn con Universidad Entel,
            contacta a:
          </p>
        </div>
        <div className="last-child">
          <div>
            <img src="/global/img/eActive/ChileMini.png" alt="bandera-chile" />
            <a href="mailto:ser_universidadentel@entel.cl">ser_universidadentel@entel.cl</a>
          </div>
          <div>
            <img src="/global/img/eActive/PeruMini.png" alt="bandera-peru" />
            <a href="mailto:ser_universidadentel@entel.pe">ser_universidadentel@entel.pe</a>
          </div>
        </div>
      </ContenedorBordeAzul>
    </ContenedorCursosRecomendados>
  );
};
