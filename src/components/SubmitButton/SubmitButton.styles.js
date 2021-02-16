import styled from "styled-components";
import { colors } from "../../styles/theme";

export const Button = styled.button`
  background: ${colors.primary};
  border-radius: 4px;
  color: ${colors.white};
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  cursor: pointer;
  position: relative;
  &[disabled] {
    opacity: 0.3;
  }
`;
