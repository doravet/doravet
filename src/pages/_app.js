import '@/styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css';
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { darkTheme, getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { klaytn } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { ChakraProvider } from '@chakra-ui/react';
import { CacheProvider } from '@chakra-ui/next-js'

const chain = klaytn;

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [chain],
  [
    alchemyProvider({
      apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY ?? "",
    }),
    publicProvider(),
  ],
);
const { connectors } = getDefaultWallets({
  appName: "doravet",
  projectId:  "029b62dd4249e526213b8076375dfe94",
  chains,
});
const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});






export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return(
    <WagmiConfig config={config}>
    <RainbowKitProvider chains={chains}
    theme={darkTheme({
      accentColor: 'rgb(9,84,148)'
    })}>
 <CacheProvider>
    <ChakraProvider>

 {getLayout(<Component {...pageProps} />)}
 </ChakraProvider>
      </CacheProvider>

  </RainbowKitProvider>
    </WagmiConfig> ) 
}
