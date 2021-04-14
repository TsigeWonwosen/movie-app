import React, { useState, useEffect, useCallback } from 'react';
import { API_URL, IMG_PATH, DEFAULT_IMAGE } from '../../asset/api-key';
import styled from 'styled-components';
import '../../style/banner.css';
import { MovieContext } from '../../context/ContextProvider';

const Button = styled.a`
  width: auto;
  height: 37px;
  line-height: 40px;
  padding: 4px 20px;
  margin-right: 1rem;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  background-color: ${({ primary }) => (primary ? 'white' : '#f2494d')};
  color: ${({ primary }) => (primary ? 'black' : '#f8f9fa')};
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  :hover {
    background-color: ${({ primary }) => (primary ? '#f8f9fa99' : '#f2494d99')};
  }
  @media (max-width: 500px) {
    height: 30px;
    line-height: 40px;
    padding: 4px 12px;
    margin-right: 1rem;
    font-size: 14px;
    font-weight: 600;
  }

  @media (max-width: 350px) {
    height: 27px;
    line-height: 40px;
    padding: 4px 10px;
    margin-right: 1rem;
    font-size: 12px;
    font-weight: 500;
  }
`;

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + ' ...';
  } else {
    return str;
  }
}
function Banner() {
  const { handleClick } = React.useContext(MovieContext);
  const [movie, setMovie] = useState({});

  const fetchMovie = useCallback(() => {
    fetch(API_URL)
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

  let img = movie?.poster_path ? IMG_PATH + movie.backdrop_path : DEFAULT_IMAGE;
  return (
    <header className="movie_banner">
      <div
        style={{
          margin: '0 auto',
          marginTop: '-70px',
          display: 'flex',
          flexDirection: 'column',
          verticalAlign: 'middle',
          height: '100%',
          width: '100%',
          backgroundImage: `url(${img}), linear-gradient(45deg , #05054b 40%,  rgba(0,0,0,0.2) 55%`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '10% top',
          backgroundSize: 'cover',
          opacity: '1',
          backgroundBlendMode: 'overlay',
          // border: '2px solid red',
        }}
      >
        <div className="banner_contents">
          <div className="banner_title">
            <h1>{movie.title}</h1>
          </div>

          {Object.keys(movie).length > 0 && (
            <div className="banner_description">
              {truncateString(`${movie.overview}`, 150)}
            </div>
          )}
          <div className="banner_buttons">
            <Button onClick={() => handleClick(movie)}>Watch Now</Button>
            <Button primary>Add To List</Button>
          </div>
        </div>
        <div className="banner_fadeBottom"></div>
      </div>
    </header>
  );
}

export default Banner;
