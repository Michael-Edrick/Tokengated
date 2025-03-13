import { reconnect, http, createConfig } from "@wagmi/core";
import { walletConnect, injected } from "@wagmi/connectors";
import { createWeb3Modal } from "@web3modal/wagmi";
import { mainnet, goerli } from "wagmi/chains";

const url = "https://tokengated-one.vercel.app/";

const metadata = {
  name: "Onboard to ABG with EVM Wallet",
  description: "Discover ABG with Ethereum and NEAR wallets.",
  url: url,
  icons: [`${url}/icon.svg`],
};

const evmWalletChains = {
    testnet: {
      chainId: 398,
      nearEnv: "testnet",
      walletExplorerUrl: "https://eth-explorer.testnet.near.org",
      explorerUrl: "https://nearblocks.io",
      ethRpcForNear: "https://eth-rpc.testnet.near.org",
      nearNativeRpc: "https://rpc.testnet.near.org"
    },
    mainnet: {
      chainId: 397,
      nearEnv: "mainnet",
      walletExplorerUrl: "https://eth-explorer.near.org",
      explorerUrl: "https://nearblocks.io",
      ethRpcForNear: "https://eth-rpc.mainnet.near.org",
      nearNativeRpc: "https://rpc.mainnet.near.org"
    }
}

const networkId = "testnet";
const onMainnet = networkId == "testnet";

const EVMWalletChain = evmWalletChains[networkId];
const nearChain = {
  id: EVMWalletChain.chainId,
  name: `NEAR Protocol${ onMainnet ? "" : " Testnet"}`,
  nativeCurrency: {
    decimals: 18,
    name: "NEAR",
    symbol: "NEAR",
  },
  rpcUrls: {
    default: { http: [EVMWalletChain.ethRpcForNear] },
    public: { http: [EVMWalletChain.ethRpcForNear] },
  },
  blockExplorers: {
    default: {
      name: "NEAR Explorer",
      url: EVMWalletChain.walletExplorerUrl,
    },
  },
  testnet: !onMainnet,
};



const reownProjectId = '5bb0fe33763b3bea40b8d69e4269b4ae';

export const wagmiConfig = createConfig({
    chains: [mainnet, goerli, nearChain], // ✅ Add Ethereum chains
    transports: {
      [mainnet.id]: http(),
      [goerli.id]: http(),
      [nearChain.id]: http(),
    },
    connectors: [
      walletConnect({ projectId: reownProjectId, metadata, showQrModal: false }),
      injected({ shimDisconnect: true }),
    ],
});

// Needed to be called to preserve the login state if your will reload the page
// Make sure you are calling it there in your file
reconnect(wagmiConfig);


export const web3Modal = createWeb3Modal({
    wagmiConfig: wagmiConfig,
    // Get a project ID at https://cloud.walletconnect.com
    projectId: reownProjectId,
  });
  
  