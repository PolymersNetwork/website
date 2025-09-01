import { useState, useCallback, useEffect } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';
import { toast } from '@/hooks/use-toast';
import { WalletConnection, TokenBalance } from '@/types/wallet';
import { TOKEN_LIST } from '@/api/constants';
import { fetchPythPrices } from '@/api/pyth';
import { fetchBirdeyePrices } from '@/api/birdeye';

const SOLANA_RPC = 'https://api.mainnet-beta.solana.com';
const connection = new Connection(SOLANA_RPC);

export const useWallet = () => {
  const [wallet, setWallet] = useState<WalletConnection | null>(null);
  const [balances, setBalances] = useState<TokenBalance[]>([]);
  const [connecting, setConnecting] = useState(false);
  const [prices, setPrices] = useState<Record<string, number>>({});

  // Connect wallet (replace mock with real adapter later)
  const connect = useCallback(async (provider: string) => {
    setConnecting(true);
    try {
      const useWallet: WalletConnection = {
        address: `${provider}_${Math.random().toString(36).slice(2, 10)}`,
        publicKey: `${provider}_pubkey_${Math.random().toString(36).slice(2, 10)}`,
        connected: true,
        provider: provider as any,
      };
      setWallet(useWallet);

      // Fetch balances
      const fetchedBalances: TokenBalance[] = await Promise.all(
        TOKEN_LIST.map(async (token) => {
          let amount = 0;
          try {
            const accounts = await connection.getTokenAccountsByOwner(
              new PublicKey(useWallet.publicKey),
              { mint: new PublicKey(token.mint) }
            );
            if (accounts.value.length > 0) {
              // @ts-ignore parsed info
              const parsed = (accounts.value[0].account.data as any).parsed;
              amount = Number(parsed.info.tokenAmount.amount) / 10 ** token.decimals;
            }
          } catch (err) {
            console.warn(`Error fetching balance for ${token.symbol}:`, err);
          }
          return { ...token, amount };
        })
      );

      setBalances(fetchedBalances);
      toast({ title: 'Wallet Connected', description: `Connected to ${provider}` });
    } catch (err) {
      console.error(err);
      toast({ title: 'Connection Failed', description: `Could not connect to ${provider}`, variant: 'destructive' });
    } finally {
      setConnecting(false);
    }
  }, []);

  // Disconnect wallet
  const disconnect = useCallback(() => {
    setWallet(null);
    setBalances([]);
    toast({ title: 'Wallet Disconnected', description: 'Wallet disconnected' });
  }, []);

  // Fetch latest token prices
  const fetchPrices = useCallback(async () => {
    try {
      const [pythPrices, birdeyePrices] = await Promise.all([fetchPythPrices(), fetchBirdeyePrices()]);
      setPrices({ ...pythPrices, ...birdeyePrices });
    } catch (err) {
      console.error('Failed to fetch prices:', err);
    }
  }, []);

  // Calculate total wallet value in USD
  const getTotalValue = useCallback(() => {
    return balances.reduce((total, token) => total + token.amount * (prices[token.symbol] || 0), 0);
  }, [balances, prices]);

  // Refresh prices on mount
  useEffect(() => {
    fetchPrices();
  }, [fetchPrices]);

  return {
    wallet,
    balances,
    connecting,
    connect,
    disconnect,
    prices,
    getTotalValue,
    refreshPrices: fetchPrices,
  };
};
