import React from "react";
import { StyledCarrusel } from "./styled";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundImage: `url('/global/icons/arrowRightCarrusel.svg')`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: "24px",
        height: "24px",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundImage: `url('/global/icons/arrowLeftCarrusel.svg')`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: "24px",
        height: "24px",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
};

export const Carrusel = ({
    children,
    infinito = true,
    slidesPorVista = 1,
    slidesPorVistaMobile = 1,
    slidesScroll = 1,
    altoCarrusel,
    margen,
    autoplay = false,
    speed = 500,
    autoplaySpeed = 2000,
    cssEase = "linear",
    padding,
    margenContenido = "0 -24px",
    dot = true
}) => {
  const settingsCarrusel = {
    dots: dot,
    infinite: infinito,
    slidesToShow: slidesPorVista,
    slidesToScroll: slidesScroll,
    autoplay: autoplay,
    speed: speed,
    autoplaySpeed: autoplaySpeed,
    cssEase: cssEase,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: (i) => (
      <div
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "gray",
        }}
      ></div>
    ),
    appendDots: (dots) => (
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {dots}
      </ul>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: slidesPorVistaMobile,
          slidesToScroll: 1,
          nextArrow: null,
          prevArrow: null,
        },
      },
    ],
  };
  return (
    <StyledCarrusel
      altoCarrusel={altoCarrusel}
      margen={margen}
      padding={padding}
      margenContenido={margenContenido}
      {...settingsCarrusel}
    >
      {children}
    </StyledCarrusel>
  );
};