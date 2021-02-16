import React from "react";
import { Link, useHistory } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import styled from "styled-components";
import { colors } from "../../styles/theme"

const BackIcon = styled(IoMdArrowBack)`
  font-size: "32px";
`;

const LinkBack = styled(Link)`
  display: flex;
  width: 40%;
  padding: 0.5em;
  align-items: center;
  margin-bottom: 0.5em;
`;

export const GoBack = () => {
  const history = useHistory();
  const SIZE = "32px";
  return (
    <LinkBack
      to="/"
      onClick={() => {
        history.goBack();
      }}
    >
      <BackIcon size={SIZE} color={colors.lightGray} />
    </LinkBack>
  );
};
