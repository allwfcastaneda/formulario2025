import styled from 'styled-components';
import { colors } from '../../assets/variables';

export const TooltipWrapper = styled.div`
  position: absolute;
  background-color: ${colors.blue};
  color: ${colors.white};
  padding: 10px;
  padding-right: 20px;
  padding-left: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  // max-width: 200px;
  font-size: 0.9em;
  white-space: nowrap;
  /* Ajustar para centrar horizontalmente */
  transform: translateX(-50%);
  
  /* Flecha */
  &:after {
    content: '';
    position: absolute;
    top: 100%; /* Flecha abajo del tooltip */
    left: 50%;
    margin-left: -5px; /* Centra la flecha */
    border-width: 5px;
    border-style: solid;
    border-color: ${colors.blue} transparent transparent transparent;
  }
`;