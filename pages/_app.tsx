import "@/styles/base/globals.sass";
import type { AppProps } from "next/app";
import store from "@/modules/store";
import { Provider } from "react-redux";

import Layout from "@/layout/Layout";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId="260952113847-cg3mb6i3122r45m4ab2523gce4kuu05j.apps.googleusercontent.com">
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </GoogleOAuthProvider>
    </Provider>
  );
}
