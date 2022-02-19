import React from "react";

import Thumb from "../Thumb";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

import NoImage from "../../images/no_image.jpg";

import { Wrapper, Content, Text } from "./MovieInfo.styles";

const MovieInfo = ({ movie }) => (
  <Wrapper backdrop={movie.poster_path}>
    <Content>
      <Thumb
        image={
          movie.poster_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
            : NoImage
        }
        clickable={false}
      />

      <Text>
        <h1>{movie.title}</h1>
        <h2>KONU</h2>
        <a>{movie.overview}</a>

        <div className="rating-directors">
          <div>
            <h2>PUAN</h2>
            <div className="score">{movie.vote_average}</div>
          </div>

         
        </div>
      </Text>
    </Content>
  </Wrapper>

);

export default MovieInfo;
