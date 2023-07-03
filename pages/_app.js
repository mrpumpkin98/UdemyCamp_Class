import { Provider } from "react-redux";
import store from "../src/commons/store";

import Layout from "../src/commons/Layout/index";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
