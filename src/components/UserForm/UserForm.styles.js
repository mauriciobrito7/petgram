import styled from "styled-components";
import { colors } from "../../styles/theme";

export const Form = styled.form`
  padding: 16px 0;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  background: ${colors.darkGray};
  color: ${colors.white};
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 1em 1em;
  display: block;
  width: 100%;
  transition: background 0.3s ease-in-out;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${colors.white};
  }
  &:hover {
    background: ${colors.lightGray};
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  padding: 8px 0;
`;

export const Error = styled.span`
  color: red;
  font-size: 14px;
`;
