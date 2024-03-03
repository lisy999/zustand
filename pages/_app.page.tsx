import "@/styles/globals.css";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

App.getInitialProps = async () => {
  // 使用自定义的函数获取共享数据，并将其作为 pageProps 返回
  // 将共享数据作为 pageProps 返回，使其能够在所有页面中使用
  return { pageProps: { sharedData: 1 } };
};
export default App;
