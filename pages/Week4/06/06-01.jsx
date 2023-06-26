import { useState, useEffect } from "react";
import styled from "@emotion/styled";

export default function Weather() {
  const [movies, setMovies] = useState([]);
  const API_KEY = "15f8fbf5168d6da001f1e3c2c4b76277";

  useEffect(() => {
    fetchMoviesData();
  }, []);

  const Main = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px; /* 열 사이의 간격 설정 */
    width: 50%;
    margin: 0 auto; /* 가운데 정렬 */
  `;

  const Item = styled.div`
    width: calc(30% - 20px); /* 한 줄에 3개의 아이템 배치 (간격 제외) */
    text-align: center;
  `;

  const Img = styled.img`
    cursor: pointer;
    background-color: gray; /* 이미지가 없을 때의 대체 배경색 */
    object-fit: cover;
  `;

  const fetchMoviesData = async () => {
    try {
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year&api_key=${API_KEY}`
      );
      const data = await response.json();
      console.log(data.data.movies); // API 값을 콘솔에 출력
      setMovies(data.data.movies);
    } catch (error) {
      console.log(error);
    }
  };

  const handleMovieClick = (url) => {
    window.open(url, "_blank"); // 새 창에서 해당 URL 열기
  };

  return (
    <Main className="grid-container">
      {movies.map((movie) => (
        <Item key={movie.id} className="grid-item">
          <Img
            src={movie.medium_cover_image}
            alt={movie.title}
            onError={(event) => {
              event.target.style.display = "none"; // 이미지 로딩 실패 시 숨기기
            }}
            onClick={() => handleMovieClick(movie.url)}
          />
          <p>제목: {movie.title}</p>
          <p>연도: {movie.year}</p>
        </Item>
      ))}
    </Main>
  );
}
