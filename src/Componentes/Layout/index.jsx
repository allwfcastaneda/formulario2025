import React, { useState } from "react";
import {
  BarraSeparacion,
  ContenedorGeneral,
  GridSite,
} from "../../chile/Styled";
import { Menu } from "../Menu/Menu";
import { ContenedorFooter } from "./styled";
import { useUserStore } from "../../store/usuario";
import { CapitalizarTexto } from "../../chile/customHooks/hooks";

const socialMediaLinks = [
  {
    id: 1,
    to: "https://www.facebook.com/entelSA",
    ruta: "/global/icons/Facebook.svg",
    alt: "facebook-icon",
  },
  {
    id: 2,
    to: "https://x.com/entel",
    ruta: "/global/icons/Twitter.svg",
    alt: "twitter-icon",
  },
  {
    id: 3,
    to: "https://www.instagram.com/entel/?hl=es-la",
    ruta: "/global/icons/Instagram.svg",
    alt: "instagram-icon",
  },
  {
    id: 4,
    to: "https://www.linkedin.com/company/163639/admin/",
    ruta: "/global/icons/LinkedIn.svg",
    alt: "linkedin-icon",
  },
  {
    id: 5,
    to: "https://www.youtube.com/user/entel",
    ruta: "/global/icons/Youtube.svg",
    alt: "youtube-icon",
  },
];

export const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { Pais: pais, NombreCompleto: nombre } = useUserStore(state => state.data)

  return (
    <ContenedorGeneral>
      <GridSite open={isOpen}>
        <div className="menu-lateral">
          <Menu pais={pais} openMenu={setIsOpen} />
        </div>
        <main>
          <div className="saludo-colab">
            <div className="logos-menu-mobile">
              {isOpen ? (
                <img
                  src="/global/icons/Cerrar.svg"
                  width={24}
                  onClick={() => setIsOpen(!isOpen)}
                />
              ) : (
                <img
                  src="/global/icons/MenuMob.svg"
                  width={24}
                  onClick={() => setIsOpen(!isOpen)}
                />
              )}
              <img src="/global/icons/SoyEntelMob.svg" width={74} height={20} />
            </div>
            <h1>Hola, {CapitalizarTexto(nombre)}</h1>
          </div>
          {children}
        </main>
        <footer>
          <BarraSeparacion />
          <ContenedorFooter>
            <div>
              <img src="/global/icons/LogoEntelMini.svg" alt="logo-entel" />
            </div>
            <div className="contenedor-links">
              <p>Siguenos en:</p>
              {socialMediaLinks.map((link) => (
                <div className="contenedor-iconos" key={link.id}>
                  <a target="_blank" href={link.to}>
                    <img src={link.ruta} alt={link.alt} />
                  </a>
                </div>
              ))}
            </div>
          </ContenedorFooter>
        </footer>
      </GridSite>
      <img id="pocket" src="/global/img/POCKET.png" />
    </ContenedorGeneral>
  );
};
