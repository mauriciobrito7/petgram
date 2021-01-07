import React from 'react'
import { Nav, NavItem } from './NavBar.styles'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

const SIZE = '32px';

export const NavBar = () => {

  return <Nav>
      <NavItem exact to='/'>
        <MdHome size={SIZE}/>
      </NavItem>

      <NavItem exact to='/favs'>
        <MdFavoriteBorder size={SIZE}/>
      </NavItem>

      <NavItem exact to='/user'>
        <MdPersonOutline size={SIZE}/> 
      </NavItem>
  </Nav>
}