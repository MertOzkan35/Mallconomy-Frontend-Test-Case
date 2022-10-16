import "../styles/main.scss";
import { wrapper } from "../store/store";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default wrapper.withRedux(MyApp);
