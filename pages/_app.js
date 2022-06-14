import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import SSRProvider from "react-bootstrap/esm/SSRProvider";

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      {" "}
      <Component {...pageProps} />{" "}
    </SSRProvider>
  );
}

export default MyApp;
