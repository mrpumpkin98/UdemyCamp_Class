// 리액트 라우터

import Footer from "./footer/index";
import Nav from "./nav/index";

export default function Layout(props) {
  return (
    <>
      <Nav />
      {props.children}
      {/* <Footer /> */}
    </>
  );
}
