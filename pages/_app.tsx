import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import HeaderDesktop from "../src/components/desktop/header_desktop";
import FooterDesktop from "../src/components/desktop/footer_desktop";
import "moment/locale/ru";
import "moment/locale/uz-latn";
import "moment/locale/uz";
import ModalsProvider from "../src/providers/modals_provider";
import AppProvider from "../src/providers/app_provider";
import Head from "next/head";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <Provider store={store}>
        <AppProvider>
          <ModalsProvider>
            {!router.pathname.includes("mobile") && <HeaderDesktop />}
            <Component {...pageProps} />
            {!router.pathname.includes("mobile") && <FooterDesktop />}
          </ModalsProvider>
        </AppProvider>
      </Provider>
    </>
  );
}

export default appWithTranslation(MyApp);
