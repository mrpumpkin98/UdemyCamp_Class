import styled from "@emotion/styled";
import { useRouter } from "next/router";

export default function Nav() {
  const Ul = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    background-color: #f0f0f0;
    color: #333;
  `;

  const Li = styled.button`
    margin: 50px;
    cursor: pointer;
    padding: 20px;
    border: none;
    border-radius: 4px;
    background-color: #f0f0f0;
    color: #333;
    transition: background-color 0.3s;

    :hover {
      background-color: #e0e0e0;
    }
  `;

  const router = useRouter();

  const handleClick = (path) => {
    router.push(path);
  };

  return (
    <nav>
      <Ul>
        <Li onClick={() => handleClick("/Week4/06/06-02/06-02")}>HOME</Li>
        <Li onClick={() => handleClick("/Week4/06/06-01/06-01")}>
          Movie app 만들기
        </Li>
      </Ul>
    </nav>
  );
}
