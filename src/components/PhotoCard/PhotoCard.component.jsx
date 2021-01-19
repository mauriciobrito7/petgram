import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../../Context";

import { FavButton } from "../FavButton/FavButton.component";
import { ImgWrapper, Img, Article, Info } from "./PhotoCard.styles";
import { useNearScreen } from "../../hooks/useNearScreen.hook";
import { ToggleLikeMutation } from "../../container/ToggleLikeMutation";
import { FloatMessage } from "../FloatMessage/FloatMessage.component";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const { isAuth } = useContext(Context);
  const [show, element] = useNearScreen();
  const [showMessage, setShowMessage] = useState(false);

  return (
    <Article ref={element}>
      {show && (
        <>
          <ImgWrapper to={`/detail/${id}`}>
            <Img src={src} />
          </ImgWrapper>
          <Info>
            <ToggleLikeMutation>
              {(toggleLike) => {
                const handleFavClick = () => {
                  if (!isAuth) return setShowMessage(true);
                  toggleLike({
                    variables: {
                      input: { id },
                    },
                  });
                };
                return (
                  <FavButton
                    liked={liked}
                    likes={likes}
                    onClick={handleFavClick}
                  />
                );
              }}
            </ToggleLikeMutation>
            {showMessage && (
              <FloatMessage time={2000}>You must be logged</FloatMessage>
            )}
          </Info>
        </>
      )}
    </Article>
  );
};
PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName];

    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`);
    }

    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`);
    }
  },
};
