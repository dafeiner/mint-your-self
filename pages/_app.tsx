import type { AppProps } from 'next/app';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

// This is the chainId your dApp will work on.
const DESIRED_CHAIN_ID = ChainId.Goerli;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={DESIRED_CHAIN_ID}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
