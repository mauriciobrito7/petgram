import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { fadeIn } from '../../styles/animation'

export const Nav = styled.nav`
  display:flex;
  align-items: center;
  justify-content: space-around;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  bottom: 0;
  height: 50px;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  right:0;
  left: 0;
  width: 100%;
  z-index:1000;
`

export const NavItem = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  color: #888;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  &[aria-current] {
    color: #000;

    &:after {
      ${fadeIn({ time: '0.5s' })}
      content: '-';
      position:absolute;
      bottom: 0;
      font-size: 34px;
      line-height: 20px;
    }
  }
`