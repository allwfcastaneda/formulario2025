import React, { useEffect, useRef, useState } from 'react'
import { CapitalizarTexto, fetchToken } from '../../customHooks/hooks';
import { BarraExito, BtnCarrusel, CardAniversarios, CardCumpleanyos, ContenedorInicio, DivAccesos, DivAccesosFavBox, DivAccesosFavMobile, DivAccesosFavoritos, DivAccesosMobile, DivAccesosTitulo, DivAccesosVarios, DivInformacion, DivMisAccesos, DivMisAccesosDetalle } from './Styled';

import { Boton } from '../../../Componentes/Boton/Boton';
import { ModalCumpleanyos } from '../../../Componentes/Modal/Inicio/ModalCumpleanyos';
import { ModalAniversario } from '../../../Componentes/Modal/Inicio/ModalAniversario';
import { Carrusel } from '../../../Componentes/Carrusel/Carrusel';
import { useUserStore } from '../../../store/usuario';

export const Inicio = () => {
  const token = useUserStore(state => state.token);
  // const pais = useUserStore(state => state.data.Pais);
  const pais = "Chile";

  const urlImg = "../../../../global/icons/Inicio";

  const [banners, setBanners] = useState([]);
  const [accesosFavoritos, setAccesosFavoritos] = useState([]);
  const [accesos, setAccesos] = useState([]);
  const [nuevosAccesosFav, setNuevosAccesosFav] = useState([]);
  const [agregarFavoritos, setAgregarFavoritos] = useState(false);

  const [cumpleAnyos, setCumpleAnyos] = useState([]);
  const [cumpleAnyosPaginado, setCumpleAnyosPaginado] = useState([]);
  
  const [compromisos, setCompromisos] = useState([]);
  const [compromisosPaginado, setCompromisosPaginado] = useState([]);
  
  const [cumpleAnyosActivo, setCumpleAnyosActivo] = useState(true);
  const [paginar, setPaginar] = useState(true);
  const [paginaActual, setPaginaActual] = useState(1);

  const [modalCumple, SetModalCumple] = useState(false);
  const [nombreCumple, SetNombreCumple] = useState("");
  const [emailCumple, SetEmailCumple] = useState("");

  const [modalAniversario, SetModalAniversario] = useState(false);
  const [nombreAniversario, SetNombreAniversario] = useState("");
  const [emailAniversario, SetEmailAniversario] = useState("");

  const [mensajeExito, SetMensajeExito] = useState("");

  const contadorAccesos = useRef([]);

  const arrayAccesosVarios = {
    "Chile": [
      {
        img: "ZscalerHome.png",
        texto:(<>Conviértete en un <strong>superhéroe de la seguridad.</strong></>),
        href: "https://zscaler.soyentel.com/",
        textoBtn: "Conocer más"
      },
      {
        img: "documento-naranja.svg",
        texto: (<>Protocolo de Prevención <strong>Contra el Acoso Sexual, Laboral y Violencia en el trabajo.</strong></>),
        href: "https://colaboradordigital.blob.core.windows.net/soyentel/chile/documentos/biblioteca/politica-recursos/Protocolo_Ley_Karin.pdf",
        textoBtn: "Conocer más"
      },
      {
        img: "card60anyosHome.svg",
        texto: (<>Conoce todo acerca de la <strong>Imagen Corporativa</strong> de Entel, templates, pie de firma, etc.</>),
        href: "https://soyentel.com/Biblioteca/ImagenCorp",
        textoBtn: "Conocer más"
      }
    ], 
    "Peru": [
      {
        img: "ZscalerHome.png",
        texto: (<>Conviértete en un <strong>superhéroe de la seguridad.</strong></>),
        href: "https://zscaler.soyentel.com/",
        textoBtn: "Conocer más"
      },
      {
        img: "sitiosvector.svg",
        texto: (<>Conoce acerca de la <strong>Reserva de Sitios</strong> y los distintos portales.</>),
        href: "https://entelperu.sharepoint.com/sites/app/reservas/SitePages/Home.aspx",
        textoBtn: "Ir al sitio"
      },
      {
        img: "servicioCliente.svg",
        texto: (<><strong>Servicio al Cliente Interno:</strong> equipo destinado a entregar atención a los colaboradores Entel.</>),
        href: "https://entelhelix-dwp.onbmc.com/dwp/app/#/page/yqhwyjs1",
        textoBtn: "Ir a Helix"
      }
    ]
  }

  const CambiarPagina = (direccion) => {
    /*
      izquierda -> true
      derecha -> false
    */
    if(paginar) {
      if(direccion) {
        if(paginaActual != 1){
          let nuevaPagina = (paginaActual - 1) == 0 ? 1 : (paginaActual - 1);

          if(cumpleAnyosActivo) {
            let cPaginados = cumpleAnyos.slice((nuevaPagina == 1 ? 0 : nuevaPagina * 4), nuevaPagina * 4);
            setCumpleAnyosPaginado(cPaginados);
          } else {
            let cPaginados = compromisos.slice((nuevaPagina == 1 ? 0 : nuevaPagina * 4), nuevaPagina * 4);
            setCompromisosPaginado(cPaginados);
          }

          setPaginaActual(nuevaPagina);
        }
      } else {
        if(cumpleAnyosActivo) {
          let cPaginados = cumpleAnyos.slice(paginaActual * 4, (paginaActual + 1) * 4);
          if(cPaginados.length){
            setCumpleAnyosPaginado(cPaginados);
            setPaginaActual(paginaActual + 1);
          }
        } else {
          let cPaginados = compromisos.slice(paginaActual * 4, (paginaActual + 1) * 4);
          if(cPaginados.length){
            setCompromisosPaginado(cPaginados);
            setPaginaActual(paginaActual + 1);
          }
        }
      }
    }
  }

  const HandlerReconocimientos = (tipo) => {
    /*
      tipo = 1 -> cumples
      tipo = 2 -> aniversarios
    */
    if(tipo == 1){
      setCumpleAnyosActivo(true);

      setPaginar((cumpleAnyos.length ? true : false));
      if(cumpleAnyos.length){
        setCumpleAnyosPaginado(cumpleAnyos.slice(0, 4));
      }
    } else {
      setCumpleAnyosActivo(false);

      setPaginar((compromisos.length ? true : false));
      if(compromisos.length){
        setCompromisosPaginado(compromisos.slice(0, 4));
      }
    }

    setPaginaActual(1);
  }

  const HandlerAccesosFavoritos = () => {
    if(agregarFavoritos) {
      setAgregarFavoritos(false);
    } else if (!agregarFavoritos) {
      setAgregarFavoritos(true);
    }
    setNuevosAccesosFav(accesosFavoritos.map((x) => { return { "Id": x.Id } }));
  }

  const GuardarAccFav = async () => {
    let accFav = await fetchToken({
      endpoint: `${import.meta.env.VITE_API_URL}/inicio/updateAccFav`,
      method: "POST",
      token: token,
      body: nuevosAccesosFav
    });

    let accFavoritos = await fetchToken({
      endpoint: `${import.meta.env.VITE_API_URL}/inicio/getAccFavoritos`,
      method: "POST",
      token: token,
    });

    setAccesosFavoritos(accFavoritos);
    setNuevosAccesosFav(accFavoritos.map((x) => { return { "Id": x.Id } }));

    setAgregarFavoritos(false);
  }

  const MostrarMensaje = (texto) => {
    SetMensajeExito(texto);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      SetMensajeExito("");
    }, 5000);
  }

  useEffect(() => {
    const ObtenerDataInicio = async () => {
      let bn = await fetchToken({
        endpoint: `${import.meta.env.VITE_API_URL}/inicio/getBanner`,
        method: "POST",
        token: token,
      });
      
      setBanners(bn);
      
      let cumples = await fetchToken({
        endpoint: `${import.meta.env.VITE_API_URL}/inicio/getCumpleanyos`,
        method: "POST",
        token: token,
      });

      setCumpleAnyos(cumples);
      if(cumples.length){
        setCumpleAnyosPaginado(cumples.slice(0, 4));
      } else {
        setPaginar(false);
      }

      let compromiso = await fetchToken({
        endpoint: `${import.meta.env.VITE_API_URL}/inicio/getCompromiso`,
        method: "POST",
        token: token,
      });

      //let testCompromisos = compromiso.concat(compromiso.concat(compromiso));

      setCompromisos(compromiso);
      if(compromiso.length){
        setCompromisosPaginado(compromiso.slice(0, 4));
      } 
      // else {
      //   setPaginar(false);
      // }

      let accFavoritos = await fetchToken({
        endpoint: `${import.meta.env.VITE_API_URL}/inicio/getAccFavoritos`,
        method: "POST",
        token: token,
      });

      setAccesosFavoritos(accFavoritos);
      setNuevosAccesosFav(accFavoritos.map((x) => { return { "Id": x.Id } }));
      contadorAccesos.current = accFavoritos.map((x) => { return { "Id": x.Id } });

      let accesos = await fetchToken({
        endpoint: `${import.meta.env.VITE_API_URL}/inicio/getAccesos`,
        method: "POST",
        token: token,
      });

      setAccesos(accesos);
    }

    ObtenerDataInicio();
  }, [])

  return (
    <ContenedorInicio>
      {mensajeExito ?
        <BarraExito>
          <img src="../../../../global/icons/icono-exito.svg" alt="" />
          {mensajeExito}
          {/* Tu saludo de cumpleaños fue enviado exitosamente al correo entel. */}
        </BarraExito>
        :
          <></>
      }
      <DivAccesosMobile agregar={agregarFavoritos} accFav={(accesosFavoritos.length <= 4)}>
        <div className='titulo'>
          <h3>
            Mis Accesos Favoritos
          </h3>
          {/* <img src={`${urlImg}/icono-configuracion.svg`} /> */}
          <h4 onClick={(e) => { HandlerAccesosFavoritos() }} className="btnConfig">
            <img src={`${urlImg}/icono-configuracion.svg`} alt="" />
          </h4>
        </div>
        {agregarFavoritos ? 
          <DivMisAccesos className="mis-accesos-contenedor">
              <h6>
                Recuerda elegir <strong>hasta 6 accesos favoritos.</strong>
              </h6>
              <div className="mis-accesos-listado">
                {accesos.map((a, i) => {
                  return (
                    <DivMisAccesosDetalle className="mis-accesos-detalle" key={i}>
                      <div className="checkbox-container">
                        <h5>{a.Titulo}</h5>
                        <input 
                          type="checkbox" 
                          className="checkbox chbActivar" 
                          id={`chk${a.Id}M`} 
                          defaultChecked={(accesosFavoritos.map(x => x.Id).includes(a.Id) ? true : false)} 
                          onChange={(e) => {
                            let favActuales = JSON.parse(JSON.stringify(nuevosAccesosFav));
                            if(e.target.checked) {
                              favActuales.push({ Id: a.Id });
                              setNuevosAccesosFav(favActuales);
                              contadorAccesos.current = favActuales;
                            } else {
                              setNuevosAccesosFav(favActuales.filter(x => x.Id != a.Id));
                              contadorAccesos.current = favActuales.filter(x => x.Id != a.Id);
                            }
                          }}
                          disabled={contadorAccesos.current.length == 6 ? (contadorAccesos.current.map(x => x.Id).includes(a.Id) ? false : true) : false}
                        />
                        <label className="label" htmlFor={`chk${a.Id}M`}>
                            <div className="ball"></div>
                        </label>
                      </div>
                    </DivMisAccesosDetalle>
                  );
                })}
              </div>
              <div className="botones">
                  <Boton className="btn" width={"152px"} height={"32px"} onClick={(e) => { HandlerAccesosFavoritos() }}>Cancelar</Boton>
                  <Boton className="btn" width={"152px"} height={"32px"} botonAzul={true} onClick={(e) => { GuardarAccFav() }}>Guardar</Boton>
              </div>
          </DivMisAccesos>
          :
          <></>
        }
        <div className='contenedorAcc'>
          {accesosFavoritos.length <= 4 ?
              accesosFavoritos.map((af, i) => {
                return(
                  <DivAccesosFavMobile key={i}>
                    <a href={af.Link} target="'_blank'">
                        <img src={`${af.Icono}`} alt="" />
                        <h5>{af.Titulo}</h5>
                    </a>
                  </DivAccesosFavMobile>
                );
              })
            :
            <Carrusel autoplay={false} margen={"0px"} dot={false} slidesPorVistaMobile={4} margenContenido={"0"} padding={"0"} infinito={false}>
              {accesosFavoritos.map((af, i) => {
                return(
                  <DivAccesosFavMobile key={i}>
                    <a href={af.Link} target="'_blank'">
                        <img src={`${af.Icono}`} alt="" />
                        <h5>{af.Titulo}</h5>
                    </a>
                  </DivAccesosFavMobile>
                );
              })}
            </Carrusel>
          }
        </div>
      </DivAccesosMobile>
      <div className='home'>
        <div className='slider-container'>
          <Carrusel autoplay={true} margen={"0px"} margenContenido={"0"} padding={"0"}>
            {banners.map((b, i) =>{
              return (
                b.Target !== 1 ? 
                <div key={b.Id}>
                  <a href={`${b.URL}`} target='_blank'>
                    <img src={b.URLimg} />
                  </a>
                </div>
                  : 
                <div key={b.Id}>
                  <a href={`${b.URL}`}>
                    <img src={b.URLimg} />
                  </a>
                </div>
              )
            })}
          </Carrusel>
        </div>
        <div className='reconocimiento'>
          <div className={`cumpleanios-aniversario-titulo ${cumpleAnyosActivo ? "cumple": "aniversario"}`}>
            {/* <div id="tabCumple" className="cumpleanios-titulo" onClick="changeCalendario('cumple')"> */}
            <div className="cumpleanios-titulo" onClick={(e) => { HandlerReconocimientos(1); }}>
              <div className="cumpleanios-titulo-detalle">
              </div>
              <h3>
                Cumpleaños <br/>
                {cumpleAnyosActivo ? 
                  <span>{CapitalizarTexto(new Date().toLocaleString('es-es', { month: 'long' }))}</span>
                  : <></>
                }
              </h3>
            </div>
            {/* <div id="tabAniversario" className="aniversario-titulo" onClick="changeCalendario('aniversario')"> */}
            <div className="aniversario-titulo" onClick={(e) => { HandlerReconocimientos(2);  }}>
              <div className="aniversario-titulo-detalle">
              </div>
              <h3>
                Años de Compromiso <br/>
                {!cumpleAnyosActivo ? 
                  <span>{CapitalizarTexto(new Date().toLocaleString('es-es', { month: 'long' }))}</span>
                  : <></>
                }
              </h3>
            </div>
          </div>
          {cumpleAnyosActivo ? 
            <div className="cumpleanios-contenedor">
              {cumpleAnyosPaginado.map((c, i) => {
                return(
                  <CardCumpleanyos className="cumpleanios-detalle" key={i}>
                    <h4>{c.dia}</h4>
                    <h5>{CapitalizarTexto(c.nombreCompleto)}</h5>
                    <div onClick={(e) => {
                      SetNombreCumple(CapitalizarTexto(c.nombreCompleto));
                      SetEmailCumple(c.email);
                      SetModalCumple(true);
                    }}>
                      {/* <img src="~/Content/Peru/img/icono-saludo.png" alt="" onclick="showFondo(); showAlerta('Jose Ignacio Villarroel Hidalgo', 'JVILLARROELH@entel.cl')" /> */}
                      <img src={`${urlImg}/icono-saludo.png`} alt=""/>
                      <h6 className="tooltip">Enviar saludo</h6>
                    </div>
                  </CardCumpleanyos>
                )
              })}
              {!cumpleAnyos.length ? 
                <div className="no-cumple">
                  <h3>No hay cumpleañeros en tu equipo directo...</h3>
                  <img src={`${urlImg}/no-cumple.svg`} alt="" />
                </div>
              :
                <></>
              }
            </div>
          :
            <div className="aniversarios-contenedor">
              {compromisosPaginado.map((c, i) => {
                return (
                  <CardAniversarios className="cumpleanios-detalle" key={i}>
                    <h4>
                      {c.anios}
                      <span>AÑO{(c.anios > 1 ? "S" : "")}</span>
                    </h4>
                    <h5>{CapitalizarTexto(c.NombreCompleto)}</h5>
                    <div onClick={(e) => {
                      SetNombreAniversario(CapitalizarTexto(c.NombreCompleto));
                      SetEmailAniversario(c.Email);
                      SetModalAniversario(true);
                    }}>
                      {/* <img className="icono-aniversario" src="~/Content/Peru/img/icono-saludo-aniversario.png" alt="" onclick="showFondo(); showAniversario('@(Util.Capitalize(a.NombreCompleto))', '@a.Email')" /> */}
                      <img src={`${urlImg}/icono-saludo-aniversario.png`} alt="" />
                      <h6 className="tooltip">Enviar saludo</h6>
                    </div>
                  </CardAniversarios>
                )
              })}
              {!compromisos.length ? 
                <div className="no-cumple">
                  <h3>No hay aniversarios en tu equipo directo...</h3>
                  <img src={`${urlImg}/no-aniversario.svg`} alt="" />
                </div>
              : 
                <></>
              }
            </div>
          }
        </div>
      </div>
      <BtnCarrusel paginar={paginar}>
          <img className="buttonLeft" src={`${urlImg}/slick-left.svg`} alt="" onClick={(e) => { CambiarPagina(true) }} />
          <img className="buttonRight" src={`${urlImg}/slick-left.svg`} alt="" onClick={(e) => { CambiarPagina(false) }} />
      </BtnCarrusel>
      <DivAccesos className="mis-accesos">
        <DivAccesosTitulo className="mis-accesos-titulo" agregar={agregarFavoritos}>
            <h3>Mis Accesos Favoritos</h3>
            <h4 id="btn-configuracion" onClick={(e) => { HandlerAccesosFavoritos() }} className="btnConfig">
              <img src={`${urlImg}/icono-configuracion.svg`} alt="" />
              Configurar accesos
            </h4>
            <h4 id="btn-configuracion-mobile" className="btnConfig">
              <img onClick={(e) => { HandlerAccesosFavoritos() }} className=" configMobile" src={`${urlImg}/icono-configuracion.svg`} alt="" />
            </h4>
        </DivAccesosTitulo>
        {agregarFavoritos ? 
          <DivMisAccesos className="mis-accesos-contenedor">
              <h6>
                Recuerda elegir <strong>hasta 6 accesos favoritos.</strong>
              </h6>
              <div className="mis-accesos-listado">
                {accesos.map((a, i) => {
                  return (
                    <DivMisAccesosDetalle className="mis-accesos-detalle" key={i} borde={(((i+1)%4) == 0 ? 1 : 0)}>
                      <div className="checkbox-container">
                        <h5>{a.Titulo}</h5>
                        <input 
                          type="checkbox" 
                          className="checkbox chbActivar" 
                          id={`chk${a.Id}`} 
                          defaultChecked={(accesosFavoritos.map(x => x.Id).includes(a.Id) ? true : false)} 
                          onChange={(e) => {
                            let favActuales = JSON.parse(JSON.stringify(nuevosAccesosFav));
                            if(e.target.checked) {
                              favActuales.push({ Id: a.Id });
                              setNuevosAccesosFav(favActuales);
                              contadorAccesos.current = favActuales;
                            } else {
                              setNuevosAccesosFav(favActuales.filter(x => x.Id != a.Id));
                              contadorAccesos.current = favActuales.filter(x => x.Id != a.Id);
                            }
                          }}
                          disabled={contadorAccesos.current.length == 6 ? (contadorAccesos.current.map(x => x.Id).includes(a.Id) ? false : true) : false}
                        />
                        <label className="label" htmlFor={`chk${a.Id}`}>
                            <div className="ball"></div>
                        </label>
                      </div>
                    </DivMisAccesosDetalle>
                  );
                })}
              </div>
              <div className="botones">
                  <Boton className="btn" width={"152px"} height={"32px"} onClick={(e) => { HandlerAccesosFavoritos() }}>Cancelar</Boton>
                  <Boton className="btn" width={"152px"} height={"32px"} botonAzul={true} onClick={(e) => { GuardarAccFav() }}>Guardar</Boton>
              </div>
          </DivMisAccesos>
          :
          <></>
        }
        <p className="parrafo-favoritos">
          <strong>Configura tus 6 accesos favoritos a las plataformas colaborativas de Entel</strong>, 
          las que no selecciones selecciones quedarán en tu e) Pocket a tu costado derecho de la pantalla.
        </p>
        <div className="swiperAF">
          <DivAccesosFavoritos>
            {accesosFavoritos.map((af, i) => {
              return(
                <DivAccesosFavBox key={i}>
                  <a href={af.Link} target='_blank'>
                    <img src={`${af.Icono}`} alt="" />
                    <h5>{af.Titulo}</h5>
                  </a>
                </DivAccesosFavBox>
              );
            })}
          </DivAccesosFavoritos>
        </div>
    </DivAccesos>
    <DivInformacion>
      { pais == 'Chile' ? 
          <div className="denuncias-minimarket">
            <div className="canal-denuncias">
                <img className='imgCard' src={`${urlImg}/alertaCierre.svg`} />
                <div>
                    <p><strong>¡Recuerda!</strong></p>
                    <p className='pMargen'>Contamos con un <strong>Canal de Denuncias y Consultas</strong>.</p>
                    <Boton 
                      className="btn" 
                      width={"160px"} 
                      botonAzul={true} 
                      flecha={true} 
                      link={"https://lineadedenuncia.ines.cl/lineadedenuncia/formulario/098789/"}
                    >
                      Ir a canal
                    </Boton>
                </div>
            </div>  
            <div className="minimarket">
              <div className="contenido">
                  <div className="titulo">
                    <img src={`${urlImg}/Alimentos.svg`} alt=""/>
                    <p>Snack de “La Despensa Minimarkets”</p>
                  </div>
                  <div className="wsp">
                      <p>Consultas y reservas al Whatsapp</p>
                      <p className="numero"><img src={`${urlImg}/icono-wsp-contacto.svg`} alt="" />+56 9 7999 7714</p>
                  </div>
              </div>
              <a href="https://colaboradordigital.blob.core.windows.net/soyentel/otros/Menú Carrito.xlsx">Revisar menú <img className='imgArrow' src={`${urlImg}/icono-arrow-right.svg`} /></a>
            </div>
          </div>
        :
          <></>
      }
    </DivInformacion>
    <DivAccesosVarios>
      {arrayAccesosVarios[pais].map((a, i) => {
        return (
          <div className="card-inicio" key={i}>
            <div className="imagen">
              <img src={`${urlImg}/${a.img}`} />
              </div>
            <div className="texto">
              <p>{a.texto}</p>
            </div>
            <a href={`${a.href}`} target="_blank">
                {a.textoBtn}
                <img src={`${urlImg}/icono-arrow-right.svg`} alt="" />
            </a>
        </div>
        );
      })}
    </DivAccesosVarios>
    <ModalCumpleanyos estaModalAbierto={modalCumple} nombre={nombreCumple} email={emailCumple} setMensajeExito={(e) => { MostrarMensaje(e); }} cerrarModal={() => { SetModalCumple(false); }} />
    <ModalAniversario estaModalAbierto={modalAniversario} nombre={nombreAniversario} email={emailAniversario} setMensajeExito={(e) => { MostrarMensaje(e); }} cerrarModal={() => { SetModalAniversario(false); }} />
    </ContenedorInicio>
  )
}
