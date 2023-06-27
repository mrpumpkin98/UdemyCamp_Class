import styled from "@emotion/styled";

export default function Footer() {
  const P = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    background-color: #f0f0f0;
    color: #333;
  `;

  return (
    <footer>
      <P>Footer</P>
    </footer>
  );
}
