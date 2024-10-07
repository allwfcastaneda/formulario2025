import React, { useEffect } from "react";
import { Backdrop } from "../../chile/Styled";
import { Loader } from "./styled";

export const Cargando = () => {
  // useEffect(() => {
  //   document.body.style.overflow = "hidden";
  //   return () => (document.body.style.overflow = "auto");
  // }, []);

  return (
    <Backdrop>
      <Loader>
        <div className="loader__circular"></div>
        <div className="loader__icono">
          <img src="/global/img/loading-entel.svg" alt="loading" />
        </div>
        <div className="loader__texto">Cargando información...</div>
      </Loader>
    </Backdrop>
  );
};
