import styled from "styled-components";
import { colors } from "../../assets/variables";
import { NavLink } from "react-router-dom";

export const ContenedorMenu = styled.div`
  width: 261px;
  height: 100vh;
  background-color: ${colors.white};
  color: ${({ usuario }) =>
    usuario === "usuario" ? colors.black : colors.white};
  padding-right: 8px;
  position: sticky;
  top: 0;
  scrollbar-width: none;
  overflow: auto;

  .menu {
    margin-left: 20px;
  }

  .boton-denuncias {
    border-top: 2px solid ${colors.disabledGray};
    margin: 25px 0px 25px 15px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    .menu {
      width: 100%;
      margin-left: 0;
      padding: 0 15px;
    }

    .boton-denuncias {
      display: flex;
      justify-content: center;
      padding-top: 15px;
      padding-bottom: 25px;
    }

  }
`;

export const CabeceraMenu = styled.div`
  height: 130px;
  border-bottom: 2px solid ${colors.disabledGray};
  display: flex;
  gap: ${({ usuario }) => (usuario === "usuario" ? "16px" : "15px")};
  padding: 47px 8px 25px;
  margin-left: 15px;
  margin-bottom: 14px;

  .barraSeparacion {
    width: 2px;
    background-color: ${colors.lightGray};
  }

  @media (max-width: 768px) {
    visibility: hidden;

  }

  /* .perfil {
    display: flex;
    gap: ${({ usuario }) => (usuario === "usuario" ? "56px" : "19px")};
    position: relative;
    align-items: center;

    .perfilText {
      font-weight: 400;
    }

    .flecha {
      width: 24px;
      height: 24px;
      &:hover {
        cursor: pointer;
      }
    }
  } */
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  font-size: ${({ fontSize }) => fontSize || "18px"};
  line-height: ${({ lineheight }) => lineheight || "19.2px"};
  padding: 10px 8px 10px;
  border-radius: 100px;
  color: ${colors.black};
  font-weight: 500;
  margin-bottom: 8px;

  &.active {
    background-color: ${colors.lightBlue};
    width: 100%;
  }

  &:hover {
    background-color: ${colors.lightBlue};
  }

  div {
    display: flex;
    gap: 8px;
  }


`;

export const DropdownItemPadre = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 18px 8px;
  border-radius: 100px;
  width: 229px;
  height: 24px;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 18px;

  div {
    display: flex;
    gap: 8px;
    color: black;
    font-size: 18px;
    font-weight: 500;
  }

  .flechaMenu {
    transition: transform 0.3s ease;
    transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0)")};
  }

  @media (max-width: 768px) {
      width: 100%;
  }
`;

export const DropdownItems = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  margin-left: 37px;
`;

export const ContainerRoles = styled.div`
  position: absolute;
  top: 110%;
  left: 35%;
  min-width: 200px;
  width: 100%;
  background-color: white;
  padding: 12px;
  border: 1px solid ${colors.lighterGray};
  border-radius: 8px;
  z-index: 1;
  cursor: pointer;
  color: ${colors.black};

  :active {
    background-color: ${colors.lightBlue};
  }
`;
