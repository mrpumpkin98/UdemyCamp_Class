import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import styled from "@emotion/styled";

const socket = io("http://localhost:3001"); // 서버의 URL에 맞게 변경

const ChatContainer = styled.div`
  max-width: 500px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ChatHeader = styled.h2`
  text-align: center;
`;

const MessageContainer = styled.div`
  margin-top: 20px;
`;

const MessageBubble = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const MessageUsername = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

const MessageContent = styled.span``;

const MessageTime = styled.span`
  margin-left: 10px;
  font-size: 0.8rem;
  color: #888;
`;

const InputContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const UsernameInput = styled.input`
  width: 100%;
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ChatInput = styled.input`
  width: 100%;
  flex: 3;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
`;

const SendButton = styled.button`
  padding: 8px 16px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

function Chat() {
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    socket.on("message", handleMessage);
    return () => {
      socket.off("message", handleMessage);
    };
  }, []);

  const handleMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleMessageSend = () => {
    if (inputValue.trim() !== "") {
      const currentTime = new Date().toLocaleTimeString();
      socket.emit("message", {
        username,
        content: inputValue,
        time: currentTime,
      });
      setInputValue("");
    }
  };

  return (
    <ChatContainer>
      <ChatHeader>채팅</ChatHeader>
      <MessageContainer>
        {messages.map((message, index) => (
          <MessageBubble key={index}>
            <MessageUsername>{message.username} : </MessageUsername>
            <MessageContent>{message.content}</MessageContent>
            <MessageTime>{message.time}</MessageTime>
          </MessageBubble>
        ))}
      </MessageContainer>
      <InputContainer>
        <UsernameInput
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="사용자 이름"
        />
        <ChatInput
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="채팅 내용"
        />
        <SendButton onClick={handleMessageSend}>전송</SendButton>
      </InputContainer>
    </ChatContainer>
  );
}

export default Chat;
