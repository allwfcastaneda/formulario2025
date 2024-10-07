import Slider from "react-slick";
import styled from "styled-components";
import { colors } from "../../assets/variables";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const StyledCarrusel = styled(Slider)`
  height: ${({ altoCarrusel }) => (altoCarrusel ? altoCarrusel : "auto")};
  margin: ${({ margen }) => (margen ? margen : "32px 0 48px 0")};

  width: ${({ ancho }) => (ancho ? ancho : "100%")};

  .slick-slide {
    padding: ${({ padding }) => (padding ? padding : "0 24px")};
  }

  .slick-list {
    margin: ${({ margenContenido }) => (margenContenido ? margenContenido : "0 -24px")};
  }

  .slick-next {
    right: 0;
  }

  .slick-prev {
    left: 0;
  }

  .slick-dots li div {
    background-color: gray;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    opacity: 0.2;
    transition: 0.3s opacity;
    transform: translate3d(0, 0, 0);
  }

  .slick-dots li {
    width: auto !important;
  }

  .slick-dots li.slick-active div {
    width: 35px !important;
    height: 10px !important;
    background-color: ${colors.blue} !important;
    border-radius: 16px !important;
    transition: width 0.3s !important;
    opacity: 1 !important;
  }

  .slick-arrow.slick-next,
  .slick-arrow.slick-prev {
    ::before {
      content: "";
    }
  }

  @media (max-width: 768px) {
    height: auto;
  }
`;
