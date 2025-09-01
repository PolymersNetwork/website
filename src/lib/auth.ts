// Wallet types
export enum WalletType {
  PHANTOM = 'phantom',
  SOLFLARE = 'solflare',
  BACKPACK = 'backpack',
  GLOW = 'glow',
  METAMASK = 'metamask',
  BASE = 'base',
}

// Wallet connection utilities
export const WALLET_CONFIG = {
  [WalletType.PHANTOM]: {
    name: 'Phantom',
    icon: 'https://cryptoicons.cc/32/9C00FF/phantom.png',
    downloadUrl: 'https://phantom.app/',
    isInstalled: () => typeof window !== 'undefined' && !!(window as any).solana?.isPhantom,
  },
  [WalletType.SOLFLARE]: {
    name: 'Solflare',
    icon: 'https://cryptoicons.cc/32/FFCC00/solflare.png',
    downloadUrl: 'https://solflare.com/',
    isInstalled: () => typeof window !== 'undefined' && !!(window as any).solflare,
  },
  [WalletType.BACKPACK]: {
    name: 'Backpack',
    icon: 'https://cryptoicons.cc/32/00A0FF/backpack.png',
    downloadUrl: 'https://backpack.app/',
    isInstalled: () => typeof window !== 'undefined' && !!(window as any).backpack,
  },
  [WalletType.GLOW]: {
    name: 'Glow',
    icon: 'https://cryptoicons.cc/32/FF66CC/glow.png',
    downloadUrl: 'https://glow.app/',
    isInstalled: () => typeof window !== 'undefined' && !!(window as any).glow,
  },
  [WalletType.METAMASK]: {
    name: 'MetaMask',
    icon: 'https://cryptoicons.cc/32/FF6F00/metamask.png',
    downloadUrl: 'https://metamask.io/',
    isInstalled: () => typeof window !== 'undefined' && !!(window as any).ethereum?.isMetaMask,
  },
  [WalletType.BASE]: {
    name: 'Base Wallet',
    icon: 'https://cryptoicons.cc/32/0052FF/base.png', // Base Wallet icon
    downloadUrl: 'https://wallet.base.org/',
    isInstalled: () => typeof window !== 'undefined' && !!(window as any).base, // Assuming window.base object for detection
  },
};
