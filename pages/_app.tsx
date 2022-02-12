
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { WalletBalanceProvider } from "../hooks/useWalletBalance";
import Header from "../components/Layout/Header";
require("@solana/wallet-adapter-react-ui/styles.css");
import { useEffect, useState } from 'react'
import { amber, deepOrange, grey } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import "../styles/globals.scss";
const WalletConnectionProvider = dynamic(
  () => import("../components/WalletConnection/WalletConnectionProvider"),
  {
    ssr: false,
  }
);

import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store";
import { Provider } from "react-redux";
function MyApp({ Component, pageProps }: AppProps) {
  const [toggleDark, settoggleDark] = useState(false);
  const myTheme = createTheme({
    // Theme settings
    palette: {
      type: toggleDark ? "dark" : "light",
      primary: {
        ...amber,
        ...(toggleDark && {
          main: amber[300],
        }),
      },
      ...(toggleDark && {
        background: {
          default: deepOrange[900],
          paper: deepOrange[900],
        },
      }),
      text: {
        ...(!toggleDark
          ? {
              primary: grey[900],
              secondary: grey[800],
            }
          : {
              primary: "#fff",
              secondary: grey[500],
            }),
      },
    },
  });
  const handleModeChange = () => {
    settoggleDark(!toggleDark);
    // console.log(toggleDark,'toggle')
  };
  return (
    <ThemeProvider theme={myTheme}>
      <WalletConnectionProvider>
        <WalletBalanceProvider>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <main
                className={
                  toggleDark
                    ? "dark p-6 lg:px-24 min-h-screen custom-dark-bg"
                    : "p-6 lg:px-24 min-h-screen custom-light-bg"
                }
              >
                <Header
                  toggleDark={toggleDark}
                  handleModeChange={handleModeChange}
                />

                <Component {...pageProps} />
              </main>
            </PersistGate>
          </Provider>
        </WalletBalanceProvider>
      </WalletConnectionProvider>
    </ThemeProvider>
  );
}
export default MyApp;
