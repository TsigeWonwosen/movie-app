import React, { useState, useEffect, useCallback } from 'react';
import { APIURL, IMGPATH, DEFAULTIMAG } from '../../asset/api-key';
import styled from 'styled-components';
import '../../style/banner.css';
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
`;

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + ' ...';
  } else {
    return str;
  }
}
function Banner({ handleClick }) {
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
    <header className="movie_banner">
      <div
        style={{
          margin: '0 auto',
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
        }}
      >
        <div className="banner_contents">
          <div className="banner_title">
            <h1>{movie.title}</h1>
          </div>

          {Object.keys(movie).length > 0 && (
            <div className="banner_description">
              {/* {movie.overview} */}
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
