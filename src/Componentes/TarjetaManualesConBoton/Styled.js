import styled from "styled-components";
import { colors } from "../../assets/variables";

export const ContenedorTarjeta = styled.div`
  border: 1px solid ${colors.lighterGray};
  min-height: ${({minHeight}) => minHeight ? minHeight : "150px"};
  width: ${({ widthTarjeta }) => (widthTarjeta ? widthTarjeta : "178px")};
  padding: 25px 15px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  img {
      height: ${({heightIcon}) => heightIcon ? heightIcon : "36px"};
      width: ${({widthIcon}) => widthIcon ? widthIcon : "36px"};
    }
  div {
    text-align: center;
    p {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 768px) {
    width: auto;
  }
`;
