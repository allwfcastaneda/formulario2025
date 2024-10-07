import React from 'react';
import { ContenedorPantalla, ContenedorModal, ContenedorDataModal, ContenedorImagenModal } from './Styled';

export const ModalConocerPartners = ({ isOpen, closeModal }) => {
  return (
    <ContenedorPantalla isOpen={isOpen}>
      <ContenedorModal>
        <ContenedorDataModal>
          <h2 className='tituloModal'>Certificaciones <span>Partner Disponibles </span></h2>
          <br />
          {/* <p className='subtituloModal'>Disponible para tod@s</p> */}
          <img className="imagenPlataformas" src="/global/img/UEntel/partners1.png" alt="partners 1" />
          {/* <p className='subtituloModal'>Perfiles específicos</p> */}
          <img className="imagenPlataformas" src="/global/img/UEntel/partners2.png" alt="partners 2" />
          <img className="imagenPlataformas" src="/global/img/UEntel/partners3.png" alt="partners 3" />
          <img className="imagenPlataformas" src="/global/img/UEntel/partners4.png" alt="partners 4" />
        </ContenedorDataModal>
        <ContenedorImagenModal>
          <img className="imagenModalPartner" src="/global/img/UEntel/vrmodal.png" alt="Usuario" />
        </ContenedorImagenModal>
        <span className="icono-cerrar" onClick={closeModal}>
          &times;
        </span>
      </ContenedorModal>
    </ContenedorPantalla>
  );
};
