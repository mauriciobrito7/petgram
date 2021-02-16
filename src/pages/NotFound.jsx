import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NotFoundIcon from "../components/Icons/NotFoundIcon";
import { colors } from "../styles/theme";
import { Layout } from "../components/Layout/Layout.component";

const ContainerNotFound = styled.div`
  height: calc(100vh - 100px);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Title = styled.h1`
  width: 100%;
  font-size: 18px;
  font-weight: normal;
  color: ${colors.lightGray};
  @media (min-width: 720px) {
    font-size: 32px;
  }
`;

const LinkHome = styled(Link)`
  color: ${colors.lightGray};
  font-weight: bold;
  font-size: 18px;
  width: 100%;
  margin-top: 1em;
  @media (min-width: 720px) {
    font-size: 32px;
  }
`;

export const NotFound = () => (
  <ContainerNotFound>
    <Layout>
      <NotFoundIcon width={"100%"} />
      <Title>Error 404 - Page not found</Title>
      <LinkHome to="/">Go home</LinkHome>
    </Layout>
  </ContainerNotFound>
);
