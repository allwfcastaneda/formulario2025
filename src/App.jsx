import { useEffect, useState } from "react";
import { useIsAuthenticated, useMsal, useAccount } from "@azure/msal-react";
import { InteractionStatus } from "@azure/msal-browser";
import { useUserStore } from "./store/usuario";
import { msalConfig } from "../auth/msalConfig";
import { BrowserRouter } from "react-router-dom";
import { AppChile } from "./chile/AppChile";
// import { AppPeru } from "./peru/AppPeru";
import { Cargando } from "./Componentes/Cargando/Cargando";

export const App = () => {
  const [pais, setPais] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const isAutenticated = useIsAuthenticated();
  const { instance, accounts, inProgress } = useMsal();
  const account = useAccount(accounts[0] || {});

  const { setUsuarioData, setToken, setUsuarioRol } = useUserStore();

  //Validamos si esta autenticado, sino se redirige a pantalla de login office
  if (inProgress === InteractionStatus.None && !isAutenticated) {
    instance.loginRedirect(msalConfig);
  }
  //Obtenemos token office y lo enviamos a la API.
  useEffect(() => {
    if (account) {
      instance
        .acquireTokenSilent({
          account: account,
        })
        .then((response) => {
          return response.idToken;
        })
        .then((token) => {
          fetch(`${import.meta.env.VITE_API_URL}/auth/getToken`, {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              token,
            },
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              //Si el usuario no existe en colaboradores enviamos a pantalla de login office, sino guardamos data de colab, el pais y su token.
              if (data.FlgOK == -100) {
                instance.logoutRedirect(msalConfig);
              } else {
                data.colab.Pais = "Peru";
                setUsuarioData(data.colab);
                setToken(data.token);
                setPais(data.colab.Pais);
                setUsuarioRol(data.perfilColab)
              }
              setIsLoading(false);
            });
        });
    }
  }, [account, instance]);

  return (
    <>
      {isLoading ? (
        <Cargando />
      ) : (
        <BrowserRouter>
        <AppChile />
      </BrowserRouter>
      )}
    </>
  );
};
