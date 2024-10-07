// Card.js
import React from "react";
import { Cardstyle } from "./Styled";

const Card = ({
  titulo,
  nombre,
  nombre2,
  nombre3,
  email,
  email2,
  email3,
  descripcion,
  descripcion2,
  descripcion3,
  src,
  className,
}) => {
  return (
    <Cardstyle className={className}>
      {titulo && <h4>{titulo}</h4>}
      <div className={src ? "logocard" : ""}> {/* Aplica la clase solo si src está presente */}
        {src && <img src={src} alt={titulo} />}
        <div className="textocard">
          <div>
            {nombre && <h5>{nombre}</h5>}
            {email && <a href={`mailto:${email}`}>{email}</a>}
            {descripcion && <p>{descripcion}</p>}
          </div>
          <div>
            {nombre2 && <h5>{nombre2}</h5>}
            {email2 && <a href={`mailto:${email2}`}>{email2}</a>}
            {descripcion2 && <p>{descripcion2}</p>}
          </div>
          <div>
            {nombre3 && <h5>{nombre3}</h5>}
            {email3 && <a href={`mailto:${email3}`}>{email3}</a>}
            {descripcion3 && <p>{descripcion3}</p>}
          </div>
        </div>
      </div>
    </Cardstyle>
  );
};

export default Card;
