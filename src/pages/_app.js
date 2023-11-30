import '@/styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css';
import {  WagmiConfig,  configureChains, createConfig } from "wagmi";
import { darkTheme, getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { ChakraProvider } from '@chakra-ui/react';
import { CacheProvider } from '@chakra-ui/next-js';
import { publicProvider } from 'wagmi/providers/public';

const klaytntestnetbaobab = {
  id: 1001, // You can assign a unique identifier as needed
  name: "KlaytnTestnetBaobab",
  network: "KlaytnTestnetBaobab", 
  iconUrl: "https://example.com/icon.svg", // Update the icon URL if necessary
  iconBackground: "#fff", // Update icon background color if needed
  nativeCurrency: {
    decimals: 18, 
    name: "KLAY", // Name of the native currency
    symbol: "KLAY", // Symbol for the native currency
  },
  rpcUrls: {
    public: {
      http: ["https://api.baobab.klaytn.net:8651"], 
    },
    default: {
      http: ["https://api.baobab.klaytn.net:8651"], 
    },
  },
  blockExplorers: {
    default: {
      name: "KLAY",
      url: "https://scope.klaytn.com/", 
    },
  },
  contracts: {
    // Add contract addresses if needed
  },
  testnet: true, 
};


const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    // mainnet,
  klaytntestnetbaobab
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'doravet',
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
 <CacheProvider>
    <ChakraProvider>

 {getLayout(<Component {...pageProps} />)}
 </ChakraProvider>
      </CacheProvider>

  </RainbowKitProvider>
    </WagmiConfig> ) 
}
