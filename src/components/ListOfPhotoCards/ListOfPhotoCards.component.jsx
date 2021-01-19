import React from "react";
import { PhotoCard } from "../PhotoCard/PhotoCard.component";
import { withPhotos } from "../../hoc/withPhotos";
import { ShadowSpinner } from "../ShadowSpinner/ShadowSpinner.component";

const ListOfPhotoCardComponent = ({ data: { photos = [] } } = {}) => {
  if (photos.length === 0)
    return (
      <ShadowSpinner
        shape={"square"}
        width="90%"
        height="295px"
        orientation="column"
      />
    );

  return (
    <>
      <ul>
        {photos.map((photo) => (
          <PhotoCard key={photo.id} {...photo} />
        ))}
      </ul>
    </>
  );
};

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardComponent);
