import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { Main as MainLayout } from "../components/layouts/main";
import '../styles/styles.css'

// This is the chainId your dApp will work on.
const DESIRED_CHAIN_ID = ChainId.Goerli;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={DESIRED_CHAIN_ID}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThirdwebProvider>
  );
}

export default MyApp;
