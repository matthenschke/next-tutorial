import App from "next/app";
import { Provider } from "react-redux";
import store from "../redux/store";
import Layout from "../components/Layout";

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
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps}></Component>{" "}
          {/* current page being rendered */}
        </Layout>
      </Provider>
    );
  }
}

export default MyApp;
