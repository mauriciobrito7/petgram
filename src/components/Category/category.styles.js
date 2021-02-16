import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../styles/theme";

export const CategoryOption = styled(Link)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 80px;
`;

export const Image = styled.img`
  border: 2px solid ${colors.lightGray};
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  margin: 0 auto !important;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  height: 60px;
  width: 60px;
  ${(props) =>
    props.active === true &&
    css`
       {
        border: 4px solid ${colors.primary};
        width: 66px;
        height: 66px;
      }
    `}
  transition: all 0.3s ease-out;
`;
