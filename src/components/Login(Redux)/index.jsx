import React from "react";
import { connect } from "react-redux";
import {
  setLoggedIn,
  setLoggedOut,
  setCountUp,
  setCountDown,
} from "../../commons/store";
import { useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 500px;
  margin: 100px auto;
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
`;

const Button = styled.button`
  margin-right: 10px;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #45a049;
  }
`;

const SomeComponent = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const isCounter = useSelector((count) => count.isCounter);

  const aa = useDispatch();
  const bb = useDispatch();
  const handleButtonClick = () => {
    aa(setLoggedIn()); // 로그인 액션 디스패치
  };

  const handleButtonClick2 = () => {
    aa(setLoggedOut()); // 로그아웃 액션 디스패치
  };

  const handleButtonClick3 = () => {
    bb(setCountUp());
  };

  const handleButtonClick4 = () => {
    bb(setCountDown());
  };

  const { auth, counter } = useSelector((aaa) => aaa); // aaa에 어떤 값이 들어와도 상관X
  return (
    <>
      <Container>
        <Title>로그인 상태 : {auth.isLoggedIn ? "Yes" : "No"}</Title>
        <Button onClick={handleButtonClick}>로그인</Button>
        <Button onClick={handleButtonClick2}>로그아웃</Button>
      </Container>
      <Container>
        <Title>카운터 : {counter.isCounter}</Title>
        <Button onClick={handleButtonClick3}>증가</Button>
        <Button onClick={handleButtonClick4}>감소</Button>
      </Container>
    </>
  );
};
export default SomeComponent;
