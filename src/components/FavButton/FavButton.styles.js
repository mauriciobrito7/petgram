import styled from "styled-components";
import { colors } from "../../styles/theme";

export const Button = styled.button`
  padding-top: 8px;
  color: ${colors.lightGray};
  font-weight: 600;
  display: flex;
  align-items: center;
  & svg {
    margin-right: 4px !important;
  }
`;
