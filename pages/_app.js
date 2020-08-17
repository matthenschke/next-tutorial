import App from "next/app";
import { Provider } from "react-redux";
import store from "../redux/store";

// main app file
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    //Anything returned here can be access by the client
    return { pageProps: pageProps };
  }
  render() {
    return <Provider store={store}></Provider>;
  }
}

export default MyApp;
