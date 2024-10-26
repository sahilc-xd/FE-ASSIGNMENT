
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signin } from './pages/Signin';
import { Connectwallet } from './pages/Connectwallet';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet, polygon, optimism, arbitrum, base, zora],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
  


function App() {
  const queryClient = new QueryClient();

  return (
    <>
      
       <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin></Signin>}></Route>
          <Route path="/connectwallet" element={<Connectwallet></Connectwallet>}></Route>
      </Routes>
            </BrowserRouter>
            

            </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
    </>
  )
}

export default App
