import React from "react";
import { PhotoCardWithQuery } from "../container/PhotoCardWithQuery";
import { Layout } from "../components/Layout/Layout.component";
import { useParams } from "react-router-dom";
import { GoBack } from "../components/GoBack/GoBack.component";
export const Detail = () => {
  let { detailId } = useParams();
  return (
    <Layout title="Detail">
      <GoBack />
      <PhotoCardWithQuery id={detailId} />
    </Layout>
  );
};
