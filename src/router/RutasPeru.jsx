// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import { Layout } from "../Componentes/Layout";
// import {
//   // Inicio,
//   AgendaColaborador,
//   Feriado,
//   EmbajadorEntel,
//   Politicas,
//   NuestrosLideres,
//   Fenomenodelnino,
//   Sostenibilidad,
//   Nominaciones,
//   Campus,
//   Success,
//   EntelFlexOffice,
//   Workplace,
//   Manual,
//   Office365,
//   Enlaces,
//   PreguntasFrecuentes,
//   OneDeskIt,
//   Fie,
//   Contacto, 
//   SoyNuevoPeru,
//   EntelActivePeru,
//   PortalLiderEntelPeru,
//   OnboardingLiderEntelPeru,
//   LiderazgoEntelPeru,
//   ProcesosPersonasPeru,
//   ServicioClientePeru,
//   ProcedimientosPeru, 
//   ProvisoriaPeru,
//   NuestraCulturaPeru,
//   Diversidad,
//   Etica,
//   ProcesoRenunciaPeru,
//   AgilidadPeru,
//   RRHH,
//   Seguridad,
//   Encuesta30diasPeru,
//   Redireccion30diasPeru,
//   Encuesta90diasPeru,
//   Redireccion90diasPeru
// } from "../peru/pages/index";
// import { useUserStore } from "../store/usuario";
// import { Inicio } from "../chile/pages";

// export const RutasPeru = () => {
//   const usuarioRol = useUserStore(state => state.usuarioRol)

//   const rutasPorRol = {
//     1: [
//       { path: "/portalLiderEntel", element: <PortalLiderEntelPeru /> },
//       { path: "/PortalLiderEntel/OnboardingLiderEntel", element: <OnboardingLiderEntelPeru /> },
//       { path: "/PortalLiderEntel/LiderazgoEntel", element: <LiderazgoEntelPeru /> },
//       { path: "/PortalLiderEntel/ProcesosPersonas", element: <ProcesosPersonasPeru /> },
//     ]
//   };

//   const rutasDinamicasPorRol = usuarioRol.flatMap(role => rutasPorRol[role.IdRol] || []);
//   return (
//     <Routes>
//       <Route path="/Inicio" element={<Layout><Inicio /></Layout>} />
//       <Route path="/*" element={<Layout><Inicio /></Layout>} />
//       <Route path="/SoyNuevo" element={<Layout><SoyNuevoPeru /></Layout>} />
//       <Route path="/Encuesta30dias" element={<Encuesta30diasPeru /> } />
//       <Route path="/Redireccion30dias" element={<Redireccion30diasPeru /> } />
//       <Route path="/Encuesta90dias" element={<Encuesta90diasPeru /> } />
//       <Route path="/Redireccion90dias" element={<Redireccion90diasPeru /> } />
//       <Route path="/AgendaColaborador" element={<Layout><AgendaColaborador /></Layout>} />
//       <Route path="/Feriado" element={<Layout><Feriado /></Layout>} />
//       <Route path="/entelactive" element={<Layout><EntelActivePeru /></Layout>} />
//       <Route path="/ServicioCliente" element={<Layout><ServicioClientePeru /></Layout>} />
//       <Route path="/ServicioCliente/Procedimientos" element={<Layout><ProcedimientosPeru /></Layout>} />
//       <Route path="/Provisoria" element={<ProvisoriaPeru />} />
//       <Route path="/EmbajadorEntel" element={<Layout><EmbajadorEntel /></Layout>} />
//       <Route path="/NuestraCultura" element={<Layout><NuestraCulturaPeru /></Layout>} />
//       <Route path="/Diversidad" element={<Layout><Diversidad /></Layout>} />
//       <Route path="/Politicas" element={<Layout><Politicas /></Layout>} />
//       <Route path="/Politicas/RRHH" element={<Layout><RRHH /></Layout>} />
//       <Route path="/Politicas/Seguridad" element={<Layout><Seguridad /></Layout>} />
//       <Route path="/Etica" element={<Layout><Etica /></Layout>} />
//       <Route path="/NuestrosLideres" element={<Layout><NuestrosLideres /></Layout>} />
//       <Route path="/Fenomenodelnino" element={<Layout><Fenomenodelnino /></Layout>} />
//       <Route path="/Sostenibilidad" element={<Layout><Sostenibilidad /></Layout>} />
//       <Route path="/ProcesoRenuncia" element={<Layout><ProcesoRenunciaPeru /></Layout>} />
//       <Route path="/Agilidad" element={<Layout><AgilidadPeru /></Layout>} />
//       <Route path="/Nominaciones" element={<Nominaciones />} />
//       <Route path="/Campus" element={<Campus />} />
//       <Route path="/Success" element={<Success />} />
//       <Route path="/EntelFlexOffice" element={<EntelFlexOffice />} />
//       <Route path="/Workplace" element={<Workplace />} />
//       <Route path="/Manual" element={<Layout><Manual /></Layout>} />
//       <Route path="/Office365" element={<Layout><Office365 /></Layout>} />
//       <Route path="/Enlaces" element={<Layout><Enlaces /></Layout>} />
//       <Route path="/Contacto" element={<Layout><Contacto /></Layout>} />
//       <Route path="/Pregunta" element={<Layout><PreguntasFrecuentes /></Layout>} />
//       <Route path="/Pregunta/OneDesk" element={<Layout><OneDeskIt /></Layout>} />
//       <Route path="/Pregunta/Fie" element={<Layout><Fie /></Layout>} />


//       {/* Renderiza las rutas dinámicas basadas en los roles */}
//       {rutasDinamicasPorRol.map((ruta, index) => (
//         <Route key={index} path={ruta.path} element={<Layout>{ruta.element}</Layout>} />
//       ))}

//     </Routes>
//   );
// };
