import { useState, useCallback } from 'react';
import { WalletConnection, TokenBalance } from '@/types/wallet';
import { toast } from '@/hooks/use-toast';

export const useWallet = () => {
  const [wallet, setWallet] = useState<WalletConnection | null>(null);
  const [balances, setBalances] = useState<TokenBalance[]>([]);
  const [connecting, setConnecting] = useState(false);

  const connect = useCallback(async (provider: string) => {
    setConnecting(true);
    try {
      // Mock wallet connection for demo
      const mockWallet: WalletConnection = {
        address: `${provider}_${Math.random().toString(36).substring(2, 15)}`,
        publicKey: `${provider}_pubkey_${Math.random().toString(36).substring(2, 15)}`,
        connected: true,
        provider: provider as any,
      };
      
      setWallet(mockWallet);
      
      // Mock token balances
      setBalances([
        { mint: 'PLY', amount: 1250.50, decimals: 9, symbol: 'PLY' },
        { mint: 'CRT', amount: 89.75, decimals: 6, symbol: 'CRT' },
        { mint: 'SOL', amount: 2.15, decimals: 9, symbol: 'SOL' },
        { mint: 'USDC', amount: 150.00, decimals: 6, symbol: 'USDC' },
      ]);
      
      toast({
        title: "Wallet Connected",
        description: `Successfully connected to ${provider}`,
      });
    } catch (error) {
      toast({
        title: "Connection Failed",
        description: "Failed to connect wallet",
        variant: "destructive",
      });
    } finally {
      setConnecting(false);
    }
  }, []);

  const disconnect = useCallback(async () => {
    setWallet(null);
    setBalances([]);
    toast({
      title: "Wallet Disconnected",
      description: "Wallet has been disconnected",
    });
  }, []);

  const signMessage = useCallback(async (message: string): Promise<string> => {
    if (!wallet) throw new Error('Wallet not connected');
    // Mock signature
    return `signed_${message}_${Date.now()}`;
  }, [wallet]);

  return {
    wallet,
    balances,
    connecting,
    connect,
    disconnect,
    signMessage,
  };
};