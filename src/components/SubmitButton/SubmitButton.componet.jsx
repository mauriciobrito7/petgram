import React from "react";
import { Button } from "../SubmitButton/SubmitButton.styles";
import PropTypes from "prop-types";

export const SubmitButton = ({ children, onClick, disabled }) => (
  <Button onClick={onClick} disabled={disabled}>
    {children}
  </Button>
);

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
