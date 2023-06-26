import styled from "@emotion/styled";

export default function Footer() {
  const P = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 1px solid black;
    height: 200px;
  `;

  return (
    <footer>
      <P>Footer</P>
    </footer>
  );
}
