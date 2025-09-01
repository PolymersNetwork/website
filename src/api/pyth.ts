import { PythConnection, PriceFeed } from '@pythnetwork/client';
import { Connection, PublicKey } from '@solana/web3.js';

const SOLANA_RPC = 'https://api.mainnet-beta.solana.com';
const connection = new Connection(SOLANA_RPC);

// Map of token symbols to Pyth price account addresses
const PYTH_PRICE_ACCOUNTS: Record<string, string> = {
  SOL: 'H6ARHf6YXhGYeQ9rF7TTvFBr7Cox2FUE8b1feXqvh1qF', 
  USDC: 'GkQxQDSdx8H8j5G8s6H6xv1hPaxJ4w4X9qPqMT7fEmV7',
  PLY: 'PLY_PRICE_ACCOUNT_PUBKEY_HERE',
};

export const fetchPythPrices = async () => {
  const prices: Record<string, number> = {};

  for (const [symbol, addr] of Object.entries(PYTH_PRICE_ACCOUNTS)) {
    const priceFeedKey = new PublicKey(addr);
    
    // Create a PriceFeed for each token
    const priceFeed = new PriceFeed(priceFeedKey);
    await priceFeed.load(connection);

    // Get latest price
    prices[symbol] = Number(priceFeed.getPriceUnsafe() ?? 0);
  }

  return prices;
};
