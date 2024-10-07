import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../Componentes/Layout";
import { Inicio } from "../chile/pages/index";
import { useUserStore } from "../store/usuario";

export const RutasChile = () => {
  const usuarioRol = useUserStore(state => state.usuarioRol)

  const rutasPorRol = {
    1: [
      // { path: "/portalLiderEntel", element: <PortalLiderEntel /> },
      // { path: "/PortalLiderEntel/OnboardingLiderEntel", element: <OnboardingLiderEntel /> },
      // { path: "/PortalLiderEntel/LiderazgoEntel", element: <LiderazgoEntel /> },
      // { path: "/PortalLiderEntel/ProcesosPersonas", element: <ProcesosPersonas /> },
    ]
  };

  const rutasDinamicasPorRol = usuarioRol.flatMap(role => rutasPorRol[role.IdRol] || []);

  return (
    <Routes>
      <Route path="/" element={<Layout><Inicio /></Layout>} />

      {/* Renderiza las rutas dinámicas basadas en los roles */}
      {/* {rutasDinamicasPorRol.map((ruta, index) => (
        <Route key={index} path={ruta.path} element={<Layout>{ruta.element}</Layout>} />
      ))} */}
    </Routes>
  )
}
