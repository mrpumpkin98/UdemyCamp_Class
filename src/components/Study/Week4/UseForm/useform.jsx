import React, { useState } from "react";
import styled from "@emotion/styled";
import { useEffect } from "react";
import io from "socket.io-client";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  font-weight: bold;
`;

const StyledInput = styled.input`
  width: 300px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:hover {
    border-color: #007bff;
  }
`;

const StyledButton = styled.button`
  width: 300px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    background-color: #2c7ed6;
  }
`;

const StyledValueButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    background-color: #2c7ed6;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin-top: 100px;
`;

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 처리 로직 작성
    // 예: 서버에 로그인 요청 보내기, 상태 업데이트 등
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleIncrement = () => {
    setValue(value + 1);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>
          Email:
          <StyledInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </StyledLabel>
        <StyledLabel>
          Password:
          <StyledInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </StyledLabel>
        <StyledButton type="submit">로그인</StyledButton>
      </StyledForm>
      <Line />
      <Wrapper>
        <p>값: {value}</p>
        <StyledValueButton onClick={handleIncrement}>+1</StyledValueButton>
        <Line />
      </Wrapper>
    </>
  );
}
