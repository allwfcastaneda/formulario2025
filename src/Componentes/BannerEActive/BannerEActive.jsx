import {
  ContenedorBannerNew,
  ContenidoBanner,
} from "../../chile/pages/SoyNuevo/Styled";

export const BannerEActive = ({
  children,
  borde,
  gap,
  justifyContent,
  padding,
  flexDirectionMob,
  paddingMob,
}) => {
  return (
    <ContenedorBannerNew
      borde={borde}
      gap={gap}
      justifyContent={justifyContent}
      padding={padding}
      flexDirection={flexDirectionMob}
      paddingMob={paddingMob}
    >
      <div>
        <img src="/global/img/EntelActiveAzul.png" alt="logo-entel-active" />
      </div>
      <ContenidoBanner>{children}</ContenidoBanner>
    </ContenedorBannerNew>
  );
};
