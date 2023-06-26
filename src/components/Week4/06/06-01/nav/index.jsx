import styled from "@emotion/styled";
import { useRouter } from "next/router";

export default function Nav() {
  const Ul = styled.ul`
    display: flex;
    justify-content: center;
    border: 1px solid black;
  `;

  const Li = styled.li`
    margin: 50px;
    cursor: pointer;
    :hover {
      font-weight: 700;
    }
  `;

  const router = useRouter();

  const handleClick = (path) => {
    router.push(path);
  };

  return (
    <nav>
      <Ul>
        <Li onClick={() => handleClick("/Week4/06/06-02")}>HOME</Li>
        <Li onClick={() => handleClick("/Week4/06/06-01")}>ABOUT</Li>
      </Ul>
    </nav>
  );
}
