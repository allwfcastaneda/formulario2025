import styled from "styled-components";
import { colors } from "../../assets/variables";

export const ContenedorInput = styled.div`
    border: 1px solid ${colors.mediumGray};
    border-radius: 22.5px;
    width: ${({width}) => width ? width : "440px"};
    height: 45px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${({marginTop}) => marginTop || 0};

    img {
        position: absolute;
        top: 10px;
        left: 20px;
    }
`

export const StyledInput = styled.input`
    border: none;
    width: 80%;
    padding-left: 10px;
    height: 100%;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.2px;

    &:active, &:focus-visible {
        outline: none;
        box-shadow: none;
    }
`