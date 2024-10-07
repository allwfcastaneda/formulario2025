import React from 'react';
import { ContenedorPantalla, ContenedorDataModal, ContenedorModalAcademia, ContenedorImagenModalAcademia } from './Styled';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const ModalVerAcademias = ({ isOpen, closeModal }) => {
  return (
    <ContenedorPantalla isOpen={isOpen}>
      <ContenedorModalAcademia>
        <ContenedorDataModal>
          <ContenedorImagenModalAcademia>
            {/* Swiper con imágenes */}
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              centeredSlides={true}
              navigation={{
                nextEl: '.swiper-button-next', // Personalización de las flechas
                prevEl: '.swiper-button-prev',
              }}
              pagination={{ clickable: true }}
            >
              {/* Slides */}
              <SwiperSlide>
                <img className="imagenModalPlataforma" src="/global/img/UEntel/academias1.png" alt="Academia 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="imagenModalPlataforma" src="/global/img/UEntel/academias2.png" alt="Academia 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="imagenModalPlataforma" src="/global/img/UEntel/academias3.png" alt="Academia 3" />
              </SwiperSlide>
            </Swiper>
          </ContenedorImagenModalAcademia>
        </ContenedorDataModal>

        {/* Botón de cierre */}
        <span className="icono-cerrar" onClick={closeModal}>
          &times;
        </span>

        {/* Flechas de navegación personalizadas */}
        <div className="swiper-button-prev" />
        <div className="swiper-button-next" />
      </ContenedorModalAcademia>
    </ContenedorPantalla>
  );
};
