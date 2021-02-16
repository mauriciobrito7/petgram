import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { fadeIn } from "../../styles/animation";
import { colors } from "../../styles/theme";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${colors.darkGray};
  border-radius: 1.5em 1.5em 0 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  bottom: -4px;
  height: 50px;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  right: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

export const NavItem = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  color: ${colors.lightGray};
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  transition: color 0.3s ease-in-out;
  svg {
    width: 28px;
    transition: fill 0.3s ease-in-out;
    fill: ${colors.lightGray};
  }
  &[aria-current] {
    color: ${colors.primary};
    svg {
      fill: ${colors.primary};
    }
  }
`;
