import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./msalConfig";
import { App } from "../src/App";
import { GlobalStyle } from "../src/chile/Styled";

const pca = new PublicClientApplication(msalConfig);

//En caso de no tener la api base, comentar los componentes provider y msalprovider
export const MsalProviderComponent = () => {
  return (
    <MsalProvider instance={pca}>
      <GlobalStyle />
      <App />
    </MsalProvider>
  );
};
