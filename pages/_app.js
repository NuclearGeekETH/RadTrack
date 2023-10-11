import '@/styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css';
import {
  RainbowKitProvider,
  getDefaultWallets,
  lightTheme,
} from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [chain.goerli],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'RadTrack',
  chains
});

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider
})


export default function App({ Component, pageProps }) {
  return (
      <>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider
            theme={lightTheme({
            accentColor: '#328ba8',
            accentColorForeground: 'black',
            borderRadius: 'large',
            fontStack: 'system',
          })} 
            chains={chains}>
          <Component {...pageProps} />
          </RainbowKitProvider>
      </WagmiConfig>
    </>
  );

}
