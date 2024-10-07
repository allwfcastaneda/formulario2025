import React, { useState } from "react";
import { Modal } from "../Modal";
import { DivContenedorModal, DivPreview } from "./styled";
import { Boton } from "../../Boton/Boton";
import { useRef } from "react";
import { fetchToken } from "../../../chile/customHooks/hooks";
import { useUserStore } from "../../../store/usuario";

export const ModalCumpleanyos = ({estaModalAbierto, nombre, email, setMensajeExito, cerrarModal}) => {
    const token = useUserStore(state => state.token);
    const urlImg = "../../../../global/icons";

    const [preVisualizacion, setPreVisualizacion] = useState(false);
    const [caracteresRestantes, SetCaracteresRestantes] = useState(0);
    const [btnContinuar, SetBtnContinuar] = useState(false);
    const [imgSeleccionada, SetImgSeleccionada] = useState("");
    const [altoModal, SetAltoModal] = useState("454px");
    const [guardando, SetGuardando] = useState(false);

    const inputTexto = useRef("");
    
    const SeleccionarImg = (target) => {
        let imgs = Array.from(document.getElementsByClassName("img-cumple")).filter(x => x.src != target.src);

        imgs.forEach(x => {
            x.classList.remove("active");
        });

        target.classList.toggle("active");

        if(Array.from(target.classList).includes("active")){
            SetImgSeleccionada(target.src);
        } else {
            SetImgSeleccionada("");
        }

        ValidarTexto();
    }

    const ContadorCaracteres = () => {
        let texto = inputTexto.current.value;

        if(texto.length >= 300){
            SetCaracteresRestantes(300);
            inputTexto.current.value = texto.slice(0, 300);
        } else {
            SetCaracteresRestantes(texto.length);
        }
    }

    const ValidarTexto = () => {
        let img = document.getElementsByClassName("img-cumple active");
        if(inputTexto.current.value.length > 0 && img.length) {
            SetBtnContinuar(true);
        } else {
            SetBtnContinuar(false);
        }
    }

    const GuardarSaludo = async () => {
        SetGuardando(true);
        let obj = {
            correoCumple: email,
            nombreCumple: nombre.split(" ")[0],
            mensaje: inputTexto.current.value,
            urlBanner: document.getElementsByClassName("img-cumple active")[0].src
        }

        // console.log(obj);

        let saludoCumple = await fetchToken({
            endpoint: `${import.meta.env.VITE_API_URL}/inicio/insCumpleanyos`,
            method: "POST",
            token: token,
            body: obj
          });

        // console.log(saludoCumple);

        if(setMensajeExito && saludoCumple[0].FlgOk == 1){
            setMensajeExito("Tu saludo de cumpleaños fue enviado exitosamente al correo entel.");

            CerrarModalCumple();
        }
    }

    const CerrarModalCumple = () => {
        if(cerrarModal) {
            SetAltoModal("454px");
            setPreVisualizacion(false);
            SetImgSeleccionada("");
            SetBtnContinuar(false);
            SetCaracteresRestantes(0);
            SetGuardando(false);

            cerrarModal();
        }
    }

    return (
        <Modal estaModalAbierto={estaModalAbierto} colorFondo={null} ancho={"600px"} alto={altoModal}>
            <DivContenedorModal>
                <img className="iconoCerrar" src={`${urlImg}/Cerrar.svg`} onClick={() => {
                    CerrarModalCumple()
                }} />
                <div className="contenedor" style={{display:(preVisualizacion ? "none" : "")}}>
                    <h3>
                        Elige y escribe el mensaje (llegará a su correo entel) que más te guste para  
                        <strong data-email={email}> {nombre}</strong>
                    </h3>
                    <h4>Elige el mejor sticker para tu saludo:</h4>
                    <div className="card-cumpleanios">
                        <img className="img-cumple" src="https://entel.blob.core.windows.net/cdn/img/mail-soyentel/cumpleanios-1.png" alt="" onClick={(e) => { SeleccionarImg(e.target); }} />
                        <img className="img-cumple" src="https://entel.blob.core.windows.net/cdn/img/mail-soyentel/cumpleanios-2.png" alt="" onClick={(e) => { SeleccionarImg(e.target); }} />
                        <img className="img-cumple" src="https://entel.blob.core.windows.net/cdn/img/mail-soyentel/cumpleanios-3.png" alt="" onClick={(e) => { SeleccionarImg(e.target); }} />
                        <img className="img-cumple" src="https://entel.blob.core.windows.net/cdn/img/mail-soyentel/cumpleanios-4.png" alt="" onClick={(e) => { SeleccionarImg(e.target); }} />
                        <img className="img-cumple" src="https://entel.blob.core.windows.net/cdn/img/mail-soyentel/cumpleanios-5.png" alt="" onClick={(e) => { SeleccionarImg(e.target); }} />
                        <img className="img-cumple" src="https://entel.blob.core.windows.net/cdn/img/mail-soyentel/cumpleanios-6.png" alt="" onClick={(e) => { SeleccionarImg(e.target); }} />
                    </div>
                    <h4>Escribe tu mensaje favorito de cumpleaños:</h4>
                    <div className="input-formulario">
                        <input id="inputMensaje" placeholder=" " type="text" ref={inputTexto} onKeyUp={(e) => { ContadorCaracteres(); }} maxLength="300" onChange={(e) => { ValidarTexto(); }} autoComplete="off" />
                        <label>Mensaje<span>*</span></label>
                    </div>
                    <p>{caracteresRestantes} / 300 caracteres.</p>
                    <div className="btn-continuar-contenedor">
                        <div>
                            <Boton width={"152px"} height={"32px"} botonAzul={btnContinuar} onClick={(e) => { 
                                if(btnContinuar) {
                                    SetAltoModal("675px");
                                    setPreVisualizacion(true);
                                }
                            }}>Continuar</Boton>
                        </div>
                    </div>
                </div>
                {preVisualizacion ?
                    <DivPreview id="cumple-preview">
                        <h4>Preview de tu saludo de cumpleaños:</h4>
                        <h5>¡Feliz Cumpleaños <span id="nombre-cumple-preview">{nombre.split(" ")[0]}</span>!</h5>
                        <p id="mensaje-cumple">{inputTexto.current?.value}</p>
                        {/* <h6>
                            <span id="remitente-saludo"></span>
                        </h6> */}
                        <img className="banner-cumple-modal" id="banner-cumple" src={imgSeleccionada} alt="" />
                        <div className="botones">
                            <Boton width={"70px"} height={"24px"} botonAzul={false} sinBorde={true} flechaIzq={true} onClick={(e) => { 
                                SetAltoModal("454px");
                                setPreVisualizacion(false); 
                            }}>Volver</Boton>
                            <Boton width={"127px"} height={"32px"} botonAzul={true} onClick={(e) => { if(!guardando){ GuardarSaludo(); } }}>Enviar saludo</Boton>
                        </div>
                    </DivPreview>
                :
                    <></>
                }
            </DivContenedorModal>
        </Modal>
    )
}