import styled from "styled-components";
import { fadeIn } from "../../styles/animation";
import { Link } from "react-router-dom";
import { colors } from "../../styles/theme";

export const Article = styled.article`
  background-color: ${colors.darkGray};
  min-height: 200px;
  border-radius: 0.5em;
  padding: 0.5em 0 0.5em 0;
  margin-bottom: 1em;
`;

export const ImgWrapper = styled(Link)`
  border-radius: 10px;
  display: block;
  height: 100px;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 95%;
  margin: 0 auto;
`;
export const Info = styled.div`
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: left;
  color: ${colors.white};
`;

export const Img = styled.img`
  ${fadeIn({ time: "1.5s" })};
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;
