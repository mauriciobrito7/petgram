import styled, { css } from "styled-components";
import { fadeIn } from "../../styles/animation";
import { colors } from "../../styles/theme";

export const ContainerMessage = styled.div`
  width: 50%;
  height: 32px;
  font-size: 16px;
  border-radius: 1em;
  background: ${colors.black};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: calc(50% - 25%);
  bottom: calc(50px + 1em);
  ${fadeIn({ time: "0.3s" })}
  ${(props) =>
    props.type === "alert" &&
    css`
      background: red;
      color: white;
    `}
    @media (min-width: 720px) {
    width: 25%;
    left: calc(50% - 12%);
  }

  @media (min-width: 1280px) {
    width: 15%;
    left: calc(50% - 7%);
  }
`;
