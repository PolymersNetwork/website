export interface WalletConnection {
  address: string;
  publicKey: string;
  connected: boolean;
  provider: 'phantom' | 'solflare' | 'backpack' | 'sui' | 'metamask';
}

export interface TokenBalance {
  mint: string;
  amount: number;
  decimals: number;
  symbol: string;
}

export interface WalletContextType {
  wallet: WalletConnection | null;
  balances: TokenBalance[];
  connecting: boolean;
  connect: (provider: string) => Promise<void>;
  disconnect: () => Promise<void>;
  signMessage: (message: string) => Promise<string>;
}