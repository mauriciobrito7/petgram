import styled, { css } from "styled-components";
import { fadeIn } from "../../styles/animation";
import { colors } from "../../styles/theme";

export const Nav = styled.nav`
  width: 100%;
  margin-bottom: 1em;
`;

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  overflow-y: hidden;
  padding: 1em;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  //when fixed = true
  ${(props) =>
    props.fixed &&
    css`
       {
        background: ${colors.darkGray};
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        left: 0;
        margin: 0 auto !important;
        max-width: 400px;
        padding: 5px;
        position: fixed;
        right: 0;
        top: -8px;
        transform: scale(0.7);
        z-index: 1000;
        ${fadeIn({ time: "0.3s" })}
      }
    `}
`;

export const Item = styled.li`
  width: 80px;
  transition: all 0.2s ease;
  ${(props) =>
    props.activeItem === true &&
    css`
      {
        &{
          margin-right:12px;
        }
      ${(props) =>
        props.loading &&
        css`
          & {
            background: crimson;
          }
        `}
    `}
`;
