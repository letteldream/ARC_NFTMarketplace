export const NETWORKS = [
  {
    chainId: 1,
    chainName: 'mainnet',
    rpcUrls: ['https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    blockExplorerUrls: ['https://etherscan.io'],
    openSea: {
      assets: 'https://opensea.io/assets',
      openNFTs: 'https://opensea.io/collection/kredeum-nfts',
    },
    subgraph: {
      url: 'https://api.thegraph.com/subgraphs/name/amxx/eip721-subgraph/graphql',
      active: false,
    },
    covalent: {
      active: true,
    },
    eip1559: true,
    create: true,
    mainnet: true,
    nftsFactory: '0x4b7992F03906F7bBE3d48E5Fb724f52c56cFb039',
    nftsFactoryV2: '0xD5dA0F2bf1029c64460e4e1CE1fA0f88E7E39800',
  },
  {
    chainId: 42161,
    chainName: 'arbitrum',
    rpcUrls: ['https://arbitrum-mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
    nativeCurrency: {
      name: 'Ether',
      symbol: 'AETH',
      decimals: 18,
    },
    blockExplorerUrls: ['https://arbiscan.io', 'https://explorer.arbitrum.io'],
    covalent: {
      active: false,
    },
    create: true,
    mainnet: true,
    nftsFactoryV2: '0xD5dA0F2bf1029c64460e4e1CE1fA0f88E7E39800',
  },
  {
    chainId: 137,
    chainName: 'matic',
    rpcUrls: ['https://polygon-mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161', 'https://polygon-rpc.com/'],
    nativeCurrency: {
      name: 'Matic',
      symbol: 'MATIC',
      decimals: 18,
    },
    blockExplorerUrls: ['https://polygonscan.com', 'https://polygon-explorer-mainnet.chainstacklabs.com'],
    subgraph: {
      url: 'https://api.thegraph.com/subgraphs/name/tranchien2002/eip721-matic',
      startBlock: 16875648,
      active: true,
    },
    covalent: {
      active: true,
    },
    openSea: {
      assets: 'https://opensea.io/assets/matic',
      openNFTs: 'https://opensea.io/collection/kredeum-nfts',
    },
    nftsFactory: '0x3157Ac677F6F273b75E99A2216CD078E22E9be02',
    nftsFactoryV2: '0xD5dA0F2bf1029c64460e4e1CE1fA0f88E7E39800',
    create: true,
    mainnet: true,
  },
  {
    chainId: 43114,
    chainName: 'avalanche',
    rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
    nativeCurrency: {
      name: 'AVAX',
      symbol: 'AVAX',
      decimals: 18,
    },
    blockExplorerUrls: ['https://snowtrace.io', 'https://cchain.explorer.avax.network'],
    covalent: {
      active: true,
    },
    nftsFactory: '0x0ED91009756b1d684F2D953f56cF84373D8CEB25',
    nftsFactoryV2: '0x016fa6b76Fb24e651806455e58710d48880226f9',
    create: true,
    mainnet: true,
  },
  {
    chainId: 100,
    chainName: 'xdai',
    rpcUrls: ['https://rpc.xdaichain.com', 'https://xdai.poanetwork.dev/', 'https://dai.poa.network/'],
    nativeCurrency: {
      name: 'xDAI',
      symbol: 'xDAI',
      decimals: 18,
    },
    blockExplorerUrls: ['https://blockscout.com/xdai/mainnet'],
    nftsFactory: '0x86246ba8F7b25B1650BaF926E42B66Ec18D96000',
    nftsFactoryV2: '0xD5dA0F2bf1029c64460e4e1CE1fA0f88E7E39800',
    create: true,
    mainnet: true,
  },
  {
    chainId: 250,
    chainName: 'fantom',
    rpcUrls: ['https://rpc.ftm.tools/', 'https://rpcapi.fantom.network'],
    nativeCurrency: {
      name: 'FTM',
      symbol: 'FTM',
      decimals: 18,
    },
    blockExplorerUrls: ['https://ftmscan.com'],
    covalent: {
      active: true,
    },
    nftsFactory: '0x03F9c54b5D5De9b2323d944Faa406E3F20734B67',
    nftsFactoryV2: '0xD5dA0F2bf1029c64460e4e1CE1fA0f88E7E39800',
    create: true,
    mainnet: true,
  },
  {
    chainId: 56,
    chainName: 'bsc',
    rpcUrls: [
      'https://bsc-dataseed.binance.org',
      'https://bsc-dataseed1.defibit.io',
      'https://bsc-dataseed1.ninicoin.io',
    ],
    nativeCurrency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18,
    },
    blockExplorerUrls: ['https://bscscan.com'],
    covalent: {
      active: true,
    },
    nftsFactory: '0x03F9c54b5D5De9b2323d944Faa406E3F20734B67',
    nftsFactoryV2: '0xD5dA0F2bf1029c64460e4e1CE1fA0f88E7E39800',
    create: true,
    mainnet: true,
  },
  {
    chainId: 4,
    chainName: 'rinkeby',
    rpcUrls: ['https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    blockExplorerUrls: ['https://rinkeby.etherscan.io'],
    subgraph: {
      url: 'https://api.thegraph.com/subgraphs/name/zapaz/eip721-rinkeby',
      active: true,
    },
    eip1559: true,
    nftsFactory: '0xec7EBB4E7cdcE23e992BFDc4fc81D89Cc9Ac9A74',
    nftsFactoryV2: '0xD5dA0F2bf1029c64460e4e1CE1fA0f88E7E39800',
    create: true,
    testnet: true,
  },
  {
    chainId: 5,
    chainName: 'goerli',
    rpcUrls: ['https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    blockExplorerUrls: ['https://goerli.etherscan.io'],
    subgraph: {
      url: 'https://api.thegraph.com/subgraphs/name/zapaz/eip721-goerli',
      active: false,
    },
    eip1559: true,
    nftsFactory: '0x636BeA69422e087eA87Ae6A98300065C11826b2C',
    nftsFactoryV2: '0xD5dA0F2bf1029c64460e4e1CE1fA0f88E7E39800',
    create: true,
    testnet: true,
  },
  {
    chainId: 42,
    chainName: 'kovan',
    rpcUrls: ['https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    blockExplorerUrls: ['https://kovan.etherscan.io'],
    covalent: {
      active: false,
    },
    eip1559: true,
    nftsFactory: '0xA6F70de9aBe6cAE865fa723f7741699B63f47517',
    nftsFactoryV2: '0xD5dA0F2bf1029c64460e4e1CE1fA0f88E7E39800',
    create: true,
    testnet: true,
  },
  {
    chainId: 80001,
    chainName: 'mumbai',
    rpcUrls: [
      'https://matic-mumbai.chainstacklabs.com',
      'https://rpc-mumbai.maticvigil.com/v1',
      'https://polygon-mumbai.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    ],
    nativeCurrency: {
      name: 'Matic',
      symbol: 'tMATIC',
      decimals: 18,
    },
    blockExplorerUrls: ['https://mumbai.polygonscan.com', 'https://polygon-explorer-mumbai.chainstacklabs.com'],
    subgraph: {
      url: 'https://api.thegraph.com/subgraphs/name/zapaz/eip721-mumbai',
      active: true,
    },
    covalent: {
      active: true,
    },
    nftsFactory: '0x89bB80B13Eee16ed88DF4357009856CbAd8ba035',
    nftsFactoryV2: '0xD5dA0F2bf1029c64460e4e1CE1fA0f88E7E39800',
    create: true,
    testnet: true,
  },
  {
    chainId: 421611,
    chainName: 'arbitrumrinkeby',
    rpcUrls: ['https://arbitrum-rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ARETH',
      decimals: 18,
    },
    blockExplorerUrls: ['https://testnet.arbiscan.io', 'https://rinkeby-explorer.arbitrum.io'],
    covalent: {
      active: true,
    },
    nftsFactory: '0x5E03Acd53d5D3A834278014D91F0AFD36f8147Ce',
    nftsFactoryV2: '0xD5dA0F2bf1029c64460e4e1CE1fA0f88E7E39800',
    create: true,
    testnet: true,
  },
  {
    chainId: 10,
    chainName: 'optimism',
    rpcUrls: ['https://kovan.optimism.io/rpc'],
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
    },
    blockExplorerUrls: ['https://kovan-optimistic.etherscan.io'],
    covalent: {
      active: false,
    },
  },
  {
    chainId: 69,
    chainName: 'optimismkovan',
    rpcUrls: ['https://kovan.optimism.io/rpc'],
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
    },
    blockExplorerUrls: ['https://kovan-optimistic.etherscan.io'],
    covalent: {
      active: false,
    },
    nftsFactory: '0x636BeA69422e087eA87Ae6A98300065C11826b2C',
    create: true,
    testnet: true,
  },
  {
    chainId: 4002,
    chainName: 'fantomtestnet',
    rpcUrls: ['https://rpc.testnet.fantom.network'],
    nativeCurrency: {
      name: 'FTM',
      symbol: 'FTM',
      decimals: 18,
    },
    blockExplorerUrls: ['https://testnet.ftmscan.com'],
    covalent: {
      active: false,
    },
    nftsFactoryV2: '0xD5dA0F2bf1029c64460e4e1CE1fA0f88E7E39800',
    create: true,
    testnet: true,
  },
  {
    chainId: 43113,
    chainName: 'fuji',
    rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
    nativeCurrency: {
      name: 'AVAX',
      symbol: 'AVAX',
      decimals: 18,
    },
    blockExplorerUrls: ['https://testnet.snowtrace.io', 'https://cchain.explorer.avax-test.network'],
    covalent: {
      active: true,
    },
    nftsFactory: '0xC308A8c2fbDea84D1028F906cf966492B14645a0',
    nftsFactoryV2: '0x98C1c1AA566C329f339488Af2F8F95D33cf1A507',
    create: true,
    testnet: true,
  },
  {
    chainId: 31337,
    chainName: 'hardhat',
    rpcUrls: ['http://127.0.0.1:8545'],
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    blockExplorerUrls: ['http://localhost/explorer'],
    nftsFactory: '0x4b7992F03906F7bBE3d48E5Fb724f52c56cFb039',
    nftsFactoryV2: '0x5E03Acd53d5D3A834278014D91F0AFD36f8147Ce',
    testnet: true,
  },
];

export default NETWORKS;