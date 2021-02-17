import React from "react";
import { Nav, NavItem } from "./NavBar.styles";
import UserIcon from "../Icons/UserIcon";
import HomeIcon from "../Icons/HomeIcon";
import FavIcon from "../Icons/FavIcon";

const SIZE = "32px";

export const NavBar = () => {
  return (
    <Nav>
      <NavItem exact to="/">
        <HomeIcon />
      </NavItem>

      <NavItem exact to="/favs">
        <FavIcon />
      </NavItem>

      <NavItem exact to="/user">
        <UserIcon size={SIZE} />
      </NavItem>
    </Nav>
  );
};
