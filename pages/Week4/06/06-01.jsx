import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Modal } from "antd";

export default function Weather() {
  const [movies, setMovies] = useState([]);
  const [modalVisible, setModalVisible] = useState(false); // 모달의 가시성 상태
  const [selectedMovie, setSelectedMovie] = useState(null); // 선택한 영화

  const API_KEY = "15f8fbf5168d6da001f1e3c2c4b76277";

  useEffect(() => {
    fetchMoviesData();
  }, []);

  const Main = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    width: 80%;
    margin: 0 auto;
    padding: 40px 0px;
  `;

  const Item = styled.div`
    width: calc(25% - 20px);
    text-align: center;
  `;

  const Img = styled.img`
    cursor: pointer;
    background-color: white;
    object-fit: cover;
    transition: border-color 0.3s, transform 0.3s; /* 테두리 색상 및 변화에 애니메이션 효과 추가 */
    border: 2px solid transparent; /* 초기 테두리 설정 */
    margin-top: 20px;
    :hover {
      transform: translateY(-10px); /* 위로 10px 이동하는 애니메이션 효과 */
    }
  `;

  const Tie = styled.div`
    display: flex;
  `;

  const TextTie = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  `;

  const P1 = styled.p`
    margin-top: 10px;
  `;

  const Button = styled.button`
    margin-top: 10px;
    cursor: pointer;
    background-color: #1890ff;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    transition: background-color 0.3s;
    margin-top: 30px;
    :hover {
      background-color: #40a9ff;
    }
  `;

  const fetchMoviesData = async () => {
    try {
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year&api_key=${API_KEY}`
      );
      const data = await response.json();
      console.log(data.data.page_number);
      setMovies(data.data.movies);
    } catch (error) {
      console.log(error);
    }
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

  return (
    <Main className="grid-container">
      {movies.map((movie) => (
        <Item key={movie.id} className="grid-item">
          <Img
            src={movie.medium_cover_image}
            alt={movie.title}
            onError={(event) => {
              event.target.style.display = "none";
            }}
            onClick={() => handleMovieClick(movie)}
          />
        </Item>
      ))}
      {selectedMovie && (
        <Modal
          visible={modalVisible}
          onCancel={handleModalClose}
          footer={null}
          destroyOnClose
        >
          <Tie>
            <img
              src={selectedMovie.medium_cover_image}
              alt={selectedMovie.title}
            />
            <TextTie>
              <P1>제목: {selectedMovie.title}</P1>
              <P1>연도: {selectedMovie.year}</P1>
              <P1>내용: {truncateSummary(selectedMovie.summary, 200)}</P1>
              <Button onClick={handleMoreButtonClick}>더보기</Button>
            </TextTie>
          </Tie>
        </Modal>
      )}
    </Main>
  );
}
