export const msalConfig = {
  auth: {
    clientId: "9e230910-1280-481b-ba67-d5d2a6c96c8f",
    authority: "https://login.microsoftonline.com/common",
    // redirectUri: "https://blue-water-0e720d010.5.azurestaticapps.net", //Cambiar por URL de localhost propio
    redirectUri: `${import.meta.env.VITE_REDIRECT_URL}`,
    postLogoutRedirectUri: "https://www.entel.cl/",
  },
};