import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Modal } from "antd";
import ReactStars from "react-stars";
import * as S from "./Movie.style";

export default function Weather() {
  const [movies, setMovies] = useState([]);
  const [modalVisible, setModalVisible] = useState(false); // 모달의 가시성 상태
  const [selectedMovie, setSelectedMovie] = useState(null); // 선택한 영화

  const API_KEY = "15f8fbf5168d6da001f1e3c2c4b76277";

  useEffect(() => {
    fetchMoviesData();
  }, []);

  const fetchMoviesData = async () => {
    try {
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year&api_key=${API_KEY}`
      );
      const data = await response.json();
      setMovies(data.data.movies);
      console.log(data.data.movies[0].genres[0]);
    } catch (error) {}
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const truncateSummary = (summary, maxLength) => {
    if (summary.length > maxLength) {
      return summary.substring(0, maxLength) + "...";
    }
    return summary;
  };

  const handleMoreButtonClick = () => {
    if (selectedMovie && selectedMovie.url) {
      window.open(selectedMovie.url, "_blank");
    }
  };

  const handleRatingChange = (newRating) => {};

  return (
    <>
      <S.Main className="grid-container">
        {movies.map((movie) => (
          <S.Item key={movie.id} className="grid-item">
            <S.Img
              src={movie.medium_cover_image}
              alt={movie.title}
              onError={(event) => {
                event.target.style.display = "none";
              }}
              onClick={() => handleMovieClick(movie)}
            />
          </S.Item>
        ))}
        {selectedMovie && (
          <Modal
            visible={modalVisible}
            onCancel={handleModalClose}
            footer={null}
            destroyOnClose
          >
            <S.Tie>
              <img
                src={selectedMovie.medium_cover_image}
                alt={selectedMovie.title}
              />
              <S.TextTie>
                <S.P1>제목 : {selectedMovie.title}</S.P1>
                <S.P1>개봉일 : {selectedMovie.year}년</S.P1>
                <S.P1>장르 : {selectedMovie.genres[0]}</S.P1>
                <S.RateTie>
                  <ReactStars
                    count={5}
                    size={20}
                    half={false}
                    value={selectedMovie.rating / 2}
                    emptyIcon={<i className="far fa-star"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    onChange={handleRatingChange}
                  />
                  <S.P1 style={{ marginBottom: "11px", marginLeft: "10px" }}>
                    {selectedMovie.rating} / 10
                  </S.P1>
                </S.RateTie>
                <S.P1>{truncateSummary(selectedMovie.summary, 150)}</S.P1>
                <S.Button onClick={handleMoreButtonClick}>더보기</S.Button>
              </S.TextTie>
            </S.Tie>
          </Modal>
        )}
      </S.Main>
    </>
  );
}
