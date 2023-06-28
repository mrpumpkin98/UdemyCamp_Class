import React, { useState } from "react";
import styled from "@emotion/styled";

const StyledForm = styled.form`
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

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin-top: 100px;
`;

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 처리 로직 작성
    // 예: 서버에 로그인 요청 보내기, 상태 업데이트 등
    console.log("Email:", email);
    console.log("Password:", password);
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
    </>
  );
}
