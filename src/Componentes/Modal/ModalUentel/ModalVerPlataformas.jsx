import React from 'react';

//componentes
import { SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { ContenedorPantalla, ContenedorModal, ContenedorDataModal, ContenedorImagenModal } from './Styled';

export const ModalVerPlataformas = ({ isOpen, closeModal }) => {
  return (
    <ContenedorPantalla isOpen={isOpen}>
      <ContenedorModal>
        <ContenedorDataModal>
          <h2 className='tituloModal'>Alianzas con <span>Plataformas</span></h2>
          <br />
          <p className='subtituloModal'>Disponible para tod@s</p>
          <img className="imagenPlataformas" src="/global/img/UEntel/plataformas1.png" alt="Plataforma 1" />
          <p className='subtituloModal'>Perfiles específicos</p>
          <img className="imagenPlataformas" src="/global/img/UEntel/plataformas2.png" alt="Plataforma 2" />
          <img className="imagenPlataformas" src="/global/img/UEntel/plataformas3.png" alt="Plataforma 3" />
          <img className="imagenPlataformas" src="/global/img/UEntel/plataformas4.png" alt="Plataforma 4" />
        </ContenedorDataModal>
        <ContenedorImagenModal>
          <img className="imagenModalPlataforma" src="/global/img/UEntel/usuario.png" alt="Usuario" />
        </ContenedorImagenModal>
        <span className="icono-cerrar" onClick={closeModal}>
          &times;
        </span>
      </ContenedorModal>
    </ContenedorPantalla>
  );
};
