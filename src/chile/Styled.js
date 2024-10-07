import styled, { createGlobalStyle } from "styled-components";
import { colors } from "../assets/variables";

export const GlobalStyle = createGlobalStyle`
    html{
        box-sizing: border-box;
        font-family: 'Barlow', sans-serif;
        scrollbar-width: thin;
        scrollbar-color: #807882 #fff;
    }
    *,*::before,*::after{
        box-sizing: border-box;
    }
    body{
        margin: 0;
        font-family: 'Barlow', sans-serif;
        h1,h2,h3,h4,h5,h6,p{
            margin: 0;
            font-family: 'Barlow', sans-serif;
        }
        strong{
            font-weight: 600;
        }
        button, div, span{
        font-family: 'Barlow', sans-serif;
        }
        overflow: ${({  isOpen  }) => ((isOpen ? "hidden" : "auto"))};
        overflow-x: hidden;
    }

    select:not(:-internal-list-box) {
    
        overflow: visible !important;
    }

    select {
        writing-mode: horizontal-tb !important;
        text-rendering: auto;
        color: fieldtext;
        letter-spacing: normal; 
        word-spacing: normal;
        line-height: normal;
        text-transform: none;
        text-indent: 0px;
        text-shadow: none;
        display: inline-block;
        text-align: start;
        appearance: auto;
        box-sizing: border-box;
        align-items: center;
        -webkit-rtl-ordering: logical;
        background-color: field;
        cursor: default;
        margin: 0em;
        border-width: 1px;
        border-style: solid;
        border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
        border-image: initial;
        border-radius: 0px;
    }

    /* clears the 'X' from Internet Explorer */
    input[type=search]::-ms-clear {  display: none; width : 0; height: 0; }
    input[type=search]::-ms-reveal {  display: none; width : 0; height: 0; }

    /* clears the 'X' from Chrome */
    input[type="search"]::-webkit-search-decoration,
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-results-button,
    input[type="search"]::-webkit-search-results-decoration { display: none; }
`;

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
  z-index: 5;
`;

export const GridSite = styled.div`
  display: grid;
  grid-template-columns: 261px 1fr;
  grid-template-rows: 1fr auto;
  grid-template-areas:
    "sidebar content"
    "sidebar footer";
  height: 100vh;

  .menu-lateral {
    grid-area: sidebar;
    position: sticky;
  }

  .logos-menu-mobile {
    visibility: hidden;
    width: 0;
  }

  main {
    grid-area: content;
    margin: auto;
    width: 831px;
    height: 100%;

    .saludo-colab {
      h1 {
        font-size: 22px;
        font-weight: 500;
        margin-bottom: 36px;
      }
    }
  }

  footer {
    grid-area: footer;
    margin: auto;
    width: 831px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "content"
      "footer";
    width: 100vw;

    main {
      grid-area: content;
      padding: 0 16px;
      width: 100vw;

      .saludo-colab {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 12px;
        margin-top: 20px;
        margin-bottom: 25px;
        gap: 15px;

        h1 {
          font-size: 16px;
          line-height: 24px;
          margin-bottom: 0px;
          z-index: 10;
        }
      }

      .logos-menu-mobile {
        z-index: 10;
      }
    }

    footer {
      grid-area: footer;
      width: 100vw;
      padding: 0 16px;

      p {
        visibility: hidden;
      }
    }

    .menu-lateral {
      position: absolute;
      top: -75px;
      left: ${({ open }) => (open ? "0%" : "-100%")};
      transition: left 700ms 400ms;
      width: 100%;
      overflow: hidden;
      z-index: 10;
    }

    .logos-menu-mobile {
      visibility: visible;
      width: max-content;
      margin-left: 9px;
      display: flex;
      gap: 20px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
`;

export const ContenedorGeneral = styled.div`
  margin: 0 auto;
  width: 100%;

  #pocket {
    position: fixed;
    top: 45%;
    right: 50px;
    z-index: 50;
  }

  @media (max-width: 768px) {
    #pocket {
      top: 78%;
    }
  }
`;

export const Parrafo = styled.p`
  font-weight: 400;
  font-size: ${({  fontSize  }) => ((fontSize ? fontSize : "16px"))};
  line-height: ${({  lineHeight  }) => ((lineHeight ? lineHeight : "19.2px"))};
  margin: ${({ margen }) => (margen ? margen : "0 0 0 0")};

  span {
    font-size: 16px;
  }

  .modal-ejemplo {
    text-decoration: underline;
    cursor: pointer;
    font-size: 18px;
  }

  .azul {
    color: ${colors.blue};
  }

  a {
    color: ${colors.black};
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    text-decoration: underline;
    font-size: 18px;
    line-height: 21.6px;
    padding: 0;

    @media (max-width: 768px) {
      font-size: 16px;
      line-height: 19.2px;
    }
  }

  @media (max-width: 768px) {
    font-size: ${({  fontSizeMob  }) => ((fontSizeMob ? fontSizeMob : "20px"))};
    line-height: ${({  lineHeightMob  }) =>
     
      lineHeightMob ? lineHeightMob : "24px"};
  }
`;

export const TituloSeccion = styled.h3`
  font-weight: 500;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "26px")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "24px")};
  color: ${colors.blue};
  margin: ${({ margen }) => (margen ? margen : "0 0 0 0")};
`;

export const BarraSeparacion = styled.div`
  border-bottom: ${({ borde }) =>
   
    borde ? borde : `1px solid ${colors.lighterGray}`};
  margin: ${({ margen }) => (margen ? margen : "48px 0 40px 0")};
`;

export const Banner = styled.div`
  width: 100%;
  height: 240px;
  border-radius: 16px;
  border: 1px solid ${colors.lighterGray};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 44px;
  font-weight: 400;
  line-height: 52.8px;
  padding: 26px;

  @media (max-width: 768px) {
    font-size: 22px;
    line-height: 26.4px;

    height: 168px;

    img {
      height: ${({ imgResponsive }) =>
        imgResponsive ? imgResponsive : "168px"};
      margin-left: ${({ imgMargen }) => (imgMargen ? imgMargen : "-45px")};
    }
  }
`;

export const ContenedorConBorde = styled.div`
  width: 100%;
  border-radius: 16px;
  border: 1px solid ${({ border_color }) => border_color || colors.lighterGray};
  padding: ${({ padding }) => padding || '14px'};
  margin: ${({ margin }) => margin || '0'};
  position: relative;
  background-color: ${({ bg_color }) => bg_color || colors.white};
  min-height: ${({minHeight}) => minHeight || '0'};

  @media (width < 768px){
    padding: 16px;
  }

  .selected{
    border-color: ${colors.azul};
  }

  .hide{
    visibility: hidden;
    height: 0;
  }
  
`;

export const ContenedorGridCustom = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }) => columns || 2} ${({fr}) => fr || 'auto'};
  gap: 16px;
  padding: ${({ padding }) => padding || 0};

  @media (width < 768px ) {
    grid-template-columns: 1fr;
  }

`;