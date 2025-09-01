import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Wallet, ChevronDown, Loader2 } from 'lucide-react';
import { useWallet } from '@/hooks/useWallet';
import { WALLET_CONFIG, WalletType } from '@/api/wallet';
import { formatTokenAmount } from '@/lib/format';

const WalletButton = () => {
  const [open, setOpen] = useState(false);
  const { wallet, balances, connecting, connect, disconnect } = useWallet();

  const handleConnect = async (walletType: WalletType) => {
    const config = WALLET_CONFIG[walletType];
    if (!config.isInstalled()) {
      window.open(config.downloadUrl, '_blank');
      return;
    }
    await connect(walletType);
    setOpen(false);
  };

  if (wallet) {
    return (
      <div className="flex items-center gap-2">
        <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-card border border-border rounded-lg">
          <div className="flex items-center gap-1">
            <span className="text-sm font-satoshi font-semibold text-poly-green">
              {formatTokenAmount(balances.find(b => b.symbol === 'PLY')?.amount || 0)} PLY
            </span>
            <span className="text-xs text-muted-foreground">•</span>
            <span className="text-sm font-satoshi text-carbon-blue">
              {formatTokenAmount(balances.find(b => b.symbol === 'CRT')?.amount || 0)} CRT
            </span>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={disconnect}
          className="border-primary/20 hover:border-primary/40"
        >
          <Wallet className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline">
            {wallet.address.slice(0, 4)}...{wallet.address.slice(-4)}
          </span>
          <span className="sm:hidden">Wallet</span>
        </Button>
      </div>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" size="sm" className="poly-gradient border-0 hover:opacity-90">
          <Wallet className="w-4 h-4 mr-2" />
          Connect Wallet
          <ChevronDown className="w-3 h-3 ml-1" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-satoshi">Connect Your Wallet</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          {Object.values(WalletType).map((walletType) => {
            const provider = WALLET_CONFIG[walletType];
            return (
              <Button
                key={walletType}
                variant="outline"
                onClick={() => handleConnect(walletType)}
                disabled={connecting}
                className="w-full justify-start h-14 border-border hover:border-primary/30"
              >
                {connecting ? (
                  <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                ) : (
                  <img src={provider.icon} alt={provider.name} className="w-6 h-6 mr-3 rounded-full" />
                )}
                <div className="flex flex-col items-start">
                  <span className="font-medium">{provider.name}</span>
                  <Badge variant="secondary" className="text-xs mt-1">
                    {walletType === WalletType.METAMASK || walletType === WalletType.BASE ? 'Ethereum' : 'Solana'}
                  </Badge>
                </div>
              </Button>
            );
          })}
        </div>
        <div className="text-xs text-muted-foreground text-center pt-2">
          Connect your wallet to start earning PLY tokens and CRT credits through recycling
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WalletButton;
