import React from 'react'
import { ContenedorBannerAcercaDeEntel } from './Styled'

export const BannerBibliotecaEntel = () => {
  return (
    <ContenedorBannerAcercaDeEntel>
    <h1>Biblioteca Entel</h1>
    <img
      src="/global/img/Biblioteca/BannerBiblioteca.png"
      alt="banner-biblioteca"
    />
    <img
      className="banner-etica-mobile"
      src="/global/img/Biblioteca/BannerBiblioteca.png"
      alt="banner-diversidad"
    />
  </ContenedorBannerAcercaDeEntel>
  )
}
