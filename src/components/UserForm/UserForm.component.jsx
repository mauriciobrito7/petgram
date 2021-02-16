import React, { useState } from "react";

import { useInputValue } from "../../hooks/useInputValue.hook";
import { Form, Input, Title, Error } from "./UserForm.styles";
import { SubmitButton } from "../SubmitButton/SubmitButton.componet";

export const UserForm = ({ onSubmit, title, error = null, disabled }) => {
  const email = useInputValue("");
  const password = useInputValue("");
  const [errorMsg, setErrorMsg] = useState(error);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.value.length !== 0 && password.value.length) {
      onSubmit({
        email: email.value,
        password: password.value,
      });
    } else {
      setErrorMsg("Complete the form");
    }
  };

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input
          disabled={disabled}
          placeholder="Email"
          {...email}
          type="email"
        />
        <Input
          disabled={disabled}
          placeholder="Password"
          {...password}
          type="password"
        />

        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>

      {errorMsg && <Error>{errorMsg}</Error>}
    </>
  );
};
