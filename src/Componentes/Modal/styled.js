import styled from "styled-components";
import { colors } from "../../assets/variables";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(53, 52, 68, 0.72);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 51;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: ${({ alto }) => alto || "674px"};
  width: ${({ ancho }) => ancho || "1110px"};
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;

  @media (max-width: 768px) {
    width: 320px;
    height: 595px;
  }
`;

export const StyledModal = styled.div`
  background-color: ${({ colorFondo }) => colorFondo || colors.white};
  border-radius: 16px;
  border: 1px solid ${colors.blue};
  height: ${({ alto }) => alto || "674px"};
  width: ${({ ancho }) => ancho || "1110px"};
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0.5em;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colors.lighterGray};
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
