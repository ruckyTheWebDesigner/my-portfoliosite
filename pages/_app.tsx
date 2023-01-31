import "../styles/globals.css";
import type { AppProps } from "next/app";
// import { MantineProvider } from "@mantine/core";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
