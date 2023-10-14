import '@/styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css';
import { darkTheme, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { polygon } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    // mainnet,
    polygon,
    //polygonMumbai,
    // optimism,
    // arbitrum,
    // goerli,
    // ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});





export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return(
    <WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider chains={chains}
    theme={darkTheme({
      accentColor: 'rgb(9,84,148)'
    })}>
 
 {getLayout(<Component {...pageProps} />)}
  </RainbowKitProvider>
    </WagmiConfig> ) 
}
