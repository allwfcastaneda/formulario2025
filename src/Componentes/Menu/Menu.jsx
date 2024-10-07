import React from "react";
import { CabeceraMenu, ContenedorMenu } from "./styled";
import { MenuItems } from "./MenuItems";
import { menuChile, menuPeru } from "./menus";
import { Boton } from "../Boton/Boton";
import { Link } from "react-router-dom";
import { useUserStore } from "../../store/usuario"; 
export const Menu = ({ pais, openMenu }) => {

  const usuarioRol = useUserStore(state => state.usuarioRol);

  // Filtrar el menú segun condiciones...
  const menuFiltrado = (menu) => {
    return menu.filter(item => {

      //Filtra Portal Lider Entel del menu sino se tiene el Rol 1 (Lider Entel)
      if (item.text === "Portal Lider Entel") {
        return usuarioRol.some(role => role.IdRol === 1);
      }
      
      return true;
    });
  };


  return (
    <ContenedorMenu>
      <CabeceraMenu>
        <Link to="/">
          <img
            src="/global/img/Logo-entel.png"
            alt="logoMenuEntel"
            width={187}
            height={40}
          />
        </Link>
        {/* <div className="barraSeparacion"></div>
        <div className="perfil">
          <div>
            <h3 className="perfilText">Perfil</h3>
          </div>
        </div> */}
      </CabeceraMenu>
      <div className="menu">
        <MenuItems
          openMenu={openMenu}
          menuItems={pais === "Chile" ? menuFiltrado(menuChile) : menuFiltrado(menuPeru)}
        />
      </div>
      <div className="boton-denuncias">
        <Boton
          target="_blank"
          margen="20px 0 0 15px"
          width="215px"
          link="https://lineadedenuncia.ines.cl/lineadedenuncia/formulario/098789/"
        >
          Canal de denuncias y consultas
        </Boton>
      </div>
    </ContenedorMenu>
  );
};
