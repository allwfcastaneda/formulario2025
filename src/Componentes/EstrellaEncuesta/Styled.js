import styled from "styled-components"
import { colors } from "../../assets/variables"

export const ContenedorEstrellas = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: ${({gap}) => gap ? gap : "30px"};
    margin-left: 40px;

    @media (max-width: 768px) {
        gap: 5px;
        margin-left: 0;
        flex-wrap: wrap;
        max-height: 200px;
        overflow: hidden;
        justify-content: center;
    }
`

export const StyledSVG = styled.svg`
    cursor: pointer;
    @media (max-width: 768px) {
        height: 55px;
        width: 53px;
    }
`

export const StyledStarNumber = styled.text`
    color: ${colors.black};
    font-size: 30px;
    font-weight: 500;
    line-height: 24px;
`

export const StyledError = styled.h5`
  color: ${colors.red};
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  margin-top: 20px;
  margin-left: 55px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`
