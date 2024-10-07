import styled from "styled-components";
import { colors } from "../../assets/variables";

export const ContenedorBannerAcercaDeEntel = styled.div`
    border: 1px solid ${colors.lighterGray};
    border-radius: 16px;
    height: 240px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    margin-bottom: 30px;

    h1 {
        font-size: 44px;
        font-weight: 400;
        line-height: 52.8px;
    }

    .banner-diversidad-mobile {
        display: none;
    }

    .banner-etica-mobile {
        display: none;
    }

    @media (max-width: 768px) {
        padding: 0 10px;
        height: auto;
        
        h1 {
          font-size: 22px;
          font-weight: 400;
          line-height: 26.4px;
        }
        img {
            display: none;
        }

        .banner-diversidad-mobile {
            display: block;
        }

        .banner-etica-mobile {
            display: block;
            width: 168px;
            height: 168px;
            object-fit: cover;
        }
    }
`