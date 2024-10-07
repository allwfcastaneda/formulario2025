import styled from "styled-components";
import { colors } from "../../assets/variables";

export const ContenedorPrincipal = styled.div`
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const ContenedorBotones = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  #primer-boton {
    align-self: center;
  }
`;

export const ContenedorLink = styled.div`
  border-top: 1px solid ${colors.lighterGray};
  visibility: ${({ extraLink }) => (extraLink === true ? "visible" : "hidden")};
`;
