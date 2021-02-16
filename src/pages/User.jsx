import React, { useContext } from "react";
import { Context } from "../Context";
import { SubmitButton } from "../components/SubmitButton/SubmitButton.componet";
import { Layout } from "../components/Layout/Layout.component";
import { GoBack } from "../components/GoBack/GoBack.component";
import BoyIcon from "../components/Icons/BoyIcon";
import GirlIcon from "../components/Icons/GirlIcon";

const User = () => {
  const { removeAuth } = useContext(Context);
  const styles = {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1em",
  };

  return (
    <Layout title="User">
      <GoBack />
      <div className="images-container" style={styles}>
        <div style={{ marginBottom: ".5em" }} className="image">
          <BoyIcon width={"128px"} height={"128px"} />
        </div>
        <div style={{ marginLeft: "calc(100% - 128px)" }} className="image">
          <GirlIcon width={"128px"} height={"128px"} />
        </div>
      </div>
      <SubmitButton onClick={removeAuth}>Sign out</SubmitButton>
    </Layout>
  );
};

export default User;
