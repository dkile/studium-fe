import "@/styles/base/globals.sass";
import type { AppProps } from "next/app";
import { store } from "@/modules/store";
import { Provider } from "react-redux";

import Layout from "@/layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
