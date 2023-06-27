import styled from "@emotion/styled";

export const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  width: 55%;
  margin: 0 auto;
  padding: 40px 0px;
`;

export const Item = styled.div`
  width: calc(25% - 20px);
  text-align: center;
`;

export const Img = styled.img`
  cursor: pointer;
  background-color: white;
  object-fit: cover;
  transition: border-color 0.3s, transform 0.3s; /* 테두리 색상 및 변화에 애니메이션 효과 추가 */

  margin-top: 20px;
  border-radius: 6px;

  :hover {
    transform: translateY(-10px); /* 위로 10px 이동하는 애니메이션 효과 */
    filter: brightness(70%); /* 이미지 어두워지는 효과 */
  }
`;

export const Tie = styled.div`
  display: flex;
`;

export const TextTie = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const P1 = styled.p`
  margin-top: 10px;
`;

export const RateTie = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
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
