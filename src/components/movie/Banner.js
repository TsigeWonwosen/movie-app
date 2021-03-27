import React, { useState, useEffect, useCallback } from 'react';
import { APIURL, IMGPATH, DEFAULTIMAG } from '../../asset/api-key';
import styled, { css } from 'styled-components';

const Button = styled.a`
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  border: 1px solid white;
  background-color: #ff44ff;
  color: black;
  border-radius: 5px;
  :hover {
    background-color: transparent;
    color: #ff44ff;
    border: 1px solid black;
    text-decoration: none;
  }
  ${(props) =>
    props.primary &&
    css`
      background: transparent;
      border: 1px solid white;
      color: white;
    `}
`;

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + ' ...';
  } else {
    return str;
  }
}
function Banner() {
  const [movie, setMovie] = useState({});

  const fetchMovie = useCallback(() => {
    fetch(APIURL)
      .then((res) => res.json())
      .then((data) => {
        let index;
        index = Math.floor(Math.random() * (data.results.length - 1));

        setMovie(data.results[index]);
      });
  }, []);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  let img = movie?.poster_path ? IMGPATH + movie.backdrop_path : DEFAULTIMAG;
  return (
    <header
      className="movie_banner"
      style={{
        margin: '0 auto',
        display: 'inline-block',
        verticalAlign: 'middle',
        maxHeight: '450px',
        height: 'auto',
        width: '100%',
        backgroundImage: `url(${img}) , linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ) `,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        objectFit: 'cover',
        opacity: '0.7',
      }}
    >
      <div className="banner_contents">
        <div className="banner_title">
          <h1>{movie.title}</h1>
        </div>
        <div className="banner_buttons">
          <Button>Play</Button>
          <Button primary>List Movies</Button>
        </div>

        {Object.keys(movie).length > 0 && (
          <div className="banner_description">
            {/* {movie.overview} */}
            {truncateString(`${movie.overview}`, 150)}
          </div>
        )}
      </div>
      <div className="banner_fadeBottom"></div>
    </header>
  );
}

export default Banner;
