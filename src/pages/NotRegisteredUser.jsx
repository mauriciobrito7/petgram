import React, { useContext, useState } from "react";
import { Context } from "../Context";
import { UserForm } from "../components/UserForm/UserForm.component";
import { RegisterMutation } from "../container/RegisterMutation";
import { LoginMutation } from "../container/LoginMutation";
import { Layout } from "../components/Layout/Layout.component";
import { FloatMessage } from "../components/FloatMessage/FloatMessage.component";

const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context);
  const [showMessage, setShowMessage] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  return (
    <Layout title="Login">
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            register({ variables })
              .then(({ data }) => {
                const { signup } = data;
                activateAuth(signup);
              })
              .catch(() => {
                setShowMessage(true);
                setErrorMsg("email have already used or invalid password");
              });
          };

          return (
            <>
              <UserForm
                disabled={loading}
                error={errorMsg}
                onSubmit={onSubmit}
                title="Registrarse"
              />
              {showMessage && (
                <FloatMessage type="alert">{errorMsg}</FloatMessage>
              )}
            </>
          );
        }}
      </RegisterMutation>

      <LoginMutation>
        {(login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            login({ variables })
              .then(({ data }) => {
                const { login } = data;
                activateAuth(login);
              })
              .catch(() => {
                setShowMessage(true);
                setErrorMsg("email doesn't exist or invalid password");
              });
          };
          return (
            <>
              <UserForm
                disabled={loading}
                error={errorMsg}
                onSubmit={onSubmit}
                title="Iniciar sesion"
              />
              {showMessage && (
                <FloatMessage type="alert">{errorMsg}</FloatMessage>
              )}
            </>
          );
        }}
      </LoginMutation>
    </Layout>
  );
};

export default NotRegisteredUser;
