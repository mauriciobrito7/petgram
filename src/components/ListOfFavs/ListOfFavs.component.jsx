import React from "react";
import { Image, Fav, Empty, Title } from "./ListOfFavs.styles";
import PropTypes from "prop-types";
import EmptyIcon from "../Icons/EmptyIcon";

export const ListOfFavs = ({ favs = [] }) => {
  console.log(favs);
  return (
    <div style={{ textAlign: "center" }}>
      {favs.length !== 0 ? (
        favs.map((fav) => {
          return (
            <Fav to={`/detail/${fav.id}`} key={fav.id}>
              <Image src={fav.src} alt="Fav" />
            </Fav>
          );
        })
      ) : (
        <Empty>
          <EmptyIcon />
          <Title>You don't have any favorite pictures</Title>
        </Empty>
      )}
    </div>
  );
};

ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ),
};
