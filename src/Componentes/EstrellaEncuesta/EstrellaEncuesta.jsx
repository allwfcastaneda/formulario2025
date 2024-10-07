import React, { useEffect, useState } from "react";
import {
  ContenedorEstrellas,
  StyledError,
  StyledStarNumber,
  StyledSVG,
} from "./Styled";
import { colors } from "../../assets/variables";
import { Controller } from "react-hook-form";

export const EstrellaEncuesta = ({
  fillColor = "#fff",
  estrellaInicial = 1,
  estrellaFinal = 5,
  gap,
  name,
  control,
  errors,
}) => {
  const [estrellas, setEstrellas] = useState([]);
  const [estrellaSeleccionada, setEstrellaSeleccionada] = useState(null);

  useEffect(() => {
    let cantidadEstrellasSeleccionado = [];
    for (let index = estrellaInicial; index <= estrellaFinal; index++) {
      cantidadEstrellasSeleccionado.push(index);
    }
    setEstrellas(cantidadEstrellasSeleccionado);
  }, []);

  return (
    <>
      <ContenedorEstrellas gap={gap}>
        {estrellas.map((estrella) => (
          <Controller
            name={name}
            control={control}
            key={estrella}
            render={({ field }) => (
              <StyledSVG
                {...field}
                values={estrella}
                onClick={() => {
                  setEstrellaSeleccionada(estrella);
                  field.onChange(estrella);
                }}
                width="100"
                height="90"
                viewBox="0 0 100 90"
                fill={
                  estrellaSeleccionada === estrella
                    ? `${colors.blue}`
                    : fillColor
                }
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M75.8694 55.9805L75.865 55.9847C75.0556 56.7506 74.601 57.9409 74.8267 59.0893C74.827 59.0908 74.8273 59.0923 74.8276 59.0938L79.7159 86.1673C79.9352 87.3816 78.6761 88.3265 77.5714 87.7766L51.7567 74.9272C51.2353 74.6471 50.6468 74.51 50.0636 74.51H49.9364C49.3532 74.51 48.7646 74.6471 48.2433 74.9272L22.4286 87.7766C21.3239 88.3265 20.0648 87.3816 20.2841 86.1673L25.1724 59.0938C25.1727 59.0923 25.173 59.0909 25.1733 59.0894C25.3977 57.9487 25.014 56.8165 24.135 55.9847L24.135 55.9846L24.1306 55.9805L3.45151 36.8817C2.52038 36.0217 3.00949 34.4661 4.26522 34.2937L32.9499 30.3557C34.1813 30.2166 35.2243 29.5244 35.7512 28.4604L48.6694 3.63957C49.2298 2.56291 50.7702 2.56291 51.3306 3.63957L51.7741 3.40873L51.3306 3.63957L64.2511 28.465L64.2584 28.479L64.2666 28.4926C64.8417 29.4449 65.8564 30.2127 67.0484 30.3555C67.05 30.3557 67.0516 30.3559 67.0532 30.3561L95.7348 34.2937C96.9905 34.4661 97.4796 36.0217 96.5485 36.8817L75.8694 55.9805Z"
                  stroke="#A4A4A6"
                />
                <StyledStarNumber
                  x="50"
                  y="53"
                  textAnchor="middle"
                  fill={
                    estrellaSeleccionada === estrella
                      ? `${colors.white}`
                      : `${colors.black}`
                  }
                  dominantBaseline="middle"
                >
                  {estrella}
                </StyledStarNumber>
              </StyledSVG>
            )}
          />
        ))}
      </ContenedorEstrellas>
      <StyledError>{errors}</StyledError>
    </>
  );
};
