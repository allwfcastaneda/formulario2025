import styled from "styled-components";
import { colors } from "../../assets/variables";

export const Loader = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: transparent;
  text-align: center;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .loader__circular {
    border: 13px solid transparent;
    border-radius: 50%;
    border-top: 13px solid ${colors.orange};

    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: fixed;

    width: 100px;
    height: 100px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 1s linear infinite;
  }

  .loader__icono {
    position: absolute;
    left: 0;
    right: 0;
    top: calc(50% - 25px);
  }

  .loader__texto {
    position: absolute;
    left: 0;
    right: 0;
    top: calc(50% + 75px);
    color: ${colors.white};
    font-weight: 500;
    font-size: 18px;
  }
`;
