import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSadCry } from "react-icons/fa";
import { Layout } from "../Layout/Layout.component";

export const Fav = styled(Link)`
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  display: inline-block;
  margin: 1%;
  overflow: hidden;
  position: relative;
  width: 31.33%;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;
export const Empty = styled(Layout)`
  width: 100%;
  background: gold;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Icon = styled(FaSadCry)`
  width: 180px;
  height: 180px;
  color: #212121;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: normal;
  text-align: center;
  @media (min-width: 720px) {
    font-size: 32px;
  }
`;

export const Grid = styled.div`
  padding-top: 32px;
`;
export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
`;
