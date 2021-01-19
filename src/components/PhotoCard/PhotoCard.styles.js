import styled from "styled-components";
import { fadeIn } from "../../styles/animation";
import { Link } from "react-router-dom";

export const Article = styled.article`
  min-height: 200px;
`;

export const ImgWrapper = styled(Link)`
  border-radius: 10px;
  display: block;
  height: 100px;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 90%;
  margin: 0 auto;
  @media (min-width: 720px) {
    width: 80%;
  }
`;
export const Info = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: left;
  margin-bottom: 1.5em;
  @media (min-width: 720px) {
    width: 80%;
  }
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
